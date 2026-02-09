import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "8twc5zn4", // Project ID lu
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false, // Set false biar kalau update data langsung berubah (gak dicache lama)
});