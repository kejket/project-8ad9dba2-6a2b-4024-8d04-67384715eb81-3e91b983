import { Factory, Droplets, Flame, Cog, Zap, Building2 } from "lucide-react";

const industries = [
  { id: "industry-manufacturing", name: "제조업", icon: Factory },
  { id: "industry-environment", name: "환경·수질·대기", icon: Droplets },
  { id: "industry-steel", name: "철강·금속", icon: Flame },
  { id: "industry-automotive", name: "자동차", icon: Cog },
  { id: "industry-energy", name: "에너지·발전", icon: Zap },
  { id: "industry-construction", name: "건설·인프라", icon: Building2 },
];

const IndustryQuickNav = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-12 bg-secondary/30 border-b border-border">
      <div className="container-narrow section-padding">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => scrollToSection(industry.id)}
              className="group flex items-center gap-2 px-4 py-2.5 rounded-full bg-background border border-border hover:border-industrial/50 hover:bg-industrial/5 transition-all duration-200"
            >
              <industry.icon size={18} className="text-industrial" />
              <span className="text-sm font-medium text-foreground group-hover:text-industrial transition-colors">
                {industry.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustryQuickNav;
