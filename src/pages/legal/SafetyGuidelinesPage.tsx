import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, Phone, Heart, Users } from "lucide-react";

export function SafetyGuidelinesPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Shield className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">User Safety Guidelines</h1>
        <p className="text-muted-foreground">Your safety is our highest priority</p>
      </div>

      <Card className="p-8">
        <ScrollArea className="h-[800px] pr-4">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-6 h-6 text-primary" />
                <h2 className="text-xl font-semibold text-primary m-0">Before You Begin</h2>
              </div>
              <p className="text-primary/90">
                Please read these safety guidelines carefully before using SenseAbled. Following these guidelines helps ensure your safety and maximizes therapeutic benefits.
              </p>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Medical Clearance</h2>
            <div className="bg-muted/50 border rounded-lg p-4 mb-6">
              <ul className="space-y-2 m-0">
                <li>✓ Consult your healthcare provider before starting any therapeutic program</li>
                <li>✓ Inform your doctor about your intention to use SenseAbled</li>
                <li>✓ Share your therapeutic goals and any concerns</li>
                <li>✓ Continue regular medical check-ups throughout platform use</li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Assessment and Setup</h2>
            <ul className="space-y-2">
              <li>Complete the initial assessment honestly and thoroughly</li>
              <li>Update your profile when your condition or needs change</li>
              <li>Set realistic goals with healthcare provider input</li>
              <li>Ensure your device meets minimum technical requirements</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">During Platform Use</h2>

            <h3 className="text-lg font-medium mt-6 mb-2">General Safety</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <div>
                  <strong>Listen to Your Body:</strong> Stop immediately if you experience pain, discomfort, or unusual symptoms
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <div>
                  <strong>Follow Break Reminders:</strong> Take scheduled breaks to prevent fatigue and overuse
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <div>
                  <strong>Stay Hydrated:</strong> Keep water nearby during sessions
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">•</span>
                <div>
                  <strong>Proper Lighting:</strong> Use in well-lit environments to reduce eye strain
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Condition-Specific Safety</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-blue-700 dark:text-blue-400">Visual Impairments</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Use appropriate lighting and screen settings</li>
                  <li>• Take frequent breaks to rest your eyes</li>
                  <li>• Have assistance available if needed for navigation</li>
                  <li>• Report any worsening of vision symptoms</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-medium text-green-700 dark:text-green-400">Hearing Impairments</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Adjust volume to comfortable levels</li>
                  <li>• Use visual cues when available</li>
                  <li>• Ensure emergency communications are accessible</li>
                  <li>• Monitor for any changes in hearing</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-medium text-purple-700 dark:text-purple-400">Motor Impairments</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Use appropriate seating and positioning</li>
                  <li>• Avoid overexertion during movement exercises</li>
                  <li>• Have assistance available for transfers or positioning</li>
                  <li>• Monitor for increased spasticity or fatigue</li>
                </ul>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-medium text-orange-700 dark:text-orange-400">Cognitive Conditions</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Start with shorter sessions and gradually increase</li>
                  <li>• Use reminder systems for session scheduling</li>
                  <li>• Have caregiver supervision when recommended</li>
                  <li>• Monitor for confusion or agitation</li>
                </ul>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-lg font-medium text-pink-700 dark:text-pink-400">Mental Health Conditions</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Use in conjunction with professional treatment</li>
                  <li>• Monitor mood changes and report concerns</li>
                  <li>• Have crisis support contacts readily available</li>
                  <li>• Stop if content triggers distressing symptoms</li>
                </ul>
              </div>
            </div>

            <div className="bg-destructive/10 border-2 border-destructive rounded-lg p-6 my-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h2 className="text-xl font-semibold text-destructive m-0">Emergency Procedures</h2>
              </div>
              
              <h3 className="text-lg font-medium text-destructive mb-3">When to Stop Immediately</h3>
              <ul className="space-y-2 text-destructive/90">
                <li>• Severe pain or discomfort</li>
                <li>• Difficulty breathing</li>
                <li>• Chest pain or heart palpitations</li>
                <li>• Severe dizziness or loss of balance</li>
                <li>• Seizure activity</li>
                <li>• Severe confusion or disorientation</li>
                <li>• Suicidal or self-harm thoughts</li>
              </ul>

              <div className="bg-destructive/20 rounded-lg p-4 mt-4">
                <h3 className="text-lg font-medium text-destructive mb-3">Emergency Contacts</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <p className="font-medium">Immediate Emergency</p>
                    <p className="text-sm">911 (US) or local emergency number</p>
                  </div>
                  <div>
                    <p className="font-medium">Safety Hotline</p>
                    <p className="text-sm">1-800-SAFE-123</p>
                  </div>
                  <div>
                    <p className="font-medium">Crisis Support</p>
                    <p className="text-sm">988 Suicide & Crisis Lifeline</p>
                  </div>
                  <div>
                    <p className="font-medium">Safety Email</p>
                    <p className="text-sm">safety@senseabled.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4 mt-8">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Caregiver Guidelines</h2>
            </div>

            <h3 className="text-lg font-medium mt-6 mb-2">When Supervision is Recommended</h3>
            <ul className="space-y-2">
              <li>Users with cognitive impairments</li>
              <li>Children under 13</li>
              <li>Users with seizure disorders</li>
              <li>First-time users with severe conditions</li>
              <li>During initial assessment periods</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">Caregiver Responsibilities</h3>
            <ul className="space-y-2">
              <li>Monitor user for signs of distress or fatigue</li>
              <li>Assist with emergency procedures if needed</li>
              <li>Help maintain communication with healthcare providers</li>
              <li>Ensure proper device setup and safety</li>
              <li>Support user motivation and consistency</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">Long-Term Safety</h2>

            <h3 className="text-lg font-medium mt-6 mb-2">Regular Monitoring</h3>
            <ul className="space-y-2">
              <li>Schedule periodic reviews with healthcare providers</li>
              <li>Track progress and report significant changes</li>
              <li>Update safety protocols as conditions change</li>
              <li>Maintain current emergency contact information</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">Continuous Improvement</h3>
            <p className="mb-3">Your safety feedback helps improve the platform for everyone:</p>
            <ul className="space-y-2">
              <li>Report any safety concerns promptly</li>
              <li>Participate in safety surveys when requested</li>
              <li>Share suggestions for safety improvements</li>
              <li>Stay informed about platform updates and safety notices</li>
            </ul>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mt-8">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-primary m-0">24/7 Support Available</h3>
              </div>
              <p className="text-primary/90 mb-3">
                If you have any safety concerns or questions, don't hesitate to contact us:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p><strong>General Support:</strong> support@senseabled.com</p>
                  <p><strong>Safety Hotline:</strong> 1-800-SAFE-123</p>
                </div>
                <div>
                  <p><strong>Accessibility:</strong> accessibility@senseabled.com</p>
                  <p><strong>Privacy:</strong> privacy@senseabled.com</p>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center text-sm text-muted-foreground">
              <p>© 2024 SenseAbled. A product of <a href="https://createorigins.vercel.app/" target="_blank" rel="noopener noreferrer">Create Origins</a>.</p>
              <p className="mt-2">Your safety and well-being are our highest priorities.</p>
            </div>
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}