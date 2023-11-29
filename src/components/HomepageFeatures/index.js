import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Grid from "@mui/material/Grid";
import Link from "@docusaurus/Link";

const FeatureList = [
  {
    title: "My Research",
    link: "docs/category/my-research",
    Svg: require("@site/static/img/undraw_science_re_mnnr.svg").default,
    description: (
      <>
        My research focuses on determining and quantifying the effect that the
        environment has on thermal comfort, productivity, health, and
        well-being.
      </>
    ),
  },
  {
    title: "Tools",
    link: "docs/category/my-projects",
    Svg: require("@site/static/img/undraw_website_builder_re_ii6e.svg").default,
    description: (
      <>
        I am the main author of pythermalcomfort, the CBE Thermal Comfort Tool,
        the CBE Clima Tool, Cozie for Apple and Fitbit, the HeatWatch, and SMA
        Extreme heat tool
      </>
    ),
  },
  {
    title: "YouTube",
    link: "https://www.youtube.com/c/FedericoTartarini",
    Svg: require("@site/static/img/undraw_augmented_reality_re_f0qd.svg")
      .default,
    description: (
      <>
        I am a YouTube educator and I publish video tutorials about: LaTeX,
        Python, PyCharm, Beamer, Docusaurus, ReactJS.
      </>
    ),
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Link to={link}>
          <Heading as="h3">{title}</Heading>
        </Link>
        <p>{description}</p>
      </div>
    </>
  );
}

export default function HomepageFeatures() {
  return (
    <>
      {FeatureList.map((props, idx) => (
        <Grid xs={12} sm={10} md={4}>
          <Feature key={idx} {...props} />
        </Grid>
      ))}
    </>
  );
}
