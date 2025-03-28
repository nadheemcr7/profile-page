import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vbmtmmgnfeauahddphmj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZibXRtbWduZmVhdWFoZGRwaG1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNzA4ODksImV4cCI6MjA1ODc0Njg4OX0.HSCVmvr8PUv8D60Q1uFWiEV7LYpI-_khQry4Ky7-vnA';
export const supabase = createClient(supabaseUrl, supabaseKey);