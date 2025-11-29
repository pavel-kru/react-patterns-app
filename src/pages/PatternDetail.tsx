import { useParams, Link } from 'react-router-dom';
import { patterns } from '../data/patterns';
import CodeBlock from '../components/CodeBlock.tsx';
import './PatternDetail.css';

function PatternDetail() {
  const { id } = useParams<{ id: string }>();
  const pattern = patterns.find(p => p.id === parseInt(id || '0'));

  if (!pattern) {
    return (
      <div className="pattern-not-found">
        <h2>Pattern not found</h2>
        <Link to="/" className="back-link">← Back to patterns</Link>
      </div>
    );
  }

  return (
    <div className="pattern-detail">
      <Link to="/" className="back-link">← Back to all patterns</Link>
      
      <div className="detail-header">
        <div className="detail-meta">
          <span className="detail-category">{pattern.category}</span>
          <span className={`detail-difficulty ${pattern.difficulty}`}>
            {pattern.difficulty}
          </span>
        </div>
        <h1 className="detail-title">{pattern.title}</h1>
        <p className="detail-description">{pattern.description}</p>
      </div>

      <section className="detail-section">
        <h2>📝 Code Example</h2>
        <CodeBlock code={pattern.code} />
      </section>

      <section className="detail-section">
        <h2>💡 Explanation</h2>
        <p className="explanation">{pattern.explanation}</p>
      </section>

      <section className="detail-section">
        <h2>🎯 When to Use</h2>
        <p className="use-case">{pattern.useCase}</p>
      </section>

      <div className="navigation-buttons">
        {pattern.id > 1 && (
          <Link to={`/pattern/${pattern.id - 1}`} className="nav-btn prev">
            ← Previous Pattern
          </Link>
        )}
        {pattern.id < patterns.length && (
          <Link to={`/pattern/${pattern.id + 1}`} className="nav-btn next">
            Next Pattern →
          </Link>
        )}
      </div>
    </div>
  );
}

export default PatternDetail;
