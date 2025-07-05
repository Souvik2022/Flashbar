import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-base-300 bg-base-100/95 backdrop-blur supports-[backdrop-filter]:bg-base-100/60">
      <div className="container mx-auto">
        <div className="navbar min-h-12">
          <div className="navbar-start">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-xl">Flashbar</span>
            </Link>
          </div>

          <div className="navbar-end">
            <Link href="/dashboard" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
