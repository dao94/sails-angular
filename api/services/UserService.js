module.exports = {
  getUser: function(callback) {
    User.find().exec(function(err, todos) {
      if(err) throw err;
      callback(todos);
    })
  },
  addUser: function(todoVal, callback) {
    User.create({value: todoVal}).exec(function(err, todo) {
      console.log(todo);
      if(err) throw err;
      callback(todo);
    })
  },
}