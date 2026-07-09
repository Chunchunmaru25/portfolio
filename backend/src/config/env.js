import dotevn from 'dotenv';

dotevn.config({
    path: `.env.${process.env.NODE_ENV || 'development'}.local`
});

export const {
    APP_URL, PORT, NODE_ENV, DATABASE_URL, DIRECT_URL, JWT_SECRET, JWT_EXPIRES_IN, ARCJET_ENV, ARCJET_KEY, SUPABASE_SERVICE_KEY, SUPABASE_STORAGE_ENDPOINT, BACKEND_URL,
    ADMIN_CODE

} = process.env;