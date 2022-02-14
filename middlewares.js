const colors = require('colors')

module.exports.requestTime = function (req, res, next) {
	req.time = Date.now()
	next()
}

module.exports.logger = function (req, res, next) {
	console.log(colors.bgGreen.black(`Req.time: ${req.time}`));
	next()
}