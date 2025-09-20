import Image from "next/image";
import Link from "next/link";
import WaitlistForm from "@/components/WaitlistForm";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Snow Leaf Store",
            "description": "Pure organic wellness products for your family. Starting with organic oatmeal soap, expanding to bamboo towels and organic bedsheets.",
            "url": "https://snowleafstore.com",
            "logo": "https://snowleafstore.com/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "hello@snowleafstore.com"
            },
            "sameAs": [
              "https://instagram.com/snowleafstore",
              "https://facebook.com/snowleafstore",
              "https://pinterest.com/snowleafstore"
            ]
          })
        }}
      />
      
      {/* Product Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Organic Oatmeal Soap",
            "description": "100% USDA Organic Certified oatmeal soap, gentle on all skin types including sensitive skin and babies. Made with zero synthetic chemicals.",
            "brand": {
              "@type": "Brand",
              "name": "Snow Leaf Store"
            },
            "offers": {
              "@type": "Offer",
              "price": "24.99",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "seller": {
                "@type": "Organization",
                "name": "Snow Leaf Store"
              }
            },
            "image": "https://snowleafstore.com/images/Soap1.png",
            "category": "Personal Care > Soap",
            "additionalProperty": [
              {
                "@type": "PropertyValue",
                "name": "Certification",
                "value": "USDA Organic Certified"
              },
              {
                "@type": "PropertyValue",
                "name": "Skin Type",
                "value": "All skin types, including sensitive skin"
              },
              {
                "@type": "PropertyValue",
                "name": "Ingredients",
                "value": "100% organic ingredients, zero synthetic chemicals"
              }
            ]
          })
        }}
      />
      
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What makes your organic oatmeal soap different from regular soap?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our organic oatmeal soap is 100% USDA Organic Certified, made with zero synthetic chemicals. It's gentle on all skin types, including sensitive skin and babies, and provides natural exfoliation and moisture retention. Unlike conventional soaps that contain harsh chemicals, our soap works with your body's natural processes."
                }
              },
              {
                "@type": "Question",
                "name": "Do you offer free shipping and returns?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! We offer free shipping on all orders over $50 and a 30-day return policy. If you're not completely satisfied with your purchase, you can return it within 30 days for a full refund. Products must be in original condition."
                }
              },
              {
                "@type": "Question",
                "name": "When will the bamboo towels and organic bedsheets be available?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our bamboo towels and organic cotton bedsheets are scheduled to launch in Q1 2026. Join our waitlist to get early access and special pricing when they launch. We're building a complete organic wellness system for your home."
                }
              },
              {
                "@type": "Question",
                "name": "Are your products safe for babies and children?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Our organic oatmeal soap is gentle enough for the whole family, including babies and children. The natural, chemical-free formula makes it safe for sensitive skin and daily use by people of all ages."
                }
              },
              {
                "@type": "Question",
                "name": "How can I contact customer service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You can reach our customer service team at hello@snowleafstore.com. We typically respond within 24 hours and are here to help with any questions or concerns."
                }
              }
            ]
          })
        }}
      />
      <div className="min-h-screen bg-stone-50">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="hidden">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li><Link href="/" className="hover:text-green-600">Home</Link></li>
          <li>/</li>
          <li aria-current="page">Organic Wellness Products</li>
        </ol>
      </nav>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-50/95 backdrop-blur-sm border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-light text-gray-900">Snow Leaf Store</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#organic" className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                  Products
                </a>
                <a href="#wellness" className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                  Why Organic
                </a>
                <a href="#coming-soon" className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                  Coming Soon
                </a>
                <a href="#faq" className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                  FAQ
                </a>
                <a href="#contact" className="text-gray-600 hover:text-green-600 px-3 py-2 text-sm font-medium transition-colors">
                  Contact
                </a>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors">
                Shop Organic
              </button>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-600 hover:text-green-600 p-2">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - The Organic Wellness Journey */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-lifestyle.jpg"
          alt="Beautiful organic wellness products by Snow Leaf Store including organic soap, bamboo towels, and organic bedsheets in a modern home setting"
          fill
          className="object-cover"
          priority
        />
        {/* Darker gradient overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Journey indicator */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Building the Future of Organic Living</span>
          </div>
          
          {/* Main headline - journey focused */}
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            The Organic Wellness
            <span className="block text-green-300 font-normal">Journey Starts Here</span>
          </h1>
          
          {/* Journey subheading */}
          <p className="text-xl md:text-2xl font-light mb-10 max-w-3xl mx-auto leading-relaxed">
            We&apos;re launching with our signature organic oatmeal soap, the first step in building 
            the complete organic home experience. More products coming soon.
          </p>
        </div>
      </section>


      {/* Organic Soap - Current Product */}
      <section id="organic" className="py-24 px-4 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm uppercase tracking-widest rounded-full mb-6">
              Now Launching
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Our Signature Organic Oatmeal Soap
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our first product is now available! Gentle, nourishing cleansing with zero synthetic chemicals. 
              Made from 100% organic ingredients for your family&apos;s wellness.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Product Image */}
            <div className="relative order-2 lg:order-1">
              <Image
                src="/images/Soap1.png"
                alt="Organic Oat Bar Soap by Snow Leaf Store - 100% USDA Organic, gentle cleansing for all skin types"
                width={500}
                height={600}
                className="rounded-2xl shadow-xl"
              />
            </div>
            
            {/* Product Details */}
            <div className="space-y-8 order-1 lg:order-2">
              {/* Key Benefits */}
              <div className="space-y-4">
                <h3 className="text-2xl font-light text-gray-900 mb-4">Why Choose Our Soap?</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">100% USDA Organic Certified</h4>
                      <p className="text-gray-600 text-sm">Verified organic ingredients with no synthetic chemicals</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Gentle on All Skin Types</h4>
                      <p className="text-gray-600 text-sm">Perfect for sensitive skin, babies, and the whole family</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-green-600 text-sm">✓</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Nourishing Oatmeal Formula</h4>
                      <p className="text-gray-600 text-sm">Natural exfoliation and moisture retention for healthy skin</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA Section */}
              <div className="bg-gray-900 text-white p-8 rounded-2xl">
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-light mb-2">Ready to Try Our First Product?</h4>
                  <p className="text-gray-300">
                    Free shipping on orders over $50 • 30-day return policy
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 bg-white text-gray-900 px-6 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Shop Now - $24.99
                  </button>
                  <button className="flex-1 bg-transparent border border-white/30 text-white px-6 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Organic Section */}
      <section id="wellness" className="py-24 px-4 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm uppercase tracking-widest rounded-full mb-6">
              Why Organic Matters
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Why Choose Organic
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your skin absorbs what you put on it. Choose organic for your family&apos;s health and wellness.
            </p>
          </div>
          
          {/* Problem & Solution */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* The Problem */}
            <div className="bg-red-50 border-l-4 border-red-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-light mb-4 text-gray-900">The Hidden Problem</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Most personal care products contain synthetic chemicals that can cause skin irritation, 
                allergies, and long-term health issues.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Daily chemical exposure</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Cumulative health effects</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Unknown long-term impacts</span>
                </div>
              </div>
            </div>
            
            {/* The Solution */}
            <div className="bg-green-50 border-l-4 border-green-200 p-8 rounded-2xl">
              <h3 className="text-2xl font-light mb-4 text-gray-900">The Organic Solution</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Organic materials work with your body, not against it. They provide the same benefits 
                without harmful side effects.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">100% natural ingredients</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Gentle on sensitive skin</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm text-gray-600">Safe for the whole family</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Key Benefits */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-light mb-8 text-center text-gray-900">The Benefits of Going Organic</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Better Skin Health</h4>
                <p className="text-gray-600 text-sm">Reduces irritation and allergic reactions for healthier skin</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Chemical-Free Living</h4>
                <p className="text-gray-600 text-sm">Eliminate exposure to harmful synthetic chemicals</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Planet Friendly</h4>
                <p className="text-gray-600 text-sm">Sustainable practices that protect our environment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <section id="coming-soon" className="py-24 px-4 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm uppercase tracking-widest rounded-full mb-6">
              Next in Our Journey
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We&apos;re working on expanding our organic wellness system with these essential products for your home.
            </p>
          </div>
          
          {/* Product Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Bamboo Towels */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/images/P3.jpg"
                  alt="Ultra-soft sustainable bamboo towels by Snow Leaf Store - eco-friendly, hypoallergenic, and quick-drying"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full">
                  <span className="text-xs font-medium">Q1 2026</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">🌿</span>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900">Bamboo Towels</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ultra-soft, sustainable towels made from 100% bamboo fiber. 
                  Naturally antibacterial and gentle on your skin.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Eco-Friendly</div>
                    <div className="text-xs text-gray-500">Sustainable</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Hypoallergenic</div>
                    <div className="text-xs text-gray-500">Safe for all</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Quick-Dry</div>
                    <div className="text-xs text-gray-500">Fast drying</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Organic Bedsheets */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/images/P5.jpg"
                  alt="Luxurious organic cotton bedsheets by Snow Leaf Store - 1200 thread count, temperature regulating, and sustainably sourced"
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full">
                  <span className="text-xs font-medium">Q1 2026</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-lg">🛏️</span>
                  </div>
                  <h3 className="text-2xl font-light text-gray-900">Organic Bedsheets</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Luxuriously soft bedsheets made from 100% organic cotton. 
                  Perfect for the ultimate sleep experience.
                </p>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-sm font-medium text-gray-900">1200 Thread</div>
                    <div className="text-xs text-gray-500">Ultra-soft</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Organic Cotton</div>
                    <div className="text-xs text-gray-500">100% natural</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Temperature</div>
                    <div className="text-xs text-gray-500">Regulating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Waitlist CTA */}
          <div className="bg-gray-900 text-white rounded-2xl p-12 text-center">
            <h3 className="text-2xl font-light mb-4">Join Our Journey</h3>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Be the first to know when these products launch. Get exclusive early access 
              and special pricing for our founding members.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer id="contact" className="py-16 px-4 border-t border-stone-200 bg-stone-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-xl font-light text-gray-900">Snow Leaf Store</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Pure organic wellness products for your family. Building the complete organic home experience.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/snowleafstore" className="text-gray-400 hover:text-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243s.122-.928.49-1.243c.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243s-.122.928-.49 1.243c-.369.315-.807.49-1.297.49z"/>
                  </svg>
                </a>
                <a href="https://facebook.com/snowleafstore" className="text-gray-400 hover:text-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://pinterest.com/snowleafstore" className="text-gray-400 hover:text-green-600 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928.875 1.418 2.026 1.418 3.323s-.49 2.448-1.418 3.244c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.781c-.49 0-.928-.175-1.297-.49-.368-.315-.49-.753-.49-1.243s.122-.928.49-1.243c.369-.315.807-.49 1.297-.49s.928.175 1.297.49c.368.315.49.753.49 1.243s-.122.928-.49 1.243c-.369.315-.807.49-1.297.49z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#organic" className="text-gray-600 hover:text-green-600 text-sm transition-colors">Our Products</a></li>
                <li><a href="#wellness" className="text-gray-600 hover:text-green-600 text-sm transition-colors">Why Organic</a></li>
                <li><a href="#coming-soon" className="text-gray-600 hover:text-green-600 text-sm transition-colors">Coming Soon</a></li>
                <li><a href="#faq" className="text-gray-600 hover:text-green-600 text-sm transition-colors">FAQ</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="mailto:hello@snowleafstore.com" className="text-gray-600 hover:text-green-600 text-sm transition-colors">Contact Us</a></li>
                <li><span className="text-gray-600 text-sm">Free shipping on orders $50+</span></li>
                <li><span className="text-gray-600 text-sm">30-day return policy</span></li>
                <li><span className="text-gray-600 text-sm">USDA Organic Certified</span></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Stay Updated</h3>
              <p className="text-gray-600 text-sm">
                Be the first to know about new products and exclusive offers.
              </p>
              <div className="flex">
                <a 
                  href="#coming-soon" 
                  className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition-colors"
                >
                  Join Waitlist
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-stone-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm">
                &copy; 2024 Snow Leaf Store. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">Terms of Service</a>
                <a href="#" className="text-gray-500 hover:text-green-600 transition-colors">Shipping Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
}
