import { Settings, Code, Cpu, Layers, RefreshCw, Zap, TrendingUp } from "lucide-react";
import dataArchitectureImage from "@/assets/data-architecture.jpg";

const capabilities = [
  {
    icon: Settings,
    title: "현장 맞춤형 최적화 설계",
    description: "산업 현장의 구체적인 운영 조건과 요구 사항을 분석하여 최적화된 시스템을 설계합니다."
  },
  {
    icon: Code,
    title: "최신 소프트웨어 기술 적용",
    description: "검증된 최신 소프트웨어 기술을 적용하여 안정성과 성능을 확보합니다."
  },
  {
    icon: Cpu,
    title: "자동 제어 시스템 설계",
    description: "센서 데이터를 기반으로 설비의 자동 제어 로직을 구현하고 운영합니다."
  },
  {
    icon: Layers,
    title: "설계 확장 및 변경 유연성",
    description: "시스템 구조의 모듈화를 통해 향후 확장과 변경에 유연하게 대응합니다."
  },
  {
    icon: RefreshCw,
    title: "프로그램 수정 및 업데이트 용이성",
    description: "운영 중 발생하는 요구 사항 변화에 신속하게 대응할 수 있도록 설계합니다."
  },
  {
    icon: Zap,
    title: "다양한 산업 환경 신속 대응",
    description: "제조, 에너지, 물류 등 다양한 산업 분야의 특성에 맞춰 빠르게 적용합니다."
  },
  {
    icon: TrendingUp,
    title: "운영 효율성 향상 지원",
    description: "데이터 분석을 통해 운영 효율을 개선하고 의사결정을 지원합니다."
  }
];

const SoftwareTechnologySection = () => {
  return (
    <section id="software-technology" className="py-20 gradient-subtle">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="max-w-6xl mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Image */}
            <div className="w-full lg:w-2/5 flex-shrink-0">
              <img 
                src={dataArchitectureImage} 
                alt="Data Architecture" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="flex-1 lg:w-3/5">
              <span className="inline-block text-sm font-medium text-industrial mb-4 tracking-wider">
                <span translate="no">SOFTWARE TECHNOLOGY</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-6 leading-tight">
                <span className="block">소프트웨어 기술 및</span>
                <span className="block">시스템 개발</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                sentia의 소프트웨어 기술은 산업 현장의 운영 조건과 요구 사항을 반영하여 
                유연하고 안정적인 시스템 구성을 지원합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div 
              key={capability.title} 
              className="bg-card rounded-xl border border-border p-6 shadow-card hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-industrial/10 flex items-center justify-center mb-5">
                <capability.icon className="w-6 h-6 text-industrial" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {capability.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {capability.description}
              </p>
            </div>
          ))}
        </div>

        {/* System Architecture Visual */}
        <div className="mt-16 bg-card rounded-xl border border-border p-8 lg:p-10">
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">
            시스템 개발 프로세스
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            {[
              { step: "01", label: "요구 분석", desc: "현장 조건 파악" },
              { step: "02", label: "설계", desc: "시스템 구조 설계" },
              { step: "03", label: "개발", desc: "모듈별 개발" },
              { step: "04", label: "테스트", desc: "통합 검증" },
              { step: "05", label: "배포", desc: "현장 적용" },
            ].map((item, index, arr) => (
              <div key={item.step} className="flex items-center gap-4 lg:gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-navy flex items-center justify-center mb-3 mx-auto">
                    <span className="text-primary-foreground font-bold">{item.step}</span>
                  </div>
                  <h4 className="font-semibold text-foreground text-sm">{item.label}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{item.desc}</p>
                </div>
                {index < arr.length - 1 && (
                  <div className="hidden lg:block w-12 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoftwareTechnologySection;
