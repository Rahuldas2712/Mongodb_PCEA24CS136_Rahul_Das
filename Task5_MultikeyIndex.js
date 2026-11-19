// Task 5: Create a multikey index on the cast array
db = db.getSiblingDB("movieDB");

print("Created index:");
print(db.movies.createIndex({ cast: 1 }));

print("Movies featuring Asha:");
db.movies.find(
    { cast: "Asha" },
    { _id: 0, title: 1, cast: 1 }
).forEach(printjson);

print("Execution statistics:");
printjson(
    db.movies.find({ cast: "Asha" }).explain("executionStats")
);
