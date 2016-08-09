/**
 * Pokemon.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
          type: 'string'
      }
      , descripcion: {
          type: 'string'
      }
      , imagen: {
          type: 'string'
      }
      , numeroPokemon: {
          type: 'integer'
      }
      , habilidad: {
          type: 'string'
      }
      , habilidadOculta: {
          type: 'string'
      }
      , color: {
          type: 'string'
      }
      , velocidad: {
          type: 'integer'
      }
      , fortaleza: {
          type: 'integer'
      }
      , precision: {
          type: 'integer'
      }
      , resistencia: {
          type: 'integer'
      }
      , salto: {
          type: 'integer'
      }
  }
};
