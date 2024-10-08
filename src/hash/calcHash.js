import { open } from "node:fs/promises";
import path from "node:path";
import { createHash } from "node:crypto";
import { getDirname } from "../utils/utils.js";

const calculateHash = async () => {
  const hashFilePath = path.join(
    getDirname(import.meta.url),
    "files",
    "fileToCalculateHashFor.txt"
  );

  try {
    const fd = await open(hashFilePath);
    const hash = createHash("sha256");
    const fileStream = fd.createReadStream(hashFilePath);
    fileStream.on("data", (data) => {
      hash.update(data);
    });
    fileStream.on("end", () => {
      console.log(hash.digest("hex"));
    });
  } catch (error) {
    throw error;
  }
};

await calculateHash();
