import Image from "next/image";
import heroImage from "../assets/hero.jpg";
import logoImage from "../assets/Accountabilty.jpg";

export default function Hero() {
  const navItems = ["Home", "About", "Opportunities", "Testimonials", "Contact"];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <Image
        src={heroImage}
        alt="People collaborating and keeping each other accountable"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered content container */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl rounded-3xl bg-white/80 px-6 py-6 shadow-2xl backdrop-blur-md sm:px-10 sm:py-8 lg:px-14 lg:py-10">
          {/* Top header / nav */}
          <header className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 overflow-hidden rounded-full bg-muted shadow-md sm:h-12 sm:w-12">
                <Image
                  src={logoImage}
                  alt="Accountability Buddies logo"
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-lg font-semibold tracking-tight text-primary sm:text-xl">
                Accountability Buddies
              </span>
            </div>

            <nav className="flex w-full items-center justify-center md:w-auto md:justify-end">
              <ul className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-accent sm:gap-6 lg:gap-8">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(" ", "-")}`}
                      className="transition-colors hover:text-primary"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </header>

          {/* Main hero content */}
          <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-2 md:items-start">
            <div className="space-y-4">
              <h1
                id="home"
                className="text-3xl font-semibold tracking-tight text-primary sm:text-4xl lg:text-5xl"
              >
                Who we are at Accountability Buddies
              </h1>
              <p className="max-w-md text-sm text-accent sm:text-base">
                Your partners in consistency, growth, and meaningful progress. We
                bring structure and support to the goals that matter most to you.
              </p>
            </div>

            <div className="rounded-2xl bg-(--color-cream)/90 p-6 shadow-lg sm:p-7 lg:p-8">
              <h2
                id="about"
                className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent"
              >
                Mission Statement
              </h2>
              <p className="text-sm leading-relaxed text-primary sm:text-base">
                {/* Placeholder mission text to be replaced with final copy */}
                At Accountability Buddies, our mission is to create a safe,
                encouraging space where people can show up for themselves and
                each other. Through intentional check-ins, shared milestones,
                and honest reflection, we help you turn intentions into
                outcomes—one small, accountable step at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
