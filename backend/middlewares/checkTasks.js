const { log } = require("console");

module.exports = (req, res, next) => {
	try {
		const title = req.body.title.trim() ?? undefined;
		const categoryId = parseInt(req.body.category) ?? undefined;
		const userId = req.auth.userId ?? undefined;
		const content = req.body.content.trim() ?? undefined
		const priority = parseInt(req.body.priority) ?? undefined
		console.log(title, categoryId, userId, content, priority)
		if (title !== undefined &&
			title.length > 0 &&
			categoryId !== undefined &&
			categoryId > 0 &&
			userId !== undefined &&
			userId > 0 &&
			content.length !== undefined &&
			priority !== undefined &&
			priority > 0
		) {
			req.task = { title, categoryId, userId, content, priority }
			next()
		} else {
			return res.status(400).json({ error: new Error("Bad Request") })
		}
	} catch (e) {
		return res.status(500).json({ error: new Error("Something wrong occured") })
	}

}
