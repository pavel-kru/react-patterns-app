// Netlify Function to get all patterns
// This demonstrates a simple serverless backend

export async function handler(event, _context) {
  // Sample patterns data (in production, this would come from a database)
  const patterns = [
    {
      id: 1,
      category: 'Array Methods',
      title: 'Map - Transform Array Elements',
      description:
        'The map() method creates a new array by applying a function to each element.',
      difficulty: 'beginner',
    },
    {
      id: 2,
      category: 'Array Methods',
      title: 'Filter - Select Specific Elements',
      description:
        'The filter() method creates a new array with elements that pass a test.',
      difficulty: 'beginner',
    },
    {
      id: 3,
      category: 'Async Patterns',
      title: 'Promises - Handle Async Operations',
      description:
        'Promises represent future values and handle asynchronous operations cleanly.',
      difficulty: 'intermediate',
    },
  ];

  // Handle different HTTP methods
  if (event.httpMethod === 'GET') {
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        data: patterns,
        count: patterns.length,
      }),
    };
  }

  // Handle unsupported methods
  return {
    statusCode: 405,
    body: JSON.stringify({ error: 'Method not allowed' }),
  };
}
