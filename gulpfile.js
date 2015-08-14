var gulp = require('gulp');
var concat = require('gulp-concat');

var paths = {
	client_scripts: ['client/js/app.js',
				'client/js/controllers/*.js',
				'client/js/directives/*.js',
				'client/js/routes.js'],
	server_scripts: ['server/server.js',
					'server/db/*.js']
};

gulp.task('client_scripts', function() {
	return gulp.src(paths.client_scripts)
	.pipe(concat('app.js'))
	.pipe(gulp.dest('client/js/'));
});

gulp.task('server_scripts', function() {
	return gulp.src(paths.server_scripts)
	.pipe(concat('server.js'))
	.pipe(gulp.dest('server/'));
});

gulp.task('default', ['client_scripts', 'server_scripts']);