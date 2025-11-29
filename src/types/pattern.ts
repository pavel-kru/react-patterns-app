// Type definitions for JavaScript patterns

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type PatternCategory =
  | 'Array Methods'
  | 'Async Patterns'
  | 'ES6+ Features'
  | 'Design Patterns';

export interface Pattern {
  id: number;
  category: PatternCategory;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  code: string;
  explanation: string;
  useCase: string;
}

export interface PatternCardProps {
  pattern: Pattern;
}

export interface CodeBlockProps {
  code: string;
}
