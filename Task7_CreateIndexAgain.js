// Task 7: Create the same compound index again
db = db.getSiblingDB("movieDB");

print("Create or confirm the compound index:");
print(db.movies.createIndex({ genre: 1, rating: -1 }));

print("All indexes:");
db.movies.getIndexes().forEach(printjson);
