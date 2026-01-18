import { Factory, Droplets, Flame, Cog, Zap, Building2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  {
    icon: Factory,
    name: "제조업",
    anchor: "industry-manufacturing",
    description: "설비 상태를 지속적으로 모니터링하여 이상 징후를 조기에 파악할 수 있도록 지원합니다.",
  },
  {
    icon: Droplets,
    name: "환경/수질·대기",
    anchor: "industry-environment",
    description: "환경 데이터를 안정적으로 수집하여 변화 추이를 파악하고 관리 기준 수립을 돕습니다.",
  },
  {
    icon: Flame,
    name: "철강/금속",
    anchor: "industry-steel",
    description: "고온·고부하 환경에서도 설비 상태를 모니터링해 현장 대응 판단을 지원합니다.",
  },
  {
    icon: Cog,
    name: "자동차",
    anchor: "industry-automotive",
    description: "생산 공정과 설비 상태 데이터를 기반으로 공정 안정성 확보를 돕습니다.",
  },
  {
    icon: Zap,
    name: "에너지/발전",
    anchor: "industry-energy",
    description: "발전 설비의 운전 상태를 지속적으로 확인해 운영 효율과 안전 관리에 활용합니다.",
  },
  {
    icon: Building2,
    name: "건설/인프라",
    anchor: "industry-construction",
    description: "현장 상태 데이터를 수집·분석하여 점검과 유지관리 의사결정을 지원합니다.",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-industrial mb-4 tracking-wider" translate="no">INDUSTRIES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-6 leading-tight">
            다양한 산업 현장에 적용
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Sentia의 기술은 다양한 산업 현장에서 운영 판단을 가능하게 합니다.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              to={`/industry#${industry.anchor}`}
              className="group flex flex-col p-6 rounded-xl border border-border bg-card hover:border-industrial/30 hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-industrial/10 transition-colors">
                  <industry.icon size={24} className="text-industrial" />
                </div>
                <h3 className="text-lg font-semibold text-foreground pt-2">
                  {industry.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 flex-grow">
                {industry.description}
              </p>
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-industrial group-hover:text-industrial/80 transition-colors">
                산업별 적용 사례 보기
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
