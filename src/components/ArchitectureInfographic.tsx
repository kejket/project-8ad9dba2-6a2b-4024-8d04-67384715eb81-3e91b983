import { 
  Radio, 
  Router, 
  Lock, 
  Cloud, 
  BarChart3, 
  Bell, 
  Cpu,
  ArrowRight,
  ChevronRight
} from "lucide-react";

const architectureSteps = [
  {
    id: "sensors",
    icon: Radio,
    title: "센서",
    subtitle: "Sensors",
    description: "온도, 진동, 압력 측정",
  },
  {
    id: "gateway",
    icon: Router,
    title: "게이트웨이",
    subtitle: "Gateway",
    description: "데이터 수집 및 집계",
  },
  {
    id: "transmission",
    icon: Lock,
    title: "보안 전송",
    subtitle: "Secure Transmission",
    description: "암호화된 데이터 전송",
  },
  {
    id: "cloud",
    icon: Cloud,
    title: "클라우드 플랫폼",
    subtitle: "Cloud Platform",
    description: "데이터 저장 및 처리",
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "분석 엔진",
    subtitle: "Analytics",
    description: "패턴 분석 및 예측",
  },
  {
    id: "dashboard",
    icon: Bell,
    title: "대시보드 & 알림",
    subtitle: "Dashboard & Alerts",
    description: "시각화 및 알림 제공",
  },
  {
    id: "digitaltwin",
    icon: Cpu,
    title: "디지털 트윈",
    subtitle: "Digital Twin",
    description: "가상 모델 동기화",
  },
];

const ArchitectureInfographic = () => {
  return (
    <div className="w-full bg-gradient-to-br from-background via-secondary/30 to-background rounded-2xl border border-border p-6 lg:p-10 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-10">
        <span className="inline-block text-xs font-medium text-industrial uppercase tracking-wider mb-2">
          System Architecture
        </span>
        <h3 className="text-xl lg:text-2xl font-bold text-foreground">
          sentia 솔루션 아키텍처
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          센서부터 디지털 트윈까지 데이터 흐름
        </p>
      </div>

      {/* Desktop Flow - Horizontal */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute top-16 left-[8%] right-[8%] h-0.5 bg-gradient-to-r from-industrial/20 via-industrial to-industrial/20" />
          
          {/* Steps */}
          <div className="relative grid grid-cols-7 gap-2">
            {architectureSteps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col items-center">
                {/* Icon Container */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-card border-2 border-industrial/30 flex items-center justify-center shadow-lg hover:border-industrial hover:shadow-xl transition-all duration-300 group">
                  <step.icon 
                    size={24} 
                    className="text-industrial group-hover:scale-110 transition-transform" 
                  />
                  
                  {/* Pulse animation for first and last */}
                  {(index === 0 || index === architectureSteps.length - 1) && (
                    <div className="absolute inset-0 rounded-xl border-2 border-industrial/50 animate-ping opacity-30" />
                  )}
                </div>

                {/* Arrow */}
                {index < architectureSteps.length - 1 && (
                  <div className="absolute top-16 -right-1 z-20">
                    <ChevronRight size={16} className="text-industrial" />
                  </div>
                )}

                {/* Content */}
                <div className="mt-4 text-center">
                  <p className="text-sm font-semibold text-foreground leading-tight">
                    {step.title}
                  </p>
                  <p className="text-[10px] text-industrial uppercase tracking-wide mt-0.5">
                    {step.subtitle}
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Flow - Vertical */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-industrial via-industrial/50 to-industrial" />

          {/* Steps */}
          <div className="space-y-6">
            {architectureSteps.map((step, index) => (
              <div key={step.id} className="relative flex items-start gap-4">
                {/* Icon */}
                <div className="relative z-10 w-14 h-14 rounded-xl bg-card border-2 border-industrial/30 flex items-center justify-center shadow-md flex-shrink-0">
                  <step.icon size={22} className="text-industrial" />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2">
                  <div className="flex items-baseline gap-2">
                    <p className="text-sm font-semibold text-foreground">
                      {step.title}
                    </p>
                    <span className="text-[10px] text-industrial uppercase">
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {step.description}
                  </p>
                </div>

                {/* Arrow for mobile */}
                {index < architectureSteps.length - 1 && (
                  <div className="absolute left-[26px] -bottom-3 z-20">
                    <ArrowRight size={12} className="text-industrial rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Flow Indicators */}
      <div className="mt-10 pt-6 border-t border-border">
        <div className="flex flex-wrap justify-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-industrial to-transparent" />
            <span className="text-muted-foreground">데이터 흐름</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-industrial bg-card animate-pulse" />
            <span className="text-muted-foreground">실시간 처리</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock size={12} className="text-industrial" />
            <span className="text-muted-foreground">암호화 구간</span>
          </div>
        </div>
      </div>

      {/* Layer Labels */}
      <div className="hidden lg:flex justify-between mt-8 px-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-steel/50" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Edge Layer</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-industrial/50" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Cloud Layer</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-navy/50" />
          <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Application Layer</span>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureInfographic;
