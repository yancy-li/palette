module.exports = function (grunt) {
    grunt.config('compress', {
        plugin: {
            options: {
                archive: 'release/ht-ui-<%= name %>.zip'
            },
            files: [
                {
                    expand: true,
                    cwd: '<%= guideDir %>/',
                    src: ['**'],
                    dest: 'guide',
                    filter: function (filepath) {
                        return filepath.indexOf('.DS_Store') < 0 && filepath.indexOf('__MACOSX') < 0 && filepath.indexOf('build') < 0;
                    }
                },
                {
                    expand: true,
                    cwd: '<%= rootDir %>/lib',
                    src: ['ht-ui-<%= name%>.js'],
                    dest: 'lib'
                },
                {
                    expand: true,
                    cwd: '<%= rootDir %>/',
                    src: ['jsdoc/**'],
                    dest: ''
                }
            ]
        }
    });
};