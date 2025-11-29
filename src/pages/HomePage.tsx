import { useState } from 'react';
import { Link } from 'react-router-dom';
import { patterns, categories } from '../data/patterns';
import PatternCard from '../components/PatternCard.tsx';
import './HomePage.css';

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const filteredPatterns = patterns.filter(pattern => {
    const matchesCategory = selectedCategory === 'All' || pattern.category === selectedCategory;
    const matchesSearch = pattern.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pattern.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="home-page">
      <section className="hero">
        <h2>Master JavaScript Patterns</h2>
        <p>Learn essential JavaScript patterns with interactive examples and clear explanations</p>
      </section>

      <div className="controls">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search patterns..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="patterns-grid">
        {filteredPatterns.length > 0 ? (
          filteredPatterns.map(pattern => (
            <Link key={pattern.id} to={`/pattern/${pattern.id}`} className="pattern-link">
              <PatternCard pattern={pattern} />
            </Link>
          ))
        ) : (
          <div className="no-results">
            <p>No patterns found. Try different search terms or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default HomePage;
