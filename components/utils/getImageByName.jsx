import { supabase } from "@/components/lib/supabaseclient";

export const getImageByName = async (nameImage) => {
  try {
    if (!nameImage) {
      return null;
    }

    const { data, error } = await supabase
      .from("images")
      .select("image_url")
      .eq("name", nameImage)
      .single();

    if (error) {
      throw error;
    }

    if (data) {
      return data.image_url;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
