// JavaScript Patterns Database
// This file contains various JavaScript patterns for learning

import { Pattern, PatternCategory } from '../types/pattern';

export const patterns: Pattern[] = [
  {
    id: 1,
    category: 'Array Methods',
    title: 'Map - Transform Array Elements',
    description: 'The map() method creates a new array by applying a function to each element.',
    difficulty: 'beginner',
    code: `// Transform an array of numbers
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Transform array of objects
const users = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 }
];
const names = users.map(user => user.name);
console.log(names); // ['Alice', 'Bob']`,
    explanation: 'Map is perfect when you need to transform each element in an array. It always returns a new array of the same length.',
    useCase: 'Use map when you need to transform data, like converting prices to different currency or extracting specific properties from objects.'
  },
  {
    id: 2,
    category: 'Array Methods',
    title: 'Filter - Select Specific Elements',
    description: 'The filter() method creates a new array with elements that pass a test.',
    difficulty: 'beginner',
    code: `// Filter numbers greater than 3
const numbers = [1, 2, 3, 4, 5, 6];
const bigNumbers = numbers.filter(num => num > 3);
console.log(bigNumbers); // [4, 5, 6]

// Filter objects by condition
const products = [
  { name: 'Laptop', price: 1000, inStock: true },
  { name: 'Phone', price: 500, inStock: false },
  { name: 'Tablet', price: 300, inStock: true }
];
const available = products.filter(p => p.inStock);
console.log(available); // Returns only in-stock items`,
    explanation: 'Filter creates a new array containing only elements that pass your test. The new array can be shorter than the original.',
    useCase: 'Use filter to search, remove unwanted items, or get subsets of data like active users or available products.'
  },
  {
    id: 3,
    category: 'Array Methods',
    title: 'Reduce - Combine Array Elements',
    description: 'The reduce() method reduces an array to a single value by applying a function.',
    difficulty: 'intermediate',
    code: `// Sum all numbers
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// Count occurrences
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(count); // { apple: 3, banana: 2, orange: 1 }

// Group objects by property
const people = [
  { name: 'Alice', age: 25, city: 'NYC' },
  { name: 'Bob', age: 30, city: 'LA' },
  { name: 'Charlie', age: 25, city: 'NYC' }
];
const byCity = people.reduce((acc, person) => {
  if (!acc[person.city]) acc[person.city] = [];
  acc[person.city].push(person);
  return acc;
}, {});`,
    explanation: 'Reduce is the most powerful array method. It processes each element and accumulates a result. You provide an initial value and a function that combines the accumulator with each element.',
    useCase: 'Use reduce for calculations, grouping data, flattening arrays, or any operation that combines array elements into a single result.'
  },
  {
    id: 4,
    category: 'Async Patterns',
    title: 'Promises - Handle Async Operations',
    description: 'Promises represent future values and handle asynchronous operations cleanly.',
    difficulty: 'intermediate',
    code: `// Basic Promise
const fetchUser = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: 'John Doe', email: 'john@example.com' });
      } else {
        reject(new Error('Invalid ID'));
      }
    }, 1000);
  });
};

// Using the Promise
fetchUser(1)
  .then(user => console.log('User:', user))
  .catch(error => console.error('Error:', error));

// Chaining Promises
fetchUser(1)
  .then(user => {
    console.log('Got user:', user.name);
    return fetch(\`/api/posts/\${user.id}\`);
  })
  .then(response => response.json())
  .then(posts => console.log('User posts:', posts))
  .catch(error => console.error('Error:', error));`,
    explanation: 'Promises handle async operations without callback hell. They have three states: pending, fulfilled, or rejected. Use .then() for success and .catch() for errors.',
    useCase: 'Use promises for API calls, file operations, timers, or any async task. They make async code more readable and maintainable.'
  },
  {
    id: 5,
    category: 'Async Patterns',
    title: 'Async/Await - Cleaner Async Code',
    description: 'Async/await makes asynchronous code look and behave like synchronous code.',
    difficulty: 'intermediate',
    code: `// Basic async function
async function getUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw error;
  }
}

// Using async/await
async function displayUserData() {
  try {
    const user = await getUser(1);
    console.log('User name:', user.name);
    
    const posts = await fetch(\`/api/posts/\${user.id}\`);
    const postsData = await posts.json();
    console.log('User posts:', postsData);
  } catch (error) {
    console.error('Error displaying user data:', error);
  }
}

// Parallel async operations
async function getAllData() {
  try {
    // Run multiple async operations in parallel
    const [users, posts, comments] = await Promise.all([
      fetch('/api/users').then(r => r.json()),
      fetch('/api/posts').then(r => r.json()),
      fetch('/api/comments').then(r => r.json())
    ]);
    return { users, posts, comments };
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}`,
    explanation: 'Async/await is syntactic sugar over promises. Use async keyword to define an async function, and await to pause execution until a promise resolves. Always wrap in try/catch for error handling.',
    useCase: 'Use async/await for cleaner async code, especially when you have multiple sequential async operations. Use Promise.all() for parallel operations.'
  },
  {
    id: 6,
    category: 'ES6+ Features',
    title: 'Destructuring - Extract Values Easily',
    description: 'Destructuring allows unpacking values from arrays or properties from objects.',
    difficulty: 'beginner',
    code: `// Array destructuring
const colors = ['red', 'green', 'blue'];
const [first, second] = colors;
console.log(first);  // 'red'
console.log(second); // 'green'

// Skip elements
const [primary, , tertiary] = colors;
console.log(primary);  // 'red'
console.log(tertiary); // 'blue'

// Object destructuring
const user = { name: 'Alice', age: 25, city: 'NYC' };
const { name, age } = user;
console.log(name); // 'Alice'
console.log(age);  // 25

// Rename while destructuring
const { name: userName, age: userAge } = user;
console.log(userName); // 'Alice'

// Default values
const { country = 'USA' } = user;
console.log(country); // 'USA'`,
    explanation: 'Destructuring extracts values from arrays/objects into separate variables. It makes code cleaner and more readable, especially when working with function parameters or API responses.',
    useCase: 'Use destructuring for function parameters, extracting data from API responses, or when you need specific properties from objects.'
  },
  {
    id: 7,
    category: 'ES6+ Features',
    title: 'Spread Operator - Copy and Merge',
    description: 'The spread operator (...) expands arrays and objects for easy copying and merging.',
    difficulty: 'beginner',
    code: `// Copy array
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // [1, 2, 3]

// Merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// Copy object
const user = { name: 'Alice', age: 25 };
const userCopy = { ...user };

// Merge objects
const defaults = { theme: 'dark', language: 'en' };
const userSettings = { language: 'es', fontSize: 14 };
const settings = { ...defaults, ...userSettings };
console.log(settings); // { theme: 'dark', language: 'es', fontSize: 14 }

// Add properties while copying
const updatedUser = { ...user, age: 26, city: 'NYC' };
console.log(updatedUser); // { name: 'Alice', age: 26, city: 'NYC' }`,
    explanation: 'Spread operator creates shallow copies and merges arrays/objects. Later values override earlier ones in object merging.',
    useCase: 'Use spread for immutable updates in React state, merging configurations, or creating copies without mutation.'
  },
  {
    id: 8,
    category: 'Design Patterns',
    title: 'Module Pattern - Encapsulation',
    description: 'Module pattern creates private and public members using closures.',
    difficulty: 'intermediate',
    code: `// Counter module with private state
const counterModule = (function() {
  // Private variable
  let count = 0;
  
  // Private function
  function logCount() {
    console.log(\`Current count: \${count}\`);
  }
  
  // Public API
  return {
    increment() {
      count++;
      logCount();
      return count;
    },
    decrement() {
      count--;
      logCount();
      return count;
    },
    getCount() {
      return count;
    },
    reset() {
      count = 0;
      logCount();
    }
  };
})();

// Usage
counterModule.increment(); // Current count: 1
counterModule.increment(); // Current count: 2
console.log(counterModule.getCount()); // 2
// count is private - can't access directly
console.log(counterModule.count); // undefined`,
    explanation: 'Module pattern uses IIFE (Immediately Invoked Function Expression) to create private scope. Only returned methods are accessible from outside.',
    useCase: 'Use for creating libraries, encapsulating logic, or protecting internal state from external modification.'
  }
];

export const categories: ('All' | PatternCategory)[] = [
  'All',
  'Array Methods',
  'Async Patterns',
  'ES6+ Features',
  'Design Patterns'
];

export default patterns;
