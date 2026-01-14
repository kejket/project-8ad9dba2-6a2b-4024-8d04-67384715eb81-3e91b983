import { Link } from "react-router-dom";
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
  ArrowRight
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
    title: "한눈에 파악하는 현장 상태",
    description: "직관적인 대시보드를 통해 설비와 환경 상태를 실시간으로 확인하고 이상 징후를 빠르게 인지합니다.",
  },
  {
    icon: FileText,
    title: "운영 기록 기반의 이력 관리",
    description: "수집된 데이터와 알림 이력을 저장하여 분석, 보고, 개선 활동에 활용할 수 있습니다.",
  },
  {
    icon: Link2,
    title: "유연한 시스템 연동(API)",
    description: "MES, ERP, SCADA 등 기존 시스템과 연동하여 데이터 활용 범위를 확장할 수 있습니다.",
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

const Solutions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <PageHeader
          label="SOLUTIONS"
          title={<>설비 상태를 파악하고<br />운영 대응력을 높입니다</>}
          description="현장에서 발생하는 설비 이상과 환경 변화를 조기에 감지하고, 운영자가 적시에 대응할 수 있도록 필요한 정보를 제공합니다."
        />

        {/* Section 1: Customer Problems */}
        <section className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl mb-12">
              <span className="inline-block text-sm font-medium text-industrial mb-4">CHALLENGES</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                제조 현장이 직면한 과제
              </h2>
              <p className="text-muted-foreground">
                많은 제조 기업들이 설비 관리와 안전 모니터링에서 
                다음과 같은 공통된 어려움을 겪고 있습니다.
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
              <span className="inline-block text-sm font-medium text-industrial mb-4">SOLUTION OVERVIEW</span>
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
        <section className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl mb-12">
              <span className="inline-block text-sm font-medium text-industrial mb-4">CORE FEATURES</span>
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
                  className="group p-6 rounded-xl border border-border bg-card hover:shadow-card hover:border-industrial/30 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-industrial/10 transition-colors">
                    <feature.icon size={24} className="text-industrial" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Implementation Process */}
        <section className="py-20 bg-navy text-primary-foreground">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl mb-12">
              <span className="inline-block text-sm font-medium text-industrial-light mb-4">IMPLEMENTATION</span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                도입 프로세스
              </h2>
              <p className="text-primary-foreground/70">
                체계적인 단계별 접근을 통해 안정적으로 솔루션을 도입합니다.
              </p>
            </div>

            <div className="space-y-4">
              {implementationSteps.map((item, index) => (
                <div
                  key={item.step}
                  className="flex items-start gap-6 p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-industrial-light">{item.step}</span>
                    <div className="w-12 h-12 rounded-lg bg-industrial/20 flex items-center justify-center">
                      <item.icon size={24} className="text-industrial-light" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-primary-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Security & Data Governance */}
        <section className="py-20 gradient-subtle">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl mb-12">
              <span className="inline-block text-sm font-medium text-industrial mb-4">SECURITY</span>
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

        {/* Digital Twin Summary */}
        <DigitalTwinSummary />

        {/* Mid CTA after Digital Twin */}
        <section className="py-12 bg-background">
          <div className="container-narrow section-padding">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-xl border border-industrial/20 bg-industrial/5">
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  우리 현장에 어떻게 적용할 수 있을까요?
                </h3>
                <p className="text-sm text-muted-foreground">
                  현장 조건과 목표에 맞는 구성 방안을 함께 검토해 드립니다.
                </p>
              </div>
              <Link to="/consultation">
                <Button variant="outline" className="whitespace-nowrap group">
                  상담 요청하기
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="relative overflow-hidden rounded-2xl gradient-hero p-8 sm:p-12 lg:p-16">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-96 h-96 bg-industrial rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 text-center max-w-2xl mx-auto">
                <Shield size={48} className="mx-auto mb-6 text-industrial-light" />
                <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
                  현장에 맞는 솔루션을 찾고 계신가요?
                </h2>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  현장 환경을 분석해 최적의 모니터링 구성을 제안해 드립니다.
                </p>
                <Link to="/consultation">
                  <Button variant="hero" size="xl">
                    현장 진단 및 상담 요청
                    <ArrowRight size={20} />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Solutions;
