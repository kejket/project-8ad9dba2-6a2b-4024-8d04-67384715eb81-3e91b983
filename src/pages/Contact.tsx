import { useState } from "react";
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
  Mail, 
  Phone, 
  MapPin,
  ArrowRight,
  Calendar,
  Headphones
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, inquiryType: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "문의가 접수되었습니다",
      description: "담당자가 확인 후 빠르게 답변드리겠습니다.",
    });

    setFormData({
      name: "",
      email: "",
      inquiryType: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const inquiryTypes = [
    { value: "general", label: "일반 문의" },
    { value: "partnership", label: "제휴 제안" },
    { value: "other", label: "기타" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "이메일",
      value: "contact@sentia.co.kr",
      href: "mailto:contact@sentia.co.kr",
    },
    {
      icon: Phone,
      label: "전화",
      value: "02-0000-0000",
      href: "tel:+82-2-0000-0000",
    },
    {
      icon: MapPin,
      label: "주소",
      value: "서울특별시 강남구 테헤란로 000",
      href: null,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <section className="pt-24 pb-16 gradient-hero">
        <div className="container-narrow section-padding">
          <div className="max-w-3xl pt-12">
            <span className="inline-block text-sm font-medium text-industrial-light mb-4 tracking-wider">
              CONTACT
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              문의하기
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
              일반 문의, 제휴 제안, 기타 의견을 남겨주세요.
              담당자가 확인 후 빠르게 답변드리겠습니다.
            </p>
          </div>
        </div>
      </section>

      <main className="py-16">
        <div className="container-narrow section-padding">

          <div className="grid lg:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl border border-border p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">
                      이름 <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="예: 홍길동"
                      required
                    />
                  </div>

                  {/* Email */}
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

                  {/* Inquiry Type */}
                  <div className="space-y-2">
                    <Label>
                      문의 유형 <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={formData.inquiryType}
                      onValueChange={handleSelectChange}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="문의 유형을 선택하세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      문의 내용 <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="문의하실 내용을 자유롭게 작성해 주세요"
                      rows={5}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="navy"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "전송 중..." : "문의 보내기"}
                  </Button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Contact Info */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">연락처</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-industrial/10 flex items-center justify-center flex-shrink-0">
                        <info.icon size={18} className="text-industrial" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="text-foreground hover:text-industrial transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Alternative CTA */}
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-2">
                  솔루션 도입을 검토 중이신가요?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  데모 시연이나 기술 상담은 전담 팀에서 더 빠르게 도와드립니다.
                </p>
                <div className="space-y-2">
                  <Link to="/demo" className="block">
                    <Button variant="outline" size="sm" className="w-full justify-between">
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        데모 요청
                      </span>
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                  <Link to="/consultation" className="block">
                    <Button variant="outline" size="sm" className="w-full justify-between">
                      <span className="flex items-center gap-2">
                        <Headphones size={16} />
                        기술 상담
                      </span>
                      <ArrowRight size={16} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
