import { ArrowRight, ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Pattern - Abstract Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="hero-grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-[hsl(237_40%_25%)] opacity-95" />

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

          {/* Subtext - Refined Copy */}
          <p className="opacity-0 animate-fade-up stagger-2 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-12 leading-relaxed">
            Valuax delivers Ivalua Source-to-Pay implementations led directly 
            by a senior Solution Architect — from fit-gap to go-live and 
            production support.
          </p>

          {/* CTAs */}
          <div className="opacity-0 animate-fade-up stagger-3 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="btn-primary group"
            >
              Talk to the Architect
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#services"
              className="btn-outline text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground hover:text-primary"
            >
              Explore Services
            </a>
          </div>

          {/* Stats Row */}
          <div className="opacity-0 animate-fade-up stagger-4 mt-20 pt-12 border-t border-primary-foreground/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">11+</div>
                <div className="text-sm text-primary-foreground/60 uppercase tracking-wider">Years Ivalua & ERP</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">L3</div>
                <div className="text-sm text-primary-foreground/60 uppercase tracking-wider">Certified Expert</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">Global</div>
                <div className="text-sm text-primary-foreground/60 uppercase tracking-wider">US • EU • APAC</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">E2E</div>
                <div className="text-sm text-primary-foreground/60 uppercase tracking-wider">Architect-Owned</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5">
        <ChevronDown className="w-6 h-6 text-primary-foreground/40 animate-bounce" />
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
