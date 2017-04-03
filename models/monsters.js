const {bookshelf} = require('../bookshelf');

require('./battles');
const Monster = bookshelf.Model.extend({
  tableName : 'monsters',
  idAttribute: 'monster_id',
  battles: function() {
    //The hasMany relation specifies that this model has one or more
    //rows in  another table which match on this model's primary key.
    return this.hasMany('Battle', 'monster_id')
  }
})


module.exports = bookshelf.model('Monster', Monster)
