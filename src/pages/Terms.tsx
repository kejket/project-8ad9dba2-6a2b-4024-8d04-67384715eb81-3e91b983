import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="container-narrow section-padding">
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-medium text-industrial-light uppercase tracking-wider mb-4">
              Terms of Service
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              이용약관
            </h1>
            <p className="text-lg text-primary-foreground/80">
              sentia 서비스 이용에 관한 약관입니다.
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
                <h2 className="text-2xl font-bold text-foreground mb-4">제1조 (목적)</h2>
                <p className="text-muted-foreground leading-relaxed">
                  이 약관은 sentia(이하 "회사")가 제공하는 서비스(이하 "서비스")의 이용조건 및 절차, 회사와 이용자의 권리, 의무 및 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">제2조 (용어의 정의)</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>"서비스"란 회사가 제공하는 산업용 센싱 솔루션 및 관련 서비스를 말합니다.</li>
                  <li>"이용자"란 회사의 서비스에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 이용하는 고객을 말합니다.</li>
                  <li>"회원"이란 회사와 서비스 이용계약을 체결하고 회원 아이디를 부여받은 이용자를 말합니다.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">제3조 (약관의 효력 및 변경)</h2>
                <ul className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>이 약관은 서비스 화면에 게시하거나 기타의 방법으로 공지함으로써 효력이 발생합니다.</li>
                  <li>회사는 합리적인 사유가 발생할 경우에는 이 약관을 변경할 수 있으며, 약관을 변경할 경우에는 적용일자 및 변경사유를 명시하여 현행 약관과 함께 서비스 내에 그 적용일자 7일 전부터 공지합니다.</li>
                  <li>이용자는 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 이용계약을 해지할 수 있습니다.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">제4조 (서비스의 제공)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  회사는 다음과 같은 서비스를 제공합니다.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>산업용 센싱 솔루션 제공</li>
                  <li>데이터 수집 및 분석 서비스</li>
                  <li>디지털 트윈 플랫폼 서비스</li>
                  <li>기술 상담 및 컨설팅 서비스</li>
                  <li>기타 회사가 정하는 서비스</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">제5조 (서비스 이용시간)</h2>
                <ul className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>서비스의 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간을 원칙으로 합니다.</li>
                  <li>전항의 서비스 이용시간은 정기점검 등의 필요로 인하여 회사가 정한 날 또는 시간에 제한될 수 있습니다.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">제6조 (이용자의 의무)</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  이용자는 다음 각 호의 행위를 하여서는 안 됩니다.
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>신청 또는 변경 시 허위내용의 등록</li>
                  <li>타인의 정보 도용</li>
                  <li>회사가 게시한 정보의 변경</li>
                  <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시</li>
                  <li>회사 및 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                  <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">제7조 (회사의 의무)</h2>
                <ul className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>회사는 이 약관에서 정한 바에 따라 계속적이고 안정적인 서비스의 제공을 위하여 최선을 다합니다.</li>
                  <li>회사는 이용자로부터 제기되는 의견이나 불만이 정당하다고 인정할 경우에는 즉시 처리하여야 합니다.</li>
                  <li>회사는 이용자의 개인정보 보호를 위해 보안시스템을 구축하며 개인정보처리방침을 공시하고 준수합니다.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">제8조 (저작권의 귀속)</h2>
                <ul className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>서비스에 대한 저작권 및 지적재산권은 회사에 귀속됩니다.</li>
                  <li>이용자는 서비스를 이용함으로써 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안 됩니다.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">제9조 (면책조항)</h2>
                <ul className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
                  <li>회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</li>
                  <li>회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">제10조 (분쟁해결)</h2>
                <ul className="list-decimal list-inside text-muted-foreground space-y-2">
                  <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 대한민국 법률을 적용합니다.</li>
                  <li>서비스 이용 중 발생한 분쟁에 대해 소송이 제기될 경우 회사의 본사 소재지를 관할하는 법원을 관할 법원으로 합니다.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">부칙</h2>
                <p className="text-muted-foreground leading-relaxed">
                  이 약관은 2024년 1월 1일부터 시행합니다.
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

export default Terms;
