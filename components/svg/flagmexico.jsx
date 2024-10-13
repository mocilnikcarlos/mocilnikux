const FlagMexico = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={18}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <rect width={24} height={17.143} y={0.429} fill="#fff" rx={3} />
      <path
        fill="#249F58"
        fillRule="evenodd"
        d="M14.835 8.75a2.857 2.857 0 1 1-5.67 0c.176 1.097 1.378 1.945 2.835 1.945s2.659-.848 2.835-1.945Z"
        clipRule="evenodd"
      />
      <circle cx={11.999} cy={7.857} r={1.714} fill="#AE6A3E" />
      <path fill="#F93939" d="M17.143.429H24v17.143h-6.857z" />
      <path fill="#249F58" d="M0 .429h6.857v17.143H0z" />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={24} height={17.143} y={0.429} fill="#fff" rx={3} />
      </clipPath>
    </defs>
  </svg>
);
export default FlagMexico;
