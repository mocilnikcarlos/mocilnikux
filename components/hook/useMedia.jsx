"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/components/lib/supabaseclient";

const useMedia = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMedia = async () => {
      const { data, error } = await supabase
        .from("interface")
        .select("image, video_url")
        .order("id", { ascending: false });

      if (error) {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching gallery data:", error.message);
        return;
      }

      setImages(data);
      setLoading(false);
    };

    fetchMedia();
  }, []);

  return { images, loading, error };
};

export default useMedia;
