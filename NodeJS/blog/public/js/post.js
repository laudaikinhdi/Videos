function Post(){
    function bindEvent(){
        $("#post_edit").click(function(e){
            e.preventDefault();
            var params = {
                id: $("#idPost").val(),
                title: $(".title").val(),
                content: tinymce.get("content").getContent(),
                author: $(".author").val()
            };
            var base_url = location.protocol + "//" + document.domain + ":" + location.port;

            $.ajax({
                url: base_url + "/admin/post/edit",
                type: "PUT",
                data: params,
                dataType: "json",
                success: function(res){
                    if(res && res.status_code == 200){
                        window.location.href = base_url + "/admin";
                    }else{
                        console.log("Error update posts");
                    }
                }
            });
        });

        $(".post_delete").click(function(e){
            e.preventDefault();
            var postID = $(this).data("id");
            var base_url = location.protocol + "//" + document.domain + ":" + location.port;
            
            $.ajax({
                url: base_url + "/admin/post/delete",
                type:"DELETE",
                data: {id:postID},
                dataType:"json",
                success: function(res){
                    if(res && res.status_code == 200){
                        window.location.href = base_url + "/admin";
                    }else{
                        console.log("Delete posts error");
                    }
                }
            });
        });
    }
    bindEvent();
}

$(document).ready(function(){
    new Post();
});