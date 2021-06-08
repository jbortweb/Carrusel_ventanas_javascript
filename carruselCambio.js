var x = $(document);
x.ready(inicia);

    function inicia(){

        $(".imagen").each(function(secuencia){
        $(this).delay((secuencia)*4000).fadeTo(4000,1)})

    }