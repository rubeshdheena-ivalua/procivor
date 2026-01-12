import { UserCheck, Target, Clock, MessageCircle } from "lucide-react";

const engagementPoints = [
  {
    icon: UserCheck,
    title: "Direct Architect-Led Delivery",
    description: "Senior Solution Architect involvement from day one through production.",
  },
  {
    icon: Target,
    title: "Fixed-Scope or Milestone-Based",
    description: "Clear deliverables with predictable outcomes and transparent pricing.",
  },
  {
    icon: Clock,
    title: "Limited Parallel Projects",
    description: "Focused attention ensures quality and prevents resource dilution.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    description: "Direct access, clear updates, and single-point accountability.",
  },
];

const EngagementSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="label-eyebrow mb-4 block">Engagement Model</span>
            <h2 className="heading-section text-primary mb-6">
              How Engagements
              <br />
              <span className="text-accent">Typically Work</span>
            </h2>
          </div>

          {/* Engagement Points Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {engagementPoints.map((point, index) => (
              <div
                key={point.title}
                className="flex gap-5 p-6 bg-card rounded-lg border border-border/50 transition-all duration-300 hover:shadow-card hover:border-accent/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">
                    {point.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EngagementSection;
