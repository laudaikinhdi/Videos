<?php

namespace App\Http\Controllers;

use App\Models\Comments;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class CommentsController extends Controller
{
    public function createComment(Request $request)
    {
        try {
            $this->validate($request, [
               'post_id' => 'required|exists:posts,id',
               'parent_comment_id' => 'exists:comments,id,post_id,' . $request->input('post_id'),
               'body' => 'required|min:10|max:1000'
            ]);
        } catch (ValidationException $e) {
            return response()->json([
               'success' => false,
               'errors' => $e->errors()
            ], 422);
        }

        $comment = Comments::create($request->all());

        return response()->json([
           'success' => true,
           'comment' => $comment
        ],200);
    }

    public function getComments($post_id)
    {
        $post = Post::where('id', $post_id)->with(['comments' => function($query){
            $query->whereNull('parent_comment_id')->orderBy('created_at', 'desc');
        }])->first();

        return response()->json([
            'success' => true,
            'post' => $post,
        ], 200);
    }
}
