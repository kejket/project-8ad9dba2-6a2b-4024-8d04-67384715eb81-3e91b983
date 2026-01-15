import { Link } from "react-router-dom";
import { Radio, Cpu, Monitor, Box, ArrowRight } from "lucide-react";

const techPillars = [
  {
    id: "sensor-modules",
    anchor: "sensor-modules",
    icon: Radio,
    title: "현장을 정확히 읽는 센싱 기술",
    description: "제조 현장의 물리·환경·전기 데이터를 정밀하게 수집해 설비 상태와 환경 변화를 놓치지 않습니다. 현장 조건에 맞춰 센서 구성과 측정 방식을 유연하게 설계합니다.",
  },
  {
    id: "communication",
    anchor: "sensor-modules",
    icon: Cpu,
    title: "안정적인 데이터 수집과 전송",
    description: "산업 현장의 다양한 통신 환경을 고려해, 다중 프로토콜 기반의 안정적인 데이터 전송을 지원합니다. 전자기 간섭 환경에서도 신뢰할 수 있는 데이터 흐름을 유지합니다.",
  },
  {
    id: "platform",
    anchor: "software-technology",
    icon: Monitor,
    title: "현장 데이터를 이해 가능한 정보로",
    description: "수집된 데이터를 실시간으로 처리·분석해 운영자가 바로 이해하고 판단할 수 있는 형태로 제공합니다. 대시보드와 알림으로 현장 대응 속도를 높입니다.",
  },
  {
    id: "digital-twin",
    anchor: "digital-twin",
    icon: Box,
    title: "운영 판단을 돕는 디지털 트윈",
    description: "실제 현장 데이터를 반영한 디지털 모델로 설비 상태를 이해하고, 운영 조건 변화의 영향을 사전에 검토할 수 있도록 지원합니다.",
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="py-24 gradient-subtle">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-industrial mb-4">TECHNOLOGY</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            데이터 기반 의사결정 지원
          </h2>
          <p className="text-lg text-muted-foreground">
            센서 데이터의 수집부터 분석, 시각화까지 일관된 프로세스를 통해
            정확한 현장 이해와 신뢰할 수 있는 판단을 지원합니다.
          </p>
        </div>

        {/* Technology Pillars Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {techPillars.map((pillar) => (
            <Link
              key={pillar.id}
              to={`/technology#${pillar.anchor}`}
              className="group bg-card rounded-xl border border-border p-6 lg:p-8 shadow-card hover:shadow-lg hover:border-industrial/20 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-industrial/10 flex items-center justify-center mb-5 group-hover:bg-industrial/20 transition-colors">
                <pillar.icon className="w-6 h-6 text-industrial" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-industrial transition-colors">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {pillar.description}
              </p>

              {/* Link Indicator */}
              <div className="flex items-center gap-2 text-sm text-industrial font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                <span>자세히 보기</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
