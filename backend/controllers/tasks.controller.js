const db = require('../models');
const Tasks = db.tasks

exports.findAll = async (req, res) => {
	const userId = req.auth.userId;
	console.log(userId);
	const tasks = await Tasks.findAll({ where: { userId }, include: 'category' });
	return res.status(200).json(tasks);
}

exports.create = async (req, res) => {
	const { title, categoryId, content, priority, done, expiration } = req.task;
	const userId = req.auth.userId;
	try {
		const task = await Tasks.create({
			title,
			content,
			priority,
			categoryId,
			userId,
			done,
			expiration
		})
		return res.status(201).json(task)
	} catch (err) {
		console.log(err)
		return res.status(500).json({ error: new Error('Something went wrong') })
	}
}

exports.delete = async (req, res) => {
	try {
		await Tasks.destroy({ where: { id: req.params.id, userId: req.auth.userId } })
		return res.status(204).json({ message: 'Work Deleted Successfully' })
	} catch (e) {
		return res.status(500).json({ error: new Error('Something went wrong') })
	}
}

exports.update = async (req, res) => {
	const taskId = req.params.id;
	const userId = req.auth.userId;
	const { title, categoryId, content, priority, done, expiration } = req.body;

	try {
		// Vérifier d'abord si la tâche existe
		const existingTask = await Tasks.findOne({ where: { id: taskId, userId } });
		if (!existingTask) {
			return res.status(404).json({ error: 'Task not found' });
		}

		// Mettre à jour la tâche
		await Tasks.update(
			{ title, categoryId, content, priority, done, expiration },
			{ where: { id: taskId, userId } }
		);

		// Récupérer la tâche mise à jour
		const updatedTask = await Tasks.findByPk(taskId);

		return res.status(200).json(updatedTask);
	} catch (err) {
		console.error(err);
		return res.status(500).json({ error: 'Something went wrong' });
	}
};
