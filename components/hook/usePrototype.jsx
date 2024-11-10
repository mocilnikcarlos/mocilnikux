"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/components/lib/supabaseclient";

const usePrototype = (projectId) => {
  const [prototype, setPrototype] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrototype = async () => {
      const { data, error } = await supabase
        .from("prototype_project")
        .select("id, project_id, href, label")
        .eq("project_id", projectId)
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching Prototype:", error.message);
        return;
      }

      if (!data || data.length === 0) {
        setError("No se encontraron prototipos para este proyecto");
        setLoading(false);
        return;
      }

      setPrototype(data);
      setLoading(false);
    };

    if (projectId) {
      fetchPrototype();
    }
  }, [projectId]);

  return { prototype, loading, error };
};

export default usePrototype;
