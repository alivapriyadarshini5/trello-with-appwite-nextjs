import { Client, Account, ID, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65216b2ea10be72f39fb");

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);
export { client, account, ID, databases, storage };
