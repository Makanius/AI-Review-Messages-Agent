'use client';

import { motion } from 'framer-motion';
import {
  Bot,
  BarChart3,
  Languages,
  Mail,
  MessageCircle,
  Sparkles,
  Star,
  Users,
  BellRing,
  CheckCircle2
} from 'lucide-react';

import type { LucideIcon } from 'lucide-react';

const features: [string, LucideIcon][] = [
  ['AI review replies', Star],
  ['Instagram DM replies', MessageCircle],
  ['WhatsApp automation', MessageCircle],
  ['Email assistant', Mail],
  ['Multilingual AI', Languages],
  ['Smart tone adaptation', Sparkles],
  ['Analytics dashboard', BarChart3],
  ['Team notifications', BellRing]
];

const pricing = [
  { name: 'Starter', price: '€49', cta: 'Start Automating' },
  { name: 'Pro', price: '€99', cta: 'Start Automating', highlighted: true },
  { name: 'Business', price: '€299', cta: 'Start Automating' }
];

export default function LandingPage() {
  return (
    <main className="overflow-hidden">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#060816aa] backdrop-blur-xl">
        <div className="section-wrap flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <Bot className="h-4 w-4 text-cyan-300" />
            AI Review & Messages Agent
          </div>
          <button className="glass rounded-full px-4 py-2 text-sm hover:bg-white/15">
            Start Free Trial
          </button>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center pt-24">
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="section-wrap relative grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <p className="mb-4 inline-flex glass rounded-full px-4 py-1 text-xs tracking-[0.2em] text-cyan-200">
              AI EMPLOYEE • 24/7
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Your AI employee replies to customers 24/7.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Google Reviews, Instagram, WhatsApp, Facebook and Email — handled automatically by AI.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 px-6 py-3 font-medium shadow-glow">
                Start Free Trial
              </button>
              <button className="glass rounded-full px-6 py-3 font-medium">Watch Demo</button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-3 text-xs text-slate-300 md:text-sm">
              <div className="glass rounded-xl p-3">12,400+ businesses automated</div>
              <div className="glass rounded-xl p-3">9.8M reviews answered</div>
              <div className="glass rounded-xl p-3">~7s avg response time</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9 }}>
            <div className="glass relative rounded-3xl p-6 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-sm text-cyan-200">AI Assistant Online</span>
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs text-emerald-300">Live</span>
              </div>
              <div className="space-y-3 text-sm">
                <div className="rounded-xl bg-white/5 p-3">⭐️⭐️⭐️⭐️⭐️ “Great service last night!”</div>
                <div className="rounded-xl bg-cyan-500/10 p-3 text-cyan-100">
                  Thanks so much! We’d love to see you again this weekend.
                </div>
                <div className="rounded-xl bg-white/5 p-3">“Is a table available for 7 pm?”</div>
                <div className="rounded-xl bg-indigo-500/15 p-3 text-indigo-100">
                  Yes! I can reserve that now. What name should I use?
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-wrap py-24">
        <h2 className="text-3xl font-semibold md:text-5xl">Automation features built for local businesses</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {features.map(([title, Icon]) => (
            <motion.div key={title} whileHover={{ y: -6 }} className="glass rounded-2xl p-5 transition-shadow hover:shadow-glow">
              <Icon className="mb-4 h-6 w-6 text-cyan-300" />
              <p>{title}</p>
              <p className="mt-2 text-sm text-slate-300">
                High-quality AI responses with tone and context awareness.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-wrap py-20">
        <h2 className="text-3xl font-semibold md:text-5xl">How it works</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {['Customer message', 'AI analyzes intent', 'AI generates response', 'Business approves or auto-sends'].map(
            (step, i) => (
              <div key={step} className="glass relative rounded-2xl p-5">
                <p className="mb-3 text-xs text-cyan-300">Step {i + 1}</p>
                <p>{step}</p>
                {i < 3 && <span className="absolute -right-2 top-1/2 hidden h-px w-4 bg-cyan-300/60 md:block" />}
              </div>
            )
          )}
        </div>
      </section>

      <section className="section-wrap py-24">
        <h2 className="text-3xl font-semibold md:text-5xl">Live dashboard preview</h2>
        <div className="glass mt-10 rounded-3xl p-6">
          <div className="grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl bg-white/5 p-4">
              <Users className="mb-2 text-cyan-300" />
              AI agents online: 8
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <CheckCircle2 className="mb-2 text-emerald-300" />
              Replies sent today: 1,248
            </div>
            <div className="rounded-2xl bg-white/5 p-4">
              <ChartArea className="mb-2 text-indigo-300" />
              Sentiment: +27% this month
            </div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-24">
        <h2 className="text-3xl font-semibold md:text-5xl">Pricing</h2>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {pricing.map((plan) => (
            <div
              key={plan.name}
              className={`glass rounded-3xl p-7 transition hover:-translate-y-1 ${
                plan.highlighted ? 'border-cyan-300/70 shadow-glow' : ''
              }`}
            >
              <p className="text-lg">{plan.name}</p>
              <p className="mt-4 text-4xl font-semibold">{plan.price}</p>
              <button className="mt-6 w-full rounded-xl bg-white/10 px-4 py-3 hover:bg-white/20">{plan.cta}</button>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-28">
        <div className="absolute inset-0 bg-mesh-gradient opacity-70" />
        <div className="section-wrap relative text-center">
          <h2 className="text-4xl font-semibold md:text-6xl">Never lose another customer message again.</h2>
          <button className="mt-8 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-8 py-4 font-semibold shadow-glow">
            Launch Your AI Employee
          </button>
        </div>
      </section>
    </main>
  );
}
