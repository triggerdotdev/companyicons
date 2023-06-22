import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const MondayIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="Monday"
    {...props}
    ref={ref}
  >
    <path
      d="M120.371 192.936C109.874 192.679 101.214 188.048 95.6843 178.381C90.0164 168.388 90.2632 158.158 96.3064 148.411C110.694 125.216 125.268 102.149 139.754 79.0232C142.717 74.2933 145.61 69.4943 148.71 64.8533C152.827 58.5055 159.258 54.0153 166.635 52.3388C174.013 50.6623 181.753 51.9319 188.209 55.8773C201.845 64.2806 206.407 81.7584 197.915 95.5334C180.556 123.807 162.95 151.943 145.096 179.941C139.596 188.601 131.252 192.778 120.371 192.936Z"
      fill="#FFCB00"
    />
    <path
      d="M30.2161 192.936C19.6208 192.679 11.0102 187.84 5.58908 178.213C0.000108358 168.22 0.355591 157.97 6.41854 148.224C21.8952 123.393 37.441 98.5978 53.0559 73.8391C55.0308 70.6397 57.0057 67.3614 59.1188 64.2608C63.4038 58.0509 69.9374 53.7523 77.3363 52.2753C84.7352 50.7983 92.4184 52.2587 98.7593 56.3474C105.1 60.4361 109.601 66.832 111.309 74.1811C113.017 81.5301 111.797 89.2553 107.909 95.721C90.6086 123.656 73.0715 151.492 55.5245 179.299C49.8269 188.314 41.4434 192.778 30.2161 192.936Z"
      fill="#FF3D57"
    />
    <path
      d="M211.107 136.315C227.075 136.394 240 149.083 239.971 164.645C239.971 180.444 226.699 193.182 210.584 192.985C194.469 192.787 181.77 180.237 181.79 164.606C181.81 148.747 194.785 136.216 211.107 136.315Z"
      fill="#00D647"
    />
  </svg>
));
