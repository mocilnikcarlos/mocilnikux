"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/components/lib/supabaseclient";

const useCertificates = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      const { data, error } = await supabase
        .from("certificates")
        .select("id, src")
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching gallery data:", error.message);
        return;
      }

      setImages(data);
      setLoading(false);
    };

    fetchCertificates();
  }, []);

  return { images, loading, error };
};

export default useCertificates;
