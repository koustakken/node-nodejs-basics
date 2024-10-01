import fs from "node:fs/promises";
import path from "node:path";
import { getDirname, checkFileExists } from "../utils/utils.js";

const __dirname = getDirname(import.meta.url);
console.log(__dirname);

const create = async () => {
  const createFilePath = path.join(__dirname, "files", "fresh.txt");
  try {
    const isFileExists = await checkFileExists(createFilePath);

    if (isFileExists) {
      throw new Error("FS operation failed");
    }

    await fs.writeFile(createFilePath, "I am fresh and young");
  } catch (error) {
    throw error;
  }
};

await create();
