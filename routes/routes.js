//put all routes in this file

module.exports = function(app) {

	require('./index.js')(app);
	require('./school.js')(app);
}