const Post = require('./Post.js')

 module.exports.get_all = async function(req,res){
    const result = await Post.find().sort({uploadedDate: -1})
    res.json(result)
}

module.exports.get_post_by_user = async function(req,res){
    const user =  req.params.user.toLowerCase().trim()
    const result = await Post.find({user})
    res.json(result)
}

module.exports.upload_image = async function(req, res){
    const user =  req.params.user.toLowerCase().trim()
    const image =  "/images/" + req.image
    const post = new Post({user, image})
    await post.save()
    res.send("Image Uploaded")
}