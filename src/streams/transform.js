import { Transform } from "node:stream";

const reverseString = new Transform({
  transform(chunk, _, callback) {
    callback(null, chunk.toString().split("").reverse().join(""));
  },
});

const transform = async () => {
  process.stdin.pipe(reverseString).pipe(process.stdout);
};

await transform();
