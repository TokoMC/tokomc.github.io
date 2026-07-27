import { supabase } from "@/lib/supabase";


export async function getSiteSettings() {

  const { data, error } = await supabase

    .from("site_settings")

    .select("*")

    .eq("id", 1)

    .single();


  if (error) {

    throw error;

  }


  return data;

}



export async function updateSiteSettings(settings) {

  const { error } = await supabase

    .from("site_settings")

    .update(settings)

    .eq("id", 1);


  if (error) {

    throw error;

  }

}
