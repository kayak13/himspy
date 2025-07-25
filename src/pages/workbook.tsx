import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { KeyboardKey } from '../components/keyboard-key';
import { CheckCircle, Heart, Sparkles, Calendar, ArrowRight, Download, BookOpen, Coffee } from 'lucide-react';

export default function WorkbookPage() {
  const [purchased, setPurchased] = useState(false);

  const handlePurchase = () => {
    // This would integrate with PayHip
    window.open('https://payhip.com/b/your-workbook-link', '_blank');
    setPurchased(true);
  };

  const handleBookCall = () => {
    window.location.href = '/booking';
  };

  if (purchased) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 p-4">
        <div className="max-w-4xl mx-auto pt-20">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
              <CheckCircle className="h-5 w-5" />
              Purchase Confirmed!
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Welcome to Emotional Damage Control™
            </h1>
            <p className="text-lg text-gray-600">
              Your healing journey starts now. Check your email for the download link!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Download Card */}
            <Card className="border-2 border-green-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100">
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5 text-green-600" />
                  Your Workbook is Ready
                </CardTitle>
                <CardDescription>
                  86 pages of healing, reflection, and recovery strategies
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 mb-3">
                    Check your email for the download link. If you don't see it, check your spam folder!
                  </p>
                  <KeyboardKey variant="primary" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Re-send Download Link
                  </KeyboardKey>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">What's Inside:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      The Red Flag Recognition Guide
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Emotional Damage Assessment Tools
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Recovery Roadmap & Timeline
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Self-Worth Rebuilding Exercises
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Future Relationship Standards
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Upsell Card */}
            <Card className="border-2 border-purple-200 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-purple-500 to-pink-500 text-white px-3 py-1 rounded-bl-lg">
                <span className="text-sm font-medium">Limited Spots</span>
              </div>
              <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  Need Real-Time Crisis Intervention?
                </CardTitle>
                <CardDescription>
                  Sometimes you need more than a workbook—you need a real person
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div className="text-center space-y-3">
                  <div className="text-3xl font-bold text-purple-600">$97</div>
                  <p className="text-sm text-gray-600">60-minute 1:1 crisis call</p>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">What You Get:</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-red-500" />
                      Personalized situation analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-purple-500" />
                      Custom action plan & strategy
                    </li>
                    <li className="flex items-center gap-2">
                      <Coffee className="h-4 w-4 text-pink-500" />
                      Trauma-informed support
                    </li>
                    <li className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-blue-500" />
                      48-hour follow-up support
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700 text-center mb-3">
                    "Sometimes you need someone who's been there to tell you what they wish someone had told them."
                  </p>
                </div>

                <KeyboardKey
                  onClick={handleBookCall}
                  variant="primary"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                >
                  Book My Crisis Call
                  <ArrowRight className="h-4 w-4 ml-2" />
                </KeyboardKey>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="border-2 border-pink-200 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Your Healing Journey Starts Now
                </h3>
                <p className="text-gray-600 mb-6">
                  Take your time with the workbook. Healing isn't linear, and there's no rush. 
                  You've already taken the hardest step by choosing yourself.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <KeyboardKey variant="secondary" onClick={() => window.location.href = '/'}>
                    ← Back to Home
                  </KeyboardKey>
                  <KeyboardKey variant="secondary" onClick={() => window.location.href = '/vault'}>
                    Explore Investigation Tools
                  </KeyboardKey>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 p-4">
      <div className="max-w-4xl mx-auto pt-20">
        <div className="text-center mb-8">
          <Badge variant="secondary" className="mb-4 bg-pink-100 text-pink-800">
            Step 1 of 3
          </Badge>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Emotional Damage Control™
          </h1>
          <p className="text-lg text-gray-600">
            The comprehensive guide to healing from relationship trauma
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Product Details */}
          <Card className="border-2 border-pink-200 shadow-xl">
            <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-pink-600" />
                What You're Getting
              </CardTitle>
              <CardDescription>
                86 pages of unfiltered wisdom and practical healing strategies
              </CardDescription>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-pink-600">$37</div>
                <p className="text-sm text-gray-600">Instant digital download</p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Inside the Workbook:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-pink-500" />
                    The Red Flag Recognition Guide
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-pink-500" />
                    Emotional Damage Assessment Tools
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-pink-500" />
                    Recovery Roadmap & Timeline
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-pink-500" />
                    Self-Worth Rebuilding Exercises
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-pink-500" />
                    Future Relationship Standards
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-pink-500" />
                    Text Template Scripts
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-pink-500" />
                    Boundary Setting Worksheets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-pink-500" />
                    Emergency Support Resources
                  </li>
                </ul>
              </div>

              <KeyboardKey
                onClick={handlePurchase}
                variant="primary"
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              >
                Get Instant Access - $37
                <Download className="h-4 w-4 ml-2" />
              </KeyboardKey>
            </CardContent>
          </Card>

          {/* Preview & Testimonials */}
          <div className="space-y-6">
            <Card className="border-2 border-purple-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
                <CardTitle>Why This Workbook Hits Different</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <blockquote className="border-l-4 border-pink-400 pl-4 italic text-gray-700 mb-4">
                  "I'm not a licensed therapist, but I am a trauma-informed baddie with life receipts 
                  and 1000+ deleted texts. This workbook is everything I wish someone had given me 
                  when I was drowning in red flags and gaslighting."
                </blockquote>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Perfect for you if:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    <li>• You're tired of ignoring red flags</li>
                    <li>• You need to rebuild your self-worth</li>
                    <li>• You want practical tools, not just theory</li>
                    <li>• You're ready to break toxic patterns</li>
                    <li>• You want guidance that feels real</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-rose-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-rose-100 to-pink-100">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-rose-600" />
                  Coming Next: Personal Support
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  After you get the workbook, you'll have the option to book a 1:1 crisis call 
                  for personalized support and real-time guidance.
                </p>
                <div className="bg-rose-50 border border-rose-200 rounded-lg p-3">
                  <p className="text-sm text-gray-700">
                    <strong>Next step:</strong> 60-minute crisis intervention call ($97)
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Secure payment processed by PayHip • Instant download • No subscription
          </p>
        </div>
      </div>
    </div>
  );
}