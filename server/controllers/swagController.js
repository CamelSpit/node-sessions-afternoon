const swag = require('./model/swag');

module.exports = {
    read: (req,res,next) => {
        res.status(200).send(swag)
    }
}