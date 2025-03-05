import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const PrismaDarkIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      title="Prisma"
      {...props}
      ref={ref}
    >
      <g clipPath="url(#clip0_179_72)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.8608 165.174C21.4145 161.321 21.3776 156.413 23.7656 152.523L113.677 6.0656C118.678 -2.08028 130.754 -1.36802 134.76 7.30902L216.898 185.235C219.945 191.837 216.437 199.605 209.464 201.694L81.6914 239.972C76.5506 241.511 71.0115 239.448 68.1378 234.921L23.8608 165.174ZM124.051 48.8884C124.917 44.58 130.829 43.9587 132.575 47.9925L189.233 178.911C190.299 181.376 188.972 184.219 186.395 184.986L98.1144 211.302C94.8694 212.269 91.761 209.438 92.4278 206.122L124.051 48.8884Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_179_72">
          <rect
            width="240.003"
            height="240.119"
            fill="white"
            transform="translate(0 0.357422)"
          />
        </clipPath>
      </defs>
    </svg>
  )
);

export const PrismaLightIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      title="Prisma"
      {...props}
      ref={ref}
    >
      <g clipPath="url(#clip0_179_72)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M23.8608 165.174C21.4145 161.321 21.3776 156.413 23.7656 152.523L113.677 6.0656C118.678 -2.08028 130.754 -1.36802 134.76 7.30902L216.898 185.235C219.945 191.837 216.437 199.605 209.464 201.694L81.6914 239.972C76.5506 241.511 71.0115 239.448 68.1378 234.921L23.8608 165.174ZM124.051 48.8884C124.917 44.58 130.829 43.9587 132.575 47.9925L189.233 178.911C190.299 181.376 188.972 184.219 186.395 184.986L98.1144 211.302C94.8694 212.269 91.761 209.438 92.4278 206.122L124.051 48.8884Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_179_72">
          <rect
            width="240.003"
            height="240.119"
            fill="white"
            transform="translate(0 0.357422)"
          />
        </clipPath>
      </defs>
    </svg>
  )
);
