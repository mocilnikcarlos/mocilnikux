"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/components/lib/supabaseclient";

const useCaseStudy = (projectId) => {
  const [caseStudy, setCaseStudy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      const { data, error } = await supabase
        .from("case_studies")
        .select("id, project_id, image_url")
        .eq("project_id", projectId)
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
        setLoading(false);
        console.error("Error fetching CaseStudy:", error.message);
        return;
      }

      setCaseStudy(data);
      setLoading(false);
    };

    if (projectId) {
      fetchCaseStudy();
    }
  }, [projectId]);

  return { caseStudy, loading, error };
};

export default useCaseStudy;
