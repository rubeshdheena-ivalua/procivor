import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Valuax</h3>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Enterprise Ivalua Source-to-Pay implementations. 
              Architect-led, execution-focused consulting.
            </p>
            <a
              href="https://www.linkedin.com/in/rubesh-kumar-dheenadayalan-54372575/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li><a href="#services" className="hover:text-accent transition-colors">E2E Implementation</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Integration Build</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Solution Architecture</a></li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/60">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#approach" className="hover:text-accent transition-colors">Approach</a></li>
              <li><a href="#expertise" className="hover:text-accent transition-colors">Expertise</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} Valuax. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/50">
            Ivalua Implementation & Integration Consulting
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
