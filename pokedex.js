$(document).ready(function() {
console.log('NOW READY')
 

    function getPoke () {
       
        for (var i = 1; i <= 151; i++) {
            var url="http://pokeapi.co/media/img/";
            url = (url + i) + '.png/';
            $('#poke').append('<img src="' + url + '">');
        }
    }
 

getPoke();

});
