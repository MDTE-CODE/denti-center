interface SectionIntroProps {
  eyebrow: string;
  title: string;
  copy?: string;
  center?: boolean;
}

export function SectionIntro({
  eyebrow,
  title,
  copy,
  center = false,
}: SectionIntroProps) {
  return (
    <div className={`section-intro ${center ? "center" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
