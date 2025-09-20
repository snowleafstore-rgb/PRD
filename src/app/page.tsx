import Image from "next/image";
import WaitlistForm from "@/components/WaitlistForm";

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
              "telephone": "+1-555-123-4567",
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
      <div className="min-h-screen bg-stone-50">
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

      {/* Hero Section - Clean & Simple */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-lifestyle.jpg"
          alt="Beautiful organic wellness products by Snow Leaf Store including organic soap, bamboo towels, and organic bedsheets in a modern home setting"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light mb-8 tracking-tight">
            Pure Organic Wellness for Your Home
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-90 max-w-4xl mx-auto mb-12 leading-relaxed">
            &ldquo;Begin your journey to natural living with our signature organic oatmeal soap—crafted to nourish your skin, protect your family, and bring complete organic wellness into every corner of your home.&rdquo;
          </p>
          <button className="bg-amber-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-amber-700 transition-colors text-lg">
            Shop Now
          </button>
        </div>
      </section>


      {/* Organic Soap - Current Product */}
      <section id="organic" className="py-24 px-4 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-16">
            Our Signature Organic Oatmeal Soap
          </h2>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm uppercase tracking-widest rounded-full mb-6">
              Now Available
            </div>
            <h3 className="text-5xl md:text-6xl font-light mb-8 text-gray-900">
              Organic Oatmeal Soap
            </h3>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our signature organic oatmeal soap is now available. 
              Made from 100% organic ingredients with zero synthetic chemicals.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Made from 100% organic oatmeal, our signature soap delivers gentle, nourishing cleansing 
                  with zero additives, preservatives, or artificial ingredients.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Certification</h4>
                  <p className="text-gray-600 text-sm">100% USDA Organic</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Ingredients</h4>
                  <p className="text-gray-600 text-sm">100% organic oats</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Skin Type</h4>
                  <p className="text-gray-600 text-sm">All skin types</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-3">Price</h4>
                  <p className="text-gray-600 text-sm">$24.99</p>
                </div>
              </div>
              
              <div className="bg-stone-700 text-white p-8 rounded-2xl">
                <div className="text-center mb-6">
                  <h4 className="text-xl font-light mb-2">Ready to Experience Pure Organic Soap?</h4>
                  <p className="text-stone-300 text-sm">
                    Free shipping on orders over $50. 30-day return policy.
                  </p>
                </div>
                <button className="w-full bg-white text-stone-700 px-8 py-4 rounded-lg font-medium hover:bg-stone-50 transition-colors">
                  Shop Now - $24.99
                </button>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/images/Soap1.png"
                alt="Organic Oat Bar Soap by Snow Leaf Store - 100% USDA Organic, gentle cleansing for all skin types"
                width={600}
                height={800}
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-stone-700 text-white px-4 py-2 rounded-full shadow-lg">
                <span className="text-sm font-medium">Now Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Benefits Section */}
      <section id="wellness" className="py-24 px-4 bg-gradient-to-b from-stone-100 to-stone-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light text-center text-gray-900 mb-16">
            Why Choose Organic
          </h2>
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-green-600 text-white text-sm uppercase tracking-widest rounded-full mb-6">
              Why Organic Matters
            </div>
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-gray-900">
              Why Choose Organic
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Your skin is your body&apos;s largest organ. What you put on it matters more than you think.
            </p>
          </div>
          
          {/* The Problem */}
          <div className="bg-stone-200 border-l-4 border-stone-400 p-8 rounded-2xl mb-16">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-light mb-6 text-gray-900">The Hidden Problem</h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>Your skin absorbs what you put on it.</strong> 
                Most personal care products contain synthetic chemicals that can cause skin irritation, 
                allergies, and long-term health issues.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Daily Exposure</h4>
                  <p className="text-gray-600 text-sm">You use personal care products 2-3 times daily</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Cumulative Effect</h4>
                  <p className="text-gray-600 text-sm">Small daily exposures add up over years</p>
                </div>
                <div className="bg-white p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Health Impact</h4>
                  <p className="text-gray-600 text-sm">Can affect skin, hormones, and overall wellness</p>
                </div>
              </div>
            </div>
          </div>

          {/* The Solution */}
          <div className="bg-gray-900 text-white rounded-3xl p-12 mb-20">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl font-light mb-8">The Organic Solution</h3>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                <strong>Organic materials work with your body, not against it.</strong> 
                They provide the same benefits without the harmful side effects.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-4">🌱</div>
                  <h4 className="text-xl font-semibold mb-2">Natural Ingredients</h4>
                  <p className="text-gray-300 text-sm">Derived from plants, not synthetic chemicals</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-4">🛡️</div>
                  <h4 className="text-xl font-semibold mb-2">Gentle on Skin</h4>
                  <p className="text-gray-300 text-sm">Reduces irritation and allergic reactions</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <div className="text-4xl mb-4">🌍</div>
                  <h4 className="text-xl font-semibold mb-2">Planet Friendly</h4>
                  <p className="text-gray-300 text-sm">Better for your health and the environment</p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-light mb-8 text-center text-gray-900">The Benefits of Organic</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Better Skin Health</h4>
                      <p className="text-gray-600 text-sm">Reduces irritation, allergies, and skin sensitivity</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Chemical-Free Living</h4>
                      <p className="text-gray-600 text-sm">Eliminate exposure to harmful synthetic chemicals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Better Sleep</h4>
                      <p className="text-gray-600 text-sm">Organic materials promote deeper, more restful sleep</p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Environmental Impact</h4>
                      <p className="text-gray-600 text-sm">Sustainable practices protect our planet</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Peace of Mind</h4>
                      <p className="text-gray-600 text-sm">Know exactly what your family is exposed to</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Long-term Health</h4>
                      <p className="text-gray-600 text-sm">Invest in your family&apos;s future wellness</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <section id="coming-soon" className="py-24 px-4 bg-gradient-to-b from-stone-50 to-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-2 bg-gray-900 text-white text-sm uppercase tracking-widest rounded-full mb-6">
              Launch Timeline
            </div>
            <h2 className="text-5xl md:text-6xl font-light mb-8 text-gray-900">
              Coming Soon
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Complete your organic wellness system with these upcoming products.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-20 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/images/P3.jpg"
                  alt="Ultra-soft sustainable bamboo towels by Snow Leaf Store - eco-friendly, hypoallergenic, and quick-drying"
                  width={500}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-gray-900">Q1 2026</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl mb-2">🌿</div>
                  <p className="text-sm font-medium">Bamboo Collection</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-4 text-gray-900">Bamboo Towels</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Ultra-soft, sustainable towels made from 100% bamboo fiber. 
                  Naturally antibacterial, quick-drying, and gentle on your skin.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Eco-friendly materials
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Hypoallergenic
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Quick-drying
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative">
                <Image
                  src="/images/P5.jpg"
                  alt="Luxurious organic cotton bedsheets by Snow Leaf Store - 1200 thread count, temperature regulating, and sustainably sourced"
                  width={500}
                  height={400}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-xs font-medium text-gray-900">Q1 2026</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-3xl mb-2">🛏️</div>
                  <p className="text-sm font-medium">Sleep Collection</p>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-light mb-4 text-gray-900">Organic Bedsheets</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Luxuriously soft bedsheets made from 100% organic cotton. 
                  Perfect thread count for the ultimate sleep experience.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    1200 thread count
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Organic cotton
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                    Temperature regulating
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900 text-white rounded-3xl p-12 text-center">
            <h3 className="text-3xl font-light mb-6">Get Early Access</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Be the first to know when these products launch. Get exclusive early access 
              and special pricing for our founding members.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-8 px-4 border-t border-stone-200 bg-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">&copy; 2024 Snow Leaf Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
}
