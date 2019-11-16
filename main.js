function whenClicked(e) {
  // e = event
  console.log(e);
  // You can make your ajax call declaration here
  //$.ajax(... 
}
function onEachFeature(feature, layer) {
    //bind click
    layer.on('click', function (e) {
      // e = event
      console.log(feature);
      // You can make your ajax call declaration here
      //$.ajax(... 
   //var x = document.getElementById("mySelect").value;
	var data=""
	Object.keys(feature["properties"]).forEach(function(k){
	data=data+k+" "+feature["properties"][k]+"<br>"});
	console.log(data)
   document.getElementById("demo").innerHTML = data;
    });

}
