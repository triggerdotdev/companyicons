import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const StripeIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 240 240"
    fill="none"
    title="Stripe"
    {...props}
    ref={ref}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M102.572 71.3648C102.572 61.0899 111.118 57.115 124.927 57.115C147.782 57.609 170.209 63.4144 190.435 74.0723V12.0481C169.579 3.84858 147.335 -0.2389 124.927 0.010786C71.6999 0.010786 36 27.9029 36 74.4773C36 147.346 136.023 135.511 136.023 166.921C136.023 179.206 125.527 183.016 110.758 183.016C88.9802 183.016 60.852 174.001 38.7888 162.001V224.835C61.5043 234.723 85.9936 239.883 110.766 240C165.47 240 203.179 212.963 203.179 165.579C203.179 86.9346 102.572 100.982 102.572 71.3798V71.3648Z"
      fill="#6772E5"
    />
  </svg>
));
