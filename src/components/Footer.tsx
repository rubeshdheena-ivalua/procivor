import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">Valuax</h3>
            <p className="text-muted-foreground max-w-md mb-6">
              Enterprise Ivalua Source-to-Pay implementations. 
              Architect-led, execution-focused consulting.
            </p>
            <a
              href="https://www.linkedin.com/in/rubesh-kumar-dheenadayalan-54372575/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">S2P Implementations</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Ivalua Integrations</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Supplier Onboarding</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Hypercare Support</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#approach" className="hover:text-primary transition-colors">Approach</a></li>
              <li><a href="#expertise" className="hover:text-primary transition-colors">Expertise</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Valuax. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Ivalua Implementation & Integration Consulting
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
