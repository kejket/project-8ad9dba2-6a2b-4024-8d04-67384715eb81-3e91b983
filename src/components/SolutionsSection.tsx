import { Link } from "react-router-dom";
import { Activity, Cpu, BarChart3, ArrowRight } from "lucide-react";

const coreSolutions = [
  {
    icon: Activity,
    title: "설비 이상 조기 감지",
    description: "설비 상태 변화를 지속적으로 감지해 이상 징후를 조기에 인지하고, 계획되지 않은 정지와 손실을 줄일 수 있도록 지원합니다.",
    features: ["상태 변화 감지", "조기 경보", "손실 예방"],
    link: "/solutions#challenges",
  },
  {
    icon: Cpu,
    title: "운영 판단을 돕는 디지털 트윈",
    description: "현장 데이터를 기반으로 운영 변경의 영향을 사전에 검토해, 경험에 의존하던 판단을 데이터 기반으로 보조합니다.",
    features: ["사전 영향 검토", "데이터 기반 판단", "운영 최적화"],
    link: "/solutions#digital-twin",
  },
  {
    icon: BarChart3,
    title: "현장 데이터를 한눈에 관리",
    description: "분산된 설비·환경 데이터를 통합해 현장 상태를 직관적으로 파악하고, 운영 기준과 개선 활동을 지속할 수 있도록 지원합니다.",
    features: ["데이터 통합", "직관적 현황 파악", "지속적 개선"],
    link: "/solutions#core-features",
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-industrial mb-4 tracking-wider" translate="no">SOLUTIONS</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-6 leading-tight">
            <span className="block sm:inline">현장을 이해하는</span>{" "}
            <span className="block sm:inline">센싱 솔루션</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            sentia는 산업 현장의 미세한 변화를 감지하고 해석하여
            정확한 판단과 의사결정을 지원하는 맞춤형 솔루션을 제공합니다.
          </p>
        </div>

        {/* Core Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {coreSolutions.map((solution, index) => (
            <Link
              key={solution.title}
              to={solution.link}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-industrial/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-industrial/10 transition-colors">
                <solution.icon size={24} className="text-industrial" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {solution.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {solution.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {solution.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* View All Solutions Link */}
        <div className="text-center">
          <Link
            to="/solutions"
            className="group inline-flex items-center gap-2 text-industrial hover:text-industrial-dark font-medium transition-all duration-300 hover:gap-3"
          >
            <span className="relative">
            모든 솔루션 보기
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-industrial-dark group-hover:w-full transition-all duration-300"></span>
            </span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
