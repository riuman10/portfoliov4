import * as React from "react"
const MenuDots = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} {...props}>
    <path
      fill="none"
      stroke="#1D1D1F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M2 12h14"
      className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
    >
      <animate
        attributeName="points"
        begin="indefinite"
        calcMode="spline"
        dur="0.24s"
        keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
        keyTimes="0;0.5;1"
        values="2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
      />
      <animate
        attributeName="points"
        begin="indefinite"
        calcMode="spline"
        dur="0.24s"
        keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
        keyTimes="0;0.5;1"
        values="3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
      />
    </path>
    <path
      fill="none"
      stroke="#1D1D1F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M2 5h14"
      className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
    >
      <animate
        attributeName="points"
        begin="indefinite"
        calcMode="spline"
        dur="0.24s"
        keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
        keyTimes="0;0.5;1"
        values="2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
      />
      <animate
        attributeName="points"
        begin="indefinite"
        calcMode="spline"
        dur="0.24s"
        keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
        keyTimes="0;0.5;1"
        values="3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
      />
    </path>
  </svg>
)
export default MenuDots;
