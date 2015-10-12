var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newSchema = new Schema({
	name: String, 
	state: String,
	population: String
});

var School = mongoose.model('School', newSchema);

module.exports = School;