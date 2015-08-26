"use strict";angular.module("insurioApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/ergebnis",{templateUrl:"views/ergebnis.html",controller:"ErgebnisCtrl",controllerAs:"ergebnis"}).otherwise({redirectTo:"/"})}]),angular.module("insurioApp").controller("MainCtrl",["$scope","$location",function(a,b){a.active1=1,a.active2=0,a.active3=0,a.user={age:null,work:null,life:null,risk:null,vehicle:null},a.submitTesting=function(){var c={alter:a.age,work:a.work,life:a.life,risk:a.risk,vehicle:a.vehicle},d={haftpflicht:null,kranken:null,kfz:null};localStorage.setItem("values",JSON.stringify(c)),1==a.user.vehicle&&(d.kfz=1,localStorage.setItem("insurances",JSON.stringify(d))),b.path("ergebnis")}}]),angular.module("insurioApp").controller("ErgebnisCtrl",["$scope","$rootScope","Insurances",function(a,b,c){var d=JSON.parse(localStorage.getItem("insurances"));console.log(d)}]),angular.module("insurioApp").service("Insurances",function(){return{getName:function(){},getText:function(){},getTextMore:function(){}}}),angular.module("insurioApp").controller("ProgressCtrl",["$location","$scope",function(a,b){b.$on("$locationChangeStart",function(c){b.active1=0,b.active2=0,b.active3=0;var d=a.path();"/"==d?b.active1=1:"/ergebnis"==d?b.active2=1:"/offerte"==d&&(b.active3=1)})}]),angular.module("insurioApp").run(["$templateCache",function(a){a.put("views/ergebnis.html","<p>This is the about view.</p>"),a.put("views/main.html",'<form name="userForm" ng-submit="submitTesting()" class="form"> <select ng-model="user.age" required> <option value="">Wie alt bist du?</option> <option value="1">16 – 20</option> <option value="2">21 – 30</option> <option value="3">31 – 50</option> <option value="4">51 – 60</option> <option value="5">61 – 99</option> </select> <br> <select ng-model="user.work" required> <option value="">Dein Berufsstand</option> <option value="1">Schüler</option> <option value="2">Student</option> <option value="3">Angestellter</option> <option value="4">Selbstständig</option> <option value="5">Rentner</option> </select> <br> <select ng-model="user.life" required> <option value="">Deine Lebenssituation</option> <option value="1">Ledig, keine Kinder</option> <option value="2">Ledig, Kind / Kinder</option> <option value="3">Verheiratet, keine Kinder</option> <option value="4">Verheiratet, Kind / Kinder</option> <option value="5">Getrennt Lebend</option> <option value="6">Verwitwet</option> </select> <br> <select ng-model="user.risk" required> <option value="">Wie risikofreudig bist du?</option> <option value="1">Ich habe bock auf Risiko</option> <option value="2">Naja, geht so...</option> <option value="3">Auf keinen Fall ein Risiko!</option> </select> <br> <select ng-model="user.vehicle" required> <option value="">Besitzt du ein Fahrzeug?</option> <option value="1">Ja</option> <option value="2">Nein</option> </select> <input ng-disabled="userForm.$invalid" type="submit" value="Jetzt testen"> </form> {{user.age}}')}]);