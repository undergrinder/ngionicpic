angular.module('starter.controllers', [])

.controller('MoriczCtrl', function($scope, IMG, $ionicModal) {


$scope.img = IMG.get(parseInt(Math.random()*11)+1);
$scope.imgChange = function() {
    
    var rndID= parseInt(Math.random()*11)+1;
    $scope.img= IMG.get(rndID)}


  $ionicModal.fromTemplateUrl('templates/modal-img-det.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  
  
    $scope.openModal = function() {
    $scope.modal.show();
  }
  
    $scope.closeModal = function() {
    $scope.modal.hide();
  };

    $scope.$on('$destroy', function() {
    $scope.modal.remove();
  })




})


.controller('HeaderCtrl', function($scope,$ionicPopup) {

//A popup képénél az index.html mellett van a kép    
    
 $scope.ClosePopUp = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Kilépés',
     template: '<div style="text-align: center;"><img src="confirmClose.png"></div><br> Biztosan be akarja zárni ezt a remek alkalmazást?',
     cancelText: 'Mégse',
   });
   confirmPopup.then(function(res) {
     if(res) {
       navigator.app.exitApp();
     } 
   });
 }; 
    
     
    
})


.controller('KepCtrl', function($scope,IMG) {
    $scope.images = IMG.all();
})

.controller('ImgDetailCtrl', function($scope, $stateParams, IMG) {

    $scope.image = IMG.get($stateParams.IMGid);
    
}) 

.controller('SzinesGombokCtrl', function($scope,$ionicModal) {
  $scope.settings = {
   // enableFriends: true
  };
  
  $ionicModal.fromTemplateUrl('templates/modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  
  
    $scope.openModal = function() {
    $scope.modal.show();
  }
  
    $scope.closeModal = function() {
    $scope.modal.hide();
  };

    $scope.$on('$destroy', function() {
    $scope.modal.remove();
  })
})
  

.controller('LoremCtrl', function($scope) {
	$scope.btnclass = "button button-assertive";
	$scope.ico = "ion-arrow-right-b";
	$scope.expanded = false;
	$scope.expand = function() { 
	
			if($scope.expanded==false){
				$scope.ico = "ion-arrow-down-b";
				$scope.btnclass = "button button-positive";				
			} 
			else {
				$scope.ico = "ion-arrow-right-b";
				$scope.btnclass = "button button-assertive";
			};
			
			return $scope.expanded = !$scope.expanded;
			};
})



;
