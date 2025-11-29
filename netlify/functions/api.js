// Netlify Function Example
// This serverless function can be called from your React app

exports.handler = async (event, context) => {
  // Handle CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  try {
    // Example: Get all patterns
    if (event.httpMethod === 'GET' && event.path.includes('/patterns')) {
      const patterns = [
        { id: 1, title: 'Map Pattern', views: 150 },
        { id: 2, title: 'Filter Pattern', views: 120 },
        { id: 3, title: 'Reduce Pattern', views: 95 },
      ];

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ patterns }),
      };
    }

    // Example: Track pattern view
    if (event.httpMethod === 'POST' && event.path.includes('/track')) {
      const data = JSON.parse(event.body);
      
      // In a real app, you'd save this to a database
      console.log('Pattern viewed:', data.patternId);

      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({ success: true, message: 'View tracked' }),
      };
    }

    // Default response
    return {
      statusCode: 404,
      headers,
      body: JSON.stringify({ error: 'Not found' }),
    };

  } catch (error) {
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error', details: error.message }),
    };
  }
};
