module.exports = (req, res, next) => {
	try {
		const { title, category, content, priority, done, expiration } = req.body;
		const userId = req.auth.userId;

		if (
			title.trim() &&
			Number.isInteger(parseInt(category)) &&
			userId &&
			content.trim() &&
			Number.isInteger(parseInt(priority)) &&
			typeof done === 'boolean' &&
			expiration
		) {
			req.task = {
				title: title.trim(),
				categoryId: parseInt(category),
				userId,
				content: content.trim(),
				priority: parseInt(priority),
				done,
				expiration
			};
			next();
		} else {
			return res.status(400).json({ error: new Error('Bad Request') });
		}
	} catch (e) {
		return res.status(500).json({ error: new Error('Something wrong occurred') });
	}
};