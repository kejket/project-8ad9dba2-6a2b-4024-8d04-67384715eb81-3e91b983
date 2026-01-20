import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  return (
    <section className="relative gradient-hero overflow-hidden pt-[66px]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-industrial rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-industrial-light rounded-full blur-3xl animate-pulse-subtle" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--industrial-blue)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--industrial-blue)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="relative container-narrow section-padding w-full min-h-[calc(100vh-66px)] lg:min-h-[640px] xl:min-h-[720px] 2xl:min-h-[760px] lg:max-h-[760px] flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Content */}
          <div className="text-primary-foreground">
            <div className="inline-flex items-center gap-2 bg-industrial/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 animate-fade-in">
              <div className="w-2 h-2 rounded-full bg-industrial-light animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">지능형 센싱 솔루션</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              기술로 신뢰를 만들고, <span className="text-industrial-light">기술로 가치를 확장합니다</span>
            </h1>

            <p className="text-sm text-primary-foreground/60 mb-16 max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
              sentia는 센싱 기술을 기반으로 산업 현장을 정확하게 이해하고,
              <br />
              그 이해를 신뢰할 수 있는 솔루션으로 구현합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-12 pb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/demo">
                <Button variant="hero" size="xl" className="text-primary-foreground/60">
                  데모 요청
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/solutions">
                <Button variant="hero-outline" size="xl" className="text-primary-foreground/60">
                  솔루션 알아보기
                </Button>
              </Link>
            </div>

          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:flex items-center justify-center h-full">
            <div
              className="relative w-full h-full max-h-full animate-fade-in-right"
              style={{ animationDelay: "0.2s" }}
            >
              {/* Hero Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={heroImage} 
                  alt="Industrial sensing solution in manufacturing facility" 
                  className="w-full h-full object-contain"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                
                {/* Live Status Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 bg-surface-elevated/90 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-foreground">실시간 모니터링</span>
                </div>

                {/* Data Flow Indicator */}
                <div className="absolute bottom-4 left-4 right-4 bg-navy/80 backdrop-blur-md rounded-xl p-4 border border-primary-foreground/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-primary-foreground/70">센서 데이터 수집 현황</span>
                    <span className="text-xs text-industrial-light font-medium">LIVE</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center">
                      <p className="text-lg font-bold text-primary-foreground">247</p>
                      <p className="text-[10px] text-primary-foreground/50">활성 센서</p>
                    </div>
                    <div className="text-center border-x border-primary-foreground/10">
                      <p className="text-lg font-bold text-primary-foreground">1.2M</p>
                      <p className="text-[10px] text-primary-foreground/50">일일 데이터</p>
                    </div>
                    <div className="text-center">
                      <p className="text-lg font-bold text-industrial-light">정상</p>
                      <p className="text-[10px] text-primary-foreground/50">시스템 상태</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-industrial rounded-xl p-4 shadow-xl animate-float z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent-foreground/20 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-foreground">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-accent-foreground/70">진동 분석</p>
                    <p className="text-sm font-semibold text-accent-foreground">정상 범위</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-6 bg-surface-elevated rounded-xl p-4 shadow-card animate-float z-10" style={{ animationDelay: "2s" }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-industrial">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">안전 상태</p>
                    <p className="text-sm font-semibold text-foreground">이상 없음</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
