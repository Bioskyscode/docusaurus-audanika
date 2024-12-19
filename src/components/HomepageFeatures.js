import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Bach Statt Krach 2026',
    Svg: require('../../static/img/undraw_off-road_34hg.svg').default,
    description: (
      <>
        A concert made to display the beauty of music composition
      </>
    ),
  },
  {
    title: 'Children Music',
    Svg: require('../../static/img/undraw_music_3vas.svg').default,
    description: (
      <>
        Teaching kids the art of music compostions at schools
      </>
    ),
  },
  {
    title: 'Audanika Workshop',
    Svg: require('../../static/img/undraw_business-shop_b4su.svg').default,
    description: (
      <>
        Creating awareness on the beauty and the importance of music making
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
