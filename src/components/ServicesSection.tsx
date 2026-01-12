import { Settings, Link2, Compass } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "End-to-End Ivalua Implementation",
    description: "FIT-GAP, configuration, testing, go-live, and stabilization — personally owned by the Solution Architect.",
  },
  {
    icon: Link2,
    title: "Ivalua Integration Build & System Connectivity",
    description: "SAP S/4, Oracle, third-party systems using EAI, APIs, files, REST/SOAP — production-grade and audit-ready.",
  },
  {
    icon: Compass,
    title: "Solution Design & Architecture",
    description: "Scalable Ivalua architecture, integration blueprints, and design decisions optimized for long-term operability, not just go-live.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="label-eyebrow mb-4 block">What We Do</span>
          <h2 className="heading-section text-primary mb-6">
            Focused Ivalua Delivery
          </h2>
          <p className="text-body-large">
            Focused Ivalua delivery services, architect-owned end to end, 
            with selective specialist support only when required.
          </p>
        </div>

        {/* Services Grid - Three Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-8 transition-colors group-hover:bg-accent/20">
                <service.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">
                {service.title}
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
