const express = require('express');
const router = express.Router();

const posts = [{'heading':'beautiful day','content':"it was a fucking awesome day"},
               {'heading':'I am batman','content':'I was hiding it till now, sorry to say but i can\'t change it'},
               {'heading':'beautiful day','content':"it was a fucking awesome day"},
               {'heading':'I am batman','content':'I was hiding it till now, sorry to say but i can\'t change it'},   
            ]
const user = {'name' : 'admin', 'followers' : '69', 'following':'96', 'posts' : posts}

router.get('/',(req, res, next) => {
    res.send(user);
});

router.post('/signin', (req,res,next) => {
    console.log(req.body);
    if(req.body.name == 'admin'){
        if(req.body.password == "admin"){
            res.send(user);
        }
        else
            res.status(500).send({ error: "boo:(" });
    }
    else
        res.status(500).send({ error: "boo:(" });

})

module.exports = router;