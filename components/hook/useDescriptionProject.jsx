"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/components/lib/supabaseclient";

const useDescriptionProject = (projectId) => {
  const [descriptionProject, setDescriptionProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDescriptionProject = async () => {
      const { data, error } = await supabase
        .from("description_project")
        .select(
          "id, project_id, image_url, client, responsability, tools, detail"
        )
        .eq("project_id", projectId)
        .single();

      if (error) {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching DescriptionProject:", error.message);
        return;
      }

      if (!data) {
        setError("No se encontraron datos para este proyecto");
        setLoading(false);
        return;
      }

      setDescriptionProject(data);
      setLoading(false);
    };

    if (projectId) {
      fetchDescriptionProject();
    }
  }, [projectId]);

  return { descriptionProject, loading, error };
};

export default useDescriptionProject;
