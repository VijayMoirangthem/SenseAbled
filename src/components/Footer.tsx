import { Link } from "react-router-dom";
import { Heart, Shield, Users, Accessibility } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              SenseAbled
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering individuals with therapeutic gaming solutions for enhanced quality of life and functional independence.
            </p>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
              Legal & Safety
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/legal/terms" className="text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/legal/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal/medical-disclaimer" className="text-muted-foreground hover:text-primary transition-colors">Medical Disclaimer</Link></li>
              <li><Link to="/legal/safety-guidelines" className="text-muted-foreground hover:text-primary transition-colors">Safety Guidelines</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/legal/accessibility" className="text-muted-foreground hover:text-primary transition-colors">Accessibility</Link></li>
              <li><a href="mailto:support@senseabled.com" className="text-muted-foreground hover:text-primary transition-colors">Technical Support</a></li>
            </ul>
          </div>

          {/* Accessibility */}
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <Accessibility className="w-4 h-4 text-primary" />
              Accessibility
            </h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:accessibility@senseabled.com" className="text-muted-foreground hover:text-primary transition-colors">Accessibility Support</a></li>
              <li><a href="tel:+1-800-SENSE-01" className="text-muted-foreground hover:text-primary transition-colors">TTY Support</a></li>
              <li><span className="text-muted-foreground">WCAG 2.1 AA Compliant</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © 2024 SenseAbled. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            A product of <a href="https://createorigins.vercel.app/" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary">Create Origins</a>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 p-4 bg-primary/10 rounded-lg">
          <p className="text-sm text-center text-muted-foreground">
            <strong>Emergency:</strong> If experiencing a medical emergency, call 911 or your local emergency services immediately.
            <br />
            <strong>Safety Hotline:</strong> <a href="tel:+1-800-SAFE-123" className="text-primary hover:underline">1-800-SAFE-123</a>
          </p>
        </div>
      </div>
    </footer>
  );
}