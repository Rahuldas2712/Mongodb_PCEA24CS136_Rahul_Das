// Task 4: Drop the poorly ordered compound index
db = db.getSiblingDB("movieDB");

print("Dropped index:");
printjson(db.movies.dropIndex("rating_1_genre_1"));

print("Remaining indexes:");
db.movies.getIndexes().forEach(printjson);
