import Image from "next/image";

interface BrandProps {
  inverse?: boolean;
}

export function Brand({ inverse = false }: BrandProps) {
  return (
    <a
      className={`brand ${inverse ? "brand-inverse" : ""}`}
      href="#inicio"
      aria-label="DENTI CENTER, inicio"
    >
      <Image
        src="/denti-center-logo.png"
        alt="DENTI CENTER - Para su mejor sonrisa"
        width={1536}
        height={1024}
        className="brand-logo"
        priority
      />
    </a>
  );
}
