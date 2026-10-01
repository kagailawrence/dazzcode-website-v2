import Link from "next/link";
import { Github, Twitter, Linkedin, Instagram, Facebook, ArrowUpRight, Globe } from "lucide-react";
import Dazzcode from "@/components/ui/dazzcode-logo";

export function Footer() {
  return (
    <footer className="border-t border-[#E2EAE6] bg-[#FFFFFF] pt-20 pb-12 text-[#12201B]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block transition-transform hover:scale-105" aria-label="Dazzcode Home">
              <Dazzcode className="text-2xl" />
            </Link>
            <p className="text-sm text-[#52615B] max-w-sm leading-relaxed">
              Dazzcode is a software engineering company based in Kenya, building, auditing, deploying, and scaling SaaS products and web applications for businesses across East Africa, the UK, and the US.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Link
                href="https://twitter.com/dazzcode"
                target="_blank"
                rel="noreferrer"
                className="text-[#52615B] hover:text-[#059669] transition-colors p-2 rounded-lg hover:bg-[#F1F5F3]"
                aria-label="Twitter / X"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="https://instagram.com/dazzcode"
                target="_blank"
                rel="noreferrer"
                className="text-[#52615B] hover:text-[#059669] transition-colors p-2 rounded-lg hover:bg-[#F1F5F3]"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="https://facebook.com/dazzcodeofficial"
                target="_blank"
                rel="noreferrer"
                className="text-[#52615B] hover:text-[#059669] transition-colors p-2 rounded-lg hover:bg-[#F1F5F3]"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="https://github.com/dazzcode"
                target="_blank"
                rel="noreferrer"
                className="text-[#52615B] hover:text-[#059669] transition-colors p-2 rounded-lg hover:bg-[#F1F5F3]"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </Link>
              <Link
                href="https://linkedin.com/company/dazzcode"
                target="_blank"
                rel="noreferrer"
                className="text-[#52615B] hover:text-[#059669] transition-colors p-2 rounded-lg hover:bg-[#F1F5F3]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Global Services Col */}
          <div>
            <h3 className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#12201B]">
              Global Services
            </h3>
            <ul className="space-y-2.5 text-xs text-[#52615B] font-medium">
              <li>
                <Link href="/services/custom-saas-development" className="hover:text-[#059669] transition-colors">
                  Custom SaaS Development
                </Link>
              </li>
              <li>
                <Link href="/services/saas-mvp-development" className="hover:text-[#059669] transition-colors">
                  SaaS MVP Development
                </Link>
              </li>
              <li>
                <Link href="/services/saas-code-audit" className="hover:text-[#059669] transition-colors">
                  SaaS Code Audit
                </Link>
              </li>
              <li>
                <Link href="/services/saas-scaling" className="hover:text-[#059669] transition-colors">
                  SaaS Scaling & Speed
                </Link>
              </li>
              <li>
                <Link href="/services/vps-deployment" className="hover:text-[#059669] transition-colors">
                  VPS Server Deployment
                </Link>
              </li>
              <li>
                <Link href="/services/web-application-development" className="hover:text-[#059669] transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-[#059669] transition-colors">
                  AI & Automation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources Col */}
          <div>
            <h3 className="mb-5 text-[11px] font-black uppercase tracking-[0.2em] text-[#12201B]">
              Company & Work
            </h3>
            <ul className="space-y-2.5 text-xs text-[#52615B] font-medium">
              <li>
                <Link href="/case-studies" className="hover:text-[#059669] transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/case-studies/dazzpos" className="hover:text-[#059669] transition-colors">
                  DazzPOS Case Study
                </Link>
              </li>
              <li>
                <Link href="/case-studies/ai-lead-automation" className="hover:text-[#059669] transition-colors">
                  AI Lead Automation
                </Link>
              </li>
              <li>
                <Link href="/case-studies#how-we-build" className="hover:text-[#059669] transition-colors">
                  How We Build
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#059669] transition-colors">
                  Engineering Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#059669] transition-colors">
                  About Dazzcode
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#059669] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#059669] hover:bg-[#10B981] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-xs w-full"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="mt-16 border-t border-[#E2EAE6] pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#52615B] font-mono">
          <p>&copy; {new Date().getFullYear()} Dazzcode. All rights reserved</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#059669] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#059669] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
