// The IvoryCare tooth mark — logo monogram and motif.
export function Tooth({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 30" fill="none" aria-hidden="true" className={className}>
      <path
        d="M12 3C9 1 4 1.5 3 4.5 1.8 8 3 13 5.5 17c1.6 2.6 2 6.5 2.4 8.6.3 1.7.9 2.9 1.8 2.9 1.6 0 1.5-2 2.1-4.3.7-2.7 1.2-6 2.2-6s1.5 3.3 2.2 6c.6 2.3.5 4.3 2.1 4.3.9 0 1.5-1.2 1.8-2.9.4-2.1 1-6 2.4-8.6C21 13 22.2 8 21 4.5 20 1.5 15 1 12 3Z"
        fill="currentColor"
      />
    </svg>
  );
}

// A small cluster of teeth used as a divider motif.
export function ToothyRow({ className = '' }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex items-center gap-1 ${className}`}>
      {[0, 1, 2].map((i) => (
        <span key={i}>
          <Tooth className="w-2 h-2.5 text-rosewood-300" />
        </span>
      ))}
    </span>
  );
}

// A wider divider for section transitions.
export function ToothRow({ className = '' }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex items-center gap-2.5 ${className}`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i}>
          <Tooth className="w-2.5 h-3.5 text-rosewood-200" />
        </span>
      ))}
    </span>
  );
}