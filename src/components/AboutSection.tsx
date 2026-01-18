import { Heart, Target, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 gradient-subtle">
      <div className="container-narrow section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-sm font-medium text-industrial mb-4" translate="no">ABOUT SENTIA</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              사람을 이롭게 하는 기술
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sentia는 기술의 정확성만큼, 기술의 책임을 중요하게 생각합니다.
            </p>

            {/* Values */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0">
                  <Heart size={20} className="text-industrial" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">최고의 전문성</h3>
                  <p className="text-sm text-muted-foreground">
                    풍부한 현장 경험을 바탕으로 신뢰할 수 있는 기술적 기반을 제공합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0">
                  <Target size={20} className="text-industrial" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">현장 맞춤 최적화</h3>
                  <p className="text-sm text-muted-foreground">
                    안전성과 효율성을 높인 현장 맞춤식 최적의 솔루션을 설계합니다.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0">
                  <Users size={20} className="text-industrial" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">운영 혁신과 가치 창출</h3>
                  <p className="text-sm text-muted-foreground">
                    특화된 기술력을 바탕으로 비용 절감과 수익 개선의 경제적 가치를 창출합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-navy rounded-2xl p-8 text-primary-foreground">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <p className="text-4xl font-bold text-industrial-light mb-2">10+</p>
                  <p className="text-sm text-primary-foreground/70">현장 구현 경험</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <p className="text-4xl font-bold text-industrial-light mb-2">100+</p>
                  <p className="text-sm text-primary-foreground/70">적용 현장 수</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <p className="text-4xl font-bold text-industrial-light mb-2">50+</p>
                  <p className="text-sm text-primary-foreground/70">기술 협력 파트너</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                  <p className="text-4xl font-bold text-industrial-light mb-2">24/7</p>
                  <p className="text-sm text-primary-foreground/70">운영 지원 체계</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-primary-foreground/10">
                <p className="text-center text-sm text-primary-foreground/60">
                  "기술의 발전은 효율을 넘어 안전, 지속 가능성, 삶의 질로 이어져야 합니다"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
