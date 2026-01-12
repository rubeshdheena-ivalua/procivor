import { Linkedin, ExternalLink } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual / Abstract */}
          <div className="relative">
            <div className="aspect-[4/5] bg-primary rounded-lg overflow-hidden relative">
              {/* Abstract geometric background */}
              <div className="absolute inset-0 opacity-[0.08]">
                <svg className="w-full h-full" viewBox="0 0 400 500" preserveAspectRatio="none">
                  <defs>
                    <pattern id="about-dots" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="currentColor" className="text-white"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#about-dots)" />
                </svg>
              </div>
              
              {/* Accent geometric shapes */}
              <div className="absolute top-8 right-8 w-24 h-24 border-2 border-accent/20 rounded-full" />
              <div className="absolute top-16 right-16 w-16 h-16 bg-accent/10 rounded-full" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-10">
                <div className="space-y-4">
                  <div className="w-16 h-1 bg-accent rounded-full" />
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">
                    Rubesh Kumar
                  </h3>
                  <p className="text-primary-foreground/70 text-lg">
                    Founder & Solution Architect
                  </p>
                </div>
              </div>
            </div>

            {/* Accent decoration */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="label-eyebrow mb-4 block">About the Architect</span>
            <h2 className="heading-section text-primary mb-6">
              Architect-Led.
              <br />
              <span className="text-accent">Delivery-Focused.</span>
            </h2>
            
            <div className="space-y-6 text-body">
              <p className="text-lg text-foreground">
                I'm Rubesh Kumar, an Ivalua Solution Architect with 11+ years 
                of hands-on global delivery experience.
              </p>
              <p>
                Background includes tenures at Deloitte, KPMG, and Valantic — 
                leading teams, designing complex integration architectures, and 
                resolving critical production issues for global enterprises.
              </p>
              <p>
                I design systems, build integrations, lead delivery, and resolve 
                production issues. Personally involved from design through stabilization.
              </p>
            </div>

            {/* Credentials Tags */}
            <div className="flex flex-wrap gap-2 mt-8">
              {[
                "Ivalua L3 Certified", 
                "11+ Years Experience", 
                "US • Europe • Australia", 
                "Deloitte • KPMG • Valantic"
              ].map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 bg-primary/5 text-primary text-sm font-medium rounded-full border border-primary/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/in/rubesh-kumar-dheenadayalan-54372575/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-accent/10 text-accent font-medium rounded-lg hover:bg-accent/20 transition-colors group"
            >
              <Linkedin className="w-5 h-5" />
              View LinkedIn Profile
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
