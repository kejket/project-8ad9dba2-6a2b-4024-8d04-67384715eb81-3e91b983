import { LucideIcon, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface UseCase {
  title: string;
  description: string;
}

interface IndustryDetailProps {
  id: string;
  icon: LucideIcon;
  name: string;
  overview: string;
  challenges: string[];
  approach: string;
  useCases: UseCase[];
  benefits: string[];
  isHighlighted?: boolean;
}

const IndustryDetailSection = ({
  id,
  icon: Icon,
  name,
  overview,
  challenges,
  approach,
  useCases,
  benefits,
  isHighlighted = false,
}: IndustryDetailProps) => {
  return (
    <section
      id={id}
      className={`py-20 ${isHighlighted ? "bg-industrial/[0.02]" : "bg-background"} border-b border-border last:border-b-0`}
    >
      <div className="container-narrow section-padding">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="w-14 h-14 rounded-xl bg-industrial/10 flex items-center justify-center">
            <Icon size={28} className="text-industrial" />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {name}
            </h2>
            {isHighlighted && (
              <span className="text-sm text-industrial font-medium">중점 산업</span>
            )}
          </div>
        </div>

        {/* Overview & Challenges */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">산업 개요</h3>
            <p className="text-muted-foreground leading-relaxed">
              {overview}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">핵심 과제</h3>
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-industrial mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Approach */}
        <div className="bg-secondary/50 rounded-xl p-6 mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-4">sentia 적용 방식</h3>
          <p className="text-muted-foreground leading-relaxed">
            {approach}
          </p>
        </div>

        {/* Use Cases */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">주요 활용 시나리오</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-border bg-card hover:border-industrial/30 transition-colors"
              >
                <h4 className="font-medium text-foreground mb-2">{useCase.title}</h4>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-6">기대 효과</h3>
          <div className="flex flex-wrap gap-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-industrial/5 border border-industrial/20"
              >
                <CheckCircle2 size={16} className="text-industrial" />
                <span className="text-sm font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          <Button asChild size="lg" className="bg-industrial hover:bg-industrial/90">
            <Link to="/consultation">
              현장진단 및 상담요청
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">
              기술상담
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IndustryDetailSection;
