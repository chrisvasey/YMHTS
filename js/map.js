L.mapbox.accessToken = 'pk.eyJ1IjoiY2hyaXNpdGFsaWsiLCJhIjoiQm1TaFdMZyJ9.rApsbB6i-PoSWKnBfeaNsg';
var map = L.mapbox.map('map', 'chrisitalik.l1nnb1l2')
    .setView([53.953, -1.082], 13);

//Default
$(document).ready(function(){
    map.setZoom(13);
    map.panTo([53.953, -1.082]);
});

//Map Back
$(document).ready(function(){
    $("#back").click(function(){
        map.setZoom(13);
        map.panTo([53.953, -1.082]);
    });
});

//TheHut
$(document).ready(function(){
    $("#theHut").click(function(){
        map.setZoom(18);
        map.panTo([53.950215, -1.088263000000012]);
    });
});

//The Healing Clinic
$(document).ready(function(){
    $("#healingClinic").click(function(){
        map.setZoom(18);
        map.panTo([53.961386, -1.080301999999989]);
    });
});

//Castlegate
$(document).ready(function(){
    $("#castlegate").click(function(){
        map.setZoom(18);
        map.panTo([53.956848, -1.0784600000000069]);
    });
});

//YCC
$(document).ready(function(){
    $("#YCC").click(function(){
        map.setZoom(18);
        map.panTo([53.956665, -1.0867959999999925]);
    });
});

//Survive
$(document).ready(function(){
    $("#survive").click(function(){
        map.setZoom(18);
        map.panTo([53.956039, -1.0847926139831543]);
    });
});