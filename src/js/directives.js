/**
 * Created by wayneaustin on 27/07/2015.
 */
(function () {
    "use strict";

    angular.module("directives")
        .directive('loader', function () {
            var html = '<div class="loading-content">';
            html += '<h2 id="LoadingMore">{{title}}</h2>';
            html += '<p data-ng-bind="text">{{text}}</p>';
            html += '<div class="ie-spinner"></div>';
            html += '<div class="loader spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div>';
            html += '</div>';
            return {
                scope: false,
                template: html,
                link: function (scope, element, attrs) {
                    scope.title = attrs.loaderTitle;
                    scope.text = attrs.loaderText;
                }
            };
        });

    angular.module("app")
        .service('currency', ['$locale', function ($locale) {
            return {
                format: function (value, addC) {
                    var sym = $locale.NUMBER_FORMATS.CURRENCY_SYM,
                        sep = $locale.NUMBER_FORMATS.DECIMAL_SEP,
                        group = $locale.NUMBER_FORMATS.GROUP_SEP,
                        formattedValue,
                        values;

                    if (typeof value !== "string") {
                        value = value.toFixed(2);
                    }

                    if (value.indexOf(sym) >= 0) {
                        value = value.split(sym)[1]; //removes currency char
                    }

                    if (value.indexOf(group) >= 0) {
                        var groups = value.split(group);
                        value = groups.join(""); //removes group char
                    }

                    values = value.split(sep); //split decimal

                    if (addC) { //return as formatted currency string
                        values[0] = values[0].replace(/\B(?=(\d{3})+(?!\d))/g, group);
                        formattedValue = sym + values[0] + sep + values[1];
                    } else {
                        formattedValue = values[0] + sep + values[1];
                    }

                    return formattedValue;
                }
            };
        }])
        .service('toTitleCase', function () {
            return {
                format: function (string) {
                    if (string) {
                        return string.replace(/\w+/g,
                            function (w) {
                                return w[0].toUpperCase() + w.slice(1).toLowerCase();
                            });
                    }
                }
            }
        })
        .filter('slice', function () {
            // returns a specified range of values from the array
            return function (arr, start, end) {
                return (arr || []).slice(start, end);
            };
        });
}());