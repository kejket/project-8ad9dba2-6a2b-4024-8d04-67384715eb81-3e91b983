import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import DigitalTwinSummary from "@/components/DigitalTwinSummary";
import ArchitectureInfographic from "@/components/ArchitectureInfographic";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle, 
  Eye,
  Clock, 
  Database,
  Thermometer,
  Radio,
  LayoutDashboard,
  Bell,
  FileText,
  Link2,
  ClipboardCheck,
  FlaskConical,
  Settings,
  Rocket,
  Headphones,
  Shield,
  Lock,
  Users,
  ScrollText,
  Scale,
  ArrowRight,
  Activity,
  Zap,
  BarChart3
} from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "설비 이상 조기 감지의 어려움",
    description: "설비 고장이 발생한 후에야 문제를 인지하게 되어 생산 손실과 수리 비용이 증가합니다.",
  },
  {
    icon: Eye,
    title: "수동 점검의 한계",
    description: "정기적인 육안 점검만으로는 미세한 이상 징후를 감지하기 어렵고, 점검 누락의 위험이 있습니다.",
  },
  {
    icon: Clock,
    title: "실시간 가시성 부족",
    description: "설비 상태와 안전 조건에 대한 실시간 정보가 없어 신속한 의사결정이 어렵습니다.",
  },
  {
    icon: Database,
    title: "분산된 데이터 관리",
    description: "여러 현장과 시스템에 데이터가 흩어져 있어 통합적인 분석과 관리가 어렵습니다.",
  },
];

const solutionSteps = [
  {
    icon: Thermometer,
    title: "센서 측정",
    description: "온도, 진동, 전류, 압력, 환경 요인 등 설비의 물리적 상태를 센서를 통해 측정합니다.",
  },
  {
    icon: Radio,
    title: "데이터 수집 및 전송",
    description: "게이트웨이가 센서 데이터를 수집하고 암호화하여 중앙 서버로 안전하게 전송합니다.",
  },
  {
    icon: LayoutDashboard,
    title: "시각화 및 분석",
    description: "중앙 플랫폼에서 데이터를 저장하고 시각화하며, 패턴 분석을 통해 인사이트를 도출합니다.",
  },
  {
    icon: Bell,
    title: "알림 및 대응",
    description: "운영자에게 적시에 알림을 제공하여 신속한 대응과 의사결정을 지원합니다.",
  },
];

const features = [
  {
    icon: Settings,
    title: "현장 조건에 맞춘 센싱 구성",
    description: "설비 종류, 환경 특성, 측정 목적에 따라 센서와 디바이스를 유연하게 구성할 수 있습니다.",
  },
  {
    icon: Radio,
    title: "안정적인 데이터 전송과 연결",
    description: "유선·무선 통신 방식을 현장 여건에 맞게 선택하여 끊김 없는 데이터 수집 환경을 구축합니다.",
  },
  {
    icon: LayoutDashboard,
    title: "현장 데이터를 한눈에 관리",
    description: "직관적인 대시보드를 통해 설비와 환경 상태를 실시간으로 확인하고 이상 징후를 빠르게 인지합니다.",
  },
  {
    icon: Activity,
    title: "임계값 기반 알림 및 인시던트 추적",
    description: "사용자 정의 기준에 따라 알림을 발송하고, 발생한 이슈와 대응 내역을 체계적으로 추적할 수 있습니다.",
  },
  {
    icon: FileText,
    title: "운영 기록 및 리포팅",
    description: "수집된 데이터와 이벤트 기록을 분석·보고하여 운영 개선과 의사결정에 활용할 수 있습니다.",
  },
  {
    icon: Link2,
    title: "유연한 시스템 연동(API)",
    description: "MES, ERP, SCADA 등 기존 시스템과 연동하여 데이터 활용 범위를 확장할 수 있습니다.",
  },
];

const extensionSolutions = [
  {
    icon: Shield,
    title: "안전 관리(옵션)",
    description: "위험요소 모니터링·사고 예방 알림",
  },
  {
    icon: Zap,
    title: "에너지 모니터링(옵션)",
    description: "사용량 측정·효율 개선·비용/탄소 지표",
  },
  {
    icon: Database,
    title: "통합 데이터 허브(옵션)",
    description: "다중 시스템 데이터 표준화·연동·통합 관리",
  },
  {
    icon: BarChart3,
    title: "데이터 분석/리포팅",
    description: "리포트 자동화·트렌드 분석",
  },
];

const implementationSteps = [
  {
    step: "01",
    icon: ClipboardCheck,
    title: "현장 진단 및 모니터링 포인트 선정",
    description: "현장 환경을 분석하고 모니터링이 필요한 설비와 측정 항목을 선정합니다.",
  },
  {
    step: "02",
    icon: FlaskConical,
    title: "파일럿 설치 (PoC)",
    description: "소규모 시범 설치를 통해 솔루션의 적합성과 효과를 검증합니다.",
  },
  {
    step: "03",
    icon: Settings,
    title: "데이터 검증 및 알림 규칙 설정",
    description: "수집 데이터의 정확성을 검증하고 운영에 필요한 알림 규칙을 설정합니다.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "전체 현장 확대 적용",
    description: "검증된 구성을 기반으로 전체 현장으로 솔루션을 확대 적용합니다.",
  },
  {
    step: "05",
    icon: Headphones,
    title: "지속적인 운영 및 유지보수",
    description: "안정적인 운영을 위한 모니터링과 정기적인 유지보수를 수행합니다.",
  },
];

const securityFeatures = [
  {
    icon: Lock,
    title: "암호화된 데이터 전송",
    description: "모든 데이터는 전송 과정에서 암호화되어 안전하게 보호됩니다.",
  },
  {
    icon: Users,
    title: "역할 기반 접근 제어",
    description: "사용자 역할에 따른 세분화된 접근 권한을 설정할 수 있습니다.",
  },
  {
    icon: ScrollText,
    title: "데이터 로깅 및 감사 추적",
    description: "모든 데이터 접근과 변경 이력을 기록하여 추적 가능성을 보장합니다.",
  },
  {
    icon: Scale,
    title: "데이터 규정 준수",
    description: "관련 데이터 보호 규정과 산업 표준을 준수합니다.",
  },
];

// Implementation Section Component with scroll animation
const ImplementationSection = ({ steps }: { steps: typeof implementationSteps }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.impl-step-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('impl-step-visible');
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-background" ref={sectionRef}>
      <div className="container-narrow section-padding">
        <div className="max-w-3xl mb-12">
          <span className="inline-block text-sm font-medium text-industrial mb-4" translate="no">IMPLEMENTATION</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            도입 프로세스
          </h2>
          <p className="text-muted-foreground">
            체계적인 단계별 접근을 통해 안정적으로 솔루션을 도입합니다.
          </p>
        </div>

        {/* Connecting line for visual flow */}
        <div className="relative">
          <div className="absolute left-[2.25rem] top-8 bottom-8 w-px bg-gradient-to-b from-industrial/20 via-industrial/40 to-industrial/20 hidden sm:block" />
          
          <div className="space-y-4">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className="impl-step-card opacity-0 translate-y-4 transition-all duration-500 ease-out flex items-start gap-6 p-6 rounded-xl bg-card border border-border hover:shadow-md hover:border-industrial/20 group relative"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                {/* Step indicator with subtle pulse on hover */}
                <div className="flex items-center gap-4 relative z-10">
                  <span className="text-3xl font-bold text-industrial transition-transform duration-200 group-hover:scale-105">
                    {item.step}
                  </span>
                  <div className="w-12 h-12 rounded-lg bg-industrial/10 flex items-center justify-center transition-all duration-200 group-hover:bg-industrial/15 group-hover:shadow-sm">
                    <item.icon size={24} className="text-industrial" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1 transition-colors duration-200 group-hover:text-industrial">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                {/* Subtle left border accent */}
                <div className="absolute left-0 top-4 bottom-4 w-0.5 bg-industrial/0 group-hover:bg-industrial/30 transition-all duration-200 rounded-full" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Solutions = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // 요소가 렌더링될 때까지 약간의 지연
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 80; // 헤더 높이 고려
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, [hash]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <PageHeader
          label="SOLUTIONS"
          title={<>설비 상태를 파악하고 운영 대응력을 높입니다</>}
          description="현장에서 발생하는 설비 이상과 환경 변화를 조기에 감지하고, 운영자가 적시에 대응할 수 있도록 필요한 정보를 제공합니다."
        />

        {/* Section 1: Customer Problems */}
        <section id="challenges" className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl mb-12">
              <span className="inline-block text-sm font-medium text-industrial mb-4" translate="no">CHALLENGES</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                제조 현장이 직면한 과제
              </h2>
              <p className="text-muted-foreground">
                많은 제조 기업들이 설비 관리와 안전 모니터링에서 
                다음과 같은 공통된 어려움을 겪고 있습니다.
              </p>
              <p className="text-muted-foreground mt-1 leading-tight">
                sentia는 센싱 기반 이상 징후를 조기에 포착해, 현장에서 즉시 대응할 수 있도록 지원합니다.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {problems.map((problem) => (
                <div
                  key={problem.title}
                  className="flex gap-4 p-6 rounded-xl border border-border bg-card"
                >
                  <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon size={24} className="text-destructive" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Solution Overview */}
        <section className="py-20 gradient-subtle">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl mb-12">
              <span className="inline-block text-sm font-medium text-industrial mb-4" translate="no">SOLUTION OVERVIEW</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                sentia 솔루션 구성
              </h2>
              <p className="text-muted-foreground">
                센서, 게이트웨이, 중앙 플랫폼으로 구성된 통합 솔루션을 통해 
                현장 데이터를 수집하고 분석하여 정확한 판단과 의사결정을 지원합니다.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutionSteps.map((step, index) => (
                <div key={step.title} className="relative">
                  <div className="bg-card rounded-xl border border-border p-6 h-full">
                    <div className="w-12 h-12 rounded-lg bg-industrial/10 flex items-center justify-center mb-4">
                      <step.icon size={24} className="text-industrial" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  {index < solutionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight size={20} className="text-muted-foreground/50" />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Architecture Infographic */}
            <div className="mt-16">
              <ArchitectureInfographic />
            </div>
          </div>
        </section>

        {/* Section 3: Core Features */}
        <section id="core-features" className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl mb-12">
              <span className="inline-block text-sm font-medium text-industrial mb-4" translate="no">CORE FEATURES</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                주요 기능
              </h2>
              <p className="text-muted-foreground">
                설비 모니터링에 필요한 핵심 기능을 제공합니다.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="group p-6 rounded-xl border border-border bg-secondary hover:shadow-card hover:border-industrial/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center mb-4 group-hover:bg-card/90 transition-colors">
                    <feature.icon size={24} className="text-industrial" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3.5: Extension Solutions */}
        <section className="py-20 gradient-subtle">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl mb-12">
              <span className="inline-block text-sm font-medium text-industrial mb-4" translate="no">EXTENSION SOLUTIONS</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                확장 솔루션(옵션)
              </h2>
              <p className="text-muted-foreground">
                현장 요구에 따라 안전/에너지/데이터 통합까지 모듈 형태로 확장 가능합니다.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {extensionSolutions.map((solution) => (
                <div
                  key={solution.title}
                  className="group p-6 rounded-xl border border-border bg-card hover:shadow-card hover:border-industrial/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-industrial/10 transition-colors">
                    <solution.icon size={24} className="text-industrial" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Implementation Process */}
        <ImplementationSection steps={implementationSteps} />

        {/* Mid CTA after Implementation */}
        <section className="py-12 bg-muted/30">
          <div className="container-narrow section-padding">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-xl border border-border bg-card shadow-sm">
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  우리 현장에 어떻게 적용할 수 있을까요?
                </h3>
                <p className="text-sm text-muted-foreground">
                  현장 조건과 목표에 맞는 구성 방안을 함께 검토해 드립니다.
                </p>
              </div>
              <Link to="/consultation">
                <Button className="whitespace-nowrap group bg-industrial hover:bg-industrial-dark text-white">
                  상담 요청하기
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Section 5: Security & Data Governance */}
        <section className="py-20 gradient-subtle">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl mb-12">
              <span className="inline-block text-sm font-medium text-industrial mb-4" translate="no">SECURITY</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                보안 및 데이터 거버넌스
              </h2>
              <p className="text-muted-foreground">
                안전한 데이터 관리를 위한 보안 체계를 갖추고 있습니다.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl border border-border bg-card"
                >
                  <div className="w-12 h-12 rounded-lg bg-industrial/10 flex items-center justify-center mb-4">
                    <feature.icon size={24} className="text-industrial" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Digital Twin Sync Visualization */}
        <section className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="p-10 rounded-2xl border border-primary-foreground/10 bg-navy shadow-sm">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Left: Text Content */}
                <div className="text-primary-foreground">
                  <h2 className="text-xl sm:text-2xl font-bold mb-3">
                    디지털 트윈으로 현장 상태를 한눈에 이해합니다
                  </h2>
                  <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                    실제 설비에서 수집된 센싱 데이터를 기반으로 현장 상태와 변화 흐름을 가상 모델로 직관적으로 확인할 수 있습니다.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-industrial-light mt-2 flex-shrink-0" />
                      <p className="text-sm text-primary-foreground/90">실시간 설비 상태 동기화</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-industrial-light mt-2 flex-shrink-0" />
                      <p className="text-sm text-primary-foreground/90">운영 조건 변경 시 사전 영향 검토 (What-if)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-industrial-light mt-2 flex-shrink-0" />
                      <p className="text-sm text-primary-foreground/90">운영 효율 개선을 위한 판단 기준 제공</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-industrial-light mt-2 flex-shrink-0" />
                      <p className="text-sm text-primary-foreground/90">예측 기반 유지보수 계획 수립</p>
                    </div>
                  </div>
                </div>

                {/* Right: Circular Sync Visualization */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-sm aspect-square">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" style={{ overflow: 'visible' }}>
                      {/* Background circle for text */}
                      <circle
                        cx="200"
                        cy="200"
                        r="100"
                        fill="#13396c"
                        stroke="#405073"
                        strokeWidth="2"
                      />
                      
                      {/* Outer dashed circle (rotating) */}
                      <g className="animate-slow-rotate" style={{ transformOrigin: '200px 200px' }}>
                        <circle
                          cx="200"
                          cy="200"
                          r="145"
                          fill="none"
                          stroke="#5a6b8a"
                          strokeWidth="1.5"
                          strokeDasharray="6 6"
                          opacity="0.8"
                        />
                      </g>
                      
                      {/* Inner solid circle */}
                      <circle
                        cx="200"
                        cy="200"
                        r="125"
                        fill="none"
                        stroke="#405073"
                        strokeWidth="2"
                        opacity="0.7"
                      />

                      {/* Data labels on outer circle (static, not rotating) */}
                      <g>
                        {/* 입력데이터 - Top */}
                        <circle cx="200" cy="55" r="3.5" fill="#405073" />
                        <rect x="170" y="60" width="60" height="20" rx="10" ry="10" fill="rgba(255, 255, 255, 0.2)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                        <text x="200" y="72" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="500" dominantBaseline="middle">
                          입력데이터
                        </text>
                        
                        {/* 진동데이터 - Right */}
                        <circle cx="345" cy="200" r="3.5" fill="#405073" />
                        <rect x="320" y="188" width="60" height="20" rx="10" ry="10" fill="rgba(255, 255, 255, 0.2)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                        <text x="350" y="198" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="500" dominantBaseline="middle">
                          진동데이터
                        </text>
                        
                        {/* 전력데이터 - Bottom */}
                        <circle cx="200" cy="345" r="3.5" fill="#405073" />
                        <rect x="170" y="328" width="60" height="20" rx="10" ry="10" fill="rgba(255, 255, 255, 0.2)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                        <text x="200" y="338" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="500" dominantBaseline="middle">
                          전력데이터
                        </text>
                        
                        {/* 온도데이터 - Left */}
                        <circle cx="55" cy="200" r="3.5" fill="#405073" />
                        <rect x="20" y="188" width="60" height="20" rx="10" ry="10" fill="rgba(255, 255, 255, 0.2)" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1" />
                        <text x="50" y="198" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="500" dominantBaseline="middle">
                          온도데이터
                        </text>
                      </g>
                    </svg>

                    {/* Center text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center px-4">
                        <p className="text-sm sm:text-base font-bold text-white leading-tight" translate="no">
                          Real-time <br /> Data Sync
                        </p>
                        <p className="text-lg sm:text-xl font-bold leading-tight mt-1" style={{ color: '#38a2ea' }}>
                          동기화
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Twin Summary */}
        <DigitalTwinSummary />

        {/* Bottom CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-narrow section-padding">
            <div className="text-center max-w-2xl mx-auto p-10 rounded-2xl border border-border bg-card shadow-sm">
              <Shield size={40} className="mx-auto mb-6 text-industrial" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                현장에 맞는 솔루션을 찾고 계신가요?
              </h2>
              <p className="text-muted-foreground mb-8">
                현장 환경을 분석해 최적의 모니터링 구성을 제안해 드립니다.
              </p>
              <Link to="/consultation">
                <Button size="lg" className="bg-industrial hover:bg-industrial-dark text-white">
                  현장 진단 및 상담 요청
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
