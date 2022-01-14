import React from 'react';
import Card from '../components/Card';
import Layout from '../components/Layout';

// markup
const IndexPage = () => {
  return (
    <Layout>
      <header className="header">
        <h1 className="header__title">
          Reliable, efficient delivery <span>Powered by Technology</span>
        </h1>
        <p className="header__subtitle">
          Our Artificial intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </header>
      <section className="grid-container">
        <Card title="Supervisor" icon="icon-supervisor" theme="theme-cyan">
          <p>Monitors activity to identify project roadblocks</p>
        </Card>
        <Card title="Team Builder" icon="icon-team-builder">
          <p>Scans our talent network to create the optimal team project</p>
        </Card>
        <Card title="Karma" icon="icon-karma" theme="theme-orange">
          <p>Reguraly evaluates our talent to ensure quality</p>
        </Card>
        <Card title="Calculator" icon="icon-calculator" theme="theme-blue">
          <p>
            Use data from past projects to provider better delivery estimates
          </p>
        </Card>
      </section>
    </Layout>
  );
};

export default IndexPage;
