import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import styles from './index.module.css'

const STATS = [
  {value: '922', label: 'Packets'},
  {value: '22', label: 'Realms'},
  {value: '100%', label: 'Nitro coverage'},
]

const FEATURES = [
  {
    title: 'Complete packet catalog',
    description:
      'Every client-to-server and server-to-client packet is documented with wire fields, sender intent, and expected receiver behavior.',
  },
  {
    title: 'Wire-format accuracy',
    description:
      'Field types, ordering, and encoding rules are derived directly from the Nitro renderer source — no guesswork, no placeholders.',
  },
  {
    title: 'Open specification',
    description:
      'All data lives in a single version-controlled YAML file, making it easy to diff, fork, or generate client libraries from the spec.',
  },
]

const NAV_CARDS = [
  {
    title: 'Introduction',
    description: 'Learn how the protocol is structured and how to read the spec.',
    to: '/docs/intro',
    cta: 'Read the intro',
  },
  {
    title: 'Packet Composition',
    description: 'Understand the wire format, data types, and message framing.',
    to: '/docs/reference/packet-composition',
    cta: 'View composition',
  },
  {
    title: 'Protocol',
    description: 'Browse all 922 packets across 22 realms in the full catalog.',
    to: '/docs/protocol/packet-catalog',
    cta: 'Browse packets',
  },
]

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext()

  return (
    <header className={styles.heroBanner}>
      <div className='container'>
        <p className={styles.badge}>Open specification · v1.0.0</p>
        <Heading as='h1' className={styles.title}>
          {siteConfig.title}
        </Heading>
        <p className={styles.subtitle}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className='button button--primary button--lg' to='/docs/intro'>
            Start with the spec
          </Link>
          <Link className='button button--secondary button--lg' to='/docs/protocol/packet-catalog'>
            Browse packets
          </Link>
        </div>
      </div>
    </header>
  )
}

function Stats() {
  return (
    <section className={styles.stats}>
      <div className='container'>
        <div className={styles.statsGrid}>
          {STATS.map(({value, label}) => (
            <div key={label} className={styles.statItem}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className={styles.featuresGrid}>
          {FEATURES.map(({title, description}) => (
            <div key={title} className={styles.featureCard}>
              <Heading as='h3'>{title}</Heading>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function NavCards() {
  return (
    <section className={styles.navCards}>
      <div className='container'>
        <div className={styles.navCardsGrid}>
          {NAV_CARDS.map(({title, description, to, cta}) => (
            <Link key={title} to={to} className={styles.navCard}>
              <Heading as='h3'>{title}</Heading>
              <p>{description}</p>
              <span className={styles.navCardCta}>{cta} →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext()

  return (
    <Layout title={siteConfig.title} description='Pixel Protocol packet specification and artifacts'>
      <HomepageHeader />
      <main>
        <Stats />
        <Features />
        <NavCards />
      </main>
    </Layout>
  )
}
