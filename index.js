const {bookshelf} = require('./bookshelf')

const Battle = require('./models/battles')
const Monster = require('./models/monsters')

const monster = new Monster()
monster.set('monster_name', 'Sully')

monster.save().then((m) => {
  console.log('Monster saved:', m.get(monster_name))
})

Battle.byLocation('Hoth').then(() => {
  console.log('Got Battle: ', battle.get('monster_id'), battle.get('hero_id'))
})
