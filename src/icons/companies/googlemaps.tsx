import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const GoogleMapsIcon = forwardRef<SVGSVGElement, SVGProps>(
  (props, ref) => (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      title="Google Maps"
      {...props}
      ref={ref}
    >
      <path
        d="M82.0986 177.832C89.52 187.104 97.0489 198.72 101.007 205.754C105.825 214.896 107.804 221.07 111.397 232.084C113.505 238.15 115.484 240 119.679 240C124.261 240 126.347 236.902 127.96 232.084C131.295 221.694 133.898 213.799 137.963 206.249C145.987 191.793 156.14 178.929 166.014 166.582C168.724 163.119 186.041 142.726 193.828 126.55C193.828 126.55 203.336 108.868 203.336 84.1513C203.336 61.0483 193.935 44.9795 193.935 44.9795L166.745 52.2718L150.181 95.7673L146.094 101.704L145.234 102.823L144.115 104.178L142.265 106.394L139.555 109.104L124.841 121.086L88.1433 142.339L82.0986 177.832Z"
        fill="#34A853"
      />
      <path
        d="M44.1533 123.582C53.1665 144.104 70.3539 162.023 82.099 177.833L144.266 104.179C144.266 104.179 135.49 115.666 119.679 115.666C101.997 115.666 87.6704 101.576 87.6704 83.7864C87.6704 71.5466 94.9627 63.1572 94.9627 63.1572L52.8008 74.4076L44.1533 123.582Z"
        fill="#FBBC04"
      />
      <path
        d="M144.997 3.8291C165.626 10.4976 183.308 24.4583 193.935 45.109L144.244 104.308C144.244 104.308 151.536 95.7893 151.536 83.6785C151.536 65.5016 136.22 51.799 119.657 51.799C103.954 51.799 94.9404 63.1784 94.9404 63.1784V25.835L144.997 3.8291Z"
        fill="#4285F4"
      />
      <path
        d="M55.5107 29.9005C67.8581 15.1869 89.4984 0 119.399 0C133.854 0 144.847 3.82899 144.847 3.82899L94.9407 63.1568H59.5979L55.5107 29.9005Z"
        fill="#1A73E8"
      />
      <path
        d="M44.1527 123.582C44.1527 123.582 36 107.384 36 84.0448C36 61.9313 44.6475 42.6358 55.6397 30.0303L95.0697 63.265L44.1527 123.582Z"
        fill="#EA4335"
      />
    </svg>
  )
);
