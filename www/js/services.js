angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])
.factory('ListsFactory',function(){

var lists = [];
var list = [];
var id = 0;
var listStore = localStorage.getItem("lists");

if (listStore != null && listStore != '' && angular.isArray(angular.fromJson(listStore))) {
  lists = angular.fromJson(listStore)
  list = lists[id];
}
var listsSrv = {
  setList: function(id,newList) {
//     list['data'].push(newList);
    lists[id] = newList;
    localStorage.setItem("lists", angular.toJson(lists));
    return true;
  },
  getList: function(id) {
    

    if (lists != null && lists[id] != null) {
         list = lists[id];
         console.log(list);
      return list;
    } else {
      return {};
    }
  },
  getLists  : function(){
    if (lists != null ) {
      return lists;
    } else {
      return [];
    }    
  }
};
return listsSrv;


})


.service('BlankService', [function(){

}]);
