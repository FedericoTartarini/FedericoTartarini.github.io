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
import AnimatedSvg from "../animatedSvg";

const React = require("react");
const { useState, useEffect } = React;
const { useSpring, animated } = require("@react-spring/web");

export default function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [active, setActive] = useState(false);
  const { x } = useSpring({
    zIndex: 0,
    config: {
      duration: 4000,
      tension: 120,
      friction: 14,
      easeInOutBack: 1,
    },
    x: active ? 1 : 0,
  });

  useEffect(() => {
    const id = setTimeout(() => {
      setActive(!active);
    }, 4000);

    return () => clearTimeout(id);
  }, [active]);

  useEffect(() => {
    setActive(true);
  }, []);

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
          spacing={4}
        >
          <Grid
            item
            xs={12}
            md={4}
            style={{
              zIndex: 2,
            }}
          >
            <img
              alt={"federico tartarini"}
              src={useBaseUrl("/img/federico.jpg")}
              style={{
                borderRadius: "50%",
                maxWidth: "225px",
                textAlign: "center",
              }}
            />

            <div
              style={{
                position: "absolute",
                zIndex: 200,
                transform: `translate(220px, -75px)`,
                width: "100px",
              }}
            >
              <AnimatedSvg />
            </div>
          </Grid>
          <svg
            width="1000"
            height="1300"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className={styles.svgAnimated}
            // onClick={() => setActive(!active)}
          >
            <animated.path
              transform="translate(414.756822946785 313.7476382623813)"
              fill="#333"
              opacity=".2"
              d={x.to({
                range: [0, 1],
                output: [
                  "M122.4 -230.4C149.8 -196.2 157.2 -145.6 177.9 -104.5C198.7 -63.3 232.8 -31.7 243.5 6.2C254.2 44 241.4 88 220.1 128.1C198.8 168.3 168.9 204.5 130.8 217.3C92.7 230.2 46.3 219.6 4.1 212.5C-38.2 205.4 -76.3 201.9 -103.4 182.7C-130.5 163.5 -146.4 128.6 -162 95.6C-177.6 62.5 -192.8 31.3 -202.2 -5.5C-211.7 -42.2 -215.4 -84.3 -202.7 -122.3C-189.9 -160.3 -160.7 -194 -124.2 -222.9C-87.7 -251.8 -43.8 -275.9 1.8 -279.1C47.5 -282.3 95 -264.5 122.4 -230.4",
                  "M125.6 -199.6C168.2 -192.9 211.8 -170.2 238.2 -134.3C264.7 -98.3 273.8 -49.2 267.8 -3.5C261.7 42.2 240.4 84.3 213.2 119C186.1 153.6 153 180.7 116.5 199.5C80 218.2 40 228.6 4.2 221.4C-31.7 214.2 -63.3 189.4 -96.1 168.4C-128.9 147.5 -162.7 130.5 -186.7 103.1C-210.7 75.7 -224.9 37.8 -233.8 -5.2C-242.8 -48.2 -246.5 -96.3 -231.7 -139.6C-216.9 -182.9 -183.4 -221.4 -141.7 -228.5C-100 -235.7 -50 -211.6 -4.3 -204.2C41.5 -196.9 83 -206.3 125.6 -199.6",
                ],
              })}
            />
          </svg>
          <Grid
            item
            xs={12}
            md={8}
            style={{
              zIndex: 2,
            }}
          >
            <h1 className="hero__title">{siteConfig.title}</h1>

            <h2>
              Senior Lecturer | Horizon Fellow | Engineer | YouTuber
            </h2>

                <h3>School of Architecture Design and Planning <br/> The University of Sydney</h3>

              <p>
                  I specialise in indoor environmental quality (IEQ), thermal comfort, human thermophysiology, and
                  building performance research.
                  My mission is to develop occupant-centric tools and solutions that improve thermal comfort, health,
                  productivity, and overall well-being in built environments. <br/><br/>
                  My research integrates experimental, computational, and field studies to examine how indoor
                  environments influence human performance and health outcomes.
                  I am passionate about bridging research
                  and practice together, hence, I am the main author of several widely used <Link style={{ color: 'var(--ifm-font-color-base-inverse)', textDecoration: 'underline' }} to={"/docs/category/tools"}>open-source tools</Link>. <br/><br/>
                  I am also a <Link style={{ color: 'var(--ifm-font-color-base-inverse)', textDecoration: 'underline' }} to={"https://www.youtube.com/c/FedericoTartarini"}>YouTuber</Link>, there I share my research and teaching experiences with a global audience.
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
