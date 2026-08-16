import type { SVGProps } from "react";

type IllustrationProps = SVGProps<SVGSVGElement>;

export function GoogleMark(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="#4285F4"
        d="M21.6 12.23c0-.71-.06-1.4-.18-2.06H12v3.9h5.38a4.6 4.6 0 0 1-2 3.02v2.53h3.24c1.9-1.75 2.98-4.33 2.98-7.39Z"
      />
      <path
        fill="#34A853"
        d="M12 22c2.7 0 4.97-.9 6.62-2.38l-3.24-2.53c-.9.6-2.05.96-3.38.96-2.61 0-4.82-1.76-5.61-4.13H3.04v2.6A10 10 0 0 0 12 22Z"
      />
      <path
        fill="#FBBC05"
        d="M6.39 13.92A6.02 6.02 0 0 1 6.07 12c0-.67.12-1.32.32-1.92v-2.6H3.04A10 10 0 0 0 2 12c0 1.62.39 3.15 1.04 4.52l3.35-2.6Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.95c1.47 0 2.79.5 3.83 1.5l2.87-2.88A9.62 9.62 0 0 0 12 2a10 10 0 0 0-8.96 5.48l3.35 2.6C7.18 7.71 9.39 5.95 12 5.95Z"
      />
    </svg>
  );
}

export function AppleMark(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M16.68 12.86c.02-2.13 1.75-3.15 1.83-3.2a3.94 3.94 0 0 0-3.1-1.68c-1.3-.14-2.57.78-3.23.78-.67 0-1.68-.76-2.77-.74a4.1 4.1 0 0 0-3.45 2.1c-1.5 2.6-.38 6.42 1.05 8.53.72 1.03 1.56 2.18 2.65 2.14 1.07-.04 1.47-.69 2.77-.69 1.28 0 1.66.69 2.78.66 1.15-.02 1.88-1.03 2.57-2.07a8.5 8.5 0 0 0 1.18-2.4 3.7 3.7 0 0 1-2.28-3.43ZM14.56 6.6a3.75 3.75 0 0 0 .86-2.7 3.83 3.83 0 0 0-2.48 1.28 3.58 3.58 0 0 0-.88 2.6 3.16 3.16 0 0 0 2.5-1.18Z"
      />
    </svg>
  );
}

export function MicrosoftMark(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path fill="#F35325" d="M2 2h9.5v9.5H2z" />
      <path fill="#81BC06" d="M12.5 2H22v9.5h-9.5z" />
      <path fill="#05A6F0" d="M2 12.5h9.5V22H2z" />
      <path fill="#FFBA08" d="M12.5 12.5H22V22h-9.5z" />
    </svg>
  );
}

export function LoginLandscape(props: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 586 596"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      {...props}
    >
      <defs>
        <linearGradient id="login-sky" x1="293" y1="0" x2="293" y2="596">
          <stop stopColor="#07172F" />
          <stop offset=".58" stopColor="#0B2A5B" />
          <stop offset="1" stopColor="#12396E" />
        </linearGradient>
        <filter id="target-glow" x="-70%" y="-70%" width="240%" height="240%">
          <feGaussianBlur stdDeviation="13" />
        </filter>
      </defs>
      <rect width="586" height="596" fill="url(#login-sky)" />

      <g fill="#7CCBFF">
        <circle cx="106" cy="94" r="2.1" opacity=".18" />
        <circle cx="246" cy="65" r="1.6" opacity=".75" />
        <circle cx="399" cy="113" r="1.4" opacity=".55" />
        <circle cx="481" cy="52" r="2.3" opacity=".53" />
        <circle cx="528" cy="152" r="1.5" opacity=".72" />
        <circle cx="164" cy="176" r="1.4" opacity=".42" />
      </g>

      <path
        d="M0 410 110 348l70 33 59-47 104 58 80-64 163 87v90H0Z"
        fill="#162D63"
      />
      <path
        d="M0 428 112 392l95 33 88-61 123 54 100-34 68 37v94H0Z"
        fill="#1C376F"
      />
      <path
        d="M0 468 96 439l105 35 80-56 139 44 101-30 65 26v73H0Z"
        fill="#24427E"
      />

      <g>
        <circle
          cx="294"
          cy="365"
          r="75"
          fill="#3FA9F5"
          opacity=".23"
          filter="url(#target-glow)"
        />
        <circle cx="294" cy="365" r="55" fill="#0B2A5B" stroke="#3FA9F5" strokeWidth="10" />
        <circle cx="294" cy="365" r="37" fill="#102E60" stroke="#7CCBFF" strokeWidth="8" />
        <circle cx="294" cy="365" r="15" fill="#3FA9F5" />
      </g>

      <path
        d="M0 504c120-62 230-75 334-71 107 3 192 24 252 55v108H0Z"
        fill="#2B713A"
      />
      <path
        d="M0 557c109-45 238-49 329-31 96 19 143 46 140 70H0Z"
        fill="#39854A"
      />

      <g transform="translate(85 400)">
        <path d="M34 32v75" stroke="#79501F" strokeWidth="7" />
        <path d="M0 0h75a5 5 0 0 1 5 5v25H0Z" fill="#9B5B1F" opacity=".46" />
        <rect width="75" height="31" rx="4" fill="#D58B24" />
        <path d="M5 4h65" stroke="#F2B44E" strokeWidth="2" opacity=".48" />
        <text
          x="37.5"
          y="20"
          fill="#FFFFFF"
          fontFamily="Arial, sans-serif"
          fontSize="13"
          fontWeight="700"
          textAnchor="middle"
        >
          1500 ↑
        </text>
      </g>

      <g transform="translate(455 439)">
        <path
          d="M13 6V-5c0-9 7-15 15-15s15 6 15 15V6"
          fill="none"
          stroke="#3FA9F5"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path d="M5 13c0-8 6-13 14-13h18c8 0 14 5 14 13v36c0 7-5 12-12 12H17C10 61 5 56 5 49Z" fill="#67401E" />
        <rect x="8" y="4" width="40" height="21" rx="8" fill="#875224" />
        <path d="M8 21h40" stroke="#5B3418" strokeWidth="3" opacity=".65" />
        <rect y="20" width="7" height="24" rx="3" fill="#523116" />
      </g>
    </svg>
  );
}

