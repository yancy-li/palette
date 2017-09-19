module.exports = function (grunt) {
    grunt.registerMultiTask('guide', 'Generate guide.', function () {
        var data = this.data,
            target = this.target;
        if (Array.isArray(data)) {
            for (var i = 0; i < data.length; i++) {
                var element = data[i];
                generateGuide('guide/' + element.substring(0, element.indexOf('/')) + '/', 'guide');   
            }
        }
        else {
            generateGuide('guide/' + data.substring(0, data.indexOf('/')), 'guide');
        }
        
    });
    
    imgMap = {
        "img1": ''
    };
    
    function generateGuide (path, name) {
        var fs = require('fs');
        if (!fs.existsSync(path + 'build/head.html')) {
            return;
        }
        var start = fs.readFileSync(path + 'build/head.html', 'utf8'),
            end = fs.readFileSync(path + 'build/tail.html', 'utf8'),
            content = fs.readFileSync(path + 'build/' + name + '.md', 'utf8');
            
        content = require('markdown').markdown.toHTML(content);
        
        // replace ref by div with id
        var match, matches = [], regex = /(!\(#)ref_(\w*)(\))/g;
        while(match = regex.exec(content)){
            matches.push({
                m0: match[0], 
                m2: match[2]
            });
        }                
        matches.forEach(function(obj){
            content = content.replace('<p>' + obj.m0 + '</p>', '<div id="ref_' + obj.m2 + '"></div>');
        });
        
        // replace example with iframe
        matches = [];
        regex = /(!\(#)example_(\w*)@(\d*)(\))/g;                 
        while(match = regex.exec(content)){
            matches.push({
                m0: match[0], 
                m2: match[2],
                m4: match[3]
            });
        }                
        matches.forEach(function(obj){
            content = content.replace(obj.m0, '<iframe src="examples/example_' + obj.m2 + '.html" style="height:' + obj.m4 + 'px"></iframe>');
        });
                                
        // replace img with base64        
        matches = [], regex = /(!\(#)img_(\w*)(\))/g;
        while(match = regex.exec(content)){
            matches.push({
                m0: match[0], 
                m2: match[2]
            });
        }                
        matches.forEach(function(obj){
            content = content.replace(obj.m0, '<img src="' + imgMap[obj.m2] + '">');
        });
        
        fs.writeFileSync(path + name + '.html', start + content + end);
    }
};