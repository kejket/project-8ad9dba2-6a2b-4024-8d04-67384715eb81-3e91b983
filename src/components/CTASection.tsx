import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container-narrow section-padding">
        <div className="text-center max-w-2xl mx-auto p-10 rounded-2xl border border-border bg-card shadow-sm">
          <Shield size={40} className="mx-auto mb-6 text-industrial" />
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            센싱 솔루션 도입을 검토하고 계신가요?
          </h2>
          <p className="text-muted-foreground mb-8">
            현장 환경과 요구사항에 맞는 최적의 솔루션을 제안해 드립니다.
            <br />
            데모 시연 또는 기술 상담을 요청하세요.
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
  );
};

export default CTASection;
