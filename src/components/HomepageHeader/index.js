import Grid from "@mui/material/Grid";
import clsx from "clsx";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { Container } from "@mui/material";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <Container
        container
        maxWidth="md"
        justifyContent="center"
        alignItems="center"
        style={{ padding: 0 }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          style={{ paddingBottom: 20 }}
          spacing={6}
        >
          <Grid item xs={8} md={4}>
            <div className="text--center">
              <img
                src={useBaseUrl("/img/federico.png")}
                style={{ borderRadius: "50%" }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={8}>
            <h1 className="hero__title">{siteConfig.title}</h1>

            <h3>
              Senior Research Associate - Heat & Health Research Incubator at
              the University of Sydney
            </h3>

            <p>
              An Energy Engineer specializing in indoor environmental quality,
              thermal comfort, and human thermophysiology. I aim to create
              occupant-centric solutions for improving building performance,
              occupants' comfort, health, well-being, and productivity.
            </p>

            <Grid
              container
              justifyContent="center"
              alignItems="center"
              style={{ paddingBottom: 20 }}
            >
              <Grid item>
                <Link
                  className="button"
                  to="https://github.com/FedericoTartarini"
                  style={{ padding: "1rem" }}
                >
                  <GitHubIcon fontSize={"large"} />
                </Link>
              </Grid>

              <Grid item>
                <Link
                  className="button"
                  to="https://www.youtube.com/c/FedericoTartarini"
                  style={{ padding: "1rem" }}
                >
                  <YouTubeIcon fontSize={"large"} />
                </Link>
              </Grid>

              <Grid item>
                <Link
                  className="button"
                  to="https://www.linkedin.com/in/federico-tartarini-3991995b/"
                  style={{ padding: "1rem" }}
                >
                  <LinkedInIcon fontSize={"large"} />
                </Link>
              </Grid>

              <Grid item>
                <Link
                  className="button"
                  to="https://scholar.google.com/citations?user=QcamSPwAAAAJ&hl=en"
                  style={{ padding: "1rem" }}
                >
                  <SchoolIcon fontSize={"large"} />
                </Link>
              </Grid>
            </Grid>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/about_me/intro"
              >
                About me
              </Link>
            </div>
          </Grid>
        </Grid>
      </Container>
    </header>
  );
}
