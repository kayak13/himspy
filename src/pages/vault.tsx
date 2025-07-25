import { KeyboardKey } from "@/components/keyboard-key";

export default function Vault() {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16 px-4 min-h-screen">
        {/* Background with opacity */}
        <div className="absolute inset-0 overflow-hidden opacity-5 -z-10">
          <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-300" />
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <KeyboardKey size="sm" className="mx-auto mb-6 text-3xl">🗝️</KeyboardKey>
            <h1 className="font-playfair font-black text-4xl md:text-5xl text-gray-900 mb-4">
              Welcome to the Vault ✨
            </h1>
            <p className="text-xl text-gray-600">Your hot girl OSINT toolkit is ready</p>
          </div>
          
          {/* Main Investigation Tools */}
          <div className="mb-16">
            <h2 className="font-playfair font-black text-3xl text-center mb-8 text-pink-600">🕵️ Core Investigation Arsenal 🕵️</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Reverse Image Search */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200/20 hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <KeyboardKey size="sm" className="mr-4 text-xl">🔍</KeyboardKey>
                  <h3 className="font-playfair font-bold text-lg">Reverse Image Detective</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">Upload his photos and find where else they appear online. Catch those recycled dating app pics!</p>
                <KeyboardKey size="sm" className="text-xs">CTRL + F</KeyboardKey>
              </div>
              
              {/* Carrier Lookup */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200/20 hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <KeyboardKey size="sm" className="mr-4 text-xl">📱</KeyboardKey>
                  <h3 className="font-playfair font-bold text-lg">Phone Carrier Lookup</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">Find out which carrier that "work phone" is really on. Verify his stories.</p>
                <KeyboardKey size="sm" className="text-xs">CTRL + P</KeyboardKey>
              </div>
              
              {/* Location Checker */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200/20 hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <KeyboardKey size="sm" className="mr-4 text-xl">📍</KeyboardKey>
                  <h3 className="font-playfair font-bold text-lg">Location Cross-Reference</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">Compare his check-ins with his "I'm at work" alibis. GPS don't lie, bestie.</p>
                <KeyboardKey size="sm" className="text-xs">CTRL + L</KeyboardKey>
              </div>
              
              {/* Screenshot Traps */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200/20 hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <KeyboardKey size="sm" className="mr-4 text-xl">📸</KeyboardKey>
                  <h3 className="font-playfair font-bold text-lg">Screenshot Trap Techniques</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">Advanced evidence capture before it vanishes. No notification screenshots!</p>
                <KeyboardKey size="sm" className="text-xs">CTRL + S</KeyboardKey>
              </div>

              {/* Username Search */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200/20 hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <KeyboardKey size="sm" className="mr-4 text-xl">👤</KeyboardKey>
                  <h3 className="font-playfair font-bold text-lg">Username Hunter</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">Search every platform for his usernames. Find his secret accounts across the web.</p>
                <KeyboardKey size="sm" className="text-xs">CTRL + U</KeyboardKey>
              </div>

              {/* Email Lookup */}
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200/20 hover:shadow-xl transition-all">
                <div className="flex items-center mb-4">
                  <KeyboardKey size="sm" className="mr-4 text-xl">✉️</KeyboardKey>
                  <h3 className="font-playfair font-bold text-lg">Email Account Finder</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm">Discover all accounts linked to his email. Dating apps, social media, everything.</p>
                <KeyboardKey size="sm" className="text-xs">CTRL + E</KeyboardKey>
              </div>
            </div>
          </div>

          {/* Social Media Investigation Tools */}
          <div className="mb-16">
            <h2 className="font-playfair font-black text-3xl text-center mb-8 text-pink-600">📱 Social Media Spy Kit 📱</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200/30">
                <KeyboardKey size="sm" className="mb-3 text-lg">📷</KeyboardKey>
                <h4 className="font-bold text-sm mb-2">Instagram Deep Dive</h4>
                <p className="text-xs text-gray-600">Story viewers, tagged photos, hidden followers</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200/30">
                <KeyboardKey size="sm" className="mb-3 text-lg">👻</KeyboardKey>
                <h4 className="font-bold text-sm mb-2">Snapchat Secrets</h4>
                <p className="text-xs text-gray-600">Snap score tracking, best friends analysis</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200/30">
                <KeyboardKey size="sm" className="mb-3 text-lg">🐦</KeyboardKey>
                <h4 className="font-bold text-sm mb-2">Twitter Investigation</h4>
                <p className="text-xs text-gray-600">Deleted tweets, interaction patterns</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200/30">
                <KeyboardKey size="sm" className="mb-3 text-lg">📘</KeyboardKey>
                <h4 className="font-bold text-sm mb-2">Facebook Deep Search</h4>
                <p className="text-xs text-gray-600">Hidden friends, relationship history</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200/30">
                <KeyboardKey size="sm" className="mb-3 text-lg">🎵</KeyboardKey>
                <h4 className="font-bold text-sm mb-2">TikTok Tracker</h4>
                <p className="text-xs text-gray-600">Following lists, comment history</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200/30">
                <KeyboardKey size="sm" className="mb-3 text-lg">💼</KeyboardKey>
                <h4 className="font-bold text-sm mb-2">LinkedIn Lies</h4>
                <p className="text-xs text-gray-600">Verify his job, find connections</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200/30">
                <KeyboardKey size="sm" className="mb-3 text-lg">🎮</KeyboardKey>
                <h4 className="font-bold text-sm mb-2">Gaming Profiles</h4>
                <p className="text-xs text-gray-600">Discord, Steam, Xbox activity</p>
              </div>
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-4 rounded-xl border border-pink-200/30">
                <KeyboardKey size="sm" className="mb-3 text-lg">🎪</KeyboardKey>
                <h4 className="font-bold text-sm mb-2">Reddit Deep Dive</h4>
                <p className="text-xs text-gray-600">Post history, comment patterns</p>
              </div>
            </div>
          </div>

          {/* Dating App Investigation */}
          <div className="mb-16">
            <h2 className="font-playfair font-black text-3xl text-center mb-8 text-pink-600">💘 Dating App Detective 💘</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-300">
                <KeyboardKey size="sm" className="mb-4 text-2xl">🔥</KeyboardKey>
                <h3 className="font-playfair font-bold text-lg mb-3">Tinder Profile Hunter</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Photo reverse search across profiles</li>
                  <li>• Distance-based location tracking</li>
                  <li>• Bio text comparison tools</li>
                  <li>• Swipe pattern analysis</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-300">
                <KeyboardKey size="sm" className="mb-4 text-2xl">🐝</KeyboardKey>
                <h3 className="font-playfair font-bold text-lg mb-3">Bumble Investigation</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Active status monitoring</li>
                  <li>• Photo authenticity checks</li>
                  <li>• Profile update tracking</li>
                  <li>• Match history recovery</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-2 border-pink-300">
                <KeyboardKey size="sm" className="mb-4 text-2xl">💕</KeyboardKey>
                <h3 className="font-playfair font-bold text-lg mb-3">Multi-App Search</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Hinge, OKCupid, Match profiles</li>
                  <li>• Premium app discoveries</li>
                  <li>• Cross-platform photo matching</li>
                  <li>• Activity timeline creation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advanced OSINT Tools */}
          <div className="mb-16">
            <h2 className="font-playfair font-black text-3xl text-center mb-8 text-pink-600">🔮 Advanced Investigation Magic 🔮</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl border border-pink-200">
                <div className="flex items-center mb-4">
                  <KeyboardKey size="sm" className="mr-4 text-xl">🗃️</KeyboardKey>
                  <h3 className="font-playfair font-bold text-xl">Digital Footprint Mapper</h3>
                </div>
                <p className="text-gray-700 mb-4">Create a complete timeline of his online presence across all platforms.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center"><KeyboardKey size="sm" className="mr-2 text-xs">📅</KeyboardKey> Account creation dates</div>
                  <div className="flex items-center"><KeyboardKey size="sm" className="mr-2 text-xs">🔗</KeyboardKey> Platform connections</div>
                  <div className="flex items-center"><KeyboardKey size="sm" className="mr-2 text-xs">📊</KeyboardKey> Activity patterns</div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl border border-pink-200">
                <div className="flex items-center mb-4">
                  <KeyboardKey size="sm" className="mr-4 text-xl">🌐</KeyboardKey>
                  <h3 className="font-playfair font-bold text-xl">Domain & Website Tracker</h3>
                </div>
                <p className="text-gray-700 mb-4">Find websites, domains, and online properties he owns or manages.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center"><KeyboardKey size="sm" className="mr-2 text-xs">🏷️</KeyboardKey> Domain registrations</div>
                  <div className="flex items-center"><KeyboardKey size="sm" className="mr-2 text-xs">💼</KeyboardKey> Business websites</div>
                  <div className="flex items-center"><KeyboardKey size="sm" className="mr-2 text-xs">📝</KeyboardKey> Blog discoveries</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl border border-pink-200">
                <div className="flex items-center mb-4">
                  <KeyboardKey size="sm" className="mr-4 text-xl">💰</KeyboardKey>
                  <h3 className="font-playfair font-bold text-xl">Financial Footprint</h3>
                </div>
                <p className="text-gray-700 mb-4">Public records, property ownership, and business registrations.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center"><KeyboardKey size="sm" className="mr-2 text-xs">🏠</KeyboardKey> Property records</div>
                  <div className="flex items-center"><KeyboardKey size="sm" className="mr-2 text-xs">📋</KeyboardKey> Business filings</div>
                  <div className="flex items-center"><KeyboardKey size="sm" className="mr-2 text-xs">⚖️</KeyboardKey> Court records</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl border border-pink-200">
                <div className="flex items-center mb-4">
                  <KeyboardKey size="sm" className="mr-4 text-xl">🔍</KeyboardKey>
                  <h3 className="font-playfair font-bold text-xl">Deep Web Search</h3>
                </div>
                <p className="text-gray-700 mb-4">Access archived content, cached pages, and deleted information.</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center"><KeyboardKey size="sm" className="mr-2 text-xs">📚</KeyboardKey> Wayback Machine</div>
                  <div className="flex items-center"><KeyboardKey size="sm" className="mr-2 text-xs">📱</KeyboardKey> Cached social posts</div>
                  <div className="flex items-center"><KeyboardKey size="sm" className="mr-2 text-xs">🗑️</KeyboardKey> Deleted content recovery</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Investigation Guides & Tutorials */}
          <div className="mb-16">
            <h2 className="font-playfair font-black text-3xl text-center mb-8 text-pink-600">📚 Step-by-Step Investigation Guides 📚</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200/20">
                <KeyboardKey size="sm" className="mb-4 text-xl">📖</KeyboardKey>
                <h3 className="font-playfair font-bold text-lg mb-3">Complete Beginner's Guide</h3>
                <p className="text-sm text-gray-600 mb-4">Start here if you've never done digital investigation before</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Setting up anonymous browsing</li>
                  <li>• Basic search techniques</li>
                  <li>• Evidence documentation</li>
                  <li>• Legal considerations</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200/20">
                <KeyboardKey size="sm" className="mb-4 text-xl">🔄</KeyboardKey>
                <h3 className="font-playfair font-bold text-lg mb-3">The 48-Hour Deep Dive</h3>
                <p className="text-sm text-gray-600 mb-4">Comprehensive investigation timeline and checklist</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Day 1: Social media sweep</li>
                  <li>• Day 2: Public records & digital footprint</li>
                  <li>• Evidence compilation</li>
                  <li>• Decision-making framework</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200/20">
                <KeyboardKey size="sm" className="mb-4 text-xl">🎯</KeyboardKey>
                <h3 className="font-playfair font-bold text-lg mb-3">Red Flag Spotting Guide</h3>
                <p className="text-sm text-gray-600 mb-4">Learn to identify suspicious patterns and behaviors</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Dating app behavior patterns</li>
                  <li>• Social media inconsistencies</li>
                  <li>• Communication red flags</li>
                  <li>• Location discrepancies</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200/20">
                <KeyboardKey size="sm" className="mb-4 text-xl">⚡</KeyboardKey>
                <h3 className="font-playfair font-bold text-lg mb-3">Quick 15-Minute Checks</h3>
                <p className="text-sm text-gray-600 mb-4">Fast verification techniques for busy queens</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Rapid reverse image search</li>
                  <li>• Username quick-check</li>
                  <li>• Basic social media scan</li>
                  <li>• Phone number verification</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200/20">
                <KeyboardKey size="sm" className="mb-4 text-xl">🔐</KeyboardKey>
                <h3 className="font-playfair font-bold text-lg mb-3">Privacy & Safety First</h3>
                <p className="text-sm text-gray-600 mb-4">Protect yourself while investigating</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Anonymous browsing setup</li>
                  <li>• VPN recommendations</li>
                  <li>• Secure evidence storage</li>
                  <li>• Digital footprint cleanup</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200/20">
                <KeyboardKey size="sm" className="mb-4 text-xl">👭</KeyboardKey>
                <h3 className="font-playfair font-bold text-lg mb-3">Group Investigation Tips</h3>
                <p className="text-sm text-gray-600 mb-4">Team up with your besties for better results</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Divide and conquer strategies</li>
                  <li>• Sharing tools safely</li>
                  <li>• Cross-verification methods</li>
                  <li>• Group decision making</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Action Tools */}
          <div className="mb-16">
            <h2 className="font-playfair font-black text-3xl text-center mb-8 text-pink-600">⚡ One-Click Investigation Tools ⚡</h2>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 text-white p-4 rounded-xl text-center">
                <KeyboardKey size="sm" className="mb-3 bg-white text-pink-500">🔍</KeyboardKey>
                <h4 className="font-bold text-sm mb-2">Instant Photo Check</h4>
                <p className="text-xs opacity-90">Upload & search in 3 seconds</p>
              </div>
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 text-white p-4 rounded-xl text-center">
                <KeyboardKey size="sm" className="mb-3 bg-white text-pink-500">📱</KeyboardKey>
                <h4 className="font-bold text-sm mb-2">Phone Number Intel</h4>
                <p className="text-xs opacity-90">Carrier + location lookup</p>
              </div>
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 text-white p-4 rounded-xl text-center">
                <KeyboardKey size="sm" className="mb-3 bg-white text-pink-500">👤</KeyboardKey>
                <h4 className="font-bold text-sm mb-2">Username Scanner</h4>
                <p className="text-xs opacity-90">Check 50+ platforms instantly</p>
              </div>
              <div className="bg-gradient-to-br from-pink-400 to-pink-500 text-white p-4 rounded-xl text-center">
                <KeyboardKey size="sm" className="mb-3 bg-white text-pink-500">✉️</KeyboardKey>
                <h4 className="font-bold text-sm mb-2">Email Deep Dive</h4>
                <p className="text-xs opacity-90">Find all linked accounts</p>
              </div>
            </div>
          </div>

          {/* Evidence Management */}
          <div className="mb-16">
            <h2 className="font-playfair font-black text-3xl text-center mb-8 text-pink-600">🗂️ Evidence Management Suite 🗂️</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-2xl border border-pink-200">
                <div className="flex items-center mb-4">
                  <KeyboardKey size="sm" className="mr-4 text-xl">📋</KeyboardKey>
                  <h3 className="font-playfair font-bold text-xl">Digital Evidence Locker</h3>
                </div>
                <p className="text-gray-700 mb-4">Organize and secure all your investigation findings</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-sm">Screenshot organizer</span>
                    <KeyboardKey size="sm" className="text-xs">CTRL + O</KeyboardKey>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-sm">Timeline builder</span>
                    <KeyboardKey size="sm" className="text-xs">CTRL + T</KeyboardKey>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-sm">Evidence tags & notes</span>
                    <KeyboardKey size="sm" className="text-xs">CTRL + N</KeyboardKey>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-pink-50 p-6 rounded-2xl border border-pink-200">
                <div className="flex items-center mb-4">
                  <KeyboardKey size="sm" className="mr-4 text-xl">📊</KeyboardKey>
                  <h3 className="font-playfair font-bold text-xl">Investigation Reports</h3>
                </div>
                <p className="text-gray-700 mb-4">Generate professional reports from your findings</p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-sm">Summary report generator</span>
                    <KeyboardKey size="sm" className="text-xs">CTRL + R</KeyboardKey>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-sm">Evidence export (PDF)</span>
                    <KeyboardKey size="sm" className="text-xs">CTRL + X</KeyboardKey>
                  </div>
                  <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                    <span className="text-sm">Shareable findings</span>
                    <KeyboardKey size="sm" className="text-xs">CTRL + W</KeyboardKey>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Emotional Damage Control Section */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-pink-500 to-rose-400 p-8 rounded-3xl text-white text-center mb-8">
              <KeyboardKey size="sm" className="mx-auto mb-4 text-3xl bg-white text-pink-500">💕</KeyboardKey>
              <h2 className="font-playfair font-black text-4xl mb-4">EMOTIONAL DAMAGE CONTROL™</h2>
              <p className="text-xl mb-2 font-medium">Hot Girl Therapist (No PhD Required)</p>
              <p className="text-lg opacity-90">Because finding out he's trash is traumatic, bestie. Let's heal together.</p>
            </div>

            {/* Hot Girl Therapy Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-6 rounded-2xl border-2 border-pink-300/40">
                <KeyboardKey size="sm" className="mb-4 text-2xl">🫶</KeyboardKey>
                <h3 className="font-playfair font-bold text-xl mb-3">Immediate Crisis Support</h3>
                <p className="text-gray-700 mb-4">For when you just found out and you're spiraling</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• "I Just Found Out He's Trash" emergency kit</li>
                  <li>• 24-hour self-care survival guide</li>
                  <li>• Bestie check-in templates</li>
                  <li>• Emergency therapy hotlines</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-6 rounded-2xl border-2 border-pink-300/40">
                <KeyboardKey size="sm" className="mb-4 text-2xl">🗣️</KeyboardKey>
                <h3 className="font-playfair font-bold text-xl mb-3">Communication Scripts</h3>
                <p className="text-gray-700 mb-4">What to say when words are hard</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Confrontation conversation starters</li>
                  <li>• Breakup scripts (dignified AF)</li>
                  <li>• Family explanation templates</li>
                  <li>• Friend support request guides</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-6 rounded-2xl border-2 border-pink-300/40">
                <KeyboardKey size="sm" className="mb-4 text-2xl">💄</KeyboardKey>
                <h3 className="font-playfair font-bold text-xl mb-3">Hot Girl Recovery Plan</h3>
                <p className="text-gray-700 mb-4">Become the woman who wouldn't tolerate this</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• 30-day confidence rebuilding challenge</li>
                  <li>• Self-worth affirmation workbook</li>
                  <li>• "Glow Up After Heartbreak" roadmap</li>
                  <li>• New standards & boundaries worksheet</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-6 rounded-2xl border-2 border-pink-300/40">
                <KeyboardKey size="sm" className="mb-4 text-2xl">👭</KeyboardKey>
                <h3 className="font-playfair font-bold text-xl mb-3">Support Squad Activation</h3>
                <p className="text-gray-700 mb-4">Rally your girls for maximum healing</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Friend group intervention guide</li>
                  <li>• "Girls Night Recovery" activity plans</li>
                  <li>• How to ask for help (scripts included)</li>
                  <li>• Building your healing circle</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-6 rounded-2xl border-2 border-pink-300/40">
                <KeyboardKey size="sm" className="mb-4 text-2xl">🧠</KeyboardKey>
                <h3 className="font-playfair font-bold text-xl mb-3">Mindset Makeover</h3>
                <p className="text-gray-700 mb-4">Reprogram your brain for better love</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Trauma-informed healing techniques</li>
                  <li>• Attachment style workbook</li>
                  <li>• Red flag recognition training</li>
                  <li>• Self-love practices that actually work</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-100 p-6 rounded-2xl border-2 border-pink-300/40">
                <KeyboardKey size="sm" className="mb-4 text-2xl">🦋</KeyboardKey>
                <h3 className="font-playfair font-bold text-xl mb-3">Future-Proofing Your Heart</h3>
                <p className="text-gray-700 mb-4">Never get played again, bestie</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Early dating red flag checklist</li>
                  <li>• Healthy relationship blueprint</li>
                  <li>• Trust rebuilding timeline</li>
                  <li>• "Never Again" action plan</li>
                </ul>
              </div>
            </div>

            {/* Therapy Session Types */}
            <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-3xl border border-pink-200 mb-8">
              <h3 className="font-playfair font-black text-3xl text-center mb-8 text-gray-900">
                🎭 Hot Girl Therapy Session Menu 🎭
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-playfair font-bold text-xl mb-4 text-pink-600">"I'm Not Crazy" Validation Sessions</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Trust your intuition affirmation</li>
                    <li>• Gaslighting recovery workbook</li>
                    <li>• "Your Feelings Are Valid" mantras</li>
                    <li>• Sanity check conversation starters</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-playfair font-bold text-xl mb-4 text-pink-600">"Revenge Era" Channeling</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Healthy revenge vs. toxic revenge guide</li>
                    <li>• "Living Well is the Best Revenge" plans</li>
                    <li>• Anger transformation techniques</li>
                    <li>• Petty to powerful energy conversion</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-playfair font-bold text-xl mb-4 text-pink-600">"Main Character Energy" Restoration</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Stop making him the villain of YOUR story</li>
                    <li>• Reclaim your narrative workshop</li>
                    <li>• Self-prioritization boot camp</li>
                    <li>• "That Girl" transformation guide</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-2xl">
                  <h4 className="font-playfair font-bold text-xl mb-4 text-pink-600">"Closure is Overrated" Acceptance</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Why you don't need his explanation</li>
                    <li>• Self-closure techniques</li>
                    <li>• Moving on without answers</li>
                    <li>• "He's Not Worth Your Energy" mantras</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Download CTA */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-pink-500 to-rose-400 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-lg transition-all duration-200">
                💕 ACCESS COMPLETE EMOTIONAL DAMAGE CONTROL KIT 💕
              </button>
              <p className="text-sm text-gray-600 mt-3">Included with your CTRL + HIM™ purchase</p>
            </div>
          </div>
          
          {/* Keyboard Shortcuts Menu */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-200/20">
            <h3 className="font-playfair font-bold text-xl mb-4 text-center">✨ Hot Girl Keyboard Shortcuts ✨</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <KeyboardKey size="sm" className="mb-2 text-sm">CTRL + Slay</KeyboardKey>
                <p className="text-xs text-gray-600">Main Menu</p>
              </div>
              <div>
                <KeyboardKey size="sm" className="mb-2 text-sm">ALT + Attitude</KeyboardKey>
                <p className="text-xs text-gray-600">Evidence Mode</p>
              </div>
              <div>
                <KeyboardKey size="sm" className="mb-2 text-sm">SHIFT + Sis</KeyboardKey>
                <p className="text-xs text-gray-600">Share Tools</p>
              </div>
              <div>
                <KeyboardKey size="sm" className="mb-2 text-sm">TAB + Tea</KeyboardKey>
                <p className="text-xs text-gray-600">Results</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
