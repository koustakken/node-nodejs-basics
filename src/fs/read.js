import fs from "node:fs/promises";
import path from "node:path";
import { getDirname, checkPathExists } from "../utils/utils.js";

const read = async () => {
  const readFilePath = path.join(
    getDirname(import.meta.url),
    "files",
    "fileToRead.txt"
  );

  try {
    const isReadFileExists = await checkPathExists(readFilePath);

    if (!isReadFileExists) {
      throw new Error("FS operation failed");
    }

    const content = await fs.readFile(readFilePath, "utf-8");
    console.log(content);
  } catch (error) {
    throw error;
  }
};

await read();
