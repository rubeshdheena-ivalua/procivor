import { Server, Database, Shield, Workflow } from "lucide-react";

const expertiseAreas = [
  {
    icon: Server,
    title: "SAP S/4 & Oracle Integration",
    items: ["SAP S/4HANA & ECC", "Oracle EBS & Fusion", "JD Edwards & PeopleSoft"],
  },
  {
    icon: Database,
    title: "Integration Patterns",
    items: ["File-based (SFTP, AS2)", "API-based (REST/SOAP)", "Event-driven messaging"],
  },
  {
    icon: Shield,
    title: "Enterprise Architecture",
    items: ["Secure data flows", "Audit-ready designs", "Scalable patterns"],
  },
  {
    icon: Workflow,
    title: "Ivalua Platform Mastery",
    items: ["EAI Configuration", "WebConfig expertise", "Custom extensions"],
  },
];

const ExpertiseSection = () => {
  return (
    <section id="expertise" className="section-padding bg-background">
      <div className="section-container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="label-eyebrow mb-4 block">Integration Expertise</span>
          <h2 className="heading-section text-primary mb-6">
            Technical Depth That
            <br />
            <span className="text-accent">Drives Results</span>
          </h2>
          <p className="text-body-large">
            Deep expertise in enterprise integration architectures, 
            ensuring your Ivalua platform connects seamlessly with 
            existing systems.
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className="p-8 bg-card rounded-lg border border-border/50 transition-all duration-300 hover:shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-primary flex items-center justify-center">
                  <area.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-4">
                    {area.title}
                  </h3>
                  <ul className="space-y-2">
                    {area.items.map((item) => (
                      <li 
                        key={item}
                        className="flex items-center gap-2 text-muted-foreground"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Highlight */}
        <div className="mt-16 p-8 bg-muted rounded-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-2">ETL / EAI</div>
              <p className="text-sm text-muted-foreground">Data Integration</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">REST / SOAP</div>
              <p className="text-sm text-muted-foreground">API Protocols</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">SQL / PL-SQL</div>
              <p className="text-sm text-muted-foreground">Data Management</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
