"use client";

import { useEffect, useState } from "react";
import Loader from "@/components/utils/loader";

const LoadingWrapper = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader isLoading={loading} /> : children} </>;
};

export default LoadingWrapper;
