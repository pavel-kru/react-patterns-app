import { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-javascript';
import { CodeBlockProps } from '../types/pattern';
import './CodeBlock.css';

function CodeBlock({ code }: CodeBlockProps) {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="code-block">
      <pre>
        <code className="language-javascript">{code}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
