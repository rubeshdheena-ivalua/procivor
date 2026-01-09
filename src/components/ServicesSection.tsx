import { Settings, Link2, Users, FileText, Receipt, Headphones } from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "End-to-End Ivalua S2P Implementations",
    description: "Complete Source-to-Pay deployments from requirements gathering through production go-live with full architecture ownership.",
  },
  {
    icon: Link2,
    title: "Ivalua Integrations",
    description: "Seamless integration with SAP, Oracle, and third-party systems using file-based, API, and event-driven approaches.",
  },
  {
    icon: Users,
    title: "Supplier Onboarding & Vendor Portal",
    description: "Streamlined supplier registration, qualification workflows, and self-service portal configuration.",
  },
  {
    icon: FileText,
    title: "Sourcing, Contracts & P2P",
    description: "Strategic sourcing events, contract lifecycle management, and procure-to-pay process configuration.",
  },
  {
    icon: Receipt,
    title: "Invoicing, Tax & Matching",
    description: "Complex invoice processing, tax calculation integration, and multi-way matching rule configuration.",
  },
  {
    icon: Headphones,
    title: "Hypercare & Production Support",
    description: "Post go-live stabilization, issue resolution, and ongoing production support services.",
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
            Ivalua Delivery Excellence
          </h2>
          <p className="text-body-large">
            Comprehensive Ivalua implementation services designed for enterprise 
            procurement transformation. Every engagement is architect-led.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-service group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 transition-colors group-hover:bg-accent/20">
                <service.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="heading-subsection text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-body text-muted-foreground">
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
