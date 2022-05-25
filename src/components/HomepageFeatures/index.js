import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import team from '../../../static/img/team.jpg';
import schedule from '../../../static/img/schedule.jpg';
import alerts from '../../../static/img/alerts.jpg';

const FeatureList = [
  {
    title: 'Built for teams',
    img: team,    
    description: (
      <>
        Invite all your team to your Workspace and collaborate to 
        monitor your services in one place.
      </>
    ),
  },
  {
    title: 'Flexible schedules',
    img: schedule,
    description: (
      <>
        Create schedules that run your monitors from multiple geographical
        locations. No setup required.
      </>
    ),
  },
  {
    title: 'Flexible alerts',
    img: alerts,
    description: (
      <>
        Get alerted on your favorite messaging tools like Slack or Teams. Or just receive
        alerts via email.
      </>
    ),
  },
];

function Feature({title, description, img}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {img && <img src={img} />}        
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
