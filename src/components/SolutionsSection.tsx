import { Link } from "react-router-dom";
import { Activity, Cpu, BarChart3, ArrowRight } from "lucide-react";

const coreSolutions = [
  {
    icon: Activity,
    title: "설비 진동 모니터링",
    description: "설비 이상 징후를 조기에 감지하여 예기치 않은 가동 중단과 수리 비용을 줄입니다.",
    anchor: "vibration-monitoring",
    features: ["실시간 진동 분석", "이상 패턴 감지", "정비 알림"],
  },
  {
    icon: Cpu,
    title: "디지털 트윈",
    description: "현장 데이터를 기반으로 설비 상태를 시각화하고, 운영 판단에 필요한 정보를 제공합니다.",
    anchor: "digital-twin",
    features: ["상태 시각화", "시뮬레이션 분석", "운영 판단 지원"],
  },
  {
    icon: BarChart3,
    title: "데이터 분석 플랫폼",
    description: "분산된 현장 데이터를 통합하여 일관된 기준으로 분석하고 의사결정을 돕습니다.",
    anchor: "data-platform",
    features: ["대시보드 제공", "리포트 자동화", "트렌드 분석"],
  },
];

const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-industrial mb-4 tracking-wider">SOLUTIONS</span>
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
              to={`/solutions#${solution.anchor}`}
              className="group bg-card rounded-xl border border-border p-6 hover:shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-industrial/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-industrial/10 transition-colors">
                <solution.icon size={24} className="text-industrial" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center justify-between">
                {solution.title}
                <ArrowRight size={18} className="text-muted-foreground group-hover:text-industrial group-hover:translate-x-1 transition-all" />
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
            className="inline-flex items-center gap-2 text-industrial hover:text-industrial-dark font-medium transition-colors"
          >
            모든 솔루션 보기
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
