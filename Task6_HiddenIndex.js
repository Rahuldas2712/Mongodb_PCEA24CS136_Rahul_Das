// Task 6: Hide and unhide a compound index
db = db.getSiblingDB("movieDB");

print("Hide compound index:");
printjson(db.movies.hideIndex("genre_1_rating_-1"));

print("Indexes after hiding:");
db.movies.getIndexes().forEach(printjson);

print("Execution statistics while the index is hidden:");
printjson(
    db.movies.find({ genre: "Drama", rating: { $gte: 8 } })
        .explain("executionStats")
);

print("Unhide compound index:");
printjson(db.movies.unhideIndex("genre_1_rating_-1"));
