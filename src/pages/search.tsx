import { KeyboardKey } from "@/components/keyboard-key";
import { useState } from "react";
import { useLocation } from "wouter";

export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [loadingText, setLoadingText] = useState("Searching databases");
  const [, setLocation] = useLocation();

  const loadingTexts = [
    'Searching databases',
    'Analyzing social media',
    'Cross-referencing photos',
    'Checking dating profiles',
    'Compiling evidence'
  ];

  const performSearch = () => {
    if (!searchValue.trim()) {
      return;
    }

    setIsLoading(true);
    let textIndex = 0;
    
    const loadingInterval = setInterval(() => {
      setLoadingText(loadingTexts[textIndex]);
      textIndex = (textIndex + 1) % loadingTexts.length;
    }, 1000);

    // Show results after 5 seconds
    setTimeout(() => {
      clearInterval(loadingInterval);
      setIsLoading(false);
      setShowResults(true);
    }, 5000);
  };

  const showVault = () => {
    // TODO: Integrate with PayHip payment processing
    alert('🔒 Redirecting to secure payment... This would integrate with PayHip for $24.99 payment processing.');
    setLocation('/vault');
  };

  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-16 px-4 min-h-screen">
        {/* Background with opacity */}
        <div className="absolute inset-0 overflow-hidden opacity-5 -z-10">
          <div className="w-full h-full bg-gradient-to-br from-pink-100 to-pink-300" />
        </div>
        
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="font-playfair font-black text-4xl md:text-5xl text-gray-900 mb-4">
              Time to investigate 🔍
            </h1>
            <p className="text-xl text-gray-600">Enter his details and let's see what we find...</p>
          </div>
          
          {/* Search Interface */}
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-pink-200/20">
            <div className="mb-6">
              <label className="block text-lg font-semibold text-gray-700 mb-3">
                What do you know about him? 💅
              </label>
              <input 
                type="text" 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Enter his name, username, or phone number... 💅"
                className="w-full p-4 text-lg border-2 border-pink-200/30 rounded-xl focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all"
              />
            </div>
            
            {/* Search Button */}
            {!isLoading && !showResults && (
              <KeyboardKey 
                size="xl"
                onClick={performSearch}
                className="w-full flex-col"
              >
                <div>🔍 START INVESTIGATION 🔍</div>
                <div className="text-sm opacity-90 mt-1">ENTER ↵</div>
              </KeyboardKey>
            )}
          </div>
          
          {/* Loading Animation */}
          {isLoading && (
            <div className="mt-8 text-center">
              <div className="bg-white p-8 rounded-3xl shadow-2xl">
                <div className="animate-pulse-pink mb-4">
                  <KeyboardKey size="sm" className="mx-auto text-2xl">🕵️</KeyboardKey>
                </div>
                <p className="text-lg font-semibold typing-animation">{loadingText}</p>
                <div className="flex justify-center space-x-1 mt-4">
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                  <div className="w-2 h-2 bg-pink-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Fake Results */}
          {showResults && (
            <div className="mt-8">
              <div className="bg-white p-8 rounded-3xl shadow-2xl border-2 border-pink-500/30">
                <div className="text-center mb-6">
                  <KeyboardKey size="sm" className="mx-auto mb-4 text-3xl">⚠️</KeyboardKey>
                  <h2 className="font-playfair font-bold text-2xl text-gray-900 mb-2">
                    3 possible matches found ✨
                  </h2>
                  <p className="text-lg text-red-500 font-semibold">
                    Suspicious image activity detected 👀
                  </p>
                </div>
                
                {/* Blurred Preview */}
                <div className="bg-gray-100 p-6 rounded-xl mb-6 relative">
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <KeyboardKey size="sm" className="mx-auto mb-3 text-2xl">🔒</KeyboardKey>
                      <p className="font-semibold">Full results locked</p>
                    </div>
                  </div>
                  <div className="blur-md">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
                      <div>
                        <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                        <div className="h-3 bg-gray-300 rounded w-24"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-3 bg-gray-300 rounded w-full"></div>
                      <div className="h-3 bg-gray-300 rounded w-3/4"></div>
                      <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                    </div>
                  </div>
                </div>
                
                {/* Unlock CTA */}
                <KeyboardKey 
                  size="xl"
                  onClick={showVault}
                  className="w-full flex-col"
                >
                  <div>💳 BUY ACCESS TO VIEW REPORT 💳</div>
                  <div className="text-sm opacity-90 mt-1">$24.99 - SPACE</div>
                </KeyboardKey>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
