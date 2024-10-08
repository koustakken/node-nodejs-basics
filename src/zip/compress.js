import fs from "node:fs";
import gzip from "node:zlib";
import path from "node:path";
import { getDirname } from "../utils/utils.js";

const compress = async () => {
  const fileToCompress = path.join(
    getDirname(import.meta.url),
    "files",
    "fileToCompress.txt"
  );
  const archiveName = path.join(getDirname(import.meta.url), "archive.gz");

  try {
    const readStream = fs.createReadStream(fileToCompress);
    const writeStream = fs.createWriteStream(archiveName);
    const gzipStream = gzip.createGzip();
    readStream.pipe(gzipStream).pipe(writeStream);
  } catch (error) {
    throw error;
  }
};

await compress();
