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
    link: "docs/category/tools",
    Svg: require("@site/static/img/undraw_website_builder_re_ii6e.svg").default,
    description: (
      <>
        I am the main author of{" "}
        <Link to={"docs/tools/pythermalcomfort"}>pythermalcomfort</Link>, the{" "}
        <Link to={"docs/tools/cbe-comfort-tool"}>CBE Thermal Comfort Tool</Link>
        , the <Link to={"docs/tools/cbe-clima-tool"}>CBE Clima Tool</Link>,
        Cozie for <Link to={"docs/tools/cozie"}>Apple</Link> and Fitbit, the{" "}
        <Link to={"docs/tools/heatwatch"}>HeatWatch</Link>, and SMA Extreme heat
        tool.
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
        I am a YouTube educator and I publish video tutorials about:{" "}
        <Link
          to={
            "https://www.youtube.com/playlist?list=PLY91jl6VVD7wnyOlAgPRe-i9ov4_ZqHV8"
          }
        >
          LaTeX
        </Link>
        ,{" "}
        <Link
          to={
            "https://www.youtube.com/playlist?list=PLY91jl6VVD7wMft3vQWPhcO4K0ZSdW6uy"
          }
        >
          Python
        </Link>
        ,{" "}
        <Link
          to={
            "https://www.youtube.com/playlist?list=PLY91jl6VVD7w-5pYk7kVRDRrUikwPHasb"
          }
        >
          Thermal Comfort
        </Link>
        ,{" "}
        <Link
          to={
            "https://www.youtube.com/playlist?list=PLY91jl6VVD7z8c6XM5CR9wzU5aZ2702nD"
          }
        >
          LateX Beamer
        </Link>
        ,{" "}
        <Link
          to={
            "https://www.youtube.com/playlist?list=PLY91jl6VVD7wn8SHdWKRg3AAEKbHQYaNL"
          }
        >
          Docusaurus
        </Link>
        , ReactJS.
      </>
    ),
  },
  {
    title: "LaTeX",
    link: "docs/category/latex",
    Svg: require("@site/static/img/undraw_add_document_re_mbjx.svg").default,
    description: (
      <>
        I am passionate about LaTeX and I have created a series of{" "}
        <Link to={"docs/category/latex"}>tutorials</Link> and{" "}
        <Link
          to={
            "https://www.youtube.com/playlist?list=PLY91jl6VVD7wnyOlAgPRe-i9ov4_ZqHV8"
          }
        >
          videos
        </Link>{" "}
        to help you get started with LaTeX.
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
        <Grid key={idx} xs={12} sm={10} md={6}>
          <Feature key={idx} {...props} />
        </Grid>
      ))}
    </>
  );
}
