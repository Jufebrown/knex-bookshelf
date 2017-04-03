const {bookshelf} = require('./bookshelf')

const Battle = require('./models/battles')
const Monster = require('./models/battles')

const monster = new Monster()
monster.set('monster_name', 'Sully')

monster.save().then((m) => {
  console.log('Monster saved:', m.get('monster_name'))
})
