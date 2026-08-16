import type { SVGProps } from "react";

type IllustrationProps = SVGProps<SVGSVGElement>;

export function GoogleMark(props: IllustrationProps) {
  return (
    <svg width="22" height="22" viewBox="0 0 18 18" aria-hidden="true" {...props}>
      <path
        fill="#4285F4"
        d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62Z"
      />
      <path
        fill="#34A853"
        d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.8.54-1.83.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.33A9 9 0 0 0 9 18Z"
      />
      <path
        fill="#FBBC05"
        d="M3.97 10.71A5.41 5.41 0 0 1 3.69 9c0-.59.1-1.17.28-1.71V4.96H.96A9 9 0 0 0 0 9c0 1.45.35 2.82.96 4.04l3.01-2.33Z"
      />
      <path
        fill="#EA4335"
        d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.96l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58Z"
      />
    </svg>
  );
}

export function AppleMark(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 14 17" aria-hidden="true" {...props}>
      <path
        fill="#111"
        d="M11.657 8.568c-.02-2.015 1.65-2.997 1.725-3.043a3.69 3.69 0 0 0-2.915-1.572c-1.226-.128-2.415.73-3.035.73-.632 0-1.559-.717-2.585-.695a3.82 3.82 0 0 0-3.207 1.95c-1.41 2.445-.359 6.034.984 8.022.678.973 1.459 2.06 2.477 2.02.997-.041 1.37-.65 2.575-.65 1.195 0 1.545.65 2.583.625 1.07-.016 1.745-.977 2.4-1.957a8.02 8.02 0 0 0 1.1-2.225 3.47 3.47 0 0 1-2.112-3.205ZM9.665 2.65A3.55 3.55 0 0 0 10.48.136a3.62 3.62 0 0 0-2.332 1.197 3.37 3.37 0 0 0-.837 2.44 2.98 2.98 0 0 0 2.354-1.123Z"
      />
    </svg>
  );
}

export function MicrosoftMark(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
      <path fill="#F25022" d="M0 0h7.5v7.5H0z" />
      <path fill="#7FBA00" d="M8.5 0H16v7.5H8.5z" />
      <path fill="#00A4EF" d="M0 8.5h7.5V16H0z" />
      <path fill="#FFB900" d="M8.5 8.5H16V16H8.5z" />
    </svg>
  );
}

export function LoginTarget(props: IllustrationProps) {
  return (
    <svg
      className="eye"
      width="168"
      height="168"
      viewBox="0 0 32 32"
      aria-hidden="true"
      {...props}
    >
      <circle cx="16" cy="16" r="13" fill="#0B2A5B" stroke="#3FA9F5" strokeWidth="2.2" />
      <circle cx="16" cy="16" r="8" fill="#12386E" stroke="#7CCBFF" strokeWidth="2.2" />
      <circle cx="16" cy="16" r="3.4" fill="#3FA9F5" />
    </svg>
  );
}

export function LoginBackpack(props: IllustrationProps) {
  return (
    <svg className="pack" viewBox="0 0 78 86" fill="none" aria-hidden="true" {...props}>
      <rect x="18" y="18" width="42" height="56" rx="10" fill="#5B3A1E" />
      <rect x="22" y="24" width="34" height="18" rx="6" fill="#7A4E28" />
      <path d="M28 18V12a11 11 0 0 1 22 0v6" stroke="#3FA9F5" strokeWidth="6" fill="none" />
      <rect x="14" y="36" width="8" height="22" rx="3" fill="#3B2614" />
      <rect x="56" y="36" width="8" height="22" rx="3" fill="#3B2614" />
    </svg>
  );
}

export function ReadingWritingArt(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 196 176" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="rw-page-left" x1="28" y1="38" x2="94" y2="148">
          <stop stopColor="#FFFDF7" />
          <stop offset="1" stopColor="#F0E0C8" />
        </linearGradient>
        <linearGradient id="rw-page-right" x1="101" y1="40" x2="172" y2="145">
          <stop stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#F4E6D2" />
        </linearGradient>
        <linearGradient id="rw-highlighter" x1="127" y1="69" x2="188" y2="69">
          <stop stopColor="#FFE566" />
          <stop offset=".58" stopColor="#FFBD20" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <ellipse cx="105" cy="158" rx="78" ry="10" fill="#4C1D95" opacity=".24" />
      <g transform="rotate(-7 99 96)">
        <path d="M22 45c27-9 51-4 75 9v96c-24-13-48-16-74-7-5 2-8-1-8-6V56c0-6 2-9 7-11Z" fill="#C4A484" />
        <path d="M175 45c-27-9-52-4-78 9v96c25-13 51-16 76-7 5 2 8-1 8-6V56c0-6-2-9-6-11Z" fill="#C4A484" />
        <path d="M27 40c24-6 46-2 66 11v87c-21-11-42-14-66-7-4 1-6-1-6-5V48c0-4 2-7 6-8Z" fill="url(#rw-page-left)" stroke="#E6D2B1" strokeWidth="2" />
        <path d="M170 40c-25-6-47-2-69 11v87c22-11 44-14 68-7 4 1 6-1 6-5V48c0-4-2-7-5-8Z" fill="url(#rw-page-right)" stroke="#E6D2B1" strokeWidth="2" />
        <path d="M97 49v99" stroke="#5B21B6" strokeWidth="7" />
        <path d="M34 64c17-4 33-1 49 6M34 78c17-4 33-1 49 6M34 92c17-4 33-1 49 6M115 66c17-7 32-8 48-4M115 80c17-7 32-8 48-4M115 94c17-7 32-8 48-4" fill="none" stroke="#D8CBB8" strokeWidth="3" strokeLinecap="round" />
      </g>
      <g transform="rotate(-34 155 67)">
        <path d="M120 58h61l13 9-13 9h-61Z" fill="url(#rw-highlighter)" />
        <rect x="117" y="58" width="8" height="18" rx="2" fill="#D97706" />
        <path d="m181 58 13 9-13 9Z" fill="#FFF1C7" />
        <path d="m189 64 5 3-5 3Z" fill="#402700" />
        <path d="M132 62h42" stroke="#FFF0A3" strokeWidth="3" strokeLinecap="round" opacity=".8" />
      </g>
    </svg>
  );
}

