const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/gofood';

const mongoDB = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Successfully connected to MongoDB");

        // Fetch data from 'food_items' collection
        const foodItemsCollection = mongoose.connection.db.collection("food_items");
        const foodData = await foodItemsCollection.find({}).toArray();
        //console.log("Food Items Data:", foodData); // Log fetched data

        // Fetch data from 'foodCategory' collection
        const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");
        const catData = await foodCategoryCollection.find({}).toArray();
        //console.log("Food Category Data:", catData); // Log fetched category data

        // Assign to global variables
        global.food_items = foodData;
        global.foodCategory = catData;

        //console.log("Global food_items:", global.food_items);
        //console.log("Global foodCategory:", global.foodCategory);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
};

module.exports = mongoDB;
