"use client";

import { useState } from "react";
import {
  Server,
  Database,
  Lock,
  Globe,
  Terminal,
  Layers,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  RefreshCw,
  Zap,
  HardDrive,
  GitBranch,
  Radio,
  FileCode2,
  Box,
  Network
} from "lucide-react";

export default function VpsDeploymentHeroPreview() {
  const [activeTab, setActiveTab] = useState<"topology" | "docker" | "nginx" | "security">("topology");

  return (
    <div className="relative w-full max-w-5xl mx-auto mt-10">
      {/* Decorative gradient glow */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-[#059669]/20 via-[#10B981]/20 to-[#047857]/20 rounded-3xl blur-xl opacity-70 pointer-events-none" />

      {/* Main Container */}
      <div className="relative rounded-2xl bg-[#FFFFFF] border border-[#E2EAE6] shadow-xl overflow-hidden text-[#12201B]">
        {/* Top Browser Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#F8FAF9] border-b border-[#E2EAE6]">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]/80" />
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]/80" />
            <div className="w-3 h-3 rounded-full bg-[#10B981]/80" />
            <span className="ml-2 text-xs font-mono text-[#52615B] hidden sm:inline">
              ssh dazzcode@production-vps:~/saas-stack
            </span>
          </div>

          {/* Interactive Mode Switcher */}
          <div className="flex items-center gap-1 bg-[#FFFFFF] p-1 rounded-xl border border-[#E2EAE6] text-xs font-medium overflow-x-auto">
            <button
              onClick={() => setActiveTab("topology")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "topology"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              <span>Production Topology</span>
            </button>
            <button
              onClick={() => setActiveTab("docker")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "docker"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Box className="w-3.5 h-3.5" />
              <span>Docker Compose</span>
            </button>
            <button
              onClick={() => setActiveTab("nginx")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "nginx"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Nginx & SSL</span>
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                activeTab === "security"
                  ? "bg-[#059669] text-white shadow-xs font-semibold"
                  : "text-[#52615B] hover:text-[#12201B] hover:bg-[#F8FAF9]"
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Security & UFW</span>
            </button>
          </div>
        </div>

        {/* Status Header Banner */}
        <div className="px-6 py-3 bg-[#F0FDF4] border-b border-[#DCFCE7] flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold text-[#047857]">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              HOST: Ubuntu 24.04 LTS (NVMe VPS)
            </span>
            <span className="text-[#52615B] hidden md:inline">|</span>
            <span className="text-[#52615B] hidden md:inline">Docker Engine: v27.0 (Active)</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-[#52615B]">
            <div>
              <span className="text-[#047857] font-semibold">Uptime:</span> 99.98%
            </div>
            <div>
              <span className="text-[#047857] font-semibold">SSL:</span> Auto-Renew (Let&apos;s Encrypt)
            </div>
            <div>
              <span className="text-[#047857] font-semibold">Firewall:</span> UFW Active
            </div>
          </div>
        </div>

        {/* Mockup Body Content */}
        <div className="p-6 md:p-8 bg-[#FAFCFB]">
          {/* TAB 1: PRODUCTION TOPOLOGY */}
          {activeTab === "topology" && (
            <div className="space-y-6">
              {/* Architecture Flow Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
                {/* 1. Git / CI */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1">Step 1</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <GitBranch className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">GitHub Repo</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">Git push triggers automated CI/CD build</p>
                  <div className="mt-2 text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded inline-block">
                    Push-to-Deploy
                  </div>
                </div>

                {/* 2. Build / Container */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1">Step 2</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Box className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">Docker Image</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">Multi-stage build outputs standalone runtime</p>
                  <div className="mt-2 text-[10px] font-mono text-[#52615B] bg-[#F1F5F3] px-1.5 py-0.5 rounded inline-block">
                    ~120MB image
                  </div>
                </div>

                {/* 3. Reverse Proxy & SSL */}
                <div className="p-3.5 rounded-xl bg-white border border-[#059669]/40 ring-1 ring-[#059669]/20 shadow-xs">
                  <div className="text-[10px] font-mono text-[#047857] font-bold uppercase mb-1">Step 3</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Globe className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">Nginx / SSL</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">TLS 1.3 termination & domain routing</p>
                  <div className="mt-2 text-[10px] font-mono text-[#047857] bg-[#ECFDF5] px-1.5 py-0.5 rounded inline-block font-bold">
                    Ports 80/443
                  </div>
                </div>

                {/* 4. Next.js / Node.js App */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1">Step 4</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Layers className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">App Container</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">Next.js SSR / Node.js API process</p>
                  <div className="mt-2 text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded inline-block">
                    Internal :3000
                  </div>
                </div>

                {/* 5. Postgres & Redis */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1">Step 5</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Database className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">PostgreSQL</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">Persistent Docker volume + Redis cache</p>
                  <div className="mt-2 text-[10px] font-mono text-[#52615B] bg-[#F1F5F3] px-1.5 py-0.5 rounded inline-block">
                    Isolated Network
                  </div>
                </div>

                {/* 6. Live Users */}
                <div className="p-3.5 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="text-[10px] font-mono text-[#059669] font-bold uppercase mb-1">Result</div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <Radio className="w-4 h-4 text-[#059669]" />
                    <h4 className="font-bold text-xs text-[#12201B]">HTTPS Users</h4>
                  </div>
                  <p className="text-[11px] text-[#52615B]">Lightning fast, low-latency delivery</p>
                  <div className="mt-2 text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-1.5 py-0.5 rounded inline-block font-bold">
                    Sub-40ms
                  </div>
                </div>
              </div>

              {/* Stack Features Checklist */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="font-bold text-xs text-[#12201B] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                    Zero Open Backend Ports
                  </div>
                  <p className="text-xs text-[#52615B] leading-relaxed">
                    Database, Redis, and internal container ports are strictly binded to internal bridge networks—never exposed to the public internet.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="font-bold text-xs text-[#12201B] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                    Encrypted Offsite Backups
                  </div>
                  <p className="text-xs text-[#52615B] leading-relaxed">
                    Automated nightly PostgreSQL database dumps are gzip-compressed, encrypted, and synced to offsite S3-compatible cloud storage.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-[#E2EAE6] shadow-xs">
                  <div className="font-bold text-xs text-[#12201B] mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#059669]" />
                    Docker Auto-Restart Policies
                  </div>
                  <p className="text-xs text-[#52615B] leading-relaxed">
                    Containers configured with `restart: unless-stopped` ensure instant automatic recovery in case of unhandled errors or server reboots.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: DOCKER COMPOSE */}
          {activeTab === "docker" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#12201B] text-[#E2EAE6] font-mono text-xs overflow-x-auto shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-[#10B981]">
                  <span>docker-compose.prod.yml</span>
                  <span>Production Multi-Container Stack</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-[#A7B9B2]">
{`version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
    restart: unless-stopped
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:\${DB_PASS}@postgres:5432/saas_db
      - REDIS_URL=redis://redis:6379
    networks:
      - internal_net
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:16-alpine
    restart: unless-stopped
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      POSTGRES_DB: saas_db
      POSTGRES_PASSWORD: \${DB_PASS}
    networks:
      - internal_net

  redis:
    image: redis:7-alpine
    restart: unless-stopped
    volumes:
      - redis_data:/data
    networks:
      - internal_net

volumes:
  postgres_data:
  redis_data:

networks:
  internal_net:
    driver: bridge`}
                </pre>
              </div>

              <div className="p-3 rounded-xl bg-[#F0FDF4] border border-[#DCFCE7] text-xs text-[#065F46] font-mono flex items-center justify-between">
                <span>✓ Reproducible, isolated environments across any VPS provider (Hetzner, DO, AWS, Linode).</span>
                <span className="font-bold text-[#059669]">Standardized Config</span>
              </div>
            </div>
          )}

          {/* TAB 3: NGINX & SSL */}
          {activeTab === "nginx" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#12201B] text-[#E2EAE6] font-mono text-xs overflow-x-auto shadow-inner">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 text-[11px] text-[#10B981]">
                  <span>/etc/nginx/sites-available/saas.conf</span>
                  <span>Nginx Reverse Proxy & HTTP/2 Hardening</span>
                </div>
                <pre className="text-[11px] leading-relaxed text-[#A7B9B2]">
{`server {
    listen 443 ssl http2;
    server_name app.yourdomain.com;

    # SSL / TLS 1.3 Security Headers
    ssl_certificate /etc/letsencrypt/live/yourdomain.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Brotli / Gzip Static Compression
    gzip on;
    gzip_types text/plain application/javascript text/css application/json;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`}
                </pre>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="font-bold text-[#12201B] mb-1">Certbot Auto-Renewal</div>
                  <p className="text-[#52615B] text-[11px]">
                    Automatic cron job handles Let&apos;s Encrypt certificate renewal 30 days prior to expiration.
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-white border border-[#E2EAE6]">
                  <div className="font-bold text-[#12201B] mb-1">Subdomain Routing</div>
                  <p className="text-[#52615B] text-[11px]">
                    Clean separation for `app.`, `api.`, and `admin.` endpoints on the same VPS instance.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SECURITY & UFW */}
          {activeTab === "security" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#E2EAE6]">
                <h4 className="font-bold text-sm text-[#12201B] mb-3">
                  Production Server Hardening Checklist
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#12201B]">SSH Key Authentication</div>
                      <div className="text-[10px] text-[#52615B]">Password login disabled</div>
                    </div>
                    <span className="text-[#059669] font-bold">Enabled</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#12201B]">UFW Firewall Rules</div>
                      <div className="text-[10px] text-[#52615B]">Only 22, 80, 443 open</div>
                    </div>
                    <span className="text-[#059669] font-bold">Enforced</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#12201B]">Fail2ban Intrusion Defense</div>
                      <div className="text-[10px] text-[#52615B]">Auto-bans brute force IPs</div>
                    </div>
                    <span className="text-[#059669] font-bold">Active</span>
                  </div>

                  <div className="p-3 rounded-lg bg-[#F8FAF9] border border-[#E2EAE6] flex items-center justify-between">
                    <div>
                      <div className="font-bold text-[#12201B]">Non-Root Execution</div>
                      <div className="text-[10px] text-[#52615B]">Containers run as node/app user</div>
                    </div>
                    <span className="text-[#059669] font-bold">Compliant</span>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#FEF2F2] border border-[#FCA5A5] text-[#991B1B] text-xs flex items-center justify-between font-mono">
                <span>🛡️ Least-privilege server access prevents unauthorized escalation or container breakout.</span>
                <span className="font-bold">Hardened VPS</span>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Banner */}
        <div className="px-6 py-3 bg-[#F8FAF9] border-t border-[#E2EAE6] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#52615B]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Deployment Status: Ready for Production</span>
          </div>
          <div className="flex items-center gap-4">
            <span>Deploy</span>
            <span>→</span>
            <span>Secure</span>
            <span>→</span>
            <span>Configure</span>
            <span>→</span>
            <span>Connect</span>
            <span>→</span>
            <span>Monitor</span>
            <span>→</span>
            <span className="text-[#059669] font-bold">Maintain</span>
          </div>
        </div>
      </div>
    </div>
  );
}
