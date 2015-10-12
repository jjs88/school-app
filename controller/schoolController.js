var School = require('../model/school.js');



module.exports.schools = function(req, res) {

	School.find(function(err, schools) {

		if(err) throw err;

		res.render('schools', {schools: schools});
	})

}

module.exports.addSchool = function(req, res) {

	res.render('addSchool');
}

module.exports.postSchool = function(req, res) {

	console.log("works");

	//form validation
	req.checkBody('name', 'name field is required').notEmpty();
	req.checkBody('state', 'state field is required').notEmpty();
	req.checkBody('population', 'population field is required').notEmpty();
	
	//check errors
	var errors = req.validationErrors();
	
	if(errors) {
		res.render('error', {errors: errors});
	} else {

		var newSchool = new School({
			name: req.body.name,
			state: req.body.state,
			population: req.body.population
		});

		newSchool.save(function(err, school) {

			console.log("saved!");
		})

		res.redirect('/schools');
	}  
};



module.exports.deleteSchool = function(req, res) {

	School.findById(req.params.id, function(err, school) {

		if(err) throw err;

		school.remove(function(err) {
			if(err) throw err;
			console.log("Removed school", school);
			res.redirect('/schools');
		})

	})
}








