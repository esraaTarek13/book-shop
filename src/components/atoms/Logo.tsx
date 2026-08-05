import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 120, height = 50 }: LogoProps) {
  return (
    <Link href="/" aria-label="Bookshop home">
      <Image
        src="/images/logo.png"
        alt="Bookshop"
        width={width}
        height={height}
        className="h-auto object-contain"
        priority
      />
    </Link>
  );
}
