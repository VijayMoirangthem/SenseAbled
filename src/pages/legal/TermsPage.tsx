import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Shield, AlertTriangle, Users, FileText } from "lucide-react";

export function TermsPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Shield className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
        <p className="text-muted-foreground">Last Updated: January 2024</p>
      </div>

      <Card className="p-8">
        <ScrollArea className="h-[800px] pr-4">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
            </div>
            <p>
              By accessing or using the SenseAbled platform ("Service"), you agree to be bound by these Terms and Conditions ("Terms"). 
              If you do not agree to these Terms, you may not access or use our Service.
            </p>

            <div className="flex items-center gap-2 mb-4 mt-8">
              <FileText className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">2. Description of Service</h2>
            </div>
            <p>SenseAbled provides therapeutic gaming applications and exercises designed to support individuals with various sensory, cognitive, motor, and communication challenges. Our Service includes:</p>
            <ul>
              <li>Interactive therapeutic games and exercises</li>
              <li>Progress tracking and analytics</li>
              <li>Healthcare provider integration tools</li>
              <li>Educational resources and support materials</li>
            </ul>

            <div className="flex items-center gap-2 mb-4 mt-8">
              <AlertTriangle className="w-5 h-5 text-destructive" />
              <h2 className="text-xl font-semibold">3. Medical Disclaimer</h2>
            </div>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 my-4">
              <p className="font-semibold text-destructive mb-2">IMPORTANT:</p>
              <p>SenseAbled is intended for therapeutic support and skill development purposes only. It is NOT a substitute for professional medical advice, diagnosis, or treatment.</p>
              <ul className="mt-2 space-y-1">
                <li>• Always consult with qualified healthcare professionals before starting any therapeutic program</li>
                <li>• SenseAbled does not provide medical advice or diagnosis</li>
                <li>• Results may vary and are not guaranteed</li>
                <li>• Users with serious medical conditions should obtain medical clearance before use</li>
              </ul>
            </div>

            <div className="flex items-center gap-2 mb-4 mt-8">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">4. User Eligibility and Registration</h2>
            </div>
            <h3 className="text-lg font-medium mt-6 mb-2">4.1 Age Requirements</h3>
            <ul>
              <li>Users under 18 require parent/guardian consent</li>
              <li>Users under 13 are subject to additional COPPA protections</li>
              <li>Healthcare providers must be licensed professionals</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">4.2 Account Security</h3>
            <ul>
              <li>Users are responsible for maintaining account confidentiality</li>
              <li>Multi-factor authentication is required for healthcare provider accounts</li>
              <li>Suspected unauthorized access must be reported immediately</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Permitted Use and Restrictions</h2>
            <h3 className="text-lg font-medium mt-6 mb-2">5.1 Permitted Uses</h3>
            <ul>
              <li>Personal therapeutic and educational purposes</li>
              <li>Clinical use under healthcare provider supervision</li>
              <li>Research purposes with appropriate institutional approval</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">5.2 Prohibited Uses</h3>
            <ul>
              <li>Commercial distribution or resale of content</li>
              <li>Reverse engineering or attempting to access source code</li>
              <li>Creating derivative works without authorization</li>
              <li>Using the Service for any illegal or unauthorized purpose</li>
              <li>Circumventing security measures or access controls</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Intellectual Property Rights</h2>
            <h3 className="text-lg font-medium mt-6 mb-2">6.1 SenseAbled Content</h3>
            <p>
              All content, including but not limited to software, games, exercises, graphics, text, and audio, is the exclusive property of SenseAbled 
              and is protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">6.2 User-Generated Content</h3>
            <p>
              By submitting content to our Service, you grant SenseAbled a non-exclusive, worldwide, royalty-free license to use, 
              modify, and distribute such content for Service improvement purposes.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Healthcare Provider Responsibilities</h2>
            <p>Healthcare providers using SenseAbled agree to:</p>
            <ul>
              <li>Maintain appropriate professional licensing</li>
              <li>Supervise patient use according to clinical judgment</li>
              <li>Report adverse events or safety concerns</li>
              <li>Comply with applicable healthcare regulations</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. Limitation of Liability</h2>
            <div className="bg-muted/50 border rounded-lg p-4 my-4">
              <p className="text-sm">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SENSEABLED SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF 
                OR RELATING TO YOUR USE OF THE SERVICE.
              </p>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Emergency Procedures</h2>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 my-4">
              <p className="font-semibold text-destructive mb-2">Emergency Contacts:</p>
              <ul className="space-y-1">
                <li><strong>Emergency Services:</strong> 911 (US) or local emergency number</li>
                <li><strong>Safety Hotline:</strong> 1-800-SAFE-123</li>
                <li><strong>Safety Email:</strong> safety@senseabled.com</li>
              </ul>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">10. Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="font-medium mb-2">General Support</h4>
                <ul className="text-sm space-y-1">
                  <li>Email: info@senseabled.com</li>
                  <li>Phone: 1-800-SENSE-01</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Safety & Privacy</h4>
                <ul className="text-sm space-y-1">
                  <li>Safety: safety@senseabled.com</li>
                  <li>Privacy: privacy@senseabled.com</li>
                </ul>
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