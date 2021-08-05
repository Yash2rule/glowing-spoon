const User = require('./userData');
//@desc           Auth user
//@route          POST /api/users/login
//access          Public
const authUser =  (req, res) => {
    const {email , password} = req.body
    const user = email !== null ? User : null;
    if(user && email === User.email && password === User.password){
        res.json({
            _id: User.id,
            name: User.name,
            email:User.email,
        })
    }else{
        res.status(401);
        res.json({
            error: 'Invalid username or password'
        })
    }
}

module.exports = authUser;