var q = require("q");
var db = require("../common/database");

var conn = db.getConnection();

function getPostsAll(){
    var defer = q.defer();
    
    var query = conn.query("SELECT * FROM posts", function(err, posts){
        if(err){
            defer.reject(err);
        }else{
            defer.resolve(posts);
        }
    });
    return defer.promise;
}

function addPost(posts){
    if(posts){
        var defer = q.defer();
        var query = conn.query("INSERT INTO posts SET ? ",posts, function(err, posts){
            if(err){
                defer.reject(err);
            }else{
                defer.resolve(posts);
            }
        });
        return defer.promise;
    }
    return false;
}

function getIdByPost(id){
    var defer = q.defer();
    var query = conn.query("SELECT * FROM posts WHERE ?", {id: id}, function(err, data){
        if(err){
            defer.reject(err);
        }else{
            defer.resolve(data);
        }
    });
    return defer.promise;
}

function updatePost(params){
    if(params){
        var defer = q.defer();
        var query = conn.query("UPDATE posts SET title = ?, content = ?, author = ?, updated_at = ? WHERE id = ?", [params.title, params.content, params.author, new Date(), params.id], function(err,data){
            if(err){
                defer.reject(err);
            }else{
                defer.resolve(data);
            }
        });
        
        return defer.promise;
    }else{
        return false;
    }
}

function deletePost(id){
    var defer = q.defer();
    var query = conn.query("DELETE FROM posts WHERE id = ?", [id], function(err, data){
        if(err){
            defer.reject(err);
        }else{
            defer.resolve(data);
        }
    });
    return defer.promise;
}

module.exports = {
    getPostsAll: getPostsAll,
    addPost: addPost,
    getIdByPost: getIdByPost,
    updatePost: updatePost,
    deletePost: deletePost
}