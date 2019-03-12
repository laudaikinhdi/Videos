<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
    {{--<meta name="csrf-token" content="{{ csrf_token() }}"/>--}}
    {{--<script>window.Laravel = {csrfToken: '{{ csrf_token() }}'}</script>--}}
    <title>Demo Chat</title>
</head>

<body>
	<div id="data">
        @foreach($messages as $mgs)
            <p id="{{$mgs->id}}"><strong>{{$mgs->author}}: </strong> {{$mgs->content}}</p>
        @endforeach
    </div>
    <div>
		<form action="{{route('send.message')}}" method="POST">
			@csrf
            Name: <input type="text" name="author">
			<br><br>
			Content: <textarea name="content" rows="5" style="width:100%"></textarea>
			<button type="submit">Send</button>
		</form>
	</div>

    <script src="https://code.jquery.com/jquery-3.3.1.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.2.0/socket.io.js"></script>

    <script>
        $(document).ready(function(){
            var socket = io('http://localhost:6001');

            socket.on('connect', function(){
                socket.on('chat:message', function(data){
                    if($('#'+data.id).length == 0){
                        $('#data').append('<p><strong>'+data.message.author+'</strong>: '+data.message.content+'</p>')
                    }
                    else{
                        console.log('Đã có tin nhắn')
                    }
                    console.log(data);
                });
            })
        });
    </script>
</body>
</html>
