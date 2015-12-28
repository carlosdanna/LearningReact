var gulp = require('gulp');
var LiveServer = require('gulp-live-server');
var browserSync = require('browser-sync');
var browserfy = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var sass = require('gulp-sass');

gulp.task('live-server', function(){
 	var server = new LiveServer('server/main.js');
 	server.start();
})

gulp.task('bundle', ['copy', 'sass'], function(){
	return browserfy({
		entries : 'app/main.jsx',
		debug: true,
	})
	.transform(reactify)
	.bundle()
	.pipe(source('app.js'))
	.pipe(gulp.dest('./.tmp'));

})

gulp.task('jsx-watch',['bundle'], browserSync.reload);

gulp.task('copy', function(){
	gulp.src(['app/style/*.css'])
	.pipe(gulp.dest('./.tmp'));
});

gulp.task('sass', function(){
	return  gulp.src('app/style/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('app/style'))
		.pipe(browserSync.stream());

});

gulp.task('serve', ['bundle', 'live-server'], function(){
	browserSync.init(null,{
		proxy: 'http://localhost:3000',
		port: 9001
	});

	gulp.watch('app/*.jsx', ['jsx-watch']);
	gulp.watch('app/components/*.jsx', ['jsx-watch']);
	gulp.watch('app/actions/*.jsx', ['jsx-watch']);
	gulp.watch('app/stores/*.jsx', ['jsx-watch']);
	
	gulp.watch('app/style/*.scss', ['sass']);
	gulp.watch('app/style/*.css',['copy']);
})