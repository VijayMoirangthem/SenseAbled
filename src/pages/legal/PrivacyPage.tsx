import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, Users } from "lucide-react";

export function PrivacyPage() {
  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Lock className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground">Last Updated: January 2024</p>
      </div>

      <Card className="p-8">
        <ScrollArea className="h-[800px] pr-4">
          <div className="prose prose-slate max-w-none dark:prose-invert">
            
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">1. Introduction</h2>
            </div>
            <p>
              This Privacy Policy describes how SenseAbled collects, uses, and protects your personal information when you use our therapeutic gaming platform.
            </p>

            <div className="flex items-center gap-2 mb-4 mt-8">
              <Eye className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">2. Information We Collect</h2>
            </div>
            
            <h3 className="text-lg font-medium mt-6 mb-2">2.1 Personal Information</h3>
            <ul>
              <li>Name, email address, contact information</li>
              <li>Date of birth and demographic information</li>
              <li>Healthcare provider information (if applicable)</li>
              <li>Emergency contact information</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">2.2 Health Information</h3>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 my-4">
              <p className="font-semibold text-primary mb-2">Protected Health Information (PHI):</p>
              <ul className="space-y-1">
                <li>• Therapeutic goals and progress data</li>
                <li>• Game performance metrics and analytics</li>
                <li>• Self-reported symptoms and outcomes</li>
                <li>• Healthcare provider notes and assessments</li>
              </ul>
            </div>

            <h3 className="text-lg font-medium mt-6 mb-2">2.3 Technical Information</h3>
            <ul>
              <li>Device information and operating system</li>
              <li>IP address and location data (if permitted)</li>
              <li>Usage patterns and interaction data</li>
              <li>Camera and microphone data (for therapeutic features only)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            
            <h3 className="text-lg font-medium mt-6 mb-2">3.1 Primary Uses</h3>
            <ul>
              <li>Providing personalized therapeutic interventions</li>
              <li>Tracking progress and outcomes</li>
              <li>Facilitating healthcare provider communication</li>
              <li>Improving Service functionality and effectiveness</li>
            </ul>

            <h3 className="text-lg font-medium mt-6 mb-2">3.2 Secondary Uses</h3>
            <ul>
              <li>Research and development (with appropriate consent)</li>
              <li>Quality assurance and safety monitoring</li>
              <li>Regulatory compliance and reporting</li>
              <li>Customer support and technical assistance</li>
            </ul>

            <div className="flex items-center gap-2 mb-4 mt-8">
              <Users className="w-5 h-5 text-primary" />
              <h2 className="text-xl font-semibold">4. Information Sharing and Disclosure</h2>
            </div>

            <h3 className="text-lg font-medium mt-6 mb-2">4.1 Healthcare Providers</h3>
            <p>
              We share relevant therapeutic data with your designated healthcare providers as authorized by you or as required for treatment purposes.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">4.2 Research Partners</h3>
            <p>
              With your explicit consent, anonymized data may be shared with qualified research institutions for approved research purposes.
            </p>

            <h3 className="text-lg font-medium mt-6 mb-2">4.3 Legal Requirements</h3>
            <p>
              We may disclose information when required by law, court order, or to protect the rights, property, or safety of SenseAbled, our users, or others.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">5. Data Security</h2>

            <h3 className="text-lg font-medium mt-6 mb-2">5.1 Security Measures</h3>
            <div className="bg-muted/50 border rounded-lg p-4 my-4">
              <ul className="space-y-2">
                <li>🔒 End-to-end encryption for sensitive health data</li>
                <li>🛡️ Regular security audits and penetration testing</li>
                <li>👥 Employee training on data protection protocols</li>
                <li>☁️ Secure cloud infrastructure with redundant backups</li>
              </ul>
            </div>

            <h3 className="text-lg font-medium mt-6 mb-2">5.2 Data Retention</h3>
            <ul>
              <li>Personal data retained only as long as necessary for therapeutic purposes</li>
              <li>Anonymous research data may be retained indefinitely</li>
              <li>Users may request data deletion subject to legal and safety requirements</li>
            </ul>

            <h2 className="text-xl font-semibold mt-8 mb-4">6. Your Privacy Rights</h2>

            <h3 className="text-lg font-medium mt-6 mb-2">6.1 Access and Correction</h3>
            <p>You have the right to access, update, or correct your personal information.</p>

            <h3 className="text-lg font-medium mt-6 mb-2">6.2 Data Portability</h3>
            <p>You may request a copy of your data in a portable format.</p>

            <h3 className="text-lg font-medium mt-6 mb-2">6.3 Deletion Rights</h3>
            <p>You may request deletion of your personal information, subject to legal and safety limitations.</p>

            <h3 className="text-lg font-medium mt-6 mb-2">6.4 Consent Withdrawal</h3>
            <p>You may withdraw consent for data processing, though this may limit Service functionality.</p>

            <h2 className="text-xl font-semibold mt-8 mb-4">7. Children's Privacy</h2>

            <h3 className="text-lg font-medium mt-6 mb-2">7.1 COPPA Compliance</h3>
            <p>We comply with the Children's Online Privacy Protection Act for users under 13.</p>

            <h3 className="text-lg font-medium mt-6 mb-2">7.2 Parental Consent</h3>
            <p>
              Parents/guardians must provide verifiable consent for children's accounts and may review, modify, or delete their child's information.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">8. International Data Transfers</h2>
            <p>
              If you are located outside the United States, your information may be transferred to and processed in the United States where our servers are located. 
              We ensure appropriate safeguards for international transfers.
            </p>

            <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Information</h2>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 my-4">
              <p className="font-semibold text-primary mb-2">Data Protection Officer:</p>
              <ul className="space-y-1">
                <li><strong>Email:</strong> privacy@senseabled.com</li>
                <li><strong>Phone:</strong> 1-800-PRIVACY</li>
                <li><strong>Mail:</strong> SenseAbled Privacy Office, [Address]</li>
              </ul>
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