const User = require('../Post');
const { post } = require('../routes/postRoutes');

exports.getAllPosts = async (req, res, next) => {
    try {
        const [users, _] = await User.findAll();

        res.status(200).json({count: users.length, users});
    } catch (eror){
        console.log(error);
        next(error);
    }
    //res.send("Get all users route");
}

exports.createNewPost = async (req, res, next) => {
    try {
    let {name, email} = req.body;
    let user = new User(name, email);

    user = await user.save();
    
    res.status(201).json({message: "Post created"});
    } catch (error){
        console.log(error);
        next(error);
    }
    //res.send("Create new user route");
}

exports.getPostById = async (req, res, next) => {
    try {
        let postId = req.params.id;
        let [user, _] = await User.findById(postId);

        res.status(200).json({user});
    } catch (error) {
        console.log(error);
        next(error);
    }

    //res.send("Get user by its ID route");
}