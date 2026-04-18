// import React from 'react';
import styles from './ExampleSection.module.css';

interface Example {
  title: string;
  description?: string;
  imageUrl?: string;
  codeSnippet?: string;
}

interface ExampleSectionProps {
  examples: Example[];
}


export const ExampleSection = ({ examples }: ExampleSectionProps) => {
  return (
    <section>
      {examples.map((ex, index) => (
        <div key={index} className={styles.exampleCard}>
          <h3>{ex.title}</h3>
          {ex.description && <p>{ex.description}</p>}
          {ex.imageUrl && <img src={ex.imageUrl} alt={ex.title} />}
          {ex.codeSnippet && <pre><code>{ex.codeSnippet}</code></pre>}
        </div>
      ))}
    </section>
  );
};

export default ExampleSection;
