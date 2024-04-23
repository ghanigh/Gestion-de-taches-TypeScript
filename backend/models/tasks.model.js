
module.exports = (sequelize, DataTypes) => {
	const Tasks = sequelize.define(
		"tasks",
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false
			},
			content: {
				type: DataTypes.STRING,
				allowNull: false
			},
			priority: {
				type: DataTypes.INTEGER
			}
		},
		{ timestamps: true }
	)
	return Tasks
}
