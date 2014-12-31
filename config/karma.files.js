/*
 *
 *
 * Important Karma files
 *
 *
 *
 */
var files = {};


files.libs = [
    'bower_components/jquery/jquery.js',
    'bower_components/angular/angular.js',
    'bower_components/angular-mocks/angular-mocks.js'
];



files.tests = 'src/**/*.spec.js';


files.srcPlain = ['src/**/!(*.spec).js', 'src/**/*.tpl.html'];


files.srcMinified = 'dist/*.min.js';



module.exports = files;
