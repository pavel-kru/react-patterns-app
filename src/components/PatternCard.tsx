import { PatternCardProps } from '../types/pattern';
import './PatternCard.css';

function PatternCard({ pattern }: PatternCardProps) {
  return (
    <div className="pattern-card">
      <div className="card-header">
        <span className="card-category">{pattern.category}</span>
        <span className={`card-difficulty ${pattern.difficulty}`}>
          {pattern.difficulty}
        </span>
      </div>
      <h3 className="card-title">{pattern.title}</h3>
      <p className="card-description">{pattern.description}</p>
      <div className="card-footer">
        <span className="card-link">Learn more →</span>
      </div>
    </div>
  );
}

export default PatternCard;
