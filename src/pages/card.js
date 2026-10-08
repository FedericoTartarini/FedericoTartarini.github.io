import React, { useEffect, useState } from "react";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SchoolIcon from "@mui/icons-material/School";
import ShareIcon from "@mui/icons-material/Share";
import YouTubeIcon from "@mui/icons-material/YouTube";

import contact from "@site/src/data/contact.json";
import styles from "./card.module.css";

const ICONS = {
  youtube: YouTubeIcon,
  linkedin: LinkedInIcon,
  scholar: SchoolIcon,
  github: GitHubIcon,
};

const fullName = `${contact.prefix} ${contact.firstName} ${contact.lastName}`;
const cardUrl = `${contact.website}${contact.cardPath}`;

// Standalone page (no navbar/footer) so it loads fast after a QR scan.
export default function Card() {
  const photo = useBaseUrl("/img/federico-card.jpg");
  const qr = useBaseUrl("/img/card-qr.svg");
  const vcf = useBaseUrl("/federico-tartarini.vcf");
  const [copied, setCopied] = useState(false);
  // Hidden by default so people who just scanned it never see it flash.
  // Read in an effect because the static HTML has no query string.
  const [showQr, setShowQr] = useState(false);

  useEffect(() => {
    setShowQr(new URLSearchParams(window.location.search).get("src") !== "qr");
  }, []);

  // Phones get the native share sheet; desktops fall back to copying the link.
  const share = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: fullName, url: cardUrl });
      } catch {
        // User closed the share sheet.
      }
      return;
    }
    await navigator.clipboard.writeText(cardUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className={styles.page}>
      <Head>
        <title>{`${fullName} | Contact card`}</title>
        <meta
          name="description"
          content={`Contact details for ${fullName}, ${contact.title}, ${contact.organization}.`}
        />
      </Head>

      <article className={styles.card}>
        {/* At the top so others can scan it straight off Federico's phone. */}
        {showQr && (
          <figure className={styles.qrBlock}>
            <img className={styles.qr} src={qr} alt={`QR code linking to ${cardUrl}`} width={160} height={160} />
            <figcaption>Scan to open this card on your phone</figcaption>
          </figure>
        )}

        <img className={styles.photo} src={photo} alt={fullName} width={128} height={128} />
        <h1 className={styles.name}>{fullName}</h1>
        <p className={styles.role}>
          {contact.title}
          <br />
          {contact.organization}
        </p>

        <div className={styles.actions}>
          <a className={styles.primary} href={vcf} download="federico-tartarini.vcf">
            <PersonAddIcon fontSize="small" /> Save contact
          </a>
          <button type="button" className={styles.secondary} onClick={share}>
            <ShareIcon fontSize="small" /> {copied ? "Link copied" : "Share"}
          </button>
          <a className={styles.secondary} href={`mailto:${contact.email}`}>
            <EmailIcon fontSize="small" /> Email
          </a>
        </div>

        <ul className={styles.links}>
          <li>
            <a href={`mailto:${contact.email}`}>
              <EmailIcon /> {contact.email}
            </a>
          </li>
          {contact.links.map(({ id, label, href }) => {
            const Icon = ICONS[id];
            return (
              <li key={id}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  <Icon /> {label}
                </a>
              </li>
            );
          })}
        </ul>

        <section className={styles.research}>
          <p>{contact.research}</p>
          <p className={styles.tools}>
            {contact.tools.map(({ label, to }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </p>
        </section>

        <footer className={styles.footer}>
          <Link to="/">Full website →</Link>
        </footer>
      </article>
    </main>
  );
}
