let map;
let marcador;

const coordenadasIniciais = { lat: -23.55052, lng: -46.633308 }; // São Paulo

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: coordenadasIniciais,
    zoom: 13,
  });

  marcador = new google.maps.Marker({
    position: coordenadasIniciais,
    map: map,
    title: "Você está aqui!",
  });

  const infoWindow = new google.maps.InfoWindow({
    content: "<strong>Você está aqui!</strong>",
  });

  marcador.addListener("click", () => {
    infoWindow.open(map, marcador);
  });
}

function centralizarMapa() {
  map.setCenter(coordenadasIniciais);
  map.setZoom(13);
}

function redirecionarParaLogin() {
  window.location.href = "login.html";
}
