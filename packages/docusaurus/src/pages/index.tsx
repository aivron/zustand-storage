import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
// import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './pages.module.css';

function HeroBanner() {
    return (
        <div className={clsx(styles.hero)}>
            <div className={styles.heroInner}>
                <Heading as="h1" className={styles.heroTitle}>
                    Zustand Storage
                </Heading>
                <p
                    className={styles.heroTagline}
                    dangerouslySetInnerHTML={{
                        __html: translate({
                            id: 'homepage.hero.title',
                            message: 'Persistent state management for <b>React</b> apps',
                            description: 'Homepage hero title for Zustand Storage',
                        }),
                    }}
                />
                <div className={styles.ctaButtons}>
                    <Link className="button button--primary button--outline" to="/docs">
                        {translate({ message: 'Get Started' })}
                    </Link>
                    <Link
                        className="button button--secondary"
                        to="https://github.com/aivron/zustand-storage">
                        {translate({ message: 'View on GitHub' })}
                    </Link>
                </div>
            </div>
        </div>
    );
}

function FeaturesContainer() {
    const features = [
        {
            title: 'Persistent Storage',
            // Direct Unsplash image link for storage-related images
            imageUrl: 'https://cdn-icons-png.flaticon.com/128/2316/2316109.png',
            description: <>Maintain state across sessions without extra setup.</>,
        },
        {
            title: 'Middleware Support',
            // Direct Unsplash image link for middleware-related images
            imageUrl: 'https://cdn-icons-png.flaticon.com/128/3950/3950815.png',
            description: <>Integrate middleware for logging, debugging, and more.</>,
        },
        {
            title: 'Type Safe & Modular',
            // Direct Unsplash image link for TypeScript or code-related images
            imageUrl: 'https://cdn-icons-png.flaticon.com/128/16456/16456528.png',
            description: <>Built with TypeScript and a modular design for scalable apps.</>,
        },
    ];
    return (
        <section className={clsx(styles.section, styles.featuresSection)}>
            <div className="container">
                <Heading as="h2" className="text--center margin-bottom--lg">
                    {translate({ message: 'Features' })}
                </Heading>
                <div className="row">
                    {features.map((feature, idx) => (
                        <div className="col col--4" key={idx}>
                            <div className={clsx('card', styles.card)}>
                                <div className="text--center">
                                    <img
                                        src={feature.imageUrl}
                                        alt={feature.title}
                                        style={{ width: '80px', height: '80px', marginBottom: '1rem', objectFit: 'contain' }}
                                        loading="lazy"
                                    />
                                </div>
                                <Heading as="h3" className="text--center margin-bottom--sm" style={{ color: '#333' }}>
                                    {feature.title}
                                </Heading>
                                <p className="text--center" style={{ color: '#555', fontSize: '1rem' }}>
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function VideoSection() {
    return (
        <section className={clsx(styles.section, styles.videoSection)}>
            <div className="container text--center">
                <Heading as="h2" className="margin-bottom--lg">
                    {translate({ message: 'Watch our Intro Video' })}
                </Heading>
                <div className={styles.videoContainer}>
                    <iframe
                        src="https://www.youtube.com/embed/your_video_id" // None available yet
                        title="Zustand Storage Intro Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

function DiscussionSection() {
    return (
        <section className={clsx(styles.section, styles.discussionSection)}>
            <div className="container text--center">
                <Heading as="h2" className="margin-bottom--lg">
                    {translate({ message: 'Join the Discussion' })}
                </Heading>
                <p className="margin-bottom--lg" style={{ maxWidth: '600px', margin: '1rem auto', lineHeight: 1.6, fontSize: '1.125rem' }}>
                    Connect with fellow developers and share your experiences, feature suggestions, and success stories with Zustand Storage. Our active community is here to help you build amazing apps.
                </p>
                <Link className="button button--primary button--outline" to="https://github.com/aivron/zustand-storage/discussions">
                    {translate({ message: 'View Discussions on GitHub' })}
                </Link>
            </div>
        </section>
    );
}

export default function Home(): React.ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="Zustand Storage provides persistent state management for React apps, with middleware support and modular architecture.">
            <main>
                <HeroBanner />
                <FeaturesContainer />
                {/* <VideoSection /> */}
                <DiscussionSection />
            </main>
        </Layout>
    );
}
