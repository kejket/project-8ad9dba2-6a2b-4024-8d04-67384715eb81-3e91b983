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
    <section className="py-20 bg-muted/30">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <span className="inline-block text-sm font-medium text-industrial mb-4 tracking-wider">
            SYSTEM ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-6 leading-tight">
            하드웨어와 소프트웨어의<br />통합 구조
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            센서 모듈에서 수집된 데이터는 소프트웨어 플랫폼과 유기적으로 연동되어 
            실시간 모니터링과 제어 환경을 구성합니다.
          </p>
        </div>

        {/* Architecture Diagram - Concept Summary Style */}
        <div className="bg-card rounded-xl border border-border p-8 lg:p-10 mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-8 text-center">
            기술 레이어 개요
          </h3>
          
          {/* Desktop View */}
          <div className="hidden lg:flex items-stretch justify-between gap-6">
            {architectureLayers.map((layer, index) => (
              <div key={layer.id} className="flex items-center gap-4 flex-1">
                <div className="flex-1 text-center p-4 rounded-lg border border-border bg-background hover:border-industrial/30 hover:shadow-sm transition-all duration-200">
                  <div className="w-12 h-12 rounded-lg bg-industrial/10 flex items-center justify-center mb-4 mx-auto">
                    <layer.icon className="w-6 h-6 text-industrial" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm">{layer.title}</h4>
                  <p className="text-xs text-industrial font-medium mb-2">{layer.subtitle}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {layer.description}
                  </p>
                </div>
                {index < architectureLayers.length - 1 && (
                  <div className="flex items-center">
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="lg:hidden space-y-4">
            {architectureLayers.map((layer, index) => (
              <div key={layer.id}>
                <div className="flex items-start gap-4 p-4 rounded-lg border border-border bg-background">
                  <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0">
                    <layer.icon className="w-5 h-5 text-industrial" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{layer.title}</h4>
                    <p className="text-xs text-industrial font-medium mb-1">{layer.subtitle}</p>
                    <p className="text-xs text-muted-foreground">{layer.description}</p>
                  </div>
                </div>
                {index < architectureLayers.length - 1 && (
                  <div className="flex justify-center my-2">
                    <ArrowRight className="w-4 h-4 text-muted-foreground rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Integration Features - Light background */}
        <div className="grid md:grid-cols-3 gap-6">
          {integrationFeatures.map((feature) => (
            <div 
              key={feature.title} 
              className="bg-card rounded-xl border border-border p-6 hover:border-industrial/30 hover:shadow-sm transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-industrial" />
              </div>
              <h4 className="text-foreground font-semibold mb-2">
                {feature.title}
              </h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
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
