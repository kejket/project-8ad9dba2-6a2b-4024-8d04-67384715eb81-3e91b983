import { Factory, Cpu, Database, Monitor, Brain, AlertTriangle, CheckCircle, Info } from "lucide-react";
import DigitalTwinVisualization from "./DigitalTwinVisualization";

const components = [
  {
    icon: Factory,
    title: "Physical Assets",
    subtitle: "물리적 자산",
    items: ["제조 설비", "장비 구성 요소", "현장 환경"]
  },
  {
    icon: Cpu,
    title: "Sensor Data Layer",
    subtitle: "센서 데이터 레이어",
    items: ["다양한 센서 모듈을 통한 실시간 데이터 수집", "물리적 상태와 운영 조건 반영"]
  },
  {
    icon: Database,
    title: "Data Processing & Modeling",
    subtitle: "데이터 처리 및 모델링",
    items: ["수집된 데이터의 정합성 검증", "데이터 기반 모델 구성", "필요에 따라 단순 모델 또는 상세 모델 적용"]
  },
  {
    icon: Monitor,
    title: "Visualization & Monitoring",
    subtitle: "시각화 및 모니터링",
    items: ["설비 상태 시각화", "변화 추이 및 상태 비교", "운영 현황에 대한 직관적 이해 제공"]
  },
  {
    icon: Brain,
    title: "Decision Support",
    subtitle: "의사결정 지원",
    items: ["이상 징후 확인", "유지보수 시점 판단 지원", "운영 변경 시 사전 검토 자료 제공"]
  }
];

const useCases = [
  "센서 데이터 추이를 기반으로 한 설비 상태 모니터링",
  "운영 조건 변경 시 설비 반응에 대한 사전 검토",
  "유지보수 계획 수립을 위한 참고 지표 제공",
  "안전 관리 관점에서의 위험 요소 확인"
];

const considerations = [
  {
    icon: AlertTriangle,
    text: "디지털 트윈의 정확도는 센서 데이터 품질에 크게 의존합니다."
  },
  {
    icon: Info,
    text: "모든 설비가 고해상도 3D 모델을 필요로 하지는 않습니다."
  },
  {
    icon: CheckCircle,
    text: "모델은 지속적인 검증과 업데이트가 필요합니다."
  },
  {
    icon: Info,
    text: "디지털 트윈은 운영 의사결정을 보조하는 도구이며, 현장 전문성을 대체하지 않습니다."
  }
];

const DigitalTwinSection = () => {
  return (
    <section id="digital-twin" className="py-20 gradient-subtle">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <span className="inline-block text-sm font-medium text-industrial mb-4 tracking-wider">
              <span translate="no">DIGITAL TWIN</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-6 leading-tight">
            <span className="block">센싱 데이터 기반</span>
            <span className="block">디지털 트윈 기술</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            현장 조건을 고려한 고정밀 동기화 기술로, 신뢰 가능한 운영 판단을 지원합니다.
          </p>
        </div>

        {/* Definition Block */}
        <div className="bg-card rounded-xl border border-border p-8 mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">디지털 트윈이란?</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            디지털 트윈은 실제 산업 설비와 환경에서 수집된 센싱 데이터를 기반으로, 
            물리적 자산의 상태를 디지털 공간에 반영하는 기술입니다.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            sentia의 디지털 트윈 기술은 실시간 데이터 수집과 분석을 통해 설비 모니터링, 
            상태 분석, 운영 의사결정을 지원합니다. 이는 현장의 정확한 판단을 돕는 실용적인 도구입니다.
          </p>
        </div>

        {/* 3D Visualization */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            디지털 트윈 개념도
          </h3>
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <DigitalTwinVisualization />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4">
            물리적 자산과 디지털 모델 간의 실시간 데이터 동기화 개념
          </p>
        </div>

        {/* Core Components */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground mb-8">핵심 구성 요소</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component, index) => (
              <div 
                key={component.title}
                className="bg-card rounded-xl border border-border p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center">
                    <component.icon className="w-5 h-5 text-industrial" />
                  </div>
                  <div>
                    <span className="text-xs text-muted-foreground font-medium">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h4 className="text-sm font-semibold text-foreground">{component.title}</h4>
                  </div>
                </div>
                <p className="text-industrial text-sm font-medium mb-3">{component.subtitle}</p>
                <ul className="space-y-2">
                  {component.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-steel mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Diagram */}
        <div className="bg-navy rounded-xl p-8 lg:p-10 mb-16">
          <h3 className="text-xl font-semibold text-primary-foreground mb-8 text-center">
            디지털 트윈 아키텍처
          </h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-2">
            {[
              { label: "물리적 설비", sublabel: "센서 데이터 수집" },
              { label: "데이터 전송", sublabel: "유/무선 통신" },
              { label: "데이터 처리", sublabel: "정합성 검증" },
              { label: "모델 구성", sublabel: "디지털 표현" },
              { label: "시각화", sublabel: "상태 모니터링" },
            ].map((item, index, arr) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="bg-white/10 rounded-lg p-4 text-center min-w-[120px]">
                  <p className="text-primary-foreground font-medium text-sm">{item.label}</p>
                  <p className="text-primary-foreground/60 text-xs mt-1">{item.sublabel}</p>
                </div>
                {index < arr.length - 1 && (
                  <div className="hidden lg:block w-8 h-0.5 bg-industrial-light" />
                )}
                {index < arr.length - 1 && (
                  <div className="lg:hidden h-6 w-0.5 bg-industrial-light" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Manufacturing Use Cases */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">제조 현장 적용 사례</h3>
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 bg-card rounded-lg border border-border p-4"
                >
                  <div className="w-8 h-8 rounded-full bg-industrial/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-semibold text-industrial">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-foreground text-sm leading-relaxed pt-1">{useCase}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Important Considerations */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">적용 시 고려사항</h3>
            <div className="bg-muted/50 rounded-xl border border-border p-6">
              <div className="space-y-4">
                {considerations.map((consideration, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <consideration.icon className="w-5 h-5 text-steel mt-0.5 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {consideration.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Summary Note */}
        <div className="bg-card rounded-xl border border-border p-6 lg:p-8">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-steel/10 flex items-center justify-center flex-shrink-0">
              <Info className="w-5 h-5 text-steel" />
            </div>
            <div>
              <h4 className="text-foreground font-semibold mb-2">디지털 트윈의 역할</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                sentia의 디지털 트윈 기술은 현장 데이터를 기반으로 설비 상태를 이해하고, 
                정확한 판단과 의사결정에 필요한 정보를 제공합니다. 
                이는 현장 전문가의 판단을 보조하는 도구로서, 데이터 기반의 합리적 의사결정을 지원합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwinSection;