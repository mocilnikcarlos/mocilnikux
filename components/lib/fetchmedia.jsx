import { useState, useEffect } from "react";
import { supabase } from "@/components/helper/supabaseclient";

export const fetchMedia = async () => {
  const { data, error } = await supabase
    .from("interface")
    .select("image, video_url")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error fetching gallery data:", error);
    return [];
  }

  return data;
};

export const useMedia = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMediaData = async () => {
      try {
        const data = await fetchMedia();
        setImages(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getMediaData();
  }, []);

  return { images, loading, error };
};
