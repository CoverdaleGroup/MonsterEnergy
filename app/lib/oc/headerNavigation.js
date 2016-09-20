angular.module('OrderCloud-HeaderNavigation', []);
angular.module('OrderCloud-HeaderNavigation')
    .directive('headernavigation', headernavigation)
;

function headernavigation() {
    return {
        restrict: 'E',
        template: template
    };

    function template() {
        return [
            '<section class="header-navigation">',
                '<div class="row">',
                    '<div class="col-xs-12">',
                        '<div class="col-xs-12 col-sm-3">',
                            '&nbsp;',
                        '</div>',
                        '<div class="col-xs-12 col-sm-6">',
                            '<div class="logo">',
                                '<a href="catalog">',
                                    '<img class="img-responsive" ng-src="{{user.Company.LogoUrl}}" />',
                                    //'<img class="img-responsive" src="css/images/custom/logo.png" />',
                                '</a>',
                            '</div>',
                        '</div>',
                        '<div class="col-xs-12 col-sm-3 product-search">',
                            '<productsearchinput></productsearchinput>',
                        '</div>',
                    '</div>',
                '</div>',
            '</div>',
            '</section>'
        ].join('');
    }
}