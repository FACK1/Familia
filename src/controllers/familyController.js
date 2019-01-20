const Family = require('../models/Family.model');
cosnt User  = require('../models/User.model');
const randomize = require('randomatic');

const createFamily = (req, res) => {
    const { familyName } = req.body;
    const family = new Family({
        name: familyName,
        key: randomize('A0', 16),
    });
    family.save().then((savedFamily) => {
        if(!savedFamily){
            res.redirect('/joinFamily')
        } else {
            User.findById(id, (findErr, user) => {
                user.family_id = savedFamily.id;
                user.save(() => {
                    res.redirect('/');
                });
            })
        }
    });
    res.redirect('/');
};

module.exports = {
    createFamily,
};
