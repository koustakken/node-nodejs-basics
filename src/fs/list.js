import fs from "node:fs/promises";
import path from "node:path";
import { getDirname, checkPathExists } from "../utils/utils.js";

const list = async () => {
  const filesFolderPath = path.join(getDirname(import.meta.url), "files");

  try {
    const isFilesFolderExists = await checkPathExists(filesFolderPath);

    if (!isFilesFolderExists) {
      throw new Error("FS operation failed");
    }

    const files = await fs.readdir(filesFolderPath);
    console.log(files);
  } catch (error) {
    throw error;
  }
};

await list();
