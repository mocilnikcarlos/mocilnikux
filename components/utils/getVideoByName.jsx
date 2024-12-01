import { supabase } from "@/components/lib/supabaseclient";

export const getVideoByName = async (nameVideo) => {
  try {
    if (!nameVideo) {
      return null;
    }

    const { data, error } = await supabase
      .from("videos")
      .select("video_url")
      .eq("name", nameVideo)
      .single();

    if (error) {
      throw error;
    }

    if (data) {
      return data.video_url;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
