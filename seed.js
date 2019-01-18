const {db, Gardner, Plot, Vegetable} = require('./models')
// const Gardner = db.Gardner

db.sync({force:true}) // returns a promise. will resolve if sync is successful; otherwise, will throw error 
    .then(synced => {
        console.log('Database synced!')
        return Vegetable.create({
        
        })
        // console.log(
    })
    .then(result => {
        db.close()
    })
    .catch(err => {
        console.log('Something went wrong:' + err)
    })

