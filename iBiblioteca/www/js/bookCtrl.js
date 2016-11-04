angular.module('BookController',[])

.controller('bookCtrl',function($scope,bookService,$stateParams){

	$scope.articulo = books[$stateParams.id];

})
var books = [       
      { title: 'La colmena', year: '1951', author: 'Camilo José Cela Trulock',          isbn: '843992688X', editorial: 'Anaya', cover: 'http://www.alianzaeditorial.es/jpg_g/alianza/LB00331701.jpg' }, 
      { title: 'La galatea', year: '1585', author: 'Miguel de Cervantes Saavedra',          isbn: '0936388110', editorial: 'Anaya', cover: "http://www.catedra.com/jpg_g/catedra/CA00004603.jpg" },       
      { title: 'El ingenioso hidalgo don Quijote de la Mancha', year: '1605',          author: 'Miguel de Cervantes Saavedra',          isbn: '0844273619', editorial: 'Anaya', cover: "http://www.algaida.es/jpg_g/algaida/AG00160001.jpg" },       
      { title: 'La dorotea', year: '1632', author: 'Félix Lope de Vega y Carpio',          isbn: '847039360X', editorial: 'Anaya', cover: "http://www.catedra.com/jpg_g/catedra/CA00095802.jpg" },       
      { title: 'La dragontea', year: '1602', author: 'Félix Lope de Vega y Carpio',          isbn: '8437624045', editorial: 'Anaya', cover: "http://www.catedra.com/jpg_g/catedra/CA00156001.jpg" }     
      ];   