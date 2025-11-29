import { render, screen } from '@testing-library/react';
import PatternCard from './PatternCard';
import { Pattern } from '../types/pattern';
import { describe, it, expect } from 'vitest';

const mockPattern: Pattern = {
  id: 1,
  title: 'Test Pattern',
  description: 'This is a test pattern',
  category: 'Array Methods',
  difficulty: 'beginner',
  code: 'console.log("test");',
  explanation: 'Test explanation',
  useCase: 'Test use case',
};

describe('PatternCard', () => {
  it('renders pattern details correctly', () => {
    render(<PatternCard pattern={mockPattern} />);

    expect(screen.getByText('Test Pattern')).toBeInTheDocument();
    expect(screen.getByText('Array Methods')).toBeInTheDocument();
    expect(screen.getByText('This is a test pattern')).toBeInTheDocument();
    expect(screen.getByText('beginner')).toBeInTheDocument();
  });
});
