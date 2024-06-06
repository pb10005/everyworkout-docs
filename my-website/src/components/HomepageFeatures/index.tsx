import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  imgPath: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'トレーニーのためのUI',
    imgPath: '/img/ui.png',
    description: (
      <>
        ジムで使うことを想定した画面機能や、累計ボリュームの計算・可視化などの機能を備えています。
      </>
    ),
  },
  {
    title: '習慣化のエッセンス',
    imgPath: '/img/custom.png',
    description: (
      <>
        EVERYWORKOUTは習慣化のエッセンスを取り入れた機能を備えています。
      </>
    ),
  },
  {
    title: 'オープンソース',
    imgPath: '/img/oss.png',
    description: (
      <>
        EVERYWORKOUTはオープンソースです。誰でも開発に参加できます。
      </>
    ),
  },
];

function Feature({title, imgPath, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.image} src={imgPath}/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
