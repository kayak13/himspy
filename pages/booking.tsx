import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { KeyboardKey } from '../components/keyboard-key';
import { Heart, Calendar, Shield, Clock, Sparkles, MessageCircle, Crown, Flame } from 'lucide-react';

const intakeSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  sessionType: z.enum(["mini", "standard", "upgrade"], {
    required_error: "Please select a session type",
  }),
  situation: z.string().min(10, "Please tell us more about your situation"),
  goals: z.string().min(10, "Please share what you hope to get from this call"),
  communicationStyle: z.enum(["brutal", "gentle"], {
    required_error: "Please select your preferred communication style",
  }),
});

type IntakeForm = z.infer<typeof intakeSchema>;

const sessionOptions = {
  mini: { name: "💋 Mini Vent Sesh", duration: "20 min", price: "$33", description: "Quick-fire validation, clarity, and tactical advice" },
  standard: { name: "💅 Standard Session", duration: "45 min", price: "$77", description: "Deep dive into one chaotic situation + strategic exit or glow-up plan" },
  upgrade: { name: "👑 Unfiltered Upgrade", duration: "75 min", price: "$147", description: "For when they need to cry, journal, plot revenge, and get their life back" }
};

export default function BookingPage() {
  const [step, setStep] = useState<'sessionSelect' | 'intake' | 'calendar'>('sessionSelect');
  const [submittedData, setSubmittedData] = useState<IntakeForm | null>(null);

  const form = useForm<IntakeForm>({
    resolver: zodResolver(intakeSchema),
    defaultValues: {
      name: "",
      email: "",
      sessionType: undefined,
      situation: "",
      goals: "",
      communicationStyle: undefined,
    },
  });

  const onSubmit = (data: IntakeForm) => {
    setSubmittedData(data);
    setStep('calendar');
  };

  // Session Selection Step
  if (step === 'sessionSelect') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 p-4">
        <div className="max-w-4xl mx-auto pt-20">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Choose Your Session ✨
            </h1>
            <p className="text-lg text-gray-600">
              Pick the perfect level of emotional support for your situation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Mini Vent Session */}
            <Card className="border-2 border-pink-200 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
                  onClick={() => setStep('intake')}>
              <CardHeader className="bg-gradient-to-r from-pink-100 to-rose-100 text-center">
                <div className="text-3xl mb-2">💋</div>
                <CardTitle className="text-pink-600">Mini Vent Sesh</CardTitle>
                <div className="text-2xl font-bold text-pink-700">$33</div>
                <CardDescription className="text-pink-600">20 minutes</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 text-center mb-4">
                  Quick-fire validation, clarity, and tactical advice
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-pink-500" />
                    <span>20-minute focused session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-pink-500" />
                    <span>Immediate validation & clarity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-pink-500" />
                    <span>Quick tactical advice</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Standard Session */}
            <Card className="border-2 border-purple-200 shadow-xl hover:shadow-2xl transition-all cursor-pointer relative"
                  onClick={() => setStep('intake')}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-xs">
                MOST POPULAR
              </div>
              <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100 text-center">
                <div className="text-3xl mb-2">💅</div>
                <CardTitle className="text-purple-600">Standard Session</CardTitle>
                <div className="text-2xl font-bold text-purple-700">$77</div>
                <CardDescription className="text-purple-600">45 minutes</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 text-center mb-4">
                  Deep dive into one chaotic situation + strategic exit or glow-up plan
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-purple-500" />
                    <span>45-minute deep dive</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-purple-500" />
                    <span>Strategic planning session</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-purple-500" />
                    <span>Exit or glow-up strategy</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Unfiltered Upgrade */}
            <Card className="border-2 border-rose-200 shadow-xl hover:shadow-2xl transition-all cursor-pointer"
                  onClick={() => setStep('intake')}>
              <CardHeader className="bg-gradient-to-r from-rose-100 to-pink-100 text-center">
                <div className="text-3xl mb-2">👑</div>
                <CardTitle className="text-rose-600">Unfiltered Upgrade</CardTitle>
                <div className="text-2xl font-bold text-rose-700">$147</div>
                <CardDescription className="text-rose-600">75 minutes</CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 text-center mb-4">
                  For when they need to cry, journal, plot revenge, and get their life back
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-rose-500" />
                    <span>75-minute full experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Crown className="h-4 w-4 text-rose-500" />
                    <span>Complete emotional reset</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="h-4 w-4 text-rose-500" />
                    <span>Life reconstruction plan</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="border-2 border-gray-200 shadow-xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  All Sessions Include
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-green-500" />
                    <span>Trauma-informed approach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    <span>48-hour follow-up support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="h-4 w-4 text-green-500" />
                    <span>Judgment-free zone</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-green-500" />
                    <span>Personalized action plan</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'calendar') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 p-4">
        <div className="max-w-4xl mx-auto pt-20">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Book Your Crisis Call ✨
            </h1>
            <p className="text-lg text-gray-600">
              Ready for some real talk? Let's get you scheduled.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calendar Embed */}
            <Card className="border-2 border-pink-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100">
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-pink-600" />
                  Select Your Time
                </CardTitle>
                <CardDescription>
                  Choose a time that works for your emotional emergency
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                {/* Calendar iframe placeholder - user needs to provide actual Calendly/TidyCal embed */}
                <div className="bg-gray-100 rounded-lg p-8 text-center min-h-[400px] flex items-center justify-center">
                  <div>
                    <Calendar className="h-16 w-16 text-pink-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-4">Calendar integration ready</p>
                    <p className="text-sm text-gray-500">
                      Replace this with your Calendly, TidyCal, or SavvyCal embed code
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Session Details */}
            <div className="space-y-6">
              <Card className="border-2 border-purple-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-100 to-pink-100">
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-purple-600" />
                    Your Session Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span><strong>Session:</strong> {submittedData?.sessionType && sessionOptions[submittedData.sessionType].name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-purple-500" />
                    <span><strong>Duration:</strong> {submittedData?.sessionType && sessionOptions[submittedData.sessionType].duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-pink-500" />
                    <span><strong>Investment:</strong> {submittedData?.sessionType && sessionOptions[submittedData.sessionType].price}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5 text-blue-500" />
                    <span><strong>Style:</strong> {submittedData?.communicationStyle === 'brutal' ? 'Brutal Honesty' : 'Gentle Truth'}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Sparkles className="h-5 w-5 text-purple-500" />
                    <span><strong>Bonus:</strong> 48-hour follow-up support via DM</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-rose-200 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-rose-100 to-pink-100">
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-rose-600" />
                    Important Disclaimer
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      <strong>I am not a licensed therapist.</strong> I am a trauma-informed baddie with life receipts and 1000+ deleted texts. 
                      These calls are emotional support, reflection, and strategy—not therapy. No diagnosis, just red flag detection.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <KeyboardKey
                  onClick={() => setStep('intake')}
                  variant="secondary"
                  size="lg"
                >
                  ← Back to Questions
                </KeyboardKey>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 p-4">
      <div className="max-w-2xl mx-auto pt-20">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Crisis Call Intake ✨
          </h1>
          <p className="text-lg text-gray-600">
            Let's get to know your situation so I can bring my A-game to our call
          </p>
        </div>

        <Card className="border-2 border-pink-200 shadow-xl">
          <CardHeader className="bg-gradient-to-r from-pink-100 to-purple-100">
            <CardTitle>Tell Me Everything (Well, Almost)</CardTitle>
            <CardDescription>
              This helps me prepare the perfect blend of tough love and emotional support
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="What should I call you?" 
                            className="border-pink-200 focus:border-pink-500"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            type="email"
                            placeholder="your.email@example.com" 
                            className="border-pink-200 focus:border-pink-500"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="sessionType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Session Type</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-pink-200 focus:border-pink-500">
                            <SelectValue placeholder="Choose your session type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="mini">💋 Mini Vent Sesh - $33 (20 min)</SelectItem>
                          <SelectItem value="standard">💅 Standard Session - $77 (45 min)</SelectItem>
                          <SelectItem value="upgrade">👑 Unfiltered Upgrade - $147 (75 min)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="situation"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What's Going On?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Spill the tea... What's the situation that brought you here? Don't hold back."
                          className="border-pink-200 focus:border-pink-500 min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="goals"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>What Do You Hope to Get From This Call?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Clarity? Validation? A reality check? A plan of action? Tell me what success looks like for you."
                          className="border-pink-200 focus:border-pink-500 min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="communicationStyle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Communication Style Preference</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="space-y-4"
                        >
                          <div className="flex items-center space-x-3 p-4 border border-pink-200 rounded-lg hover:bg-pink-50">
                            <RadioGroupItem value="brutal" id="brutal" />
                            <Label htmlFor="brutal" className="flex-1 cursor-pointer">
                              <div>
                                <div className="font-medium text-gray-900">🔥 Brutal Honesty</div>
                                <div className="text-sm text-gray-600">
                                  Give it to me straight. I can handle the truth and need someone to call out my BS.
                                </div>
                              </div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-4 border border-purple-200 rounded-lg hover:bg-purple-50">
                            <RadioGroupItem value="gentle" id="gentle" />
                            <Label htmlFor="gentle" className="flex-1 cursor-pointer">
                              <div>
                                <div className="font-medium text-gray-900">💕 Gentle Truth</div>
                                <div className="text-sm text-gray-600">
                                  I'm feeling fragile right now. Be honest but wrap it in kindness.
                                </div>
                              </div>
                            </Label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <button 
                    type="submit"
                    className="w-full rounded-xl font-bold transition-all duration-200 flex items-center justify-center px-6 py-3 text-lg keyboard-key"
                  >
                    Continue to Calendar →
                  </button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}