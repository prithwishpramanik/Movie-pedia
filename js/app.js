$("document").ready(function(){
    $('#button').click(function(){
        let text = $('#text').val();
        console.log(text);

        const settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/"+text,
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "b4e4cf8c61msh5c770a3fe0f1d6cp147f47jsn55215babb77f",
                "x-rapidapi-host": "imdb-internet-movie-database-unofficial.p.rapidapi.com"
            }
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            $('#title').text(response.title);
            $('#year').text(response.year);
            $('#rating').text(response.rating);
            $('#rvo').text(response.rating_votes);
            $('#id').text(response.id);
            $('#poster').attr("src",response.poster);
            $('#video').attr("src","https://www.imdb.com/video/imdb/"+response.trailer.id+"/imdb/embed?");

        });
    })


})