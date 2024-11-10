import { supabase } from "@/components/lib/supabaseclient";

export const getProjectId = async (href) => {
  const { data, error } = await supabase
    .from("gallery_project")
    .select("href, project_id")
    .eq("href", href)
    .single();

  if (error || !data) {
    console.error("Error obteniendo project_id:", error);
    return null;
  }

  return data.project_id;
};
