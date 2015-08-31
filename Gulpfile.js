var gulp    = require('gulp'),
    coffee  = require('gulp-coffee');

var compile = function (src, dest) {
    gulp.src(src)
    .pipe(coffee())
    .pipe(gulp.dest(dest));
}

gulp.task('compile', function () {
    compile('./client/app.coffee', 'client');
    compile('./client/coffees/app.coffee', 'client/app');
    compile('./client/coffees/resources/*.coffee', 'client/app/shared/resources');
    compile('./client/coffees/directives/*.coffee', 'client/app/shared/directives');
    // CONTROLLERS
    compile('./client/coffees/controllers/HomeController.coffee', 'client/app/components/home');
    compile('./client/coffees/controllers/ContactsController.coffee', 'client/app/components/contacts');
    compile('./client/coffees/controllers/SigninController.coffee', 'client/app/components/signin');
    compile('./client/coffees/controllers/SignupController.coffee', 'client/app/components/signup');
    compile('./client/coffees/controllers/ProfileController.coffee', 'client/app/components/home');

    // SERVICES
    compile('./client/coffees/services/HomeService.coffee', 'client/app/components/home');
    compile('./client/coffees/services/ContactsService.coffee', 'client/app/components/contacts');
    compile('./client/coffees/services/SigninService.coffee', 'client/app/components/signin');
    compile('./client/coffees/services/SignupService.coffee', 'client/app/components/signup');
    compile('./client/coffees/services/ProfileService.coffee', 'client/app/components/profile');
});
