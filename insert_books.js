// insert_books.js - Script to populate MongoDB with sample book data

// Import MongoDB client
const { MongoClient } = require('mongodb');

// Connection URI (replace with your MongoDB connection string if using Atlas)
const uri = 'mongodb://localhost:27017';

// Database and collection names
const dbName = 'plp_bookstore';
const collectionName = 'books';

// Sample book data - Updated with recent books
const books = [
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    published_year: 1960,
    price: 12.99,
    in_stock: true,
    pages: 336,
    publisher: 'J. B. Lippincott & Co.'
  },
  {
    title: '1984',
    author: 'George Orwell',
    genre: 'Dystopian',
    published_year: 1949,
    price: 10.99,
    in_stock: true,
    pages: 328,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    published_year: 1925,
    price: 9.99,
    in_stock: true,
    pages: 180,
    publisher: 'Charles Scribner\'s Sons'
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Dystopian',
    published_year: 1932,
    price: 11.50,
    in_stock: false,
    pages: 311,
    publisher: 'Chatto & Windus'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1937,
    price: 14.99,
    in_stock: true,
    pages: 310,
    publisher: 'George Allen & Unwin'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    published_year: 1951,
    price: 8.99,
    in_stock: true,
    pages: 224,
    publisher: 'Little, Brown and Company'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Romance',
    published_year: 1813,
    price: 7.99,
    in_stock: true,
    pages: 432,
    publisher: 'T. Egerton, Whitehall'
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fantasy',
    published_year: 1954,
    price: 19.99,
    in_stock: true,
    pages: 1178,
    publisher: 'Allen & Unwin'
  },
  {
    title: 'Animal Farm',
    author: 'George Orwell',
    genre: 'Political Satire',
    published_year: 1945,
    price: 8.50,
    in_stock: false,
    pages: 112,
    publisher: 'Secker & Warburg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    genre: 'Fiction',
    published_year: 1988,
    price: 10.99,
    in_stock: true,
    pages: 197,
    publisher: 'HarperOne'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    genre: 'Dystopian',
    published_year: 2008,
    price: 13.99,
    in_stock: true,
    pages: 374,
    publisher: 'Scholastic'
  },
  {
    title: 'The Martian',
    author: 'Andy Weir',
    genre: 'Science Fiction',
    published_year: 2011,
    price: 15.99,
    in_stock: true,
    pages: 369,
    publisher: 'Crown'
  },
  {
    title: 'A Game of Thrones',
    author: 'George R. R. Martin',
    genre: 'Fantasy',
    published_year: 1996,
    price: 18.99,
    in_stock: true,
    pages: 694,
    publisher: 'Bantam Books'
  },
  {
    title: 'The Night Circus',
    author: 'Erin Morgenstern',
    genre: 'Fantasy',
    published_year: 2011,
    price: 14.99,
    in_stock: false,
    pages: 387,
    publisher: 'Doubleday'
  },
  {
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    genre: 'Mystery',
    published_year: 2012,
    price: 16.99,
    in_stock: true,
    pages: 432,
    publisher: 'Crown'
  },
  {
    title: 'The Goldfinch',
    author: 'Donna Tartt',
    genre: 'Fiction',
    published_year: 2013,
    price: 17.99,
    in_stock: true,
    pages: 771,
    publisher: 'Little, Brown and Company'
  },
  {
    title: 'The Girl on the Train',
    author: 'Paula Hawkins',
    genre: 'Thriller',
    published_year: 2015,
    price: 15.50,
    in_stock: true,
    pages: 336,
    publisher: 'Riverhead Books'
  },
  {
    title: 'Educated',
    author: 'Tara Westover',
    genre: 'Memoir',
    published_year: 2018,
    price: 14.99,
    in_stock: true,
    pages: 334,
    publisher: 'Random House'
  },
  {
    title: 'Where the Crawdads Sing',
    author: 'Delia Owens',
    genre: 'Mystery',
    published_year: 2018,
    price: 16.99,
    in_stock: false,
    pages: 368,
    publisher: 'G.P. Putnam\'s Sons'
  },
  {
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    genre: 'Science Fiction',
    published_year: 2021,
    price: 19.99,
    in_stock: true,
    pages: 476,
    publisher: 'Ballantine Books'
  }
];

// Function to insert books into MongoDB
async function insertBooks() {
  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB server');

    // Get database and collection
    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Check if collection already has documents
    const count = await collection.countDocuments();
    if (count > 0) {
      console.log(`Collection already contains ${count} documents. Dropping collection...`);
      await collection.drop();
      console.log('Collection dropped successfully');
    }

    // Insert the books
    const result = await collection.insertMany(books);
    console.log(`${result.insertedCount} books were successfully inserted into the database`);

    // Display the inserted books
    console.log('\nInserted books:');
    const insertedBooks = await collection.find({}).sort({ published_year: -1 }).toArray();
    insertedBooks.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year}) - $${book.price}`);
    });

    // Test the specific query from the assignment
    console.log('\n--- Testing Assignment Query ---');
    console.log('Books in stock published after 2010:');
    const testResults = await collection.find({
      in_stock: true,
      published_year: { $gt: 2010 }
    }).project({
      title: 1,
      author: 1,
      published_year: 1,
      price: 1,
      _id: 0
    }).toArray();
    
    testResults.forEach((book, index) => {
      console.log(`${index + 1}. "${book.title}" by ${book.author} (${book.published_year}) - $${book.price}`);
    });

  } catch (err) {
    console.error('Error occurred:', err);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
}

// Run the function
insertBooks().catch(console.error);

/*
 * Example MongoDB queries you can try after running this script:
 *
 * 1. Find all books:
 *    db.books.find()
 *
 * 2. Find books by a specific author:
 *    db.books.find({ author: "George Orwell" })
 *
 * 3. Find books published after 2010:
 *    db.books.find({ published_year: { $gt: 2010 } })
 *
 * 4. Find books in a specific genre:
 *    db.books.find({ genre: "Fiction" })
 *
 * 5. Find in-stock books:
 *    db.books.find({ in_stock: true })
 *
 * 6. Assignment query - books in stock published after 2010:
 *    db.books.find({ 
 *      in_stock: true, 
 *      published_year: { $gt: 2010 } 
 *    })
 */