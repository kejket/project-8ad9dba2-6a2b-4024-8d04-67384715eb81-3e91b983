import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SensorModulesSection from "@/components/SensorModulesSection";
import SoftwareTechnologySection from "@/components/SoftwareTechnologySection";
import IntegrationArchitectureSection from "@/components/IntegrationArchitectureSection";
import DigitalTwinSection from "@/components/DigitalTwinSection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

const Technology = () => {
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
          label="CORE TECHNOLOGY"
          title="센싱 기술과 디지털 트윈, 산업 현장 데이터를 다루는 핵심 기술"
          description={<>센서 데이터의 수집, 전송, 분석, 시각화까지<br />현장 데이터를 안정적으로 처리하기 위한 기술 흐름을 설명합니다.</>}
        />
        <SensorModulesSection />
        <SoftwareTechnologySection />
        <IntegrationArchitectureSection />
        <DigitalTwinSection />

        {/* Bottom CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="container-narrow section-padding">
            <div className="text-center max-w-2xl mx-auto p-10 rounded-2xl border border-border bg-card shadow-sm">
              <Shield size={40} className="mx-auto mb-6 text-industrial" />
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                현장에 적용 가능한 기술인지 확인해 보세요
              </h2>
              <p className="text-muted-foreground mb-8">
                센싱 구성과 데이터 흐름을 기술 관점에서 상담해드립니다.
              </p>
              <Link to="/consultation">
                <Button size="lg" className="bg-industrial hover:bg-industrial-dark text-white">
                  기술 상담 요청
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

export default Technology;
