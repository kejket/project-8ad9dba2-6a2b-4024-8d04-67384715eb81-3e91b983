import { Cpu, Radio, Thermometer, Zap, Volume2, Droplets, Wind, Activity, Gauge, CircuitBoard } from "lucide-react";
import sensorTechnologyImage from "@/assets/sensor-technology.jpg";

const sensorCategories = [
  {
    category: "물리적 센서",
    sensors: [
      { name: "광", icon: Zap },
      { name: "진동", icon: Activity },
      { name: "음향", icon: Volume2 },
      { name: "소음", icon: Volume2 },
      { name: "압력", icon: Gauge },
    ]
  },
  {
    category: "환경 센서",
    sensors: [
      { name: "온도", icon: Thermometer },
      { name: "습도", icon: Droplets },
      { name: "유량", icon: Wind },
      { name: "전도", icon: CircuitBoard },
      { name: "인자 센서", icon: Cpu },
    ]
  },
  {
    category: "전기 센서",
    sensors: [
      { name: "전기", icon: Zap },
      { name: "전압", icon: Gauge },
      { name: "전류", icon: Activity },
      { name: "전력", icon: CircuitBoard },
    ]
  }
];

const features = [
  {
    title: "현장 환경 최적화 설계",
    description: "현장 조건을 먼저 분석하고, 그에 맞는 센서 구성과 통신 방식을 설계합니다."
  },
  {
    title: "다중 통신 포트 지원",
    description: "기존 설비의 통신 환경에 맞춰 유연하게 연동할 수 있도록 다양한 프로토콜을 적용합니다."
  },
  {
    title: "안정적 데이터 취득",
    description: "전자기 간섭 등 현장 환경에서도 끊김 없는 데이터 흐름을 유지해, 신뢰할 수 있는 운영 판단을 지원합니다."
  }
];

const SensorModulesSection = () => {
  return (
    <section id="sensor-modules" className="py-20 bg-background">
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="max-w-6xl mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Image */}
            <div className="w-full lg:w-2/5 flex-shrink-0">
              <img 
                src={sensorTechnologyImage} 
                alt="Sensor Technology" 
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            {/* Text Content */}
            <div className="flex-1 lg:w-3/5">
              <span className="inline-block text-sm font-medium text-industrial mb-4 tracking-wider">
                SENSOR TECHNOLOGY
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-6 leading-tight">
                <span className="block">센서 모듈 및 통신 포트</span>
                <span className="block">기술</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                물리적·전기적 상태를 정밀하게 측정하기 위한 센서 모듈과, 
                산업 환경의 전자기 간섭 조건에서 안정적으로 데이터를 취득하는 통신 기술을 적용합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Assets Info */}
        <div className="bg-navy/5 border border-border rounded-xl p-6 mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0">
              <Cpu className="w-6 h-6 text-industrial" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                검증된 기술 자산 기반 설계
              </h3>
              <p className="text-muted-foreground">
                센서 모듈 관련 기술 자산과 검증된 현장 적용 경험을 바탕으로 솔루션을 설계합니다.
                현장 조건에 따라 유연하게 적용 가능합니다.
              </p>
            </div>
          </div>
        </div>

        {/* Sensor Types Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {sensorCategories.map((category) => (
            <div key={category.category} className="bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-6 pb-4 border-b border-border">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.sensors.map((sensor) => (
                  <div key={sensor.name} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                      <sensor.icon className="w-5 h-5 text-industrial" />
                    </div>
                    <span className="text-foreground font-medium">{sensor.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="bg-navy rounded-xl p-8 lg:p-10">
          <div className="flex items-center gap-3 mb-8">
            <Radio className="w-6 h-6 text-industrial-light" />
            <h3 className="text-xl font-semibold text-primary-foreground">
              통신 및 데이터 취득 기술
            </h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white/5 rounded-lg p-5">
                <h4 className="text-primary-foreground font-medium mb-2">
                  {feature.title}
                </h4>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SensorModulesSection;
