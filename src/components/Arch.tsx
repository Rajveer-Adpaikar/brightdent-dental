// BrightDent arch mark — logo monogram and motif. A Goan church arch that
// doubles as a smile: the arch opening is a dental arch, the keystone rides
// the crown. Distinct from IvoryCare's filled tooth.
export function Arch({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 32" fill="none" aria-hidden="true" className={className}>
      {/* Arch outline */}
      <path
        d="M3 29V15.5C3 8.04 7.6 2.5 14 2.5S25 8.04 25 15.5V29"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      {/* Keystone */}
      <path d="M12 2.5h4v5h-4z" fill="currentColor" />
      {/* Smile / arch base */}
      <path d="M7 29h14" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
    </svg>
  );
}

// A row of small arch marks — the azulejo tile strip used as a divider.
export function ArchRow({ className = '' }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex items-center gap-2 ${className}`}>
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="opacity-90">
          <Arch className={`w-3 h-3.5 ${i === 1 || i === 2 ? 'opacity-45' : 'opacity-70'}`} />
        </span>
      ))}
    </span>
  );
}