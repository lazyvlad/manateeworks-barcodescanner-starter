        angular.module('app.controllers', [])

        .controller('listCtrl', ['ListsFactory','$scope', '$stateParams', '$ionicModal',
			function (ListsFactory,$scope, $stateParams, $ionicModal) {

				console.log($stateParams.id);

				$scope.listCanSwipe = true;                         

				var id = ($stateParams.id)?$stateParams.id:0;

				$ionicModal.fromTemplateUrl('templates/view-modal.html', {
					scope: $scope,
					animation: 'slide-in-right'
				}).then(function(modal) {
					$scope.viewModal = modal;
				});
				$scope.openModal = function(item) {
					$scope.viewModal.item = item;
					$scope.viewModal.show();
				};
				$scope.closeModal = function() {
					$scope.viewModal.hide();
				};
				// Cleanup the modal when we're done with it!
				$scope.$on('$destroy', function() {
					$scope.viewModal.remove();
				});
				// Execute action on hide modal
				$scope.$on('modal.hidden', function() {
				// Execute action
				});
				// Execute action on remove modal
				$scope.$on('modal.removed', function() {
				// Execute action
				});



				$scope.list = ListsFactory.getList(id);

				             
				$scope.scannerState = false;
				             
				$scope.addDummy = function(){
					var item = {"location":{"p3":{"x":894.6526,"y":331.2918},"p2":{"x":894.6526,"y":331.2918},"p1":{"x":874.9784,"y":219.7139},"p4":{"x":874.9784,"y":219.7139}},"code":"BRANDON MORNO","imageWidth":1280,"bytes":[100],"isGS1":false,"type":"Code 93","imageHeight":720};
					$scope.addItem(item);
				}
				             
				$scope.addItem = function(result) {
					var newItem = {};
					// Add values from form to object
					newItem = result;
					$scope.list.data.push(newItem);
					$scope.scannerState = false;
					ListsFactory.setList(id,$scope.list);
				}
				$scope.view = function(item){
                                 console.log(item);
					$scope.openModal(item);
				}

				$scope.delete = function(item) {
					$scope.list.data.splice($scope.list.data.indexOf(item), 1);
					ListsFactory.setList(id,$scope.list);
				}
				$scope.resetList = function(){
					$scope.list = [];
					ListsFactory.setList(id,$scope.list);
				}
				             
				//we added in the index.html file an angular controller that will deal with the button scan and update of the result field
				$scope.startScanner = function(){
					if(mwbScanner) {
					    mwbScanner.setCallback(function(result){});
					            
					    if($scope.scannerState == false){
					        mwbScanner.startScanning(0,0,100,50).then(function(result){
					            if(result && result.code){
					                //you need to wrap it into apply so that the view will update the results
					                $scope.$apply(function(){
					                    $scope.addItem(result);
					                });
					            }
					            else
					                console.log('No Result');
					            
					            
					        });
					    }
					    else{
					        mwbScanner.closeScanner();
					    }
					    $scope.scannerState = !$scope.scannerState;
					}
				}

		}])
		.controller('listsCtrl',['ListsFactory','$scope','$location', '$ionicPopup' ,'$stateParams', '$ionicModal',
			function (ListsFactory,$scope, $location, $ionicPopup, $stateParams, $ionicModal) {


				$scope.listCanSwipe = true;   


				$ionicModal.fromTemplateUrl('templates/new-edit-list-modal.html', {
					scope: $scope,
					animation: 'slide-in-right'
				}).then(function(modal) {
					$scope.addDialog = modal;
				});
				$scope.openModal = function(item) {
					$scope.addDialog.item = item;
					$scope.addDialog.show();
				};
				$scope.closeModal = function() {
					$scope.addDialog.hide();
				};
				// Cleanup the modal when we're done with it!
				$scope.$on('$destroy', function() {
					$scope.addDialog.remove();
				});
				// Execute action on hide modal
				$scope.$on('modal.hidden', function() {
				// Execute action
				});
				// Execute action on remove modal
				$scope.$on('modal.removed', function() {
				// Execute action
				});

					$scope.showAddChangeDialog = function(action) {
					$scope.action = action;

					$scope.addDialog.show();
					};

					$scope.edit = function(key,item){
						$scope.addDialog.item = item;
						$scope.addDialog.key = key;
						$scope.showAddChangeDialog('edit');

					}
					$scope.add = function(){
						$scope.addDialog.item = {"name":''};
						$scope.showAddChangeDialog('add');
					}

					$scope.delete = function(item) {
						$scope.lists.splice($scope.lists.indexOf(item), 1);
						ListsFactory.setList($scope.lists.indexOf(item),$scope.list);
					}			      

					$scope.submit = function(action,form){
						if(action == 'add')
							$scope.addList(form);
						else
							$scope.editList(form);
					}			      

			      $scope.leaveAddChangeDialog = function() {
			        // Remove dialog 
			        $scope.addDialog.remove();
			        // Reload modal template to have cleared form
			        $ionicModal.fromTemplateUrl('templates/new-edit-list-modal.html', function(modal) {
			          $scope.addDialog = modal;
			        }, {
			          scope: $scope,
			          animation: 'slide-in-up'
			        });
			      };				
		

				$scope.lists = ListsFactory.getLists();
				$scope.go = function(where){
					$location.path("list/"+where);
				}

				$scope.addList = function(item){

					var newList = {};
					newList.name = item.name.$modelValue;
					newList.data = [];

					var new_id = ($scope.lists && $scope.lists.length)?$scope.lists.length:0;
                                 
					ListsFactory.setList(new_id,newList);
					$scope.leaveAddChangeDialog();
					$scope.go(new_id);

				}

				$scope.editList = function(item){
					console.log(item.name.$modelValue);
					console.log(item.key.$modelValue);

					
					var editedList = $scope.lists[item.key.$modelValue],
						id = item.key.$modelValue;
						
						editedList.name = item.name.$modelValue;

					ListsFactory.setList(id,editedList);
					$scope.leaveAddChangeDialog();

				}


				 $scope.showConfirmDelete = function(item) {
				   var confirmPopup = $ionicPopup.confirm({
				     title: 'Delete List',
				     template: 'Are you sure you want to delete the list?'
				   });

				   confirmPopup.then(function(res) {
				     if(res) {
				     		$scope.delete(item);
				     } else {
				     		
				     }
				   });
				 };				



		}])
