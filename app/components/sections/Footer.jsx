import { ArrowUpRight, Github, Instagram, Linkedin, Mail } from "lucide-react";

const links = [
  { label: "GitHub", href: "https://github.com/vikramisdev", icon: Github },
  { label: "Instagram", href: "https://instagram.com/vikramisdev", icon: Instagram },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vikramisdev", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer id="contact" className="px-4 pb-5 pt-10 sm:px-6 sm:pt-16 lg:px-8">
      <div className="section-container overflow-hidden rounded-[2rem] bg-zinc-950 px-6 py-12 text-white dark:bg-zinc-900 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div><p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-400"><span className="h-2 w-2 rounded-full bg-orange-500" /> Have a project in mind?</p><h2 className="mt-5 max-w-3xl text-[clamp(2.7rem,7vw,5.8rem)] font-semibold leading-[0.95] tracking-[-0.065em]">Let’s make<br /><span className="text-orange-400">something useful.</span></h2><a href="mailto:vs423502@gmail.com" className="mt-8 inline-flex min-h-12 items-center gap-3 rounded-full bg-orange-600 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-500"><Mail size={17} /> vs423502@gmail.com <ArrowUpRight size={16} /></a></div>
          <div className="flex flex-wrap gap-2 lg:justify-end">{links.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-white/15 px-4 text-sm text-white/80 transition hover:border-orange-400 hover:text-orange-300"><Icon size={16} />{label}<ArrowUpRight size={14} /></a>)}</div>
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><span>© {new Date().getFullYear()} Vikram Vishwakarma</span><span>Designed with intent. Built with curiosity.</span><a href="#home" className="w-fit transition hover:text-orange-300">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
