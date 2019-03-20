<?php
/**
 * Created by PhpStorm.
 * User: lauda
 * Date: 3/15/2019
 * Time: 10:15 PM
 */
use \Illuminate\Http\Request;
$router->get('/', function(Request $request) use ($router){
    return 'Hello';
});

$router->post('/posts/create', 'PostsController@createPosts');
$router->get('/posts', 'PostsController@getPosts');

$router->post('/comments/create', 'CommentsController@createComment');
$router->get('/comments/{post_id}', 'CommentsController@getComments');
