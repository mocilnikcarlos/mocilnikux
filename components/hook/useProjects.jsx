"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/components/lib/supabaseclient";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("gallery_project")
        .select("id, href, src, type, title, description")
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching projects:", error.message);
        return;
      }

      setProjects(data);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
};

export default useProjects;
