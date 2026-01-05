import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container-narrow section-padding">
        <div className="relative overflow-hidden rounded-2xl gradient-hero p-8 sm:p-12 lg:p-16">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-industrial rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-industrial-light rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              센싱 솔루션 도입을 검토하고 계신가요?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              현장 환경과 요구사항에 맞는 최적의 솔루션을 제안해 드립니다.
              데모 시연 또는 기술 상담을 요청하세요.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/demo">
                <Button variant="hero" size="xl">
                  데모 요청하기
                  <ArrowRight size={20} />
                </Button>
              </Link>
              <Link to="/consultation">
                <Button variant="hero-outline" size="xl">
                  기술 상담 신청
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-primary-foreground/70">
              <a href="tel:+82-00-0000-0000" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone size={16} />
                <span className="text-sm">02-0000-0000</span>
              </a>
              <a href="mailto:contact@sentia.co.kr" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail size={16} />
                <span className="text-sm">contact@sentia.co.kr</span>
                <span className="text-sm">contact@e-snt.co.kr</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
