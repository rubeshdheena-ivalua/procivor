import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="cta-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-6 block">
            Start a Conversation
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Need an Ivalua expert who
            <br />
            <span className="text-accent">owns delivery end to end?</span>
          </h2>
          <p className="text-lg text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Let's discuss your Ivalua implementation challenges. 
            Architect-led conversations, not sales pitches.
          </p>

          <a
            href="mailto:contact@valuax.com"
            className="btn-primary group text-base"
          >
            Talk to the Architect
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="mt-8 text-sm text-primary-foreground/50">
            Direct response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
