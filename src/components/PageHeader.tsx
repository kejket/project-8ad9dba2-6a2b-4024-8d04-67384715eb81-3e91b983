interface PageHeaderProps {
  label: string;
  title: string | React.ReactNode;
  description: string | React.ReactNode;
}

const PageHeader = ({ label, title, description }: PageHeaderProps) => {
  return (
    <section className="pt-24 pb-16 gradient-hero">
      <div className="container-narrow section-padding">
        <div className="max-w-3xl pt-12">
          <span className="inline-block text-sm font-medium text-industrial-light mb-4 tracking-wider" translate="no">
            {label}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            {title}
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHeader;
