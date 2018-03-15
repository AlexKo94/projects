angular.module('app', ['ngMaterial'])
.config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date){
      var resDate = null;
      if(date){
        resDate = moment(date).format('YYYY-MM-DD');
      }
        return resDate;
    };
})
.controller('AppCtrl', function($scope) {
  this.dateChange = function(){

  }
})
.component('mcDates',{
  bindings: {
    dateTo: '=',
    dateFrom: '=',
    dateChange: '&'
  },
  template:`<div layout-gt-xs="row">
              <div flex-gt-xs="">
                <h4>С</h4>
                <md-datepicker ng-model="$ctrl.dateTo" md-placeholder="С" ng-change="$ctrl.dateChange1()"></md-datepicker>
              </div>
            </div>
            <div layout-gt-xs="row">
              <div flex-gt-xs="">
                <h4>По</h4>
                <md-datepicker ng-model="$ctrl.dateFrom" md-placeholder="По" ng-change="$ctrl.dateChange1()"></md-datepicker>
              </div>
            </div>
            <div layout-gt-xs="row">
              <span class="options-date" ng-click="$ctrl.yesterday()">Вчера</span><span class="options-date" ng-click="$ctrl.today()">Сегодня</span><span class="options-date" ng-click="$ctrl.twoWeeks()">2 недели</span><span class="options-date" ng-click="$ctrl.month()">Месяц</span><span class="options-date" ng-click="$ctrl.all()">Все</span>
            </div>`,
    controller: function(){
      this.dateTo = null;
      this.dateFrom = null;
      this.dateChange1 = function(){
        this.dateTo = moment(this.dateTo).format('YYYY-MM-DD');
        this.dateFrom = moment(this.dateFrom).format('YYYY-MM-DD');
        if(this.dateTo){
          if(this.dateTo.split('-')[2] > this.dateFrom.split('-')[2]){
            alert("Дата начала не может быть меньше даты конца");
          }
        }
        this.dateChange();
      }
      this.yesterday = function(){
        this.dateTo = moment(new Date()).subtract(1, 'days').format('YYYY-MM-DD');
        this.dateFrom = moment(new Date()).subtract(1, 'days').format('YYYY-MM-DD');
      }
      this.today = function(){
        this.dateTo = moment(new Date()).format('YYYY-MM-DD');
        this.dateFrom = moment(new Date()).format('YYYY-MM-DD');
      }
      this.twoWeeks = function(){
        this.dateTo = moment(new Date()).subtract(14, 'days').format('YYYY-MM-DD');
        this.dateFrom = moment(new Date()).format('YYYY-MM-DD');
      }
      this.month = function(){
        this.dateTo = moment(new Date()).subtract(30, 'days').format('YYYY-MM-DD');
        this.dateFrom = moment(new Date()).format('YYYY-MM-DD');
      }
      this.all = function(){
        this.dateTo = null;
        this.dateFrom = null;
      }
    },
});
