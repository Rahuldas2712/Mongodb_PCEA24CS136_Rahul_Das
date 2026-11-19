// Task 2: Create a compound index
db = db.getSiblingDB("movieDB");

print("Created index:");
print(db.movies.createIndex({ genre: 1, rating: -1 }));

print("Matching movies:");
db.movies.find(
    { genre: "Drama", rating: { $gte: 8 } },
    { _id: 0, title: 1, genre: 1, rating: 1 }
).forEach(printjson);

print("Execution statistics:");
printjson(
    db.movies.find({ genre: "Drama", rating: { $gte: 8 } })
        .explain("executionStats")
);
