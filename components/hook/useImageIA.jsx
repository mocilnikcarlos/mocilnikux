"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/components/lib/supabaseclient";

const useImageIA = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImageIA = async () => {
      setLoading(true); // Asegurarse de que se marca como loading al comenzar la consulta
      const { data, error } = await supabase
        .from("image_ia")
        .select("id, image_url")
        .order("id", { ascending: false });

      if (error) {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching gallery data:", error.message);
        return;
      }

      if (Array.isArray(data)) {
        setImages(data);
      } else {
        setImages([]);
      }

      setLoading(false);
    };

    fetchImageIA();
  }, []);

  return { images, loading, error };
};

export default useImageIA;
