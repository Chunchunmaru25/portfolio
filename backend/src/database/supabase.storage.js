import { createClient } from "@supabase/supabase-js";
import { SUPABASE_SERVICE_KEY, SUPABASE_STORAGE_ENDPOINT } from "../config/env.js";
export const supabase = createClient(
    SUPABASE_STORAGE_ENDPOINT,
    SUPABASE_SERVICE_KEY
);