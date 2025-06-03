import { ZapIcon } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-sm relative">
      {/* Top border glow */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

      {/* Corner elements */}
      <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-primary/40"></div>
      <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-primary/40"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-primary/40"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-primary/40"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-1.5 bg-primary/10 rounded-md group-hover:bg-primary/20 transition-colors">
                <ZapIcon className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold font-mono">
                code<span className="text-primary">flex</span>.ai
              </span>
            </Link>
            <div className="h-px w-full md:w-48 bg-gradient-to-r from-transparent via-border to-transparent my-1"></div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} codeflex.ai - All rights reserved
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-4 text-sm">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary group-hover:w-2 transition-all"></span>
                {link.label}
              </Link>
            ))}
          </div>

          {/* Status */}
          <div className="flex flex-col items-center gap-3 p-4 border border-border rounded-md bg-background/50 backdrop-blur-sm relative">
            <div className="absolute -inset-px bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-md blur-sm"></div>
            <div className="relative flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-mono">SYSTEM OPERATIONAL</span>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent"></div>
            <div className="text-xs text-center text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Bottom section with additional info */}
        <div className="mt-10 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground max-w-xl mx-auto">
            CodeFlex.ai uses advanced AI technology to create personalized fitness and nutrition plans.
            Our platform is designed to help you achieve your fitness goals efficiently.
          </p>
        </div>
      </div>
    </footer>
  );
};

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Help", href: "/help" },
];

export default Footer;