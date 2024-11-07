"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/components/helper/supabaseclient";

export const fetchProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select(
      `
      id,
      name,
      type,
      order,
      images (
        image_url,
        project_url
      )
    `
    )
    .order("order", { ascending: true });

  if (error) {
    console.error("Error fetching gallery data:", error);
    return [];
  }

  return data;
};

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProjectsData = async () => {
      try {
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getProjectsData();
  }, []);

  return { projects, loading, error };
};
