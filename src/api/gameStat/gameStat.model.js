
module.exports = function (mongoose, name) {
  var schema = mongoose.Schema({
    game: String,
    user: {type: String, default: 'John Doe'},
    //mixed Type allows to save anything inside
    data:   mongoose.Schema.Types.Mixed,
    //same as above
    //data: {},
    created: { type: Date, default: Date.now }
  });

  mongoose.model(name, schema);
};