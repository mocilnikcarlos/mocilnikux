const FlagArgentine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M21.714.429H2.286A2.286 2.286 0 0 0 0 2.714v12.572a2.286 2.286 0 0 0 2.286 2.286h19.428A2.286 2.286 0 0 0 24 15.286V2.714A2.286 2.286 0 0 0 21.714.43Z"
      />
      <path
        fill="#3ECBF8"
        fillRule="evenodd"
        d="M0 11.857h24v5.715H0v-5.715ZM0 .43h24v5.714H0V.429Z"
        clipRule="evenodd"
      />
      <path
        fill="#FFDA2C"
        d="M12 10.714a1.714 1.714 0 1 0 0-3.428 1.714 1.714 0 0 0 0 3.428Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={24} height={17.143} y={0.429} fill="#fff" rx={3} />
      </clipPath>
    </defs>
  </svg>
);
export default FlagArgentine;
