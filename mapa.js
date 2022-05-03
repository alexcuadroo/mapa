let map = L.map('map').setView([-31.439394901394998, -55.366399441010586],9) 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,13);
})
var popup = L.popup()
            .setLatLng([-31.573968407576235, -55.471108278873004])
            .setContent('<a href="https://es.wikipedia.org/wiki/Minas_de_Corrales" target="_blank">Minas de Corrales</b>');
var marker = L.marker([-31.573968407576235, -55.471108278873004]).bindPopup(popup).openPopup().addTo(map);

var popup = L.popup()
            .setLatLng([-31.589839960177482, -55.49977426861522])
            .setContent('<a href="https://www.youtube.com/watch?v=1h-TOaHqlOA" target="_blank">Minera</b>');            
var marker = L.marker([-31.589839960177482, -55.49977426861522]).bindPopup(popup).openPopup().addTo(map);

var popup = L.popup()
            .setLatLng([-31.457512059073103, -55.1822376781627])
            .setContent('<a href="https://es.wikipedia.org/wiki/Cerro_Pelado_(Rivera)" target="_blank">Cerro Pelado</b>');
var marker = L.marker([-31.457512059073103, -55.1822376781627]).bindPopup(popup).openPopup().addTo(map);

var popup = L.popup()
            .setLatLng([-30.89922656578552, -55.56029744585626])
            .setContent('<a href="https://es.wikipedia.org/wiki/Rivera_(Uruguay)" target="_blank">Rivera 1</b>');

var marker = L.marker([-30.89922656578552, -55.56029744585626]).bindPopup(popup).openPopup().addTo(map);

var popup = L.popup()
            .setLatLng([-30.878100826111034, -55.55803363781584])
            .setContent('<a href="https://es.wikipedia.org/wiki/Rivera_(Uruguay)" target="_blank">Rivera 2</b>');

var marker = L.marker([-30.878100826111034, -55.55803363781584]).bindPopup(popup).openPopup().addTo(map);

var popup = L.popup()
            .setLatLng([-30.91713441997304, -55.52939233666493])
            .setContent('<a href="https://es.wikipedia.org/wiki/Rivera_(Uruguay)" target="_blank">Rivera 3</b>');

var marker = L.marker([-30.91713441997304, -55.52939233666493]).bindPopup(popup).openPopup().addTo(map);

var popup = L.popup()
            .setLatLng([-31.777189379923527, -54.69272576916002])
            .setContent('<a href="https://es.wikipedia.org/wiki/Vichadero" target="_blank">Vichadero</b>');

var marker = L.marker([-31.777189379923527, -54.69272576916002]).bindPopup(popup).openPopup().addTo(map);

