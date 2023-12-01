import { forwardRef } from "react";
import { SVGProps } from "../../types";

export const ZapierIcon = forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    viewBox="0 0 240 240"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    title="Zapier"
    {...props}
    ref={ref}
  >
    <g clipPath="url(#clip0_7084_2872)">
      <path
        d="M120.077 1.08203C126.856 1.09448 133.523 1.66732 140.004 2.75073V72.6121L189.532 23.2111C195.003 27.0963 200.12 31.4175 204.852 36.1373C209.585 40.857 213.931 45.9753 217.826 51.4296L168.295 100.831H238.339C239.426 107.294 240 113.919 240 120.693V120.855C240 127.63 239.426 134.267 238.339 140.73H168.283L217.826 190.119C213.931 195.573 209.585 200.691 204.866 205.411H204.852C200.12 210.131 195.003 214.465 189.547 218.337L140.004 168.936V238.798C133.535 239.881 126.868 240.453 120.089 240.468H119.915C113.134 240.453 106.493 239.881 100.012 238.798V168.936L50.4835 218.337C39.5452 210.579 29.9823 201.028 22.1903 190.119L71.7212 140.73H1.67718C0.57835 134.254 0.00390625 127.592 0.00390625 120.818V120.47C0.0152925 118.712 0.13041 116.564 0.295756 114.342L0.346813 113.674C0.836389 107.42 1.67718 100.831 1.67718 100.831H71.7212L22.1903 51.4296C26.0732 45.9753 30.4065 40.8694 35.138 36.1623L35.1618 36.1373C39.8837 31.4175 45.0132 27.0963 50.4835 23.2111L100.012 72.6121V2.75073C106.493 1.66732 113.148 1.09448 119.939 1.08203H120.077ZM120.065 90.8558H119.951C111.036 90.8558 102.498 92.4871 94.606 95.4509C91.648 103.309 90.0105 111.827 89.9986 120.718V120.83C90.0105 129.722 91.648 138.24 94.618 146.097C102.498 149.061 111.036 150.693 119.951 150.693H120.065C128.98 150.693 137.518 149.061 145.398 146.097C148.368 138.227 150.005 129.722 150.005 120.83V120.718C150.005 111.827 148.368 103.309 145.398 95.4509C137.518 92.4871 128.98 90.8558 120.065 90.8558Z"
        fill="#FF4A00"
      />
    </g>
  </svg>
));
