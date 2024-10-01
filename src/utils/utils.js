import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

export const getDirname = (url) => path.dirname(getFilename(url));
export const getFilename = (url) => fileURLToPath(url);

export const checkFileExists = async (filePath) => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};
