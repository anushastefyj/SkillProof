import React from 'react';

export default function ProgressRing({ radius, stroke, progress, label, sublabel, color = 'var(--primary)' }) {
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex-col items-center justify-center" style={{ position: 'relative', width: radius * 2, height: radius * 2 }}>
      <svg
        height={radius * 2}
        width={radius * 2}
        style={{ position: 'absolute', top: 0, left: 0 }}
      >
        <circle
          stroke="var(--border)"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          className="progress-ring__circle"
          stroke={color}
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={circumference + ' ' + circumference}
          style={{ strokeDashoffset }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeLinecap="round"
        />
      </svg>
      <div className="flex-col items-center justify-center" style={{ zIndex: 1, textAlign: 'center' }}>
        <span className="font-semibold" style={{ fontSize: '1.25rem', color: 'var(--text-primary)' }}>{progress}/100</span>
        {label && <span className="text-xs font-medium text-muted">{label}</span>}
      </div>
      {sublabel && (
        <div style={{ position: 'absolute', bottom: -24, textAlign: 'center', width: '100%' }}>
          <span className="text-sm font-semibold">{sublabel}</span>
        </div>
      )}
    </div>
  );
}
