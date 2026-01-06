import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Users, Calendar, Presentation } from "lucide-react";

const Demo = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    companyName: "",
    industry: "",
    name: "",
    position: "",
    email: "",
    phone: "",
    problem: "",
    timeline: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "데모 요청이 접수되었습니다",
      description: "1–2 영업일 내 담당자가 연락드리겠습니다.",
    });

    setFormData({
      companyName: "",
      industry: "",
      name: "",
      position: "",
      email: "",
      phone: "",
      problem: "",
      timeline: "",
    });
    setIsSubmitting(false);
  };

  const processSteps = [
    {
      icon: FileText,
      step: "01",
      title: "요청서 접수",
      description: "데모 요청 양식을 작성해 주시면 접수가 완료됩니다.",
    },
    {
      icon: Users,
      step: "02",
      title: "담당 엔지니어 배정",
      description: "1–2 영업일 내 담당 엔지니어가 배정됩니다.",
    },
    {
      icon: Calendar,
      step: "03",
      title: "사전 협의 및 일정 조율",
      description: "현장 환경과 요구사항을 파악하고 일정을 조율합니다.",
    },
    {
      icon: Presentation,
      step: "04",
      title: "데모 진행",
      description: "온라인 또는 현장 방문을 통해 데모를 진행합니다.",
    },
  ];

  const industries = [
    { value: "steel", label: "철강/금속" },
    { value: "automotive", label: "자동차" },
    { value: "semiconductor", label: "반도체" },
    { value: "chemical", label: "화학/에너지" },
    { value: "other", label: "기타" },
  ];

  const timelines = [
    { value: "immediate", label: "즉시 검토 중" },
    { value: "3months", label: "3개월 이내" },
    { value: "6months", label: "6개월 이내" },
    { value: "undecided", label: "아직 미정" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container-narrow section-padding">
          <div className="max-w-3xl pt-12">
            <span className="inline-block text-sm font-medium text-industrial-light mb-4 tracking-wider">
              DEMO REQUEST
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              데모 요청
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              현장 환경에 적합한 센싱 솔루션인지 확인하실 수 있도록,
              실제 데이터 기반의 데모를 제공해 드립니다.
            </p>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container-narrow section-padding">

          {/* Process Steps */}
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-lg font-semibold text-foreground text-center mb-8">
              진행 절차
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div
                  key={step.step}
                  className="relative bg-card border border-border rounded-lg p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-industrial/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon size={24} className="text-industrial" />
                  </div>
                  <div className="text-xs font-medium text-muted-foreground mb-2">
                    STEP {step.step}
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="max-w-2xl mx-auto">
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-xl p-8 shadow-sm space-y-6"
            >
              {/* Company Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="companyName" className="text-foreground">
                    회사명 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="예: ㈜센티아"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-foreground">
                    산업군
                  </Label>
                  <Select
                    value={formData.industry}
                    onValueChange={(value) =>
                      handleSelectChange("industry", value)
                    }
                  >
                    <SelectTrigger className="bg-background">
                      <SelectValue placeholder="선택하세요" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry.value} value={industry.value}>
                          {industry.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Contact Person Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">
                    담당자명 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="성함을 입력하세요"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="position" className="text-foreground">
                    직무 또는 직책
                  </Label>
                  <Input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="예: 설비기술팀 과장"
                    className="bg-background"
                  />
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">
                    업무 이메일 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@company.com"
                    required
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">
                    연락처
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    className="bg-background"
                  />
                </div>
              </div>

              {/* Problem Description */}
              <div className="space-y-2">
                <Label htmlFor="problem" className="text-foreground">
                  현재 해결하고 싶은 문제
                </Label>
                <Textarea
                  id="problem"
                  name="problem"
                  value={formData.problem}
                  onChange={handleChange}
                  placeholder="현장에서 겪고 계신 모니터링 또는 설비 관련 과제를 간략히 작성해 주세요."
                  rows={4}
                  className="bg-background resize-none"
                />
              </div>

              {/* Timeline */}
              <div className="space-y-2">
                <Label htmlFor="timeline" className="text-foreground">
                  도입 검토 시기
                </Label>
                <Select
                  value={formData.timeline}
                  onValueChange={(value) =>
                    handleSelectChange("timeline", value)
                  }
                >
                  <SelectTrigger className="bg-background">
                    <SelectValue placeholder="선택하세요" />
                  </SelectTrigger>
                  <SelectContent>
                    {timelines.map((timeline) => (
                      <SelectItem key={timeline.value} value={timeline.value}>
                        {timeline.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "전송 중..." : "데모 요청하기"}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                요청서 접수 후 1–2 영업일 내 담당자가 연락드립니다.
              </p>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Demo;
