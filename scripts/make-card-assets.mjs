// Generates the files behind the /card page from src/data/contact.json:
//   static/federico-tartarini.vcf  - "Save contact" file, photo embedded
//   static/img/card-qr.svg         - QR code for slides and print
//   static/img/card-qr.png         - QR code for phone lock screen / Wallet
// Re-run after changing contact.json or the card photo:
//   node scripts/make-card-assets.mjs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contact = JSON.parse(
  fs.readFileSync(path.join(root, "src/data/contact.json"), "utf8"),
);

// vCard 3.0 requires escaping of these characters in text values.
const escape = (value) => value.replace(/([\\,;])/g, "\\$1");

// vCard lines must be folded at 75 octets; continuation lines start with a space.
const fold = (line) => line.match(/.{1,74}/g).join("\r\n ");

const photo = fs
  .readFileSync(path.join(root, contact.photo))
  .toString("base64");

const lines = [
  "BEGIN:VCARD",
  "VERSION:3.0",
  `N:${escape(contact.lastName)};${escape(contact.firstName)};;${escape(contact.prefix)};`,
  `FN:${escape(`${contact.prefix} ${contact.firstName} ${contact.lastName}`)}`,
  `ORG:${escape(contact.organization)}`,
  `TITLE:${escape(contact.title)}`,
  `EMAIL;TYPE=INTERNET,WORK:${contact.email}`,
  `URL:${contact.website}`,
  ...contact.links.map((link) => `URL;TYPE=${link.label.replace(/\s/g, "")}:${link.href}`),
  `NOTE:${escape(contact.research)}`,
  `PHOTO;ENCODING=b;TYPE=JPEG:${photo}`,
  "END:VCARD",
];

fs.writeFileSync(
  path.join(root, "static/federico-tartarini.vcf"),
  lines.map(fold).join("\r\n") + "\r\n",
);

// ?src=qr lets Google Analytics count scans separately from other visits.
const qrUrl = `${contact.website}${contact.cardPath}?src=qr`;
const qrOptions = { errorCorrectionLevel: "M", margin: 2 };

fs.writeFileSync(
  path.join(root, "static/img/card-qr.svg"),
  await QRCode.toString(qrUrl, { ...qrOptions, type: "svg" }),
);
await QRCode.toFile(path.join(root, "static/img/card-qr.png"), qrUrl, {
  ...qrOptions,
  width: 1024,
});

console.log(`Wrote vCard and QR codes for ${qrUrl}`);
