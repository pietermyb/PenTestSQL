/* global describe, it */
'use strict';
var assert = require('assert'),
    projectName = require('../');


describe('vs_projectname', function(){
    
    it('should replace first char if digit', function(){
        assert.strictEqual(projectName('1badStart'), '_badStart');        
    });
    
    it('should replace spaces', function(){
        assert.strictEqual(projectName('some name'), 'some_name');
        assert.strictEqual(projectName('some\tname'), 'some_name');        
    });
    
    it('should replace invalid unicode categories', function(){
        assert.strictEqual(projectName('some\u2665name'), 'some_name'); // ♥
    });
    
    it('should not replace valid unicode characters', function(){
        assert.strictEqual(projectName('some\uFE4Fname'), 'some\uFE4Fname'); // ﹏
    });
    
    it('should not replace dots', function(){
        assert.strictEqual(projectName('Project.Name'), 'Project.Name');
    });
    
    it('should not replace underscore', function(){
        assert.strictEqual(projectName('Project_Name'), 'Project_Name');
    });
});
