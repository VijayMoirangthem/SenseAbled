import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Accessibility, Eye, Ear, Hand, Brain } from "lucide-react";

export function AccessibilityPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Accessibility className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Accessibility Statement</h1>
        <p className="text-muted-foreground">Our Commitment to Digital Accessibility</p>
      </div>

      <Card className="p-8">
        <ScrollArea className="h-[800px] pr-4">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
              <h2 className="text-xl font-semibold text-primary mb-3">Our Commitment to Accessibility</h2>
              <p>
                SenseAbled is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.
              </p>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Conformance Status</h2>

            <h3 className="text-lg font-medium mt-6 mb-2">WCAG 2.1 Level AA Compliance</h3>
            <p>Our platform conforms to Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards.</p>

            <h3 className="text-lg font-medium mt-6 mb-2">Platform-Specific Accessibility</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <Card className="p-4">
                <h4 className="font-medium mb-2">iOS Support</h4>
                <ul className="text-sm space-y-1">
                  <li>• VoiceOver compatibility</li>
                  <li>• Switch Control support</li>
                  <li>• Guided Access integration</li>
                </ul>
              </Card>
              <Card className="p-4">
                <h4 className="font-medium mb-2">Android Support</h4>
                <ul className="text-sm space-y-1">
                  <li>• TalkBack compatibility</li>
                  <li>• Select to Speak support</li>
                  <li>• Voice Access integration</li>
                </ul>
              </Card>
              <Card className="p-4">
                <h4 className="font-medium mb-2">Windows Support</h4>
                <ul className="text-sm space-y-1">
                  <li>• Narrator compatibility</li>
                  <li>• Speech Recognition support</li>
                  <li>• High Contrast modes</li>
                </ul>
              </Card>
              <Card className="p-4">
                <h4 className="font-medium mb-2">Web Browsers</h4>
                <ul className="text-sm space-y-1">
                  <li>• Screen reader compatible</li>
                  <li>• Keyboard navigation</li>
                  <li>• Cross-browser support</li>
                </ul>
              </Card>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Accessibility Features</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Eye className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Visual Accessibility</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• High contrast color schemes</li>
                    <li>• Adjustable font sizes (12pt to 24pt)</li>
                    <li>• Color-blind friendly palettes</li>
                    <li>• Zoom functionality up to 400%</li>
                    <li>• Alternative text for all images</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Ear className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Auditory Accessibility</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Closed captions for all audio content</li>
                    <li>• Visual indicators for audio cues</li>
                    <li>• Adjustable volume controls</li>
                    <li>• Sound-free interaction options</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Hand className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Motor Accessibility</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Keyboard navigation for all functions</li>
                    <li>• Adjustable interaction timing</li>
                    <li>• Switch navigation support</li>
                    <li>• Eye-gaze control integration</li>
                    <li>• Voice control compatibility</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Brain className="w-8 h-8 text-primary mt-1" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Cognitive Accessibility</h3>
                  <ul className="space-y-1 text-sm">
                    <li>• Clear, simple language</li>
                    <li>• Consistent navigation patterns</li>
                    <li>• Progress indicators and feedback</li>
                    <li>• Customizable difficulty levels</li>
                    <li>• Distraction-free interface options</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Assistive Technology Support</h2>

            <h3 className="text-lg font-medium mt-6 mb-2">Compatible Technologies</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="font-medium mb-2">Screen Readers</h4>
                <ul className="text-sm space-y-1">
                  <li>• JAWS (Windows)</li>
                  <li>• NVDA (Windows)</li>
                  <li>• VoiceOver (macOS/iOS)</li>
                  <li>• TalkBack (Android)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Voice Recognition</h4>
                <ul className="text-sm space-y-1">
                  <li>• Dragon NaturallySpeaking</li>
                  <li>• Windows Speech Recognition</li>
                  <li>• Voice Control (iOS/macOS)</li>
                  <li>• Voice Access (Android)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Switch Access</h4>
                <ul className="text-sm space-y-1">
                  <li>• Single switch scanning</li>
                  <li>• Two-switch scanning</li>
                  <li>• Joystick navigation</li>
                  <li>• Head tracking systems</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Eye-Gaze Systems</h4>
                <ul className="text-sm space-y-1">
                  <li>• Tobii Eye Trackers</li>
                  <li>• Eye Tribe devices</li>
                  <li>• PRC eye-gaze systems</li>
                  <li>• Custom eye tracking solutions</li>
                </ul>
              </div>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Testing and Validation</h2>

            <h3 className="text-lg font-medium mt-6 mb-2">Regular Accessibility Audits</h3>
            <ul className="space-y-2">
              <li>Annual third-party accessibility audits</li>
              <li>User testing with disability community</li>
              <li>Automated accessibility testing in development pipeline</li>
              <li>Healthcare provider feedback integration</li>
            </ul>

            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 my-8">
              <h2 className="text-xl font-semibold text-primary mb-4">Accessibility Support</h2>
              
              <h3 className="text-lg font-medium mb-2">Getting Help</h3>
              <p className="mb-4">If you encounter accessibility barriers while using SenseAbled:</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Contact Methods</h4>
                  <ul className="text-sm space-y-1">
                    <li>📧 Email: accessibility@senseabled.com</li>
                    <li>📞 Phone: 1-800-ACCESS-1 (TTY available)</li>
                    <li>💬 Live chat with accessibility specialists</li>
                    <li>📹 Video relay services accepted</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Response Commitment</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ Response within 48 hours</li>
                    <li>✓ Resolution within 10 business days</li>
                    <li>✓ Escalation for complex issues</li>
                    <li>✓ Follow-up to ensure satisfaction</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-xl font-semibold mt-8 mb-4">Ongoing Improvement</h2>
            <p>We regularly review and update our accessibility features based on:</p>
            <ul className="mt-4 space-y-2">
              <li>User feedback and suggestions</li>
              <li>Emerging accessibility technologies</li>
              <li>Updated accessibility guidelines</li>
              <li>Healthcare provider recommendations</li>
            </ul>

            <div className="bg-muted/50 border rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold mb-3">Feedback Welcomed</h3>
              <p className="text-sm">
                We welcome feedback on the accessibility of SenseAbled. Please let us know if you encounter accessibility barriers or have suggestions for improvement. 
                Your input helps us create a more inclusive platform for everyone.
              </p>
            </div>

            <div className="mt-12 text-center text-sm text-muted-foreground">
              <p>© 2024 SenseAbled. A product of Create Origins.</p>
              <p className="mt-2">Committed to accessibility, inclusion, and empowerment through technology.</p>
            </div>
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
}