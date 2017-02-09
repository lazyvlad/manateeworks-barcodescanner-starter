angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])
.factory('ListFactory', function() {

var list = [
{"location":{"p3":{"x":894.6526,"y":331.2918},"p2":{"x":894.6526,"y":331.2918},"p1":{"x":874.9784,"y":219.7139},"p4":{"x":874.9784,"y":219.7139}},"code":"d","imageWidth":1280,"bytes":[100],"isGS1":false,"type":"Code 93","imageHeight":720},
{"location":{"p3":{"x":894.6526,"y":331.2918},"p2":{"x":894.6526,"y":331.2918},"p1":{"x":874.9784,"y":219.7139},"p4":{"x":874.9784,"y":219.7139}},"code":"d","imageWidth":1280,"bytes":[100],"isGS1":false,"type":"Code 93","imageHeight":720},
{"location":{"p3":{"x":894.6526,"y":331.2918},"p2":{"x":894.6526,"y":331.2918},"p1":{"x":874.9784,"y":219.7139},"p4":{"x":874.9784,"y":219.7139}},"code":"d","imageWidth":1280,"bytes":[100],"isGS1":false,"type":"Code 93","imageHeight":720},
{"location":{"p3":{"x":894.6526,"y":331.2918},"p2":{"x":894.6526,"y":331.2918},"p1":{"x":874.9784,"y":219.7139},"p4":{"x":874.9784,"y":219.7139}},"code":"d","imageWidth":1280,"bytes":[100],"isGS1":false,"type":"Code 93","imageHeight":720},
{"location":{"p3":{"x":894.6526,"y":331.2918},"p2":{"x":894.6526,"y":331.2918},"p1":{"x":874.9784,"y":219.7139},"p4":{"x":874.9784,"y":219.7139}},"code":"d","imageWidth":1280,"bytes":[100],"isGS1":false,"type":"Code 93","imageHeight":720},
{"location":{"p3":{"x":894.6526,"y":331.2918},"p2":{"x":894.6526,"y":331.2918},"p1":{"x":874.9784,"y":219.7139},"p4":{"x":874.9784,"y":219.7139}},"code":"d","imageWidth":1280,"bytes":[100],"isGS1":false,"type":"Code 93","imageHeight":720},
{"location":{"p3":{"x":894.6526,"y":331.2918},"p2":{"x":894.6526,"y":331.2918},"p1":{"x":874.9784,"y":219.7139},"p4":{"x":874.9784,"y":219.7139}},"code":"d","imageWidth":1280,"bytes":[100],"isGS1":false,"type":"Code 93","imageHeight":720},
{"location":{"p3":{"x":894.6526,"y":331.2918},"p2":{"x":894.6526,"y":331.2918},"p1":{"x":874.9784,"y":219.7139},"p4":{"x":874.9784,"y":219.7139}},"code":"d","imageWidth":1280,"bytes":[100],"isGS1":false,"type":"Code 93","imageHeight":720},
{"location":{"p3":{"x":894.6526,"y":331.2918},"p2":{"x":894.6526,"y":331.2918},"p1":{"x":874.9784,"y":219.7139},"p4":{"x":874.9784,"y":219.7139}},"code":"d","imageWidth":1280,"bytes":[100],"isGS1":false,"type":"Code 93","imageHeight":720},
{"location":{"p3":{"x":894.6526,"y":331.2918},"p2":{"x":894.6526,"y":331.2918},"p1":{"x":874.9784,"y":219.7139},"p4":{"x":874.9784,"y":219.7139}},"code":"d","imageWidth":1280,"bytes":[100],"isGS1":false,"type":"Code 93","imageHeight":720},
{"location":{"p3":{"x":894.6526,"y":331.2918},"p2":{"x":894.6526,"y":331.2918},"p1":{"x":874.9784,"y":219.7139},"p4":{"x":874.9784,"y":219.7139}},"code":"d","imageWidth":1280,"bytes":[100],"isGS1":false,"type":"Code 93","imageHeight":720},
{"location":{"p3":{"x":894.6526,"y":331.2918},"p2":{"x":894.6526,"y":331.2918},"p1":{"x":874.9784,"y":219.7139},"p4":{"x":874.9784,"y":219.7139}},"code":"d","imageWidth":1280,"bytes":[100],"isGS1":false,"type":"Code 93","imageHeight":720}];
var listStore = localStorage.getItem("list");
if (listStore != null && listStore != '' && angular.isArray(angular.fromJson(listStore))) {
  list = angular.fromJson(listStore);
}
var listSrv = {
  setList: function(newList) {
    list = newList;
    localStorage.setItem("list", angular.toJson(list));
    return true;
  },
  getList: function() {
    if (list != null) {
      return list;
    } else {
      return [];
    }
  }
};
return listSrv;
})
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
