var express = require("express");

var router = express.Router();

var user_md = require("../models/user.js");
var post_md = require("../models/post");

var helper = require("../helpers/helper");

router.get("/", function(req, res){
    if(req.session.user){
        var posts = post_md.getPostsAll();
        posts.then(function(data){
            var data = {
                posts: data,
                error: false
            };
        res.render("admin/dashboard", {data:data});
        }).catch(function(err){
            res.render("admin/dashboard", {data:{error: "Get posts data is error"}});
        });
    }else{
        res.redirect("/admin/signin");
    }
});
router.get("/signup", function(req, res){
    res.render("signup", {data:{}});
});

router.get("/post/add", function(req, res){
    if(req.session.user){
        res.render("admin/posts/create", {data:{error: false}});
    }else{
        res.redirect("/admin/signin");
    }
});

router.post("/post/add", function(req, res){
    if(req.session.user){
        var paramPost = req.body;
        var posts = {
            title: paramPost.title,
            content: paramPost.content,
            author: paramPost.author
        }
        var data = post_md.addPost(posts);
        data.then(function(data){
            res.redirect("back");
        }).catch(function(err){
            res.render("admin/posts/create", {data:{error: "Could not insert databse posts"}});
        });
    }else{
        res.redirect("/admin/signin");
    }
}); 

router.post("/signup", function(req, res){
    var user = req.body; // phải khai báo app.use(bodyParser.urlencoded({extended: true})); trong file app.js
    if(user.email.trim().length == 0){
        res.render("signup", {data:{error:"Email is required"}});
    }
    if(user.passwd != user.repasswd && user.passwd.trim().length != 0){
        res.render("signup", {data:{error: "Password is not match"}});
    }
    var password = helper.hash_password(user.passwd);
    var user = {
        email: user.email,
        password: password,
        first_name: user.firstname,
        last_name: user.lastname,
    };
    var result = user_md.addUser(user);

    if(result){
        result.then(function(data){
            res.redirect("/admin/signin");
        }).catch(function(err){
            res.render("signup", {data:{error: "Could not database"}});
        });
    }
});

router.get("/signin", function(req, res){
    res.render("signin", {data:{}});
});

router.post("/signin", function(req, res){
    var login = req.body;
    if(login.email.trim().length == 0){
        res.render("signin", {data:{err:"Please enter email"}});
    }else{
        var data = user_md.getUserByEmail(login.email);
        data.then(function(users){
            if(users.length > 0){
                var user = users[0];
                var pw = helper.check_password(login.password, user.password);
                if(pw){
                    req.session.user = user;
                    res.redirect("/admin/");
                }else{
                    res.render("signin",{data:{err:"Password error"}});
                }
            }else{
                res.render("signin", {data:{err:"User not exist"}});
            }
        }).catch(function(err){
            console.log(err);
        });
    }
});

router.get("/post/edit/:id", function(req, res){
    if(req.session.user){
        var params = req.params;
        var id = params.id;

        var data = post_md.getIdByPost(id);
        data.then(function(data){
            var post = data[0];
            var data = {
                post: post,
                error: false
            };
            res.render("admin/posts/edit", {data:data});
        }).catch(function(err){
            req.redirect("/admin/posts/edit");
        });
    }else{
        res.redirect("/admin/signin");
    }
});

router.put("/post/edit", function(req, res){
      if(req.session.user){
        var params = req.body;
        resultPost = post_md.updatePost(params);
        resultPost.then(function(data){
            res.json({status_code: 200});
        }).catch(function(err){
            res.json({status_code: 500});
        });
      }else{
        res.redirect("/admin/signin");
      } 
});

router.delete("/post/delete", function(req, res){
    if(req.session.user){
        var postID = req.body.id;
        var data = post_md.deletePost(postID);
        data.then(function(data){
            res.json({status_code: 200});
        }).catch(function(err){
            res.json({status_code:500});
        });
    }else{
        res.redirect("/admin/signin");
    }
});

router.get("/posts", function(req, res){
    res.redirect("/admin");
});

router.get("/users", function (req,res) { 
    if(req.session.user){
        var data = user_md.getUserAll();
        data.then(function(data){
            var data = {
                users: data,
                error: false
            }
            res.render("admin/users/index", {data:data});
        }).catch(function(err){
            res.render("admin/users/index", {data:{message: "Could not get users"}});
        });
    }else{
        res.redirect("/admin/signin");
    }
});

module.exports = router;