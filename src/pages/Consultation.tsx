import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
import { 
  ClipboardCheck, 
  PhoneCall, 
  Users,
  ArrowRight,
  Upload,
  X,
  FileText
} from "lucide-react";

const Consultation = () => {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    consultationType: "",
    environment: "",
    concerns: "",
  });
  const [files, setFiles] = useState<File[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "상담 요청이 접수되었습니다",
      description: "담당 엔지니어가 1~2영업일 내에 연락드리겠습니다.",
    });

    setFormData({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      consultationType: "",
      environment: "",
      concerns: "",
    });
    setFiles([]);
    setIsSubmitting(false);
  };

  const processSteps = [
    {
      icon: ClipboardCheck,
      step: "01",
      title: "상담 요청 접수",
      description: "요청서 검토 후 담당 엔지니어를 배정합니다",
    },
    {
      icon: PhoneCall,
      step: "02",
      title: "기술 검토 및 연락",
      description: "1~2영업일 내 유선 또는 이메일로 연락드립니다",
    },
    {
      icon: Users,
      step: "03",
      title: "맞춤 컨설팅 제공",
      description: "현장 방문 또는 원격으로 기술 상담을 진행합니다",
    },
  ];

  const consultationTypes = [
    { value: "technical", label: "기술 적합성 검토" },
    { value: "onsite", label: "현장 진단 요청" },
    { value: "integration", label: "시스템 연동 상담" },
    { value: "other", label: "기타" },
  ];

  const environments = [
    { value: "manufacturing", label: "제조 공정" },
    { value: "logistics", label: "물류·창고" },
    { value: "energy", label: "에너지·플랜트" },
    { value: "environment", label: "환경·수처리" },
    { value: "other", label: "기타" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container-narrow section-padding">
          <div className="max-w-3xl pt-12">
            <span className="inline-block text-sm font-medium text-industrial-light mb-4 tracking-wider">
              TECHNICAL CONSULTATION
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              기술 상담 요청
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              센싱 솔루션의 기술적 적합성이나 현장 적용 가능성에 대해 
              부담 없이 상담받으실 수 있습니다.
              현장 환경, 기존 시스템 연동, 센서 선정 등 기술적인 고민이 있으시다면 
              저희 엔지니어가 직접 검토하고 답변드립니다.
            </p>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container-narrow section-padding">

          {/* Process Steps */}
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative bg-card rounded-xl border border-border p-6 text-center"
              >
                <div className="w-12 h-12 rounded-full bg-industrial/10 flex items-center justify-center mx-auto mb-4">
                  <step.icon size={24} className="text-industrial" />
                </div>
                <span className="text-sm font-bold text-industrial mb-2 block">
                  STEP {step.step}
                </span>
                <h3 className="font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden sm:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight size={20} className="text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Form Section */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Company Name */}
                <div className="space-y-2">
                  <Label htmlFor="companyName">
                    회사명 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="예: ㈜센티아"
                    required
                  />
                </div>

                {/* Contact Name */}
                <div className="space-y-2">
                  <Label htmlFor="contactName">
                    담당자 성함 <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="contactName"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleChange}
                    placeholder="예: 홍길동"
                    required
                  />
                </div>

                {/* Contact Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">
                      이메일 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="예: contact@company.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">연락처</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="예: 010-1234-5678"
                    />
                  </div>
                </div>

                {/* Consultation Type & Environment Grid */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>상담 유형 선택</Label>
                    <Select
                      value={formData.consultationType}
                      onValueChange={(value) =>
                        handleSelectChange("consultationType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="상담 유형을 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {consultationTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>적용 환경 또는 현장 유형</Label>
                    <Select
                      value={formData.environment}
                      onValueChange={(value) =>
                        handleSelectChange("environment", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="환경 유형을 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {environments.map((env) => (
                          <SelectItem key={env.value} value={env.value}>
                            {env.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Concerns */}
                <div className="space-y-2">
                  <Label htmlFor="concerns">기술 또는 현장 관련 주요 고민</Label>
                  <Textarea
                    id="concerns"
                    name="concerns"
                    value={formData.concerns}
                    onChange={handleChange}
                    placeholder="현재 겪고 있는 문제나 검토하고 싶은 기술 사항을 자유롭게 적어주세요"
                    rows={5}
                  />
                </div>

                {/* File Upload */}
                <div className="space-y-2">
                  <Label>참고 자료 첨부 (선택)</Label>
                  <p className="text-sm text-muted-foreground mb-2">
                    현장 사진, 도면, 기존 시스템 자료 등을 첨부해 주시면 상담에 도움이 됩니다.
                  </p>
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif,.dwg,.dxf"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                    className="w-full"
                  >
                    <Upload size={18} className="mr-2" />
                    파일 첨부
                  </Button>
                  
                  {/* File List */}
                  {files.length > 0 && (
                    <div className="mt-3 space-y-2">
                      {files.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-secondary rounded-lg"
                        >
                          <div className="flex items-center gap-2">
                            <FileText size={16} className="text-muted-foreground" />
                            <span className="text-sm text-foreground truncate max-w-[200px]">
                              {file.name}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              ({(file.size / 1024).toFixed(1)} KB)
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="navy"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "요청 중..." : "상담 요청하기"}
                </Button>

                {/* Privacy Notice */}
                <p className="text-xs text-muted-foreground text-center">
                  제출하신 내용은 기술 상담 목적으로만 활용되며, 
                  별도 동의 없이 마케팅에 사용되지 않습니다.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Consultation;