export function MathToolsArt(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 200 176" aria-hidden="true" {...props}>
      <defs>
        <linearGradient id="math-triangle" x1="74" y1="55" x2="153" y2="151">
          <stop stopColor="#6EE7B7" />
          <stop offset="1" stopColor="#059669" />
        </linearGradient>
        <linearGradient id="math-protractor" x1="117" y1="91" x2="191" y2="148">
          <stop stopColor="#7CCBFF" />
          <stop offset="1" stopColor="#1D7ED8" />
        </linearGradient>
        <linearGradient id="math-pencil" x1="31" y1="46" x2="170" y2="46">
          <stop stopColor="#FFE566" />
          <stop offset="1" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      <ellipse cx="119" cy="158" rx="77" ry="9" fill="#075985" opacity=".23" />
      <g>
        <path d="M51 149 108 42l69 107Zm45-27h38l-26-41Z" fill="#047857" fillRule="evenodd" />
        <path d="M62 143 108 57l56 86H62Z" fill="url(#math-triangle)" opacity=".92" />
        <path d="m96 122 12-23 15 23Z" fill="#22C8E5" />
        <path d="M70 142h84" stroke="#6EE7B7" strokeWidth="5" strokeLinecap="round" />
      </g>
      <g>
        <path d="M105 148a47 47 0 0 1 94 0h-17a30 30 0 0 0-60 0Z" fill="url(#math-protractor)" stroke="#0B4F9C" strokeWidth="4" />
        <path d="M152 101v12M127 110l7 11M177 110l-7 11M111 129l12 4M193 129l-12 4" stroke="#C7EFFF" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M116 148h72" stroke="#0B4F9C" strokeWidth="4" />
        <circle cx="152" cy="148" r="5" fill="#FFFFFF" />
      </g>
      <g transform="rotate(39 96 48)">
        <path d="M26 39h139l16 10-16 10H26Z" fill="url(#math-pencil)" />
        <path d="M26 39h18v20H26Z" fill="#FB7185" />
        <path d="M44 39h8v20h-8Z" fill="#E4C083" />
        <path d="m165 39 16 10-16 10Z" fill="#FFF3C9" />
        <path d="m175 45 6 4-6 4Z" fill="#172033" />
        <path d="M59 44h97" stroke="#FFF0A3" strokeWidth="4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

export function PricingHeroArt(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 300 74" aria-hidden="true" {...props}>
      <defs>
        <filter id="blob-inset" x="-30%" y="-30%" width="160%" height="160%">
          <feOffset dx="0" dy="3" />
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in2="SourceAlpha" operator="out" result="shadow" />
          <feFlood floodColor="#00132E" floodOpacity=".55" />
          <feComposite in2="shadow" operator="in" />
          <feComposite in2="SourceGraphic" operator="over" />
        </filter>
      </defs>

      <g filter="url(#blob-inset)">
        <path d="M18 38c0-18 10-31 24-31 15 0 24 14 24 33 0 17-9 29-24 29-16 0-24-13-24-31Z" fill="#0B2A5B" />
        <circle cx="35" cy="34" r="2.4" fill="#02152E" />
        <circle cx="49" cy="34" r="2.4" fill="#02152E" />
        <path d="M34 45c5 6 11 6 16 0" fill="none" stroke="#02152E" strokeWidth="2.2" strokeLinecap="round" />

        <path d="M66 37C66 17 78 3 93 3c16 0 26 15 26 35 0 19-10 32-26 32-17 0-27-14-27-33Z" fill="#3FA9F5" />
        <circle cx="85" cy="32" r="2.4" fill="#06234B" />
        <circle cx="101" cy="32" r="2.4" fill="#06234B" />
        <path d="M84 45c6 6 13 6 19 0" fill="none" stroke="#06234B" strokeWidth="2.2" strokeLinecap="round" />

        <path d="M181 40c0-18 10-30 24-30 15 0 25 13 25 31 0 17-10 29-25 29-15 0-24-12-24-30Z" fill="#FFBD20" />
        <circle cx="198" cy="35" r="2.4" fill="#3D2B00" />
        <circle cx="213" cy="35" r="2.4" fill="#3D2B00" />
        <path d="M197 47c6 5 12 5 18 0" fill="none" stroke="#3D2B00" strokeWidth="2.2" strokeLinecap="round" />

        <path d="M231 35c0-20 11-32 25-32 16 0 26 14 26 34 0 19-10 32-26 32-16 0-25-14-25-34Z" fill="#7CCBFF" />
        <circle cx="249" cy="31" r="2.4" fill="#082C58" />
        <circle cx="264" cy="31" r="2.4" fill="#082C58" />
        <path d="M248 44c6 6 13 6 19 0" fill="none" stroke="#082C58" strokeWidth="2.2" strokeLinecap="round" />
      </g>

      <g transform="translate(150 38)">
        <circle r="18" fill="#07172F" stroke="#3FA9F5" strokeWidth="4" />
        <circle r="11" fill="none" stroke="#7CCBFF" strokeWidth="3" />
        <circle r="4" fill="#3FA9F5" />
      </g>
    </svg>
  );
}
