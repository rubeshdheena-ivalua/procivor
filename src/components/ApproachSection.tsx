const phases = [
  {
    number: "01",
    title: "Discover & Fit-Gap",
    description: "Comprehensive requirements gathering and fit-gap analysis against Ivalua capabilities.",
  },
  {
    number: "02",
    title: "Architecture & Design",
    description: "Solution architecture, integration design, and technical specification development.",
  },
  {
    number: "03",
    title: "Build & Integrate",
    description: "Configuration, customization, and integration development with rigorous quality controls.",
  },
  {
    number: "04",
    title: "Test & Stabilize",
    description: "End-to-end testing, UAT support, and performance optimization.",
  },
  {
    number: "05",
    title: "Go-Live & Hypercare",
    description: "Production deployment, cutover support, and intensive post-launch stabilization.",
  },
];

const ApproachSection = () => {
  return (
    <section id="approach" className="section-padding bg-primary">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4 block">
            Delivery Approach
          </span>
          <h2 className="heading-section text-primary-foreground mb-6">
            Structured Methodology.
            <br />
            <span className="text-accent">Accountable Delivery.</span>
          </h2>
          <p className="text-lg text-primary-foreground/70">
            Our delivery framework ensures predictable outcomes with clear 
            milestones and production-grade quality at every phase.
          </p>
        </div>

        {/* Phases Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-primary-foreground/10" />

          <div className="grid lg:grid-cols-5 gap-8">
            {phases.map((phase, index) => (
              <div
                key={phase.number}
                className="relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Number Circle */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-accent flex items-center justify-center mb-6">
                  <span className="text-lg font-bold text-accent-foreground">
                    {phase.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-primary-foreground mb-3">
                  {phase.title}
                </h3>
                <p className="text-sm text-primary-foreground/60 leading-relaxed">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Emphasis */}
        <div className="mt-16 pt-12 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            Every phase is architect-led with clear accountability. 
            No handoffs, no surprises — just production-grade delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;
