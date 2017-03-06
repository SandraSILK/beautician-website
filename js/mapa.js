	
	function map() {

		var loc = {lat:54.409771, lng:18.571130};
		var map = new google.maps.Map (
			document.getElementById('map'), {
				zoom: 16,
				center: loc
			});

		//var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
		var image = 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTLyozHyKdACnR5oKsseuKcIJZDptuPJskmho1mg3RytNjKexJfAg';
		var marker = new google.maps.Marker ({
			position: loc,
			map: map,
			icon: image,
		});
	}