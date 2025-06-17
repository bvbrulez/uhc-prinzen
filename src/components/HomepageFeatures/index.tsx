import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'How to get there',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <a href="docs/how-to-get-there">
        Wer fährt mit wem wann wohin? Hier findest du alle Infos zu den
        Fahrgemeinschaften zum Turnier.
      </a>
    ),
  },
  {
    title: 'Timetable',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: <>Hier findest du den Spielplan für das Turnier</>,
  },
  {
    title: 'Important to know',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Alles weitere zum Turnier, wie z.B. die Regeln, die Verpflegung, das
        Outfit etc.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): ReactNode {
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
