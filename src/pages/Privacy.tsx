import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="container-narrow section-padding">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-industrial-light uppercase tracking-wider mb-4">
              Privacy Policy
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              개인정보처리방침
            </h1>
            <p className="text-lg text-primary-foreground/80">
              sentia는 고객의 개인정보를 소중히 여기며, 관련 법규를 준수합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 lg:py-24">
        <div className="container-narrow section-padding">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <div className="space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">1. 개인정보의 수집 및 이용 목적</h2>
                <p className="text-muted-foreground leading-relaxed">
                  sentia는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>서비스 제공 및 계약의 이행</li>
                  <li>회원 관리 및 본인 확인</li>
                  <li>고객 문의 및 불만 처리</li>
                  <li>마케팅 및 광고 활용 (동의 시)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">2. 수집하는 개인정보 항목</h2>
                <p className="text-muted-foreground leading-relaxed">
                  sentia는 서비스 제공을 위해 다음과 같은 개인정보를 수집하고 있습니다.
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>필수항목: 이름, 이메일 주소, 연락처, 회사명</li>
                  <li>선택항목: 직책, 부서, 문의 내용</li>
                  <li>자동 수집 항목: 접속 IP, 쿠키, 서비스 이용 기록</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. 개인정보의 보유 및 이용 기간</h2>
                <p className="text-muted-foreground leading-relaxed">
                  sentia는 법령에 따른 개인정보 보유·이용 기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용 기간 내에서 개인정보를 처리·보유합니다.
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
                  <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
                  <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
                  <li>웹사이트 방문기록: 3개월</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">4. 개인정보의 제3자 제공</h2>
                <p className="text-muted-foreground leading-relaxed">
                  sentia는 원칙적으로 정보주체의 개인정보를 수집·이용 목적으로 명시한 범위 내에서 처리하며, 정보주체의 사전 동의 없이는 본래의 범위를 초과하여 처리하거나 제3자에게 제공하지 않습니다. 단, 다음의 경우에는 예외로 합니다.
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>정보주체로부터 별도의 동의를 받은 경우</li>
                  <li>법률에 특별한 규정이 있는 경우</li>
                  <li>정보주체 또는 그 법정대리인이 의사표시를 할 수 없는 상태에 있거나 주소불명 등으로 사전 동의를 받을 수 없는 경우로서 명백히 정보주체 또는 제3자의 급박한 생명, 신체, 재산의 이익을 위하여 필요하다고 인정되는 경우</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">5. 개인정보의 안전성 확보 조치</h2>
                <p className="text-muted-foreground leading-relaxed">
                  sentia는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>개인정보 취급 직원의 최소화 및 교육</li>
                  <li>내부관리계획의 수립 및 시행</li>
                  <li>개인정보에 대한 접근 제한</li>
                  <li>개인정보의 암호화</li>
                  <li>보안프로그램 설치 및 갱신</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">6. 정보주체의 권리·의무 및 행사방법</h2>
                <p className="text-muted-foreground leading-relaxed">
                  정보주체는 sentia에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                </p>
                <ul className="list-disc list-inside text-muted-foreground mt-4 space-y-2">
                  <li>개인정보 열람 요구</li>
                  <li>오류 등이 있을 경우 정정 요구</li>
                  <li>삭제 요구</li>
                  <li>처리정지 요구</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">7. 개인정보 보호책임자</h2>
                <p className="text-muted-foreground leading-relaxed">
                  sentia는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                </p>
                <div className="bg-surface-elevated rounded-lg p-6 mt-4">
                  <p className="text-foreground font-medium">개인정보 보호책임자</p>
                  <p className="text-muted-foreground mt-2">이메일: contact@sentia.com</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">8. 개인정보처리방침의 변경</h2>
                <p className="text-muted-foreground leading-relaxed">
                  이 개인정보처리방침은 2024년 1월 1일부터 적용됩니다. 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
