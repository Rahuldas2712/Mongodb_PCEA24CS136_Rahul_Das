// Task 3: Compare compound index ordering
db = db.getSiblingDB("movieDB");

db.movies.createIndex({ genre: 1, rating: -1 });
db.movies.createIndex({ rating: 1, genre: 1 });

print("Execution using rating_1_genre_1:");
printjson(
    db.movies.find({ genre: "Drama", rating: { $gte: 8 } })
        .hint("rating_1_genre_1")
        .explain("executionStats")
);

print("Execution using genre_1_rating_-1:");
printjson(
    db.movies.find({ genre: "Drama", rating: { $gte: 8 } })
        .hint("genre_1_rating_-1")
        .explain("executionStats")
);
