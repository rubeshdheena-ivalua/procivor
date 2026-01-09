import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-navy-light opacity-90" />

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="opacity-0 animate-fade-up mb-8">
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-semibold uppercase tracking-[0.2em]">
              Ivalua Implementation Partner
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="opacity-0 animate-fade-up stagger-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-[1.1] mb-8">
            We deliver Ivalua
            <br />
            <span className="text-accent">Projects.</span>
          </h1>

          {/* Subtext */}
          <p className="opacity-0 animate-fade-up stagger-2 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mb-12 leading-relaxed">
            Valuax delivers end-to-end Ivalua Source-to-Pay implementations 
            led by an architect-driven delivery model. Enterprise-grade execution 
            without guesswork.
          </p>

          {/* CTAs */}
          <div className="opacity-0 animate-fade-up stagger-3 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="btn-primary group"
            >
              Talk to an Ivalua Architect
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="btn-outline text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary"
            >
              Explore Services
            </a>
          </div>

          {/* Stats */}
          <div className="opacity-0 animate-fade-up stagger-4 mt-20 pt-12 border-t border-primary-foreground/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">11+</div>
                <div className="text-sm text-primary-foreground/60 uppercase tracking-wider">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">L3</div>
                <div className="text-sm text-primary-foreground/60 uppercase tracking-wider">Certified</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">Global</div>
                <div className="text-sm text-primary-foreground/60 uppercase tracking-wider">Delivery</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-1">E2E</div>
                <div className="text-sm text-primary-foreground/60 uppercase tracking-wider">Ownership</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
