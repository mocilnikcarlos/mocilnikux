"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/helper/loader";

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && children}
    </>
  );
};

export default LoadingWrapper;
