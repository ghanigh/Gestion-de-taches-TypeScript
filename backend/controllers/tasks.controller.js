const db = require('../models');
const Tasks = db.tasks

exports.findAll = async (req, res) => {
	const userId = req.auth.userId;
	const tasks = await Tasks.findAll({ where: { userId }, include: 'category' });
	return res.status(200).json(tasks);
}

exports.create = async (req, res) => {
	const title = req.body.title;
	const categoryId = req.body.category;
	const userId = req.auth.userId;
	const content = req.body.content;
	const priority = req.body.priority;
	try {
		const work = await Tasks.create({
			title,
			content,
			priority,
			categoryId,
			userId
		})
		return res.status(201).json(work)
	} catch (err) {
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
