module.exports = function (grunt) {
    var pkg = grunt.file.readJSON('./package.json');
    grunt.initConfig({
        pkg: pkg,
        name: pkg.name,
        rootDir: '.',
        srcDir: '<%= rootDir %>/src',
        buildDir: '<%= rootDir %>/build',
        libDir: '<%= rootDir %>/lib',
        guideDir: '<%= rootDir %>/guide'
    });

    loadTasks(grunt);
    loadNpmTasks(grunt);

    grunt.registerTask('default', ['concat:plugin']);

    grunt.registerTask('release', [
        'clean',
        'concat',
        'uglify',
        'jsdoc',
        'guide',
        'compress'
    ]);
};

function loadTasks(grunt) {
    grunt.loadTasks('grunt-tasks');
    grunt.loadTasks('grunt-tasks/tasks');
}

function loadNpmTasks(grunt) {
    var devDep = grunt.config('pkg').devDependencies,
        plugin;
    for (plugin in devDep) {
        if (plugin.indexOf('grunt-contrib-') === 0) {
            grunt.loadNpmTasks(plugin);
        }
    }
    grunt.loadNpmTasks('grunt-zip');
    grunt.loadNpmTasks('grunt-jsdoc');
}

