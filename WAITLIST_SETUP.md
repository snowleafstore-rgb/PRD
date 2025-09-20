# Waitlist Setup Instructions

This guide will help you set up Supabase and Resend for the Snow Leaf Store waitlist functionality.

## 1. Supabase Setup

### Create a Supabase Project
1. Go to [supabase.com](https://supabase.com) and create a new project
2. Note down your project URL and anon key from Settings > API

### Set up the Database
1. Go to the SQL Editor in your Supabase dashboard
2. Run the SQL from `supabase-schema.sql` to create the waitlist table
3. Go to Settings > API and copy your service role key

### Environment Variables
Create a `.env.local` file in your project root:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Resend Configuration
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@snowleafstore.com

# App Configuration
NEXT_PUBLIC_APP_URL=https://snowleafstore.com
```

## 2. Resend Setup

### Create a Resend Account
1. Go to [resend.com](https://resend.com) and create an account
2. Verify your domain (snowleafstore.com) or use their test domain
3. Generate an API key from the dashboard

### Configure Email
- Update `FROM_EMAIL` in your environment variables
- Customize the email template in `src/lib/resend.ts` if needed

## 3. Vercel Deployment

### Environment Variables in Vercel
1. Go to your Vercel project settings
2. Add all environment variables from `.env.local`
3. Redeploy your project

## 4. Testing

### Local Testing
1. Run `npm run dev`
2. Go to the Coming Soon section
3. Try submitting the waitlist form
4. Check your Supabase dashboard for new entries
5. Check your email for confirmation

### Production Testing
1. Deploy to Vercel
2. Test the waitlist form on your live site
3. Verify emails are being sent
4. Check Supabase for data

## 5. Features Included

- ✅ **Email validation** - Prevents invalid emails
- ✅ **Duplicate prevention** - Won't add same email twice
- ✅ **Confirmation emails** - Beautiful HTML email template
- ✅ **Loading states** - User feedback during submission
- ✅ **Error handling** - Graceful error messages
- ✅ **Database storage** - All signups stored in Supabase
- ✅ **Security** - Row Level Security enabled

## 6. Customization

### Email Template
Edit `src/lib/resend.ts` to customize the email design and content.

### Form Validation
Modify `src/hooks/useWaitlist.ts` to add additional validation rules.

### Database Schema
Update `supabase-schema.sql` if you need additional fields in the waitlist table.

## 7. Monitoring

### Supabase Dashboard
- Monitor signups in the Table Editor
- Check logs in the Logs section
- Monitor API usage in Settings > API

### Resend Dashboard
- Track email delivery in the Logs section
- Monitor bounce rates and engagement
- Check API usage and limits

## Support

If you encounter any issues:
1. Check the browser console for errors
2. Check Vercel function logs
3. Check Supabase logs
4. Verify all environment variables are set correctly
