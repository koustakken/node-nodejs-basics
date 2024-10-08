import fs from "node:fs/promises";
import path from "node:path";
import { getDirname, checkPathExists } from "../utils/utils.js";

const rename = async () => {
  const wrongFilePath = path.join(
    getDirname(import.meta.url),
    "files",
    "wrongFilename.txt"
  );

  const properFilePath = path.join(
    getDirname(import.meta.url),
    "files",
    "properFilename.md"
  );

  try {
    const wrongFileExists = await checkPathExists(wrongFilePath);
    const properFileExists = await checkPathExists(properFilePath);

    if (!wrongFileExists || properFileExists) {
      throw new Error("FS operation failed");
    }

    await fs.rename(wrongFilePath, properFilePath);
  } catch (error) {
    throw error;
  }
};

await rename();
