import { copyFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = join(root, "index.html");
const bakPath = join(root, "index.html.bak");
const printPath = join(root, "public", "print-portfolio.html");

if (!existsSync(printPath)) {
  console.error("public/print-portfolio.html 이 없습니다.");
  process.exit(1);
}
if (existsSync(bakPath)) {
  console.error("이미 index.html.bak 이 있습니다. 먼저 npm run print:restore 로 원복하세요.");
  process.exit(1);
}

copyFileSync(indexPath, bakPath);
copyFileSync(printPath, indexPath);
console.log("");
console.log("[세로형 ON] index.html → index.html.bak 백업 후, 세로 페이지를 메인으로 넣었습니다.");
console.log("  다음: npm run dev  (브라우저 기본이 세로 포트폴리오)");
console.log("  원복: npm run print:restore");
console.log("");
