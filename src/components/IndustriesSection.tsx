import { Factory, Droplets, Flame, Cog, Zap, Building2 } from "lucide-react";

const industries = [
  {
    icon: Factory,
    name: "제조업",
    description: "회전 설비와 생산 라인에서 발생하는 진동, 열, 마모 패턴을 측정하여 비계획 정지를 줄이고 정비 시점을 판단할 수 있는 근거를 제공합니다.",
  },
  {
    icon: Droplets,
    name: "화학/석유화학",
    description: "고압·부식성 환경에서 누출, 압력 이상, 배관 상태를 조기에 파악합니다. 육안으로 확인하기 어려운 위험 요소에 대한 가시성을 확보합니다.",
  },
  {
    icon: Flame,
    name: "철강/금속",
    description: "1,000도 이상의 고온 공정에서 내화물 상태와 열응력 변화를 모니터링합니다. 극한 환경에 적합한 센싱 방식이 요구됩니다.",
  },
  {
    icon: Cog,
    name: "자동차",
    description: "고속 생산 라인에서 공정 편차와 조립 상태를 실시간으로 파악합니다. 품질 일관성과 생산 효율을 동시에 확보해야 하는 환경입니다.",
  },
  {
    icon: Zap,
    name: "에너지/발전",
    description: "터빈, 발전기 등 핵심 설비의 진동 시그니처와 열 분포를 연속 관측합니다. 무중단 운전이 요구되는 환경에서 신뢰성 있는 상태 파악이 필수입니다.",
  },
  {
    icon: Building2,
    name: "건설/인프라",
    description: "교량, 터널, 건축 구조물의 변형, 변위, 열화 상태를 장기적으로 추적합니다. 공공 안전과 구조적 건전성을 위한 지속적인 관찰이 필요합니다.",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24 bg-background">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-industrial mb-4 tracking-wider">INDUSTRIES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-6 leading-tight">
            <span className="block sm:inline">다양한 산업 분야에</span>{" "}
            <span className="block sm:inline">적용</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            제조, 화학, 에너지, 인프라 등 각 산업은 고유한 설비 환경과 안전 요구사항을 가집니다.
            <br />
            sentia는 이러한 산업별 조건에 맞춘 모니터링 구성을 제공합니다.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="group flex items-start gap-4 p-6 rounded-xl border border-border bg-card hover:border-industrial/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-industrial/10 transition-colors">
                <industry.icon size={24} className="text-industrial" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {industry.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
