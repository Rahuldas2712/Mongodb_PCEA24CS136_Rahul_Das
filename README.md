# MongoDB Indexing Practical

## Aim
To study MongoDB index order, compound indexes, multikey indexes, query execution plans, and hidden indexes.

## Database
- Database: `movieDB`
- Collection: `movies`

## Tasks Performed
1. Explain query execution without an index.
2. Create a compound index.
3. Compare compound index ordering.
4. Drop a poorly ordered index.
5. Create a multikey index.
6. Hide an index.
7. Create the same compound index again.

## Technologies Used
- MongoDB
- MongoDB Shell (`mongosh`)
- JavaScript
- GitHub

## Files
- `Task1_ExplainWithoutIndex.js`
- `Task2_CompoundIndex.js`
- `Task3_IndexOrderComparison.js`
- `Task4_DropIndex.js`
- `Task5_MultikeyIndex.js`
- `Task6_HiddenIndex.js`
- `Task7_CreateIndexAgain.js`

## Running the scripts
Run the scripts in order from a terminal where `mongosh` is available:

```bash
mongosh --file Task1_ExplainWithoutIndex.js
mongosh --file Task2_CompoundIndex.js
mongosh --file Task3_IndexOrderComparison.js
mongosh --file Task4_DropIndex.js
mongosh --file Task5_MultikeyIndex.js
mongosh --file Task6_HiddenIndex.js
mongosh --file Task7_CreateIndexAgain.js
```

Task 1 creates and populates the sample collection. Run it first.
