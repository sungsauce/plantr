const Sequelize = require('sequelize')
const db = new Sequelize('postgres://localhost:5432/plantr') // need "plantr" because we're in that directory
const Gardner = db.define("gardner" , {
    name: Sequelize.STRING,
    age: Sequelize.INTEGER
})

const Plot = db.define("plot" , {
    size: Sequelize.INTEGER,
    shaded: Sequelize.BOOLEAN
})

const Vegetable = db.define("vegetable" , {
    name: Sequelize.STRING,
    color:Sequelize.STRING,
    planted_on: Sequelize.DATE
})

Plot.belongsTo(Gardner);
Gardner.hasOne(Plot);


Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})
Gardner.belongsTo(Vegetable, {as: "favorite_vegetable"})

module.exports = {db, Gardner, Plot, Vegetable}
