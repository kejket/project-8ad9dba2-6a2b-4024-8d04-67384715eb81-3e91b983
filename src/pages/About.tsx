import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import sentiaBrandImage from "@/assets/sentia-brand.png";

const About = () => {
  const principles = [
    {
      title: "최고의 전문성",
      description: "산업 현장의 복잡한 문제를 이해하고 해결하기 위해, 풍부한 현장 경험을 바탕으로  센싱 기술과 데이터 분석에 대한 깊은 전문성을 갖추고 있습니다."
    },
    {
      title: "현장 맞춤 최적의 솔루션",
      description: "모든 산업 현장은 고유한 특성을 가집니다. sentia는 각 현장의 조건과 요구에 맞춘 최적화된 솔루션을 제공합니다."
    },
    {
      title: "운영의 혁신과 가치 창출",
      description: "특화된 기술력과 합리적 서비스 비용을 바탕으로 운영의 혁신과 비용 절감과 수익 개선이라는 핵심적인 경제적 가치를 창출합니다."
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
      description: "sentia는 산업 현장의 물리적·운영적 조건을 정밀한 센싱 기술로 데이터화합니다.\n눈에 보이지 않는 미세한 변화와 잠재적 위험까지 현장에서 먼저 감지합니다."
    },
    {
      step: "02",
      title: "Understand",
      titleKo: "이해",
      description: "수집된 데이터는 검증과 분석을 거쳐 패턴과 이상 징후, 변화의 흐름으로 정리됩니다.\nsentia는 현장의 상황을 운영자가 신뢰할 수 있는 정보로 해석합니다."
    },
    {
      step: "03",
      title: "Decide",
      titleKo: "결정",
      description: "해석된 정보는 운영 판단과 대응을 위한 근거로 활용됩니다.\nsentia는 보다 안전하고 효율적인 의사결정이 가능하도록 현장에서 바로 사용할 수 있는 기준을 제공합니다."
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
        description="SENTIA는 현장을 이해하는 기술에서 출발합니다. 보이지 않는 위험과 미세한 변화를 감지하고, 그 이해를 신뢰할 수 있는 판단과 의사결정으로 연결합니다."
      />

      <main>
        {/* Section 2: What SENTIA Means */}
        <section className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="max-w-6xl">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
                {/* Image */}
                <div className="w-full lg:w-2/5 flex-shrink-0">
                  <img 
                    src={sentiaBrandImage} 
                    alt="Sentia Brand" 
                    className="w-full h-full rounded-lg object-cover"
                  />
                </div>
                {/* Text Content */}
                <div className="flex-1 lg:w-3/5 flex flex-col justify-between">
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                      SENTIA라는 이름의 의미
                    </h2>
                    <p>
                      SENTIA는 <span className="text-foreground font-medium">Sense</span>와 <span className="text-foreground font-medium">Intelligence</span>의 결합입니다. 단순히 데이터를 수집하는 것을 넘어, 센싱을 통해 얻은 정보를 의미 있는 이해로 전환하는 것이 sentia 기술의 핵심 역할입니다.
                    </p>
                    <p>
                      sentia는 산업 현장의 물리적 현상을 감지하고(<span className="text-foreground font-medium">Sense</span>), 이를 판단 가능한 정보(<span className="text-foreground font-medium">Intelligence</span>)로 변환하여 신뢰할 수 있는 운영 판단의 기반을 만듭니다.
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
                    sentia에게 기술은 현실을 정확히 이해하기 위한 도구입니다. 정확한 센싱은 신뢰할 수 있는 시스템의 출발점이며, 데이터의 품질과 정합성이 보장되지 않으면 그 위에 구축되는 모든 분석과 판단은 의미를 잃습니다.
                  </p>
                  <p>
                    sentia는 화려한 기술보다 현장에서 실제로 작동하는 기술, 검증 가능한 결과를 만드는 기술을 추구합니다. 적용 가능성, 신뢰성, 그리고 현장 전문가가 신뢰할 수 있는 결과. 이것이 sentia 기술의 기준입니다.
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-3 gap-4 pt-4">
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">적용 가능성</h4>
                    <p className="text-sm text-muted-foreground">실제 산업 환경에서 안정적으로 운영될 수 있는 기술</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
                    <h4 className="font-semibold text-foreground mb-2">신뢰성</h4>
                    <p className="text-sm text-muted-foreground">검증된 데이터와 일관된 결과를 제공하는 시스템</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg border border-border">
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
                <span translate="no">SENTIA WORKS</span>_ <span className="font-normal">센티아가 일하는 방식</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {workProcess.map((process, index) => (
                <div key={index} className="relative">
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-navy/20">{process.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-1" translate="no">
                    {process.title}
                  </h3>
                  <p className="text-sm text-navy font-medium mb-3"><span translate="no">{process.title}</span> ｜ {process.titleKo}</p>
                  <div className="text-muted-foreground leading-relaxed space-y-2">
                    {process.description.split('\n').map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                  {index < workProcess.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-4 text-border">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: SENTIA Principles */}
        <section className="py-20 bg-surface">
          <div className="container-narrow section-padding">
            <div className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                SENTIA의 기준
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                sentia의 모든 기술 개발과 솔루션 제공은 다음 기준에 기반합니다.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-card rounded-lg border border-border"
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

        {/* Section 6: Technology Responsibility */}
        <section className="py-20 bg-background">
          <div className="container-narrow section-padding">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
                기술의 책임에 대해
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  sentia는 기술이 단순한 효율 향상을 넘어 산업과 사회에 긍정적인 영향을 미쳐야 한다고 믿습니다.
                </p>
                <p>
                  생명 안전을 최우선 가치로 삼고, 환경 보호와 지속 가능한 산업 환경에 기여하는 기술을 지향합니다. 또한 지역 사회와 함께 성장하기 위해 사회공헌과 공공 안전 분야에서 기술이 기여할 수 있는 역할을 지속적으로 만들어가고자 합니다.
                </p>
                <p>
                  sentia의 기술은 사람을 이롭게 하고, 사회에 책임지는 방향으로 발전해야 합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Page Connections */}
        <section className="py-20 bg-surface">
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
