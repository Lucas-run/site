import React from 'react';
import styles from './ExampleSection.module.css';

interface ExampleSectionProps {
  examples: string[]; // Assume we're passing an array of example codes or blocks
}

const ExampleSection: React.FC<ExampleSectionProps> = ({ examples }) => {
  return (
    <div className={styles.examples}>
      {examples.map((example, index) => (
        <pre key={index} className={styles.exampleBlock}>
          <code>{example}</code>
        </pre>
      ))}
    </div>
  );
};

export default ExampleSection;
