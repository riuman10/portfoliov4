import * as React from "react"
const Heart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={62}
    height={49}
    fill="none"
    {...props}
  >
    <path
      fill="#6DC7DB"
      fillRule="evenodd"
      d="M31 11.127C28.518 3.779 21.89.003 15.5 0 7.652-.004 0 7.365 0 17.309c0 12.83 16.742 25.6 25.88 30.277C27.77 48.553 29.29 49 30.752 49c1.462 0 2.625-.072 4.604-1.028C44.288 43.657 62 30.56 62 17.31 62 6.983 54.476.003 46.5.003c-6.184 0-13.152 4.085-15.5 11.124Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Heart
