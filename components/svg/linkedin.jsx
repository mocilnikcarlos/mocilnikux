import style from "./hover.module.scss";

const Linkedin = (props) => (
  <div className={style.hover}>
    {" "}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={48}
      height={48}
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="currentColor"
          d="M0 1.76C0 .815.791.048 1.767.048h20.37c.976 0 1.767.767 1.767 1.712v20.48c0 .946-.79 1.712-1.767 1.712H1.767C.79 23.952 0 23.186 0 22.24V1.76Z"
        />
        <path
          fill="#fff"
          d="M7.264 20.053V9.29H3.687v10.762h3.578ZM5.476 7.822c1.248 0 2.024-.826 2.024-1.86-.023-1.055-.776-1.859-2-1.859s-2.024.804-2.024 1.86c0 1.032.776 1.859 1.977 1.859h.023Zm3.768 12.23h3.577v-6.008c0-.322.023-.644.118-.873.258-.643.847-1.308 1.835-1.308 1.294 0 1.812.986 1.812 2.433v5.757h3.577v-6.17c0-3.306-1.765-4.844-4.118-4.844-1.93 0-2.777 1.078-3.248 1.813h.024v-1.56H9.244c.047 1.009 0 10.761 0 10.761Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h23.904v24H0z" />
        </clipPath>
      </defs>
    </svg>
  </div>
);
export default Linkedin;
