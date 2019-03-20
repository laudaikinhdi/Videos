<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comments extends Model
{
    protected $table = 'comments';

    protected $fillable = [
        'post_id',
        'parent_comment_id',
        'body'
    ];

    protected $appends = [
        'comments'
    ];

    public function getCommentsAttribute()
    {
        return $this->hasMany('\App\Models\Comments', 'parent_comment_id', 'id')
                    ->orderBy('created_at', 'asc')->get();
    }
}
