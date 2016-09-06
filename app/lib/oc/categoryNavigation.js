angular.module('OrderCloud-CategoryNavigation', []);

angular.module('OrderCloud-CategoryNavigation')
    .directive('categorynavigation', categorynavigation)
    .controller('CategoryNavigationCtrl', CategoryNavigationCtrl)
;

function categorynavigation() {
    var directive = {
        restrict: 'E',
        template: template,
        controller: 'CategoryNavigationCtrl'
    };
    return directive;

    function template() {
        return [
            '<section class="category-nav">',
            '<nav class="navbar navbar-inverse" ng-init="showMobileMenu = false">',
            '<ul class="nav navbar-nav navbar-right visible-xs">',
            '<li>',
            '<a ng-click="showMobileMenu = !showMobileMenu">',
            '<i class="fa fa-caret-down" ng-class="{\'fa-caret-up\':showMobileMenu}"></i>',
            '</a>',
            '</li>',
            '</ul>',
            '<ul class="nav navbar-nav" ng-class="{\'hidingDisabled\':showMobileMenu}">',
             //categories
            '<li id="categories">',
            '<nav class="navbar-categories" role="navigation">',
            '<div>',
            '<a ng-click="isCollapsedCategory = !isCollapsedCategory" ng-class="{\'active\': !isCollapsedCategory, \'\': isCollapsedCategory}">',
            '<i class="fa fa-folder" ng-show="isCollapsedCategory"></i>',
            '<i class="fa fa-folder-open" ng-show="!isCollapsedCategory"></i>',
            '<span>{{\'Products\' | r | xlat}}</span>',
            '</a>',
            '</div>',
            '</nav>',
            '<div class="col-xs-12 col-collapse" collapse="isCollapsedCategory">',
            '<ul class="navbar-nav categories">',
            //subcategories
            '<li id="subcategories">',
            '<hamburgernavcategorytree tree=\'tree\' current=\'currentCategory\' />',
            '</li>',
            '</ul>',
            '</div>',
            '</li>',
            '</ul>',
            '</nav>',
            '</section>'
        ].join('');
    }
}


CategoryNavigationCtrl.$inject = ['$scope', '$routeParams', 'Category'];
function CategoryNavigationCtrl($scope, $routeParams, Category) {
    if ($routeParams.categoryInteropID) {
        $scope.categoryLoadingIndicator = true;
        Category.get($routeParams.categoryInteropID, function(cat) {
            $scope.currentCategory = cat;
            $scope.categoryLoadingIndicator = false;
        });
    }
    else if($scope.tree){
        $scope.currentCategory ={SubCategories:$scope.tree};
    }


    $scope.$on("treeComplete", function(data){
        if (!$routeParams.categoryInteropID) {
            $scope.currentCategory ={SubCategories:$scope.tree};
        }
    });
}