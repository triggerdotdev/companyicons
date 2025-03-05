import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const FfmpegIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="FFmpeg"
    {...props}
    ref={ref}
  >
    <path
      d="M94.4358 19.4258L43.6496 77.5607V102.161L119.083 17.378L240 7.33398L62.7519 190.331L86.1301 191.654L214.857 61.4474V185.044L200.459 198.323L237.033 200.445V234.7L122.855 225.208L180.861 169.818V142.333L98.0572 223.153L0.00292969 215.005L157.859 46.428L131.669 47.9463L17.6734 172.076V66.6095L28.3986 53.9377L2.02978 55.4676V27.1029L94.4358 19.4258Z"
      fill="url(#paint0_radial_132_2)"
    />
    <defs>
      <radialGradient
        id="paint0_radial_132_2"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(47.8382 50.1965) scale(117.327 115.156)"
      >
        <stop stopColor="#007808" />
        <stop offset="1" stopColor="#007808" />
      </radialGradient>
    </defs>
  </svg>
));
