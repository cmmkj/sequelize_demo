var express = require('express');
var db = require('../sqldb');
var User = db.User;
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});


router.post('/add/user',function(req,res,next){
    console.log("+++++++++++++++++++++++");
    var saveUser = {
        name:req.body.name,
        age:req.body.age,
        height:req.body.height,
        weight:req.body.weight
    };

    return db.sequelize.transaction(function(t){
        console.log("+++++++++++++++++++");
        return User.create(saveUser,{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    })
});

router.get('/get/user/:userid',function(req,res,next){
    return db.sequelize.transaction(function(t){
        return User.findOne({
            id:req.params.userid
        },{
            transaction:t
        }).then(function(result){
            res.send(result);
        }).catch(function(err){
            console.log("发生错误：" + err);
        });
    });
});

router.post('/update/user/age',function(req,res,next){
    return db.sequelize.transaction(function(t){
        return User.findById(req.body.userid,{
            transaction:t
        }).then(function(user){
            return user.update({
                age:req.body.age
            },{
                transaction:t
            }).then(function(result){
                res.send(result);
            }).catch(function(err){
                console.log("发生错误：" + err);
            });
        })
    })
});


module.exports = router;
