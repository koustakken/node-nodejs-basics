import fs from "node:fs/promises";
import path from "node:path";
import { getDirname } from "../utils/utils.js";

const write = async () => {
  const writeFilePath = path.join(
    getDirname(import.meta.url),
    "files",
    "fileToWrite.txt"
  );

  try {
    const fd = await fs.open(writeFilePath, "w");
    const writeStream = fd.createWriteStream(writeFilePath, "utf-8");
    process.stdin.pipe(writeStream);
  } catch (error) {
    throw error;
  }
};

await write();
