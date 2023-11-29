import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import { Container } from "@mui/material";
import HomepageHeader from "@site/src/components/HomepageHeader";
import Grid from "@mui/material/Grid";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} personal website`}
      description="This is the personal website of Dr Federico Tartarini, in the landing page I describe my role and skills"
    >
      <HomepageHeader />
      <Container
        maxWidth="md"
        container
        justifyContent="center"
        alignItems="center"
        style={{ padding: 24 }}
      >
        <Grid
          container
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="top"
        >
          <HomepageFeatures />
        </Grid>
      </Container>
    </Layout>
  );
}
