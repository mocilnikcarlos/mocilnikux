"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import style from "./not-found.module.scss";

const NotFoundPage = () => {
  const pathname = usePathname();
  const param = pathname.split("/").pop();

  return <div className={style.contentnamefail}>404</div>;
};

export default NotFoundPage;
