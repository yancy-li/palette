module.exports = function(grunt) {
    grunt.config('jsdoc', {
        zh: {
            src: ['<%= rootDir %>/build/ht-ui-<%= name %>-api_zh.js'],
            options: {
                destination: 'jsdoc/zh'
            }
        },
        en: {
            src: ['<%= rootDir %>/build/ht-ui-<%= name %>-api_en.js'],
            options: {
                destination: 'jsdoc/en'
            }
        }
    });
};