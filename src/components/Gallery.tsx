import { useState } from 'react';
import { motion } from 'motion/react';
import { CLINIC } from '../config';
import { ToothyRow } from './Tooth';

// Before/after comparison slider. `pct` is the divider position (0–100).
function BeforeAfter({ item }: { item: (typeof CLINIC.beforeAfter)[number] }) {
  const [pct, setPct] = useState(60);

  return (
    <div className="group">
      <div
        className="relative w-full aspect-[4/5] overflow-hidden rounded-2xl border border-rosewood-100 select-none"
        onPointerDown={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setPct(Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100)));
        }}
        onPointerMove={(e) => {
          if (e.buttons !== 1) return;
          const rect = e.currentTarget.getBoundingClientRect();
          setPct(Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100)));
        }}
      >
        {/* After (base) */}
        <img
          src={item.imgB}
          alt={`${item.patient} after ${item.title.toLowerCase()}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        {/* Before (clipped) */}
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}>
          <img
            src={item.imgA}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
            loading="lazy"
          />
        </div>

        {/* Divider handle */}
        <div className="absolute inset-y-0" style={{ left: `${pct}%` }}>
          <div className="absolute inset-y-0 -translate-x-1/2 w-0.5 bg-ivory" />
          <button
            type="button"
            aria-label="Drag to compare before and after"
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ivory shadow-lg border border-rosewood-100 flex items-center justify-center text-rosewood-800"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 7l-5 5 5 5M15 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-rosewood-950/80 text-ivory text-[10px] font-data uppercase tracking-wider">
          {item.beforeLabel}
        </span>
        <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-peach-500/90 text-rosewood-950 text-[10px] font-data uppercase tracking-wider">
          {item.afterLabel}
        </span>
      </div>

      <div className="pt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl text-rosewood-950">{item.title}</h3>
          <p className="text-sm text-rosewood-900/60 mt-1 leading-relaxed">{item.desc}</p>
        </div>
        <span className="font-data text-xs text-rosewood-500 shrink-0 mt-1">
          {item.patient}
        </span>
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28 bg-ivory relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-14 lg:mb-16">
          <ToothyRow className="mb-5" />
          <p className="font-data text-xs uppercase tracking-[0.28em] text-rosewood-500 mb-4">Before &amp; after</p>
          <h2 className="font-display text-4xl lg:text-6xl text-rosewood-950 leading-[1.05]">
            Results, not promises.
          </h2>
          <p className="mt-6 text-lg text-rosewood-900/70 leading-relaxed max-w-xl">
            Drag the divider to see what these procedures can do. The clinic keeps a record
            of every case — ask at your consult to see cases like yours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINIC.beforeAfter.map((item) => (
            <div key={item.id}>
              <BeforeAfter item={item} />
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-rosewood-900/50 leading-relaxed max-w-2xl">
          Sample imagery shown for demonstration only. Every IvoryCare case is photographed
          and documented with your written consent for your own record.
        </p>
      </div>
    </section>
  );
}