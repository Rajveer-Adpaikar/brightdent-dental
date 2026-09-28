// BrightDent smile mark — logo monogram and motif. An open smile arc with a
// tooth peak above it: instantly reads "dental", distinct from IvoryCare's
// filled-tooth monogram.
export function Smile({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 24" fill="none" aria-hidden="true" className={className}>
      {/* Tooth peak */}
      <path d="M9 7l5-4 5 4" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      {/* Smile arc */}
      <path d="M4 10a10 10 0 0 0 20 0" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

// A row of small smile marks — the "polish strip" divider.
export function SmileRow({ className = '' }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex items-center gap-2 ${className}`}>
      {[0, 1, 2, 3].map((i) => (
        <span key={i} className="opacity-80">
          <Smile className={`w-3 h-2.5 ${i === 1 || i === 2 ? 'opacity-45' : 'opacity-70'}`} />
        </span>
      ))}
    </span>
  );
}