console.log("yo")

var mymap = L.map('mapid').setView([42, -123], 5);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
		'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		id: 'mapbox.streets'
		}).addTo(mymap);

var data = new L.GeoJSON.AJAX("newfile.geojson",{
	onEachFeature:onEachFeature,
});

data.on('data:loaded', function(){
	console.log(data);
	data.addTo(mymap);
});
var rect = L.rectangle([[59.9, 29.9], [60.1, 30.1]]);
rect.enableEdit
mymap.addLayer(rect);
rect.on('dblclick', L.DomEvent.stop).on('dblclick', rect.toggleEdit);


function onEachFeature(feature, layer) {
	//bind click
	layer.on('click', function (e) {
		// e = event
		// You can make your ajax call declaration here
		//$.ajax(... 
		$(datasetList).empty()
		var data=`<div class="container" >`
			Object.keys(feature["properties"]).forEach(function(k){
				if(k=='geojson')
					index='basin_id'
				else 
					index=k
				data+=`<div class="row">`+
					`<div class="col" id="cols">`+
					index+
					`</div>`+
					`<div class="col" id="cols">`+
					feature["properties"][k]+
					`</div> </div>`
					});
		data+=`</div>`
		$(data).appendTo('#datasetList')
		console.log(data)
	});

	}
