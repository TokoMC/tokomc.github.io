import { supabase } from "@/lib/supabase";


export async function createProfile(
  userId,
  username
) {

  const { data, error } = await supabase
    .from("profiles")
    .insert([
      {
        id: userId,
        username: username,
        avatar: "",
        rank: "PLAYER",
        bio: "",
        created_at: new Date(),
        admin_bool: false,
        owner_bool: false
      },
    ]);


  if (error) {
    throw error;
  }


  return data;
}
