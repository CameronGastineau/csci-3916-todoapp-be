
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


mongoose.Promise = global.Promise;
mongoose
    .connect(process.env.DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('Todos DB Connected!'))
    .catch(err => {
        console.log("Todos DB Connection Error" + err.message);
    });
//mongoose.connect(process.env.DB, { useNewUrlParser: true } );
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


// movie schema
var TodoSchema = new Schema({
    //taskID: { type: mongoose.Schema.Types.ObjectId, required: true},
    name: { type: String, required: true},
    dateCreated: { type: Date, required: true},
    dateDue: { type: Date},
    priority: { type: String, enum: ['low', 'medium', 'high']},
    //status: { type: String, enum: ['incomplete', 'complete']},
    completed: { type: Boolean},
    users: { type: [{userId:mongoose.Schema.Types.ObjectId, userName: String}], required: true },
    Order:{ type: Number}

});

// return the model
module.exports = mongoose.model('Todo', TodoSchema);