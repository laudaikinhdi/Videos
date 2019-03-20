<?php
namespace App\Http\Controllers;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class PostsController extends Controller
{
    public function createPosts(Request $request)
    {
        try {
            $this->validate($request, [
                'title' => 'required|min:3|max:60',
                'body' => 'max:1000',
                'youtube_url' => 'required|youtube'
            ]);
        } catch (ValidationException $e) {
            return response()->json([
               'success' => false,
               'errors' => $e->errors()
            ], 422);
        }

        preg_match("#(?<=v=)[a-zA-Z0-9-]+(?=&)|(?<=v\/)[^&\n]+(?=\?)|(?<=v=)[^&\n]+|(?<=youtu.be/)[^&\n]+#", $request->input('youtube_url'), $matches);
        $post = Post::create([
            'title' => $request->input('title'),
            'body' => $request->input('body'),
            'youtube_id' => count($matches) > 0 ? $matches[0] : null
        ]);

        return response()->json([
            'success' => true,
            'post' => $post
        ]);
    }

    public function getPosts()
    {
        $posts = Post::orderBy('created_at', 'desc')->withCount('comments')->take(100)->get();

        return response()->json([
           'success' => true,
           'posts' => $posts
        ]);
    }
}
