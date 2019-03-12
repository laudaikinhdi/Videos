self.addEventListener('message', function(e){
    console.log(e);
    if(e.data === 'do some work'){
        console.log('Worker is about to do some work!');
        var count = 0;
        for(var i = 0; i < 1000000000; i++){
            count += i;
        }
        self.postMessage({message: count});
    }
})