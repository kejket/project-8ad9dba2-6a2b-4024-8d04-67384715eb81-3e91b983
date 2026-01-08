import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { ArrowRight, Radio, Brain, Target } from "lucide-react";
import { Link } from "react-router-dom";
import sentiaBrandImage from "@/assets/sentia-brand.png";

const About = () => {
  const principles = [
    {
      title: "최고의 전문성",
      description: "산업 현장의 복잡한 문제를 이해하고 해결하기 위해, 센싱 기술과 데이터 분석에 대한 깊은 전문성을 갖추고 있습니다."
    },
    {
      title: "현장 맞춤 최적의 솔루션",
      description: "모든 산업 현장은 고유한 특성을 가집니다. sentia는 각 현장의 조건과 요구에 맞춘 최적화된 솔루션을 제공합니다."
    },
    {
      title: "운영의 혁신과 가치 창출",
      description: "단순한 모니터링을 넘어, 운영 효율성을 높이고 실질적인 비즈니스 가치를 창출하는 것을 목표로 합니다."
    },
    {
      title: "사람과 사회에 이로운 기술",
      description: "기술은 궁극적으로 사람의 안전과 사회의 발전에 기여해야 합니다. sentia는 이 방향성을 모든 기술 개발의 기준으로 삼습니다."
    }
  ];

  const workProcess = [
    {
      step: "01",
      title: "Sense",
      titleKo: "감지",
      icon: Radio,
      description: "산업 현장의 물리적, 운영적 조건을 센싱 기술을 통해 데이터로 수집합니다. 보이지 않던 미세한 변화와 잠재적 위험 요소까지 포착합니다."
    },
    {
      step: "02",
      title: "Understand",
      titleKo: "이해",
      icon: Brain,
      description: "수집된 데이터를 검증하고 분석하여 의미 있는 정보로 변환합니다. 패턴, 이상 징후, 변화 추이를 식별하여 현장 상황을 정확하게 파악합니다."
    },
    {
      step: "03",
      title: "Decide",
      titleKo: "판단",
      icon: Target,
      description: "분석된 정보를 바탕으로 운영 판단을 지원합니다. 더 안전하고 효율적인 의사결정이 가능하도록 신뢰할 수 있는 근거를 제공합니다."
    }
  ];

  const pageConnections = [
    {
      title: "솔루션",
      description: "sentia가 무엇을 제공하는지",
      href: "/solutions"
    },
    {
      title: "기술",
      description: "어떻게 구현되는지",
      href: "/technology"
    },
    {
      title: "산업분야",
      description: "어디에 적용되는지",
      href: "/industry"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PageHeader
        label="ABOUT SENTIA"
        title="SENTIA를 이해하다"
        description="sentia는 산업 현장을 정확하게 이해하는 것에서 출발합니다. 보이지 않던 위험과 미세한 변화를 감지하고, 그 이해를 신뢰할 수 있는 판단과 의사결정으로 연결합니다."
      />

      <main>
        {/* Section 2: What SENTIA Means */}
        <section className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="max-w-6xl">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Image */}
                <div className="w-full lg:w-2/5 flex-shrink-0">
                  <img 
                    src={sentiaBrandImage} 
                    alt="Sentia Brand" 
                    className="w-full h-auto rounded-lg object-cover"
                  />
                </div>
                {/* Text Content */}
                <div className="flex-1 lg:w-3/5">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                    SENTIA라는 이름의 의미
                  </h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      sentia는 <span className="text-foreground font-medium">Sense</span>와 <span className="text-foreground font-medium">Intelligence</span>의 결합에서 비롯된 이름입니다.
                    </p>
                    <p>
                      이 이름은 단순히 데이터를 수집하는 것을 넘어, 센싱을 통해 얻은 정보를 해석하고 의미 있는 이해로 전환하는 sentia의 핵심 역할을 반영합니다.
                    </p>
                    <p>
                      산업 현장에서 발생하는 물리적 현상을 감지(Sense)하고, 이를 통찰력 있는 정보(Intelligence)로 변환하여, 신뢰할 수 있는 판단의 기반을 만드는 것이 sentia가 추구하는 가치입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Technology Perspective */}
        <section className="py-20 bg-surface">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                SENTIA의 기술 관점
              </h2>
              <div className="space-y-6">
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    sentia에게 기술은 현실을 정확하게 이해하기 위한 도구입니다. 기술 그 자체가 목적이 아닙니다.
                  </p>
                  <p>
                    정확한 센싱은 신뢰할 수 있는 시스템의 기초입니다. 데이터의 품질과 정합성이 보장되지 않으면, 그 위에 구축되는 모든 분석과 판단은 의미를 잃습니다.
                  </p>
                  <p>
                    sentia는 화려한 기술 시연보다 현장에서 실제로 작동하는 기술을 추구합니다. 적용 가능성, 신뢰성, 그리고 현장 전문가들이 신뢰할 수 있는 결과를 제공하는 것이 sentia 기술의 기준입니다.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">적용 가능성</h4>
                    <p className="text-sm text-muted-foreground">실제 산업 환경에서 안정적으로 운영될 수 있는 기술</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">신뢰성</h4>
                    <p className="text-sm text-muted-foreground">검증된 데이터와 일관된 결과를 제공하는 시스템</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">현장 중심</h4>
                    <p className="text-sm text-muted-foreground">현장 전문가의 판단을 지원하는 실용적 접근</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: How SENTIA Works */}
        <section className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                SENTIA WORKS
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                sentia는 산업 현장의 데이터를 의미 있는 판단으로 연결하는 체계적인 프로세스를 따릅니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {workProcess.map((process, index) => {
                const IconComponent = process.icon;
                return (
                  <div key={index} className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-navy/10 flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-navy" />
                      </div>
                      <span className="text-4xl font-bold text-navy/20">{process.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {process.title}
                    </h3>
                    <p className="text-sm text-navy font-medium mb-3">{process.titleKo}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {process.description}
                    </p>
                    {index < workProcess.length - 1 && (
                      <div className="hidden md:block absolute top-8 -right-4 text-border">
                        <ArrowRight size={24} />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 5: SENTIA Principles */}
        <section className="py-20 bg-surface">
          <div className="container-narrow section-padding">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                SENTIA의 원칙
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                sentia의 모든 기술 개발과 솔루션 제공은 다음 원칙에 기반합니다.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-background rounded-lg border border-border"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Page Connections */}
        <section className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                더 알아보기
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                이 페이지는 sentia가 <span className="text-foreground font-medium">왜</span> 존재하는지를 설명합니다. 
                sentia의 구체적인 역할과 기술에 대해 더 알아보세요.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
              {pageConnections.map((page, index) => (
                <Link
                  key={index}
                  to={page.href}
                  className="group p-6 bg-surface rounded-lg border border-border hover:border-navy/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-navy transition-colors">
                    {page.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {page.description}
                  </p>
                  <span className="inline-flex items-center text-sm text-navy font-medium">
                    자세히 보기
                    <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
