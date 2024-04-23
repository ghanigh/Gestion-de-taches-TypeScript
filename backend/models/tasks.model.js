module.exports = (sequelize, DataTypes) => {
	const Tasks = sequelize.define(
		'tasks',
		{
			title: {
				type: DataTypes.STRING,
				allowNull: false,
				trim: true // Ajout de trim pour supprimer les espaces vides indésirables
			},
			content: {
				type: DataTypes.STRING,
				allowNull: false,
				trim: true // Ajout de trim pour supprimer les espaces vides indésirables
			},
			priority: {
				type: DataTypes.INTEGER,
				validate: {
					min: 1 // Ajout d'une validation pour garantir que la priorité est un entier positif
				}
			},
			done: {
				type: DataTypes.BOOLEAN,
				defaultValue: false // Définition d'une valeur par défaut pour done
			},
			expiration: {
				type: DataTypes.DATE,
				validate: {
					isDate: true // Ajout d'une validation pour garantir que l'expiration est une date valide
				}
			}
		},
		{ timestamps: true }
	);
	return Tasks;
};