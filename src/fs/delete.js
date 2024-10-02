import fs from "node:fs/promises";
import path from "node:path";
import { getDirname, checkPathExists } from "../utils/utils.js";

const remove = async () => {
  const removeFilePath = path.join(
    getDirname(import.meta.url),
    "files",
    "fileToRemove.txt"
  );

  try {
    const isRemoveFileExists = await checkPathExists(removeFilePath);

    if (!isRemoveFileExists) {
      throw new Error("FS operation failed");
    }

    await fs.unlink(removeFilePath);
  } catch (error) {
    throw error;
  }
};

await remove();
