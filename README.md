# PLP Bookstore MongoDB Project

This project demonstrates fundamental MongoDB operations including CRUD, aggregation pipelines, and indexing.

## Setup Instructions

### Option 1: MongoDB Atlas (Cloud)
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Update the connection details in the scripts

### Option 2: Local MongoDB Installation
1. Download and install MongoDB Community Edition
2. Start the MongoDB service
3. Use default connection: `mongodb://localhost:27017`

## Running the Scripts

### 1. Insert Sample Data


# using MongoDB Compass
# Open Compass, connect to your database, and run the script

Project Structure
insert_books.js - Script to populate the database with sample book data

queries.js - Contains all MongoDB queries for the assignment

README.md - This file with instructions

Database Structure
Database: plp_bookstore
Collection: books

Each book document has:

title (string)

author (string)

genre (string)

published_year (number)

price (number)

in_stock (boolean)

pages (number)

publisher (string)

Queries Included
Basic CRUD
Find by genre, year, author

Update prices

Delete documents

Advanced Queries
Complex filters with projection

Sorting and pagination

Aggregation Pipelines
Average price by genre

Most prolific author

Books by publication decade

Indexing
Single field and compound indexes

Performance analysis with explain()

Verification
After running the scripts, verify your data in MongoDB Compass 


## How to Run Your Project

1. **Set up MongoDB** (choose one):
   - MongoDB Atlas (cloud - recommended)
   - Local MongoDB installation

2. **Run the insertion script**:
   ```bash
  
   #  Atlas:
   # mongosh "mongodb+srv://username:password@cluster.mongodb.net/" insert_books.js
Execute the queries:

bash
mongosh "your-connection-string" queries.js
Verify results in MongoDB Compass or through the shell.

Expected Output Screenshots
Take screenshots of:

MongoDB Compass/Atlas showing your books collection

Sample query results

The output of explain() showing index usage

Aggregation pipeline results

This comprehensive solution covers all MongoDB fundamentals required for the assignment and provides a solid foundation for working with MongoDB in real-world applications!

