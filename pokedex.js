$(document).ready(function() {
console.log('NOW READY')
    var infoUrl;   

    // This populates the screen with Pokemon
    function getPoke () {
       
        for (var i = 1; i <= 151; i++) {
            var url="http://pokeapi.co/media/img/";
            url = (url + i) + '.png/';
            $('#poke').append('<img id="' + i + '"' + 'src="' + url + '">');

            console.log(url);
        }
    }

     getPoke();
    //  This populates screen with Pokemon

    $('#intro').slideDown(3000);


    $('img').click(function(event) {
        var selectedPoke = event.target.id;
        var infoUrl = "http://pokeapi.co/api/v1/pokemon/" + selectedPoke + "/";
        console.log(infoUrl);

        // below returns info about clicked Pokemon
        $.get(infoUrl, function(res) {
            console.log(res);
                   
            $('.pokeInfoBox').html('<h1>' + res.name + '</h1>' + '<img src=http://pokeapi.co/media/img/' + selectedPoke + '.png/><p><div id="abilities"><h2>Abilities</h2>')
            
            for (var i = 0; i < res.abilities.length; i++) {
                if (i < res.abilities.length-1) {
                $('.pokeInfoBox').append(res.abilities[i].name + ', ');
                }
                else {
                $('.pokeInfoBox').append(res.abilities[i].name + '.')
                }
                                
                $('.pokeInfoBox').append('</div>')
            }

            $('.pokeInfoBox').append('<div id="moves"><h2>Moves</h2>');            

            for (var i = 0; i < res.moves.length; i++) {
                if (i < res.moves.length-1) {
                $('.pokeInfoBox').append(res.moves[i].name + ', ');
                }
                else {
                $('.pokeInfoBox').append(res.moves[i].name + '.')
                }
                                
                $('.pokeInfoBox').append('</div');
            }
            
            setTimeout(function(){
            location.reload();},15000);
        
        })

        
        

    })
//  This is the end of jquery, keep this here, fool.





})
