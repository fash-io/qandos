import logo from "../assets/logo-qandos.png";

export function SiteFooter() {
  return (
    <footer
      className="mt-32 border-t border-border text-ink/80"
      style={{ background: "var(--cream2)" }}
    >
      <div className="container-q py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 h-fit">
            <a href="/" className="flex items-center gap-2 w-40 h-fit">
              <img src={logo} alt="" className="size-fit object-contain" />
            </a>
          </div>
          <p className="mt-4 max-w-sm text-sm ">
            Verify property ownership, documentation and legitimacy before you
            pay. Built for buyers, agents and developers who refuse to gamble
            with title.
          </p>
        </div>
        <div>
          <h4
            className="text-xs uppercase tracking-[0.18em]"
            style={{ color: "var(--gold)" }}
          >
            Product
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/how-it-works" className="hover:text-ink">
                How it works
              </a>
            </li>
            <li>
              <a href="/how-it-works" className="hover:text-ink">
                Verification reports
              </a>
            </li>
            <li>
              <a href="/how-it-works" className="hover:text-ink">
                Escrow protection
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4
            className="text-xs uppercase tracking-[0.18em]"
            style={{ color: "var(--gold)" }}
          >
            Company
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/about" className="hover:text-ink">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-ink">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        className="border-t"
        style={{ borderColor: "oklch(0.985 0.012 95 / 0.1)" }}
      >
        <div className="container-q py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <p>
            © {new Date().getFullYear()} QANDOS Verification Ltd. All rights
            reserved.
          </p>
          <p>Verify before you pay.</p>
        </div>
      </div>
    </footer>
  );
}
