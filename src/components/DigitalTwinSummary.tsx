import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Eye, Settings, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const useCases = [
  "설비 상태의 실시간 시각화로 현장 파악 시간 단축",
  "운영 조건 변경 전 예상 결과를 사전 검토",
  "유지보수 우선순위 판단을 위한 참고 정보 제공",
  "이상 징후 발생 시 원인 추적 및 대응 지원",
];

const DigitalTwinSummary = () => {
  return (
    <section id="digital-twin" className="py-20 bg-background">
      <div className="container-narrow section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Summary */}
          <div>
            <span className="inline-block text-sm font-medium text-industrial mb-4 tracking-wider">
              DIGITAL TWIN
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6">
              디지털 트윈을 통한 운영 판단 지원
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              sentia의 디지털 트윈은 현장에서 수집된 센싱 데이터를 기반으로 
              설비 상태를 시각화하고, 운영 의사결정에 필요한 정보를 제공합니다. 
              복잡한 기술 구현보다는 현장에서 실제로 활용할 수 있는 
              실용적인 도구로서 설계되었습니다.
            </p>

            {/* Key Value Props */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <Eye className="w-6 h-6 text-industrial mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">상태 가시화</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <Settings className="w-6 h-6 text-industrial mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">사전 검토</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-secondary/50">
                <TrendingUp className="w-6 h-6 text-industrial mx-auto mb-2" />
                <p className="text-xs text-muted-foreground">판단 지원</p>
              </div>
            </div>

            <Link to="/technology#digital-twin">
              <Button variant="outline" className="group">
                디지털 트윈 기술 자세히 보기
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Right: Use Cases */}
          <div className="bg-card rounded-xl border border-border p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center">
                <Cpu className="w-5 h-5 text-industrial" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">제조 현장 활용 사례</h3>
            </div>
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-industrial/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-industrial">
                      {index + 1}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{useCase}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwinSummary;
