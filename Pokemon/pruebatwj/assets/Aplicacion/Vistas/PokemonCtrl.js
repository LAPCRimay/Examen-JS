aplicacion.controller("PokemonCtrl", function($scope, $http) {

  $scope.colores=["azul", "amarillo", "blanco", "gris", "marrón", "morado", "negro", "rojo", "rosa","verde"];

  $scope.nuevoPokemon = {
    nombre: "",
    descripcion: "",
    imagen: "",
    numeroPokemon: "",
    habilidad: "",
    habilidadOculta: "",
    color: "",
    velocidad: "",
    fortaleza: "",
    precision: "",
    resistencia: "",
    salto: ""
  }

  $scope.botonCrearDeshabilitado = false;
  $scope.crearPokemon = function() {
    $scope.botonCrearDeshabilitado = true;
    $http({
      method: "POST",
      url: "http://localhost:1337/Pokemon",
      data: $scope.nuevoPokemon
    }).then(
      function(respuesta) {
        $scope.pokemones.push(respuesta.data);
        $scope.resetearNuevoPokemon();
        $scope.botonCrearDeshabilitado = false;
        console.log(respuesta);
      },
      function(error) {
        $scope.botonCrearDeshabilitado = false;
        console.log(error);
      });
  }

  $scope.resetearNuevoPokemon = function() {
    $scope.nuevoPokemon = {
      nombre: "",
      descripcion: "",
      imagen: "",
      numeroPokemon: "",
      habilidad: "",
      habilidadOculta: "",
      color: "",
      velocidad: "",
      fortaleza: "",
      precision: "",
      resistencia: "",
      salto: ""
    }
  }

  $scope.editarPokemon = function(pokemon) {
    $http({
      method: "PUT",
      url: "http://localhost:1337/Pokemon/" + pokemon.id,
      data: {
        nombre: pokemon.nombre,
        descripcion: pokemon.descripcion,
        imagen: pokemon.imagen,
        numeroPokemon: pokemon.numeroPokemon,
        habilidad: pokemon.habilidad,
        habilidadOculta: pokemon.habilidadOculta,
        color: pokemon.color,
        velocidad: pokemon.velocidad,
        fortaleza: pokemon.fortaleza,
        precision: pokemon.precision,
        resistencia: pokemon.resistencia,
        salto: pokemon.salto
      }
    }).then(
      function(respuesta) {
        pokemon.mostrar = !pokemon.mostrar
      },
      function(error) {
        console.log(error);
      });
  }

  $scope.cargarPokemones = function() {

    $http({
      method: "GET",
      url: "http://localhost:1337/Pokemon",
      isArray: true
    }).then(
      function(respuesta) {
        $scope.pokemones = respuesta.data;
        console.log(respuesta);
      },
      function(error) {
        console.log(error);
      });
  }
  $scope.cargarPokemones();

});
