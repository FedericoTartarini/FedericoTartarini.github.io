import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'My Research',
    Svg: require('@site/static/img/undraw_science_re_mnnr.svg').default,
    description: (
      <>
        My research focuses on determining and quantifying the effect that the environment has on thermal comfort, productivity, health, and well-being.
      </>
    ),
  },
  {
    title: 'Tools',
    Svg: require('@site/static/img/undraw_website_builder_re_ii6e.svg').default,
    description: (
      <>
        I am the main author of pythermalcomfort, the CBE Thermal Comfort Tool, the CBE Clima Tool, Cozie for Apple and Fitbit.
      </>
    ),
  },
  {
    title: 'YouTube',
    Svg: require('@site/static/img/undraw_augmented_reality_re_f0qd.svg').default,
    description: (
      <>
        I am a YouTube educator and I publish video tutorials about: LaTeX, Python, PyCharm, Beamer, Docusaurus, ReactJS.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
