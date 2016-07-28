
/*Declaração de variáveis*/    
var map;

/*Objeto em JSON*/
var coordenadas ='[{"id":1,"nome":"Rodrigo Luiz Barbosa","Latitude":-19.8271949,"Longitude":-43.9555986,"cidade":"Belo Horizonte","estado":"Minas Gerais","foto":"img/Rodrigo_Luiz.png"},{"id":2,"nome":"Daniela Gondim","Latitude":-19.6039512,"Longitude":-46.9381066,"cidade":"Araxá","estado":"Minas Gerais","foto":"img/Daniela_Gondim.png"},{"id":3,"nome":"Rodrigo Batista Balthazar","Latitude":-15.7217621,"Longitude":-47.9382362,"cidade":"Brasília","estado":"Distrito Federal","foto":"img/Rodrigo_Balthazar.png"},{"id":4,"nome":"Elizangela Mattos Faria da Silva","Latitude":-20.5774727,"Longitude":-54.4871064,"cidade":"Campo Grande","estado":"Mato Grosso do Sul","foto":"img/Elizangela_Mattos.png"},{"id":5,"nome":"Gabriel Zago Marino","Latitude":-19.4730355,"Longitude":-40.626413,"cidade":"Colatina","estado":"Espirito Santo","foto":"img/Gabriel_Zago.png"},{"id":6,"nome":"Álvaro Santos","Latitude":-14.864311,"Longitude":-40.8429771,"cidade":"Vitória da Conquista","estado":"Bhaia","foto":"img/Alvaro_Santos.png"},{"id":7,"nome":"David Abraão Petro Rodrigues","Latitude":-30.1008231,"Longitude":-51.1589488,"cidade":"Porto Alegre","estado":"Rio Grande do Sul","foto":"img/David_Abraao.png"},{"id":8,"nome":"William Alex Braz","Latitude":-23.6824124,"Longitude":-46.5952992,"cidade":"São Paulo","estado":"São Paulo","foto":"img/William_Alex.png"},{"id":9,"nome":"Antonio Augusto de Lima","Latitude":-6.7436244,"Longitude":-39.31257,"cidade":"Várzea Alegre","estado":"Ceará","foto":"img/Antonio_Augusto.png"},{"id":10,"nome":"Jéssica Cristiane F. Viana","Latitude":0.1017723,"Longitude":-51.0968607,"cidade":"Macapá","estado":"Amapá","foto":"img/Jessica_Cristiane.png"},{"id":11,"nome":"Erik Guimarães","Latitude":-8.7565456,"Longitude":-63.8549068,"cidade":"Porto Velho","estado":"Rondônia","foto":"img/Erik_Guimaraes.png"}]';

/*Inicialização da API do Google Maps v3*/
function initialize() {
	
	var mapOptions = {
		zoom: 4,
		center: new google.maps.LatLng(-19.8271949, -43.9555986),
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
  			
	/*Load do mapa no elemento da página*/
	var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);
			
	/*Carga da informação do marker*/
	infowindow = new google.maps.InfoWindow({
		content: "Loading..."
	});

	/*Parse do objeto JSON*/
	var latlong = JSON.parse(coordenadas);

	for(i = 0; i < latlong.length; i++) {

		/*Atribuição de variáveis*/
		var latitude = latlong[i].Latitude;
		var	longitude = latlong[i].Longitude;
		var foto = latlong[i].foto;
		var nome = latlong[i].nome;
		var coords = new google.maps.LatLng(latitude, longitude);

		/*Montagem do marker*/
		var marker = new google.maps.Marker({
			position: coords,
    		map: map,
    		title: nome,
    		icon: foto,
    		animation: google.maps.Animation.DROP,
    		html:  '</div><h1 id=""class="">'+latlong[i].nome+'</h1><p>ID:'+latlong[i].id+'</br>Cidade:'+latlong[i].cidade+'</br>Estado:'+latlong[i].estado+'</p></div>'
  		});

		/*Listner da janela de informações*/
		google.maps.event.addListener(marker, "click", function () {
			infowindow.setContent(this.html);
			infowindow.open(map, this);
		});
		
	}       
		
}

/*Carga da API*/
google.maps.event.addDomListener(window, 'load', initialize);


