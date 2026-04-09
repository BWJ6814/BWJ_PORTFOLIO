import { copyFileSync, existsSync, unlinkSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = join(root, "index.html");
const bakPath = join(root, "index.html.bak");

if (!existsSync(bakPath)) {
  console.error("index.html.bak 이 없습니다. 세로 모드(npm run print:use)를 먼저 켠 적이 있어야 합니다.");
  process.exit(1);
}

copyFileSync(bakPath, indexPath);
unlinkSync(bakPath);
console.log("");
console.log("[원복 완료] 원본 index.html 로 돌렸고, index.html.bak 은 삭제했습니다.");
console.log("");
