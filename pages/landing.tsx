import { KeyboardKey } from "@/components/keyboard-key";
import { useLocation } from "wouter";

export default function Landing() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        {/* Background with opacity */}
        <div className="absolute inset-0 overflow-hidden opacity-10 -z-10">
          <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-300" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            {/* Decorative keyboard keys */}
            <div className="flex justify-center space-x-2 mb-6">
              <KeyboardKey size="sm">💅</KeyboardKey>
              <KeyboardKey size="sm">🕵️</KeyboardKey>
              <KeyboardKey size="sm">💕</KeyboardKey>
            </div>
          </div>
          
          <h1 className="font-playfair font-black text-4xl md:text-6xl lg:text-7xl text-gray-900 mb-6 leading-tight">
            He said he wasn't on Snapchat? 
            <span className="text-pink-500"> 🕵️‍♀️ CTRL + HIM™</span> 
            says otherwise.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
            Digital investigation toolkit + post-breakup recovery support
          </p>
          <p className="text-lg text-gray-500 mb-8">
            For suspicious girlfriends, unhinged besties, and FBI-level exes who need answers 
            <span className="text-pink-500 font-semibold">AND healing</span>
          </p>
          
          {/* CTA Button styled like ENTER key */}
          <KeyboardKey 
            size="xl"
            onClick={() => setLocation("/search")}
            className="mb-12 flex-col"
          >
            <div>💕 UNLOCK THE VAULT – $24.99 💕</div>
            <div className="text-sm opacity-90 mt-1">ENTER ↵</div>
          </KeyboardKey>
          
          {/* Two-Service Split */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* CTRL + HIM Investigation */}
            <div className="bg-gradient-to-br from-pink-100/80 to-purple-100/60 p-8 rounded-3xl border-2 border-pink-300/40">
              <div className="text-center mb-6">
                <KeyboardKey size="sm" className="mx-auto mb-4 text-3xl">🕵️‍♀️</KeyboardKey>
                <h2 className="font-playfair font-black text-3xl text-gray-900 mb-3">CTRL + HIM™</h2>
                <p className="text-lg text-gray-700 font-medium">Digital Investigation Toolkit</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <KeyboardKey size="sm" className="mr-3 text-sm">🔍</KeyboardKey>
                  <span className="text-sm">25+ Investigation Tools</span>
                </div>
                <div className="flex items-center">
                  <KeyboardKey size="sm" className="mr-3 text-sm">📱</KeyboardKey>
                  <span className="text-sm">Social Media & Dating App Detection</span>
                </div>
                <div className="flex items-center">
                  <KeyboardKey size="sm" className="mr-3 text-sm">📚</KeyboardKey>
                  <span className="text-sm">Complete Investigation Guides</span>
                </div>
                <div className="flex items-center">
                  <KeyboardKey size="sm" className="mr-3 text-sm">🗂️</KeyboardKey>
                  <span className="text-sm">Evidence Management System</span>
                </div>
              </div>
            </div>

            {/* Emotional Damage Control */}
            <div className="bg-gradient-to-br from-pink-200/70 to-rose-150/80 p-8 rounded-3xl border-2 border-pink-400/50">
              <div className="text-center mb-6">
                <KeyboardKey size="sm" className="mx-auto mb-4 text-3xl">💕</KeyboardKey>
                <h2 className="font-playfair font-black text-3xl text-gray-900 mb-3">EMOTIONAL DAMAGE CONTROL™</h2>
                <p className="text-lg text-gray-700 font-medium">Hot Girl Therapist (No PhD Required)</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <KeyboardKey size="sm" className="mr-3 text-sm">🧘</KeyboardKey>
                  <span className="text-sm">Post-Investigation Healing Kit</span>
                </div>
                <div className="flex items-center">
                  <KeyboardKey size="sm" className="mr-3 text-sm">👭</KeyboardKey>
                  <span className="text-sm">Bestie-Level Support Scripts</span>
                </div>
                <div className="flex items-center">
                  <KeyboardKey size="sm" className="mr-3 text-sm">💪</KeyboardKey>
                  <span className="text-sm">Confidence Rebuilding Roadmap</span>
                </div>
                <div className="flex items-center">
                  <KeyboardKey size="sm" className="mr-3 text-sm">✨</KeyboardKey>
                  <span className="text-sm">Hot Girl Recovery Strategies</span>
                </div>
              </div>
            </div>
          </div>

          {/* What's Inside Preview */}
          <div className="mt-20 mb-16 bg-gradient-to-r from-pink-100/50 to-purple-100/50 p-8 rounded-3xl border border-pink-200/30">
            <h2 className="font-playfair font-black text-3xl md:text-4xl text-center mb-8">
              What's inside the vault? ✨
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="text-center">
                <KeyboardKey size="sm" className="mx-auto mb-3 text-lg">🕵️</KeyboardKey>
                <h4 className="font-bold text-sm mb-1">Core Investigation Arsenal</h4>
                <p className="text-xs text-gray-600">6 essential tools for digital detective work</p>
              </div>
              <div className="text-center">
                <KeyboardKey size="sm" className="mx-auto mb-3 text-lg">📱</KeyboardKey>
                <h4 className="font-bold text-sm mb-1">Social Media Spy Kit</h4>
                <p className="text-xs text-gray-600">8 platform-specific investigation methods</p>
              </div>
              <div className="text-center">
                <KeyboardKey size="sm" className="mx-auto mb-3 text-lg">💘</KeyboardKey>
                <h4 className="font-bold text-sm mb-1">Dating App Detective</h4>
                <p className="text-xs text-gray-600">Tinder, Bumble, Hinge profile discovery</p>
              </div>
              <div className="text-center">
                <KeyboardKey size="sm" className="mx-auto mb-3 text-lg">🔮</KeyboardKey>
                <h4 className="font-bold text-sm mb-1">Advanced OSINT Magic</h4>
                <p className="text-xs text-gray-600">Deep web search, digital footprint mapping</p>
              </div>
              <div className="text-center">
                <KeyboardKey size="sm" className="mx-auto mb-3 text-lg">📚</KeyboardKey>
                <h4 className="font-bold text-sm mb-1">Investigation Guides</h4>
                <p className="text-xs text-gray-600">6 complete tutorials from beginner to expert</p>
              </div>
              <div className="text-center">
                <KeyboardKey size="sm" className="mx-auto mb-3 text-lg">⚡</KeyboardKey>
                <h4 className="font-bold text-sm mb-1">One-Click Tools</h4>
                <p className="text-xs text-gray-600">Instant photo check, phone intel, username scan</p>
              </div>
              <div className="text-center">
                <KeyboardKey size="sm" className="mx-auto mb-3 text-lg">🗂️</KeyboardKey>
                <h4 className="font-bold text-sm mb-1">Evidence Management</h4>
                <p className="text-xs text-gray-600">Organize findings, generate reports, export data</p>
              </div>
              <div className="text-center">
                <KeyboardKey size="sm" className="mx-auto mb-3 text-lg">💕</KeyboardKey>
                <h4 className="font-bold text-sm mb-1">Recovery Support</h4>
                <p className="text-xs text-gray-600">Emotional healing kit, therapy resources</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emotional Damage Control Funnel */}
      <section className="py-16 px-4 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair font-black text-3xl md:text-4xl text-gray-900 mb-4">
            Need More Than Just Investigation? 💕
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Welcome to <span className="text-pink-600 font-bold">Emotional Damage Control™</span> — 
            trauma-informed support without the PhD
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Step 1: Workbook */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-200">
              <div className="text-center mb-4">
                <KeyboardKey size="sm" className="mx-auto mb-3 text-2xl">📖</KeyboardKey>
                <div className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded-full mb-2">STEP 1</div>
                <h3 className="font-bold text-lg">Digital Workbook</h3>
                <div className="text-2xl font-bold text-pink-600 mb-2">$37</div>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• 86-page healing guide</li>
                <li>• Red flag recognition</li>
                <li>• Recovery roadmap</li>
                <li>• Self-worth rebuilding</li>
                <li>• Future standards setting</li>
              </ul>
              <KeyboardKey 
                variant="primary"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-500"
                onClick={() => setLocation("/workbook")}
              >
                Get Workbook
              </KeyboardKey>
            </div>

            {/* Step 2: Crisis Call Options */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-purple-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-xs">
                MOST POPULAR
              </div>
              <div className="text-center mb-4">
                <KeyboardKey size="sm" className="mx-auto mb-3 text-2xl">📞</KeyboardKey>
                <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full mb-2">STEP 2</div>
                <h3 className="font-bold text-lg">Crisis Calls</h3>
                <div className="text-sm text-purple-600 mb-2">3 Options Available</div>
              </div>
              <div className="space-y-3 mb-6">
                <div className="bg-pink-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">💋 Mini Vent (20 min)</span>
                    <span className="font-bold text-pink-600">$33</span>
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg border-2 border-purple-200">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">💅 Standard (45 min)</span>
                    <span className="font-bold text-purple-600">$77</span>
                  </div>
                </div>
                <div className="bg-rose-50 p-3 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">👑 Unfiltered (75 min)</span>
                    <span className="font-bold text-rose-600">$147</span>
                  </div>
                </div>
              </div>
              <KeyboardKey 
                variant="primary"
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500"
                onClick={() => setLocation("/booking")}
              >
                Choose Your Session
              </KeyboardKey>
            </div>

            {/* Step 3: Follow-up */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-rose-200">
              <div className="text-center mb-4">
                <KeyboardKey size="sm" className="mx-auto mb-3 text-2xl">💌</KeyboardKey>
                <div className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full mb-2">STEP 3</div>
                <h3 className="font-bold text-lg">Follow-up Support</h3>
                <div className="text-sm font-bold text-rose-600 mb-2">INCLUDED</div>
              </div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>• 48-hour DM support</li>
                <li>• Check-in messages</li>
                <li>• Resource recommendations</li>
                <li>• Accountability partner</li>
                <li>• Continued guidance</li>
              </ul>
              <div className="w-full py-3 text-center text-gray-500 text-sm border-2 border-gray-200 rounded-lg">
                Automatic with Call
              </div>
            </div>
          </div>

          <div className="bg-rose-100 border border-rose-300 rounded-lg p-6 mb-8">
            <h4 className="font-bold text-rose-800 mb-2">Important Disclaimer</h4>
            <p className="text-sm text-rose-700">
              I am not a licensed therapist. I am a trauma-informed baddie with life receipts and 1000+ deleted texts. 
              These calls are emotional support, reflection, and strategy—not therapy. No diagnosis, just red flag detection.
            </p>
          </div>

          <p className="text-gray-600 italic">
            "Sometimes you need someone who's been there to tell you what they wish someone had told them."
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-pink-50/30 to-pink-200/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair font-black text-3xl md:text-4xl text-center mb-12">
            What the girls are saying 💅
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-3">
                <KeyboardKey size="sm" className="mr-2 text-sm">🕵️</KeyboardKey>
                <span className="text-xs text-pink-600 font-semibold">CTRL + HIM™</span>
              </div>
              <p className="text-base mb-4">"Caught him with THREE dating profiles. The tools are insane - I found everything in 2 hours!"</p>
              <div className="flex items-center">
                <KeyboardKey size="sm" className="mr-3 text-lg">👑</KeyboardKey>
                <div>
                  <div className="font-semibold">Queen B</div>
                  <div className="text-sm text-gray-500">Digital Detective</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-3">
                <KeyboardKey size="sm" className="mr-2 text-sm">💕</KeyboardKey>
                <span className="text-xs text-pink-600 font-semibold">EMOTIONAL DAMAGE CONTROL™</span>
              </div>
              <p className="text-base mb-4">"The therapy scripts saved my sanity. Finally someone who gets what we're going through!"</p>
              <div className="flex items-center">
                <KeyboardKey size="sm" className="mr-3 text-lg">🧘</KeyboardKey>
                <div>
                  <div className="font-semibold">Healing Hottie</div>
                  <div className="text-sm text-gray-500">Recovery Success Story</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-3">
                <KeyboardKey size="sm" className="mr-2 text-sm">✨</KeyboardKey>
                <span className="text-xs text-pink-600 font-semibold">BOTH SERVICES</span>
              </div>
              <p className="text-base mb-4">"Found out he was trash AND healed from it. This combo is everything - investigation + therapy in one!"</p>
              <div className="flex items-center">
                <KeyboardKey size="sm" className="mr-3 text-lg">💅</KeyboardKey>
                <div>
                  <div className="font-semibold">That Girl Energy</div>
                  <div className="text-sm text-gray-500">Complete Transformation</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-3">
                <KeyboardKey size="sm" className="mr-2 text-sm">🕵️</KeyboardKey>
                <span className="text-xs text-pink-600 font-semibold">CTRL + HIM™</span>
              </div>
              <p className="text-base mb-4">"My bestie and I used this together. We're basically the FBI now - found EVERYTHING about her ex!"</p>
              <div className="flex items-center">
                <KeyboardKey size="sm" className="mr-3 text-lg">👭</KeyboardKey>
                <div>
                  <div className="font-semibold">Detective Duo</div>
                  <div className="text-sm text-gray-500">Investigation Squad</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-3">
                <KeyboardKey size="sm" className="mr-2 text-sm">💕</KeyboardKey>
                <span className="text-xs text-pink-600 font-semibold">EMOTIONAL DAMAGE CONTROL™</span>
              </div>
              <p className="text-base mb-4">"The 'Hot Girl Recovery Plan' literally changed my life. I'm the woman who would never tolerate this now."</p>
              <div className="flex items-center">
                <KeyboardKey size="sm" className="mr-3 text-lg">💄</KeyboardKey>
                <div>
                  <div className="font-semibold">Glow Up Queen</div>
                  <div className="text-sm text-gray-500">Confidence Restored</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-3">
                <KeyboardKey size="sm" className="mr-2 text-sm">🔥</KeyboardKey>
                <span className="text-xs text-pink-600 font-semibold">SUCCESS STORY</span>
              </div>
              <p className="text-base mb-4">"Used the investigation tools, found out the truth, used the healing kit, and I'm thriving. Best $25 ever!"</p>
              <div className="flex items-center">
                <KeyboardKey size="sm" className="mr-3 text-lg">🦋</KeyboardKey>
                <div>
                  <div className="font-semibold">Phoenix Rising</div>
                  <div className="text-sm text-gray-500">Full Journey Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
