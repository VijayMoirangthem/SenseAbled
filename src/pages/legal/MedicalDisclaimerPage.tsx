import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Heart, Phone, Shield } from "lucide-react";

export function MedicalDisclaimerPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Heart className="w-16 h-16 text-destructive" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Medical Disclaimer</h1>
        <p className="text-muted-foreground">IMPORTANT MEDICAL INFORMATION - PLEASE READ CAREFULLY</p>
      </div>

      <Card className="p-8">
        <ScrollArea className="h-[800px] pr-4">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            
            <div className="bg-destructive/20 border-l-4 border-destructive rounded-r-lg p-6 mb-8">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                <h2 className="text-xl font-semibold text-destructive m-0">General Medical Disclaimer</h2>
              </div>
              <p className="text-destructive/90 font-medium">
                SenseAbled is a therapeutic gaming platform designed to support skill development and rehabilitation. However, it is important to understand the limitations and appropriate use of our Service.
              </p>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">Not a Medical Device</h2>
            </div>
            <ul className="space-y-2">
              <li>SenseAbled is not a medical device and has not been evaluated by the FDA for medical purposes</li>
              <li>Our games and exercises are supplemental tools and should not replace professional medical treatment</li>
              <li>Results are not guaranteed and may vary significantly between individuals</li>
            </ul>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
              <h3 className="text-lg font-semibold text-primary mb-3">Professional Supervision Required</h3>
              <ul className="space-y-2">
                <li>✓ Always consult with qualified healthcare professionals before starting any therapeutic program</li>
                <li>✓ Healthcare provider supervision is strongly recommended, especially for serious conditions</li>
                <li>✓ Regular professional assessment should continue regardless of platform use</li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Condition-Specific Warnings</h2>

            <div className="space-y-6">
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-medium text-yellow-700 dark:text-yellow-400">Seizure Disorders</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• While we implement seizure-safe design principles, users with epilepsy should consult neurologists before use</li>
                  <li>• Discontinue use immediately if you experience any seizure activity</li>
                  <li>• Caregivers should supervise users with known seizure disorders</li>
                </ul>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-medium text-red-700 dark:text-red-400">Cardiovascular Conditions</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Users with heart conditions should obtain medical clearance before using movement-based games</li>
                  <li>• Monitor for chest pain, shortness of breath, or dizziness during use</li>
                  <li>• Stop immediately and seek medical attention if symptoms occur</li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-blue-700 dark:text-blue-400">Mental Health Conditions</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Our platform provides coping tools but is not a substitute for professional mental health treatment</li>
                  <li>• Users experiencing suicidal thoughts should contact emergency services immediately</li>
                  <li>• Crisis resources are integrated into the platform but professional help is essential</li>
                </ul>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-medium text-green-700 dark:text-green-400">Stroke and Brain Injury</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  <li>• Rehabilitation progress should be monitored by qualified healthcare professionals</li>
                  <li>• Platform use should complement, not replace, established rehabilitation programs</li>
                  <li>• Report any concerning symptoms or regression to your healthcare team</li>
                </ul>
              </div>
            </div>

            <div className="bg-destructive/10 border-2 border-destructive rounded-lg p-6 my-8">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-6 h-6 text-destructive" />
                <h2 className="text-xl font-semibold text-destructive m-0">Emergency Situations</h2>
              </div>
              <p className="text-destructive/90 mb-4">If you experience any medical emergency while using SenseAbled:</p>
              <ol className="space-y-2 text-destructive/80">
                <li>1. <strong>Stop using the platform immediately</strong></li>
                <li>2. <strong>Contact emergency services</strong> (911 in US, appropriate emergency number in your country)</li>
                <li>3. <strong>Contact your healthcare provider</strong></li>
                <li>4. <strong>Report the incident</strong> to SenseAbled support for safety monitoring</li>
              </ol>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Reporting Adverse Events</h2>
            <p>Users and healthcare providers should report any adverse events or safety concerns to:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-8">
              <Card className="p-4">
                <h4 className="font-medium mb-2">Email</h4>
                <p className="text-sm text-muted-foreground">safety@senseabled.com</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-medium mb-2">Emergency Hotline</h4>
                <p className="text-sm text-muted-foreground">1-800-SAFE-123</p>
              </Card>
              <Card className="p-4">
                <h4 className="font-medium mb-2">Online Portal</h4>
                <p className="text-sm text-muted-foreground">Safety Reporting Portal</p>
              </Card>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Important Reminders</h2>
            <div className="bg-muted/50 border rounded-lg p-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Never ignore professional medical advice in favor of platform recommendations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Keep all scheduled appointments with your healthcare providers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Inform your healthcare team about your use of SenseAbled</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Report any changes in your condition to your healthcare provider</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Use the platform as part of a comprehensive treatment plan, not as a replacement</span>
                </li>
              </ul>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
                <p className="text-primary font-semibold mb-2">Remember:</p>
                <p className="text-sm">
                  Your health and safety are our top priorities. When in doubt, always consult with your healthcare provider.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center text-sm text-muted-foreground">
              <p>© 2024 SenseAbled. A product of <a href="https://createorigins.vercel.app/" target="_blank" rel="noopener noreferrer">Create Origins</a>.</p>
            </div>
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}