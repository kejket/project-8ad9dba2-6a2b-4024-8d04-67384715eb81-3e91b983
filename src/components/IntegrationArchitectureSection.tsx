import { Cpu, Wifi, Server, Monitor, ArrowRight, Database, Shield } from "lucide-react";

const architectureLayers = [
  {
    id: "sensors",
    icon: Cpu,
    title: "센서 모듈",
    subtitle: "데이터 수집",
    description: "현장 설비에 설치된 센서 모듈이 물리적 상태를 측정합니다.",
    color: "bg-steel"
  },
  {
    id: "gateway",
    icon: Wifi,
    title: "게이트웨이",
    subtitle: "데이터 전송",
    description: "수집된 데이터를 유/무선 통신으로 안전하게 전송합니다.",
    color: "bg-industrial"
  },
  {
    id: "platform",
    icon: Server,
    title: "소프트웨어 플랫폼",
    subtitle: "데이터 처리",
    description: "클라우드 또는 온프레미스 환경에서 데이터를 처리·저장합니다.",
    color: "bg-navy"
  },
  {
    id: "monitoring",
    icon: Monitor,
    title: "모니터링 & 제어",
    subtitle: "시각화 및 운영",
    description: "대시보드를 통한 실시간 모니터링과 제어 기능을 제공합니다.",
    color: "bg-industrial"
  }
];

const integrationFeatures = [
  {
    icon: Database,
    title: "실시간 데이터 연동",
    description: "센서에서 수집된 데이터가 소프트웨어 플랫폼에 실시간으로 연동됩니다."
  },
  {
    icon: Monitor,
    title: "통합 모니터링 환경",
    description: "하드웨어 상태와 데이터 분석 결과를 단일 화면에서 확인할 수 있습니다."
  },
  {
    icon: Shield,
    title: "모듈형 확장 구조",
    description: "새로운 센서나 기능 추가 시 기존 시스템에 영향 없이 확장 가능합니다."
  }
];

const IntegrationArchitectureSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <span className="inline-block text-sm font-medium text-industrial mb-4 tracking-wider">
            SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-6 leading-tight">
            <span className="block">하드웨어와 소프트웨어의</span>
            <span className="block">통합 구조</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            센서 모듈에서 수집된 데이터는 소프트웨어 플랫폼과 유기적으로 연동되어 
            실시간 모니터링과 제어 환경을 구성합니다.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-card rounded-xl border border-border p-8 lg:p-10 mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-8 text-center">
            데이터 흐름 아키텍처
          </h3>
          
          {/* Desktop View */}
          <div className="hidden lg:flex items-center justify-between gap-4">
            {architectureLayers.map((layer, index) => (
              <div key={layer.id} className="flex items-center gap-4 flex-1">
                <div className="flex-1 text-center">
                  <div className={`w-16 h-16 rounded-xl ${layer.color} flex items-center justify-center mb-4 mx-auto`}>
                    <layer.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{layer.title}</h4>
                  <p className="text-sm text-industrial font-medium mb-2">{layer.subtitle}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {layer.description}
                  </p>
                </div>
                {index < architectureLayers.length - 1 && (
                  <div className="flex items-center">
                    <div className="w-8 h-0.5 bg-border" />
                    <ArrowRight className="w-5 h-5 text-industrial" />
                    <div className="w-8 h-0.5 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-6">
            {architectureLayers.map((layer, index) => (
              <div key={layer.id}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg ${layer.color} flex items-center justify-center flex-shrink-0`}>
                    <layer.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{layer.title}</h4>
                    <p className="text-sm text-industrial font-medium mb-1">{layer.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{layer.description}</p>
                  </div>
                </div>
                {index < architectureLayers.length - 1 && (
                  <div className="flex justify-start ml-6 my-4">
                    <div className="w-0.5 h-8 bg-border" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Integration Features */}
        <div className="grid md:grid-cols-3 gap-6">
          {integrationFeatures.map((feature) => (
            <div 
              key={feature.title} 
              className="bg-navy rounded-xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-industrial-light" />
              </div>
              <h4 className="text-primary-foreground font-semibold mb-2">
                {feature.title}
              </h4>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationArchitectureSection;
