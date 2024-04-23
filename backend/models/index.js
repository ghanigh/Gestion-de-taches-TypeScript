const dbConfig = require("./../config/db.config.js");
const { Sequelize } = require("sequelize");
const config = require("../config/db.config");

const sequelize = new Sequelize('project6-db', 'user', 'pass', config)

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./users.model.js')(sequelize, Sequelize);
db.tasks = require('./tasks.model.js')(sequelize, Sequelize);
db.categories = require('./categories.model.js')(sequelize, Sequelize);

// Tasks and Categories Relationships
db.categories.hasMany(db.tasks, { as: "tasks" })
db.tasks.belongsTo(db.categories, {
	foreignKey: 'categoryId',
	as: 'category'
});

// Tasks and Users Relationships
db.users.hasMany(db.tasks, { as: "tasks" })
db.tasks.belongsTo(db.users, {
	foreignKey: 'userId',
	as: 'user'
});

module.exports = db;
