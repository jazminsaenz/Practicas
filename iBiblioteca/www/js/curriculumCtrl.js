angular.module('CurriculumController',[])

.controller('curriculumCtrl',function($scope){
	$scope.works = [     
	{ date: 'Toda la vida', description: 'Estudihambre' },      
	{ date: '2015-2016', description: 'English Teacher' },      
	{ date: '2011-2012', description: 'Almacenista' } 
]; 
})