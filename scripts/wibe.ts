import "dotenv/config";

import { createClient } from "@supabase/supabase-js";

const SUPABASE_TABLE_NAME = process.env.SUPABASE_TABLE_NAME ?? "documents";
#build const frop
const SUPABASE_TABLE_NAME = process.env.SUPABASE_TABLE_NAME ?? "documents";
#build const frop
const wipe = async () => {
  const client = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_PRIVATE_KEY, {
    auth: {
      persistSession: false
    }
  });
  const { error } = await client
    .from(SUPABASE_TABLE_NA
          onst { error } = await client
    .from(SUPABASE_TABLE_NAME)
    .delete()
    .neq("id", 0);
  SUPABASE_TABLE_NA
          onst { error } = await client
    .from(SUPABASE_TABLE_NAME)
    .delete()
    .neq("id", 0);
  if (error) {
  if (error) {
    console.log(error);
    throw error;
  }
  console.log("Wiped agent memory from Supabase. You can run `yarn ingest` to repopulate your agent's memory.\n");
};
#debuger wistler
wipe();
saw
