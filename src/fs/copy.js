import fs from "node:fs/promises";
import path from "node:path";
import { getDirname, checkPathExists } from "../utils/utils.js";

const copy = async () => {
  const originDirPath = path.join(getDirname(import.meta.url), "files");
  const destinationDirPath = path.join(
    getDirname(import.meta.url),
    "files_copy"
  );

  try {
    const isOriginDirExists = await checkPathExists(originDirPath);
    const isDestinationDirExists = await checkPathExists(destinationDirPath);

    if (!isOriginDirExists || isDestinationDirExists) {
      throw new Error("FS operation failed");
    }

    await fs.cp(originDirPath, destinationDirPath, { recursive: true });
  } catch (error) {
    throw error;
  }
};

await copy();
