var aplicacion = angular.module("pokemon", ['ui.router']);

aplicacion.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('inicio', {
            url: "/"
            , templateUrl: "Vistas/Inicio.html"
            , controller: "InicioCtrl"
        })
        .state('pokemon', {
            url: "/pokemon"
            , templateUrl: "Vistas/Pokemon.html"
            , controller: "PokemonCtrl"
        });
});
