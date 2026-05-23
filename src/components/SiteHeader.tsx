const nav = [
  { to: "/", label: "Home" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;
import logo from "../assets/logo-qandos.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-background/80 border-b border-border">
      <div className="container-q flex h-16 items-center justify-between">
        <a href="/" className="flex items-center gap-2 w-40">
          <img src={logo} alt="" className="size-fit object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {nav.map((n) => (
            <a
              key={n.to}
              href={n.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a href="/contact" className="btn-primary text-xs px-5 py-2.5">
          Verify a property
        </a>
      </div>
    </header>
  );
}
