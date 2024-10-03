import fs from "node:fs";
import path from "node:path";
import { getDirname } from "../utils/utils.js";
import gzip from "node:zlib";

const decompress = async () => {
  const archiveName = path.join(getDirname(import.meta.url), "archive.gz");

  try {
    const readStream = fs.createReadStream(archiveName);
    const writeStream = fs.createWriteStream("fileToCompress.txt");
    const gunzipStream = gzip.createGunzip();
    readStream.pipe(gunzipStream).pipe(writeStream);
  } catch (error) {
    throw error;
  }
};

await decompress();
