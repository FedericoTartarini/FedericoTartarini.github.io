import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SchoolIcon from "@mui/icons-material/School";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <Box>
          <Grid
            container
            spacing={2}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid xs={12} md={8}>
              <p className="hero__subtitle ">
                Senior Research Associate - Heat & Health Research Incubator at
                the University of Sydney
              </p>
            </Grid>
            <Grid xs={12} md={8}>
              <p>
                An Energy Engineer specializing in indoor environmental quality,
                thermal comfort, and human thermophysiology. I aim to create
                occupant-centric solutions for improving building performance,
                occupants' comfort, health, well-being, and productivity.
              </p>
            </Grid>
          </Grid>
        </Box>

        <p>
          <Link className="button" to="https://github.com/FedericoTartarini">
            <GitHubIcon fontSize={"large"} />
          </Link>
          <Link
            className="button"
            to="https://www.youtube.com/c/FedericoTartarini"
          >
            <YouTubeIcon fontSize={"large"} />
          </Link>
          <Link
            className="button"
            to="https://www.linkedin.com/in/federico-tartarini-3991995b/"
          >
            <LinkedInIcon fontSize={"large"} />
          </Link>
          <Link
            className="button"
            to="https://scholar.google.com/citations?user=QcamSPwAAAAJ&hl=en"
          >
            <SchoolIcon fontSize={"large"} />
          </Link>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/about_me/intro"
          >
            About me
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
