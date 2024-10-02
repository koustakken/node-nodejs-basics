import fs from "node:fs/promises";
import path from "node:path";
import { getDirname, checkPathExists } from "../utils/utils.js";

const create = async () => {
  const createFilePath = path.join(
    getDirname(import.meta.url),
    "files",
    "create.txt"
  );

  try {
    const isFileExists = await checkPathExists(createFilePath);

    if (isFileExists) {
      throw new Error("FS operation failed");
    }

    await fs.writeFile(createFilePath, "I am fresh and young");
  } catch (error) {
    throw error;
  }
};

await create();
