import fs from "node:fs/promises";
import path from "node:path";
import { getDirname } from "../utils/utils.js";

const read = async () => {
  const readFilePath = path.join(
    getDirname(import.meta.url),
    "files",
    "fileToRead.txt"
  );

  try {
    const fd = await fs.open(readFilePath, "r");
    const readStream = fd.createReadStream(readFilePath, "utf-8");
    readStream.on("error", (error) => {
      throw error;
    });
    readStream.on("data", (data) => {
      process.stdout.write(data);
    });
    readStream.on("end", () => {
      process.stdout.write("\n");
    });
  } catch (error) {
    throw error;
  }
};

await read();
