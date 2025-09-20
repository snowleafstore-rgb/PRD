import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { sendWaitlistConfirmation } from '@/lib/resend'

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      )
    }

    // Check if Supabase is configured
    if (!supabaseAdmin) {
      // If Supabase not configured, just send email and return success
      try {
        await sendWaitlistConfirmation(email)
        return NextResponse.json(
          { 
            message: 'Successfully joined waitlist! (Email sent, database not configured yet)',
            user: { email, name }
          },
          { status: 201 }
        )
      } catch (emailError) {
        console.error('Error sending email:', emailError)
        return NextResponse.json(
          { error: 'Email service not configured. Please contact support.' },
          { status: 500 }
        )
      }
    }

    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabaseAdmin
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single()

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing user:', checkError)
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      )
    }

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered for waitlist' },
        { status: 409 }
      )
    }

    // Insert new waitlist entry
    const { data: newUser, error: insertError } = await supabaseAdmin
      .from('waitlist')
      .insert([
        {
          email: email.toLowerCase().trim(),
          name: name?.trim() || null,
          created_at: new Date().toISOString(),
          status: 'active'
        }
      ])
      .select()
      .single()

    if (insertError) {
      console.error('Error inserting user:', insertError)
      return NextResponse.json(
        { error: 'Failed to join waitlist' },
        { status: 500 }
      )
    }

    // Send confirmation email
    try {
      await sendWaitlistConfirmation(email)
    } catch (emailError) {
      console.error('Error sending email:', emailError)
      // Don't fail the request if email fails, just log it
    }

    return NextResponse.json(
      { 
        message: 'Successfully joined waitlist!',
        user: newUser
      },
      { status: 201 }
    )

  } catch (error) {
    console.error('Waitlist API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
