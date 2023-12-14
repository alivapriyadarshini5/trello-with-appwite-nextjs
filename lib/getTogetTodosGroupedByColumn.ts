import { databases } from "@/appwrite";

export const getTodosGroupedByColumn = async () => {
  const data = await databases.listDocuments(
    "65217bef65a3b2334724",
    "65217c2f8b59bc916053"
  );
  console.log(data);
};
