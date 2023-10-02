import React from 'react';
import SectionHeading from '../SectionHeading';
import { DAILY_APPLICATIONS } from '@root/lib/skillset';
import Each_Applications from '../Skill';
import Container from '../Container';

const Skills = () => {
  return (
    <section id="skills" className="relative py-12">
      <Container className="space-y-12">
        <SectionHeading>Tech Skills</SectionHeading>
        <div className="flex flex-wrap items-start gap-8">
          {DAILY_APPLICATIONS.map((app) => {
            return <Each_Applications key={app.app} app={app} />;
          })}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
