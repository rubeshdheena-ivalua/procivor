import { CheckCircle2, Award, Globe, Code2, Building2, UserCheck } from "lucide-react";

const credentials = [
  {
    icon: Award,
    title: "11+ Years Direct Ivalua & ERP Delivery",
    description: "Deep hands-on experience across procurement technology implementations.",
  },
  {
    icon: CheckCircle2,
    title: "Level-3 Certified: Integration, S2C & Invoicing",
    description: "Advanced Ivalua certification across critical platform modules.",
  },
  {
    icon: Globe,
    title: "Global Delivery: US, Europe & Australia",
    description: "Proven execution across diverse markets and enterprise environments.",
  },
  {
    icon: Code2,
    title: "Deep Technical Expertise",
    description: "ETL, EAI, API, SQL, REST/SOAP — production-ready integration skills.",
  },
  {
    icon: Building2,
    title: "Architecture Ownership: FIT-GAP to Hypercare",
    description: "Full accountability across the entire delivery lifecycle.",
  },
  {
    icon: UserCheck,
    title: "Single-Point Accountability",
    description: "No handoffs, no junior dilution — consistent architect involvement.",
  },
];

const WhyValuaxSection = () => {
  return (
    <section id="why-valuax" className="section-padding bg-muted">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <span className="label-eyebrow mb-4 block">Why Valuax</span>
            <h2 className="heading-section text-primary mb-6">
              Execution Credibility
              <br />
              <span className="text-accent">That Delivers</span>
            </h2>
            <p className="text-body-large mb-8">
              Valuax brings architect-level expertise to every engagement. 
              We don't just consult — we own the technical delivery from 
              design to production.
            </p>
            <div className="divider-accent mb-8" />
            <p className="text-body">
              Our approach eliminates the gap between strategy and implementation. 
              When you engage Valuax, you get hands-on expertise — not handoffs to junior resources.
            </p>
          </div>

          {/* Right Credentials */}
          <div className="space-y-4">
            {credentials.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 p-6 bg-card rounded-lg border border-border/50 transition-all duration-300 hover:shadow-card hover:border-accent/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
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

export default WhyValuaxSection;
