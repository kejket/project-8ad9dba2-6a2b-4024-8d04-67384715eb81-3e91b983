import { useEffect, useRef, useState } from "react";
import { 
  Radio, 
  Router, 
  Lock, 
  Cloud, 
  BarChart3, 
  Bell, 
  Cpu,
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
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            // Sequential activation with delay
            architectureSteps.forEach((_, index) => {
              setTimeout(() => {
                setActiveIndex(index);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div 
      ref={containerRef}
      className="w-full bg-card rounded-2xl border border-border p-6 lg:p-10 overflow-hidden"
    >
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
          {/* Connection Line - animated fill */}
          <div className="absolute top-16 left-[8%] right-[8%] h-0.5 bg-border overflow-hidden">
            <div 
              className="h-full bg-industrial transition-all duration-1000 ease-out"
              style={{ 
                width: activeIndex >= 0 ? `${((activeIndex + 1) / architectureSteps.length) * 100}%` : '0%'
              }}
            />
          </div>
          
          {/* Steps */}
          <div className="relative grid grid-cols-7 gap-2">
            {architectureSteps.map((step, index) => {
              const isActive = index <= activeIndex;
              const isCurrentlyActivating = index === activeIndex;
              
              return (
                <div key={step.id} className="relative flex flex-col items-center">
                  {/* Icon Container */}
                  <div 
                    className={`
                      relative z-10 w-14 h-14 rounded-xl border-2 flex items-center justify-center shadow-lg
                      transition-all duration-500 ease-out
                      ${isActive 
                        ? 'bg-industrial border-industrial shadow-industrial/20' 
                        : 'bg-card border-border'
                      }
                      ${isCurrentlyActivating ? 'scale-110' : 'scale-100'}
                    `}
                  >
                    <step.icon 
                      size={24} 
                      className={`transition-colors duration-500 ${isActive ? 'text-white' : 'text-muted-foreground'}`}
                    />
                  </div>

                  {/* Arrow - animated */}
                  {index < architectureSteps.length - 1 && (
                    <div 
                      className={`
                        absolute top-16 -right-1 z-20
                        transition-all duration-300 ease-out
                        ${index < activeIndex ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-1'}
                      `}
                      style={{ transitionDelay: `${index * 50}ms` }}
                    >
                      <ChevronRight 
                        size={16} 
                        className={`transition-colors duration-300 ${index < activeIndex ? 'text-industrial' : 'text-muted-foreground'}`}
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div 
                    className={`
                      mt-4 text-center transition-all duration-500 ease-out
                      ${isActive ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-2'}
                    `}
                  >
                    <p className={`text-sm font-semibold leading-tight transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                      {step.title}
                    </p>
                    <p className={`text-[10px] uppercase tracking-wide mt-0.5 transition-colors duration-300 ${isActive ? 'text-industrial' : 'text-muted-foreground'}`}>
                      {step.subtitle}
                    </p>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Flow - Vertical */}
      <div className="lg:hidden">
        <div className="relative">
          {/* Vertical Line - animated fill */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-border overflow-hidden">
            <div 
              className="w-full bg-industrial transition-all duration-1000 ease-out"
              style={{ 
                height: activeIndex >= 0 ? `${((activeIndex + 1) / architectureSteps.length) * 100}%` : '0%'
              }}
            />
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {architectureSteps.map((step, index) => {
              const isActive = index <= activeIndex;
              
              return (
                <div 
                  key={step.id} 
                  className={`
                    relative flex items-start gap-4
                    transition-all duration-500 ease-out
                    ${isActive ? 'opacity-100 translate-x-0' : 'opacity-50 translate-x-2'}
                  `}
                >
                  {/* Icon */}
                  <div 
                    className={`
                      relative z-10 w-14 h-14 rounded-xl border-2 flex items-center justify-center shadow-md flex-shrink-0
                      transition-all duration-500
                      ${isActive ? 'bg-industrial border-industrial' : 'bg-card border-border'}
                    `}
                  >
                    <step.icon 
                      size={22} 
                      className={`transition-colors duration-300 ${isActive ? 'text-white' : 'text-muted-foreground'}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <div className="flex items-baseline gap-2">
                      <p className={`text-sm font-semibold transition-colors duration-300 ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>
                        {step.title}
                      </p>
                      <span className={`text-[10px] uppercase transition-colors duration-300 ${isActive ? 'text-industrial' : 'text-muted-foreground'}`}>
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Data Flow Indicators - simplified */}
      <div className="mt-10 pt-6 border-t border-border">
        <div className="flex flex-wrap justify-center gap-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-8 h-0.5 bg-gradient-to-r from-transparent via-industrial to-transparent" />
            <span className="text-muted-foreground">데이터 흐름</span>
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
