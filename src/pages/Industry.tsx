import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import IndustryQuickNav from "@/components/IndustryQuickNav";
import IndustryPageContent from "@/components/IndustryPageContent";

const Industry = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PageHeader
          label="INDUSTRIES"
          title="산업별 센싱 솔루션"
          description={
            <>
              sentia의 센싱 솔루션은 산업별 현장 환경과 운영 조건을 고려해 설계됩니다.
              <br className="hidden sm:block" />
              각 산업이 가진 고유한 문제를 데이터 기반으로 이해하고, 실질적인 운영 개선을 지원합니다.
            </>
          }
        />
        <IndustryQuickNav />
        <IndustryPageContent />
      </main>
      <Footer />
    </div>
  );
};

export default Industry;
