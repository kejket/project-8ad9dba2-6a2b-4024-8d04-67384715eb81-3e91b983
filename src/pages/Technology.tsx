import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import SensorModulesSection from "@/components/SensorModulesSection";
import SoftwareTechnologySection from "@/components/SoftwareTechnologySection";
import IntegrationArchitectureSection from "@/components/IntegrationArchitectureSection";
import DigitalTwinSection from "@/components/DigitalTwinSection";

const Technology = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHeader
          label="CORE TECHNOLOGY"
          title="현장 데이터를 기반으로, 신뢰할 수 있는 운영 판단의 근거를 제공합니다"
          description="센서 데이터의 수집–전송–분석–시각화 흐름을 통해, 운영자의 의사결정에 필요한 신뢰 가능한 정보를 제공합니다."
        />
        <SensorModulesSection />
        <SoftwareTechnologySection />
        <IntegrationArchitectureSection />
        <DigitalTwinSection />
      </main>
      <Footer />
    </div>
  );
};

export default Technology;
