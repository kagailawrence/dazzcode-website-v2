import Link from "next/link";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";
import Dazzcode from "@/components/ui/dazzcode-logo";

export function Footer() {
  return (
    <footer className="border-t border-[#E2EAE6] bg-[#FFFFFF] pt-24 pb-12 text-[#12201B]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Dazzcode className="text-2xl" />
            </Link>
            <p className="text-sm text-[#52615B] max-w-sm leading-relaxed">
              We build, fix, and scale SaaS products and web applications for startups and growing businesses.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-[#52615B]">
              <span className="inline-block w-2 h-2 rounded-full bg-[#059669]" />
              <span>Kenya · Working with clients globally</span>
            </div>
            <div className="flex gap-3 pt-2">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#52615B] hover:text-[#059669] transition-colors p-2 rounded-lg hover:bg-[#F1F5F3]"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#52615B] hover:text-[#059669] transition-colors p-2 rounded-lg hover:bg-[#F1F5F3]"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-[#52615B] hover:text-[#059669] transition-colors p-2 rounded-lg hover:bg-[#F1F5F3]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Services Col */}
          <div>
            <h3 className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#12201B]">Services</h3>
            <ul className="space-y-3 text-sm text-[#52615B] font-medium">
              <li>
                <Link href="/services/saas-development" className="hover:text-[#059669] transition-colors">
                  SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/services/saas-development" className="hover:text-[#059669] transition-colors">
                  SaaS MVP
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance-scaling" className="hover:text-[#059669] transition-colors">
                  SaaS Audit & Rescue
                </Link>
              </li>
              <li>
                <Link href="/services/saas-api-development" className="hover:text-[#059669] transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/saas-platform-engineering" className="hover:text-[#059669] transition-colors">
                  AI & Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Col */}
          <div>
            <h3 className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#12201B]">Company</h3>
            <ul className="space-y-3 text-sm text-[#52615B] font-medium">
              <li>
                <Link href="/case-studies" className="hover:text-[#059669] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/case-studies#how-we-build" className="hover:text-[#059669] transition-colors">
                  How We Build
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#059669] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#059669] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#059669] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Action Col */}
          <div>
            <h3 className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#12201B]">Start Building</h3>
            <p className="text-xs text-[#52615B] mb-4 leading-relaxed">
              Have a project in mind? Tell us what you are working on.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#10B981] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="mt-16 border-t border-[#E2EAE6] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#52615B] font-mono">
          <p>&copy; {new Date().getFullYear()} Dazzcode. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#059669] transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-[#059669] transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