export function ReadingWritingArt(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 230 170" aria-hidden="true" {...props}>
      <ellipse cx="124" cy="154" rx="82" ry="10" fill="#29135E" opacity=".24" />
      <g transform="rotate(-7 116 92)">
        <path
          d="M32 43c30-10 55-5 82 9v92c-25-15-53-18-80-8-5 2-9-1-9-7V54c0-6 2-9 7-11Z"
          fill="#D7BC82"
        />
        <path
          d="M198 43c-30-10-56-5-84 9v92c26-15 54-18 81-8 5 2 9-1 9-7V54c0-6-2-9-6-11Z"
          fill="#D7BC82"
        />
        <path
          d="M37 39c27-7 51-2 73 11v84c-22-12-46-15-72-7-4 1-6-1-6-5V47c0-4 2-7 5-8Z"
          fill="#FFF9E9"
          stroke="#E9D8B7"
          strokeWidth="2"
        />
        <path
          d="M193 39c-27-7-51-2-74 11v84c23-12 47-15 73-7 4 1 6-1 6-5V47c0-4-2-7-5-8Z"
          fill="#FFF9E9"
          stroke="#E9D8B7"
          strokeWidth="2"
        />
        <path d="M114 48v95" stroke="#7E48B7" strokeWidth="7" />
        <path d="M44 62c19-4 37-1 56 7M44 76c19-4 37-1 56 7M44 90c19-4 37-1 56 7M131 67c19-8 36-9 55-4M131 81c19-8 36-9 55-4M131 95c19-8 36-9 55-4" fill="none" stroke="#DED4C4" strokeWidth="3" strokeLinecap="round" />
        <path d="M38 43c2 24 2 53 0 84" stroke="#F3E8CA" strokeWidth="5" />
        <path d="M192 43c-2 24-2 53 0 84" stroke="#F3E8CA" strokeWidth="5" />
      </g>
      <g transform="rotate(-33 176 62)">
        <path d="M139 53h71l14 9-14 9h-71Z" fill="#F5A700" />
        <rect x="148" y="53" width="12" height="18" fill="#FFBE1F" />
        <path d="m210 53 14 9-14 9Z" fill="#FFF0C4" />
        <path d="m219 59 5 3-5 3Z" fill="#192033" />
        <rect x="136" y="53" width="8" height="18" rx="2" fill="#D88400" />
        <path d="M164 57h39" stroke="#FFD36A" strokeWidth="3" strokeLinecap="round" opacity=".8" />
      </g>
    </svg>
  );
}

export function MathToolsArt(props: IllustrationProps) {
  return (
    <svg viewBox="0 0 230 170" aria-hidden="true" {...props}>
      <ellipse cx="133" cy="154" rx="83" ry="9" fill="#064F67" opacity=".24" />
      <g>
        <path d="M70 143 125 41l66 102Zm44-26h37l-25-39Z" fill="#13866F" fillRule="evenodd" />
        <path d="m78 137 48-87 57 87" fill="none" stroke="#0A6D5D" strokeWidth="4" />
        <path d="M91 137h82" stroke="#75D8BA" strokeWidth="5" opacity=".8" />
        <path d="m117 109 10-20 14 20Z" fill="#2EC5F3" opacity=".75" />
      </g>
      <g>
        <path
          d="M118 138a54 54 0 0 1 108 0h-18a36 36 0 0 0-72 0Z"
          fill="#2E7BCB"
          stroke="#175DAA"
          strokeWidth="3"
        />
        <path d="M172 84v13M144 94l7 12M201 94l-7 12M126 115l12 5M218 115l-12 5" stroke="#AEE8FF" strokeWidth="3" strokeLinecap="round" />
        <path d="M132 137h80" stroke="#174B91" strokeWidth="4" />
        <circle cx="172" cy="137" r="5" fill="#FFFFFF" />
      </g>
      <g transform="rotate(39 104 50)">
        <path d="M42 41h128l17 10-17 10H42Z" fill="#FFBE1F" />
        <path d="M42 41h18v20H42Z" fill="#FF727C" />
        <path d="M60 41h8v20h-8Z" fill="#F4D091" />
        <path d="m170 41 17 10-17 10Z" fill="#FFF2C8" />
        <path d="m181 47 6 4-6 4Z" fill="#172033" />
        <path d="M74 46h87" stroke="#FFE078" strokeWidth="4" strokeLinecap="round" />
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
        <path d="M18 38c0-18 10-31 24-31 15 0 24 14 24 33 0 17-9 29-24 29-16 0-24-13-24-31Z" fill="#123B73" />
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
