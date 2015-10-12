var schoolController = require('../controller/schoolController.js');



module.exports = function(app) {

	app.get('/schools', schoolController.schools); //display all schools 
	app.get('/addSchool', schoolController.addSchool); //page with form to add a school
	app.post('/postSchool', schoolController.postSchool); //submitted post request
	app.get('/deleteSchool/:id', schoolController.deleteSchool);
}