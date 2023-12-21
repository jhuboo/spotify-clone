import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { Song } from "@/types";

const useLoadSong = (song: Song) => {
  // useSupabaseClient instead of useSessionContext
  // so that non-authenticated users can access the song
  const supabaseClient = useSupabaseClient();

  if (!song) {
    return "";
  }

  const { data: songData } = supabaseClient.storage
    .from("songs")
    .getPublicUrl(song.song_path);

  return songData.publicUrl;
};

export default useLoadSong;
