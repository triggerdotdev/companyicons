import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const EsbuildIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="Esbuild"
    {...props}
    ref={ref}
  >
    <g clipPath="url(#clip0_180_86)">
      <g clipPath="url(#clip1_180_86)">
        <path
          d="M120.001 240.562C186.276 240.562 240.003 186.837 240.003 120.562C240.003 54.2883 186.276 0.5625 120.001 0.5625C53.7265 0.5625 0 54.2883 0 120.562C0 186.837 53.7265 240.562 120.001 240.562Z"
          fill="#FFCF00"
        />
        <path
          d="M64.9557 55.6074L129.911 120.562L64.9557 185.517L49.0457 169.607L98.0909 120.562L49.0457 71.5173L64.9557 55.6074ZM136.957 55.6074L201.912 120.562L136.957 185.517L121.047 169.607L170.092 120.562L121.047 71.5173L136.957 55.6074Z"
          fill="#191919"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_180_86">
        <rect
          width="240.003"
          height="240"
          fill="white"
          transform="translate(0 0.5625)"
        />
      </clipPath>
      <clipPath id="clip1_180_86">
        <rect
          width="240.003"
          height="240"
          fill="white"
          transform="translate(0 0.5625)"
        />
      </clipPath>
    </defs>
  </svg>
));
