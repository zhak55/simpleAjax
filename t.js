var gulp        = require('gulp')
  , concat      = require('gulp-concat')
  , uglify      = require('gulp-uglify')
  , rename      = require("gulp-rename");

  var src = "./src/"
  // all files 
  ,   mapFiles = [
        "closureStart" ,
        "globals"      ,
        "browser"      ,
        "utils"        ,
        "class"        ,
        "errors"       ,
        "svg"          ,
        "circle"       ,
        "closureEnd"
    
   ].map(function( element ){
      return src + 
         element + ".js"
   });

gulp.task("build", function(){
 return gulp.src( mapFiles )
  .pipe(concat("build.js"))	
  .pipe(gulp.dest('./dist'));
});

gulp.task("minify", ["build"], function(){
 return gulp.src("./dist/build.js")
  .pipe(uglify())	
   .pipe(rename({
     extname: '.min.js'
   }))
  .pipe(gulp.dest('./dist/min'));
});

gulp.task("default", ["minify"])
