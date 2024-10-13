const ReturnToTop = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path
      fill="#F29F05"
      d="M25 33.333V16.667v16.666Zm0-16.666 7.292 7.291L25 16.667Zm0 0-7.291 7.291L25 16.667Zm0 29.166c11.507 0 20.834-9.327 20.834-20.833 0-11.506-9.327-20.834-20.834-20.834C13.494 4.166 4.167 13.494 4.167 25S13.494 45.833 25 45.833Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M25 33.333V16.667m0 0 7.292 7.291M25 16.667l-7.291 7.291M25 45.833c11.507 0 20.834-9.327 20.834-20.833 0-11.506-9.327-20.834-20.834-20.834C13.494 4.166 4.167 13.494 4.167 25S13.494 45.833 25 45.833Z"
    />
  </svg>
);
export default ReturnToTop;
