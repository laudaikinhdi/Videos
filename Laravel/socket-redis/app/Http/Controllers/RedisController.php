<?php

namespace App\Http\Controllers;

use App\Events\RedisEvent;
use App\Message;
use Illuminate\Http\Request;

class RedisController extends Controller
{
    public function index(){
        $message = Message::all();
        return view('message')->with('messages', $message);
    }

    public function postSendMessage(Request $request){
        $messages = Message::create($request->all());

        event(new RedisEvent($messages));

        return redirect()->back();
    }
}
