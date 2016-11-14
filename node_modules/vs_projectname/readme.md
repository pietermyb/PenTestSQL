# VS Project Name [![Build Status](https://travis-ci.org/sandcastle/vs_projectname.svg)](https://travis-ci.org/sandcastle/vs_projectname)

A helper package for sanitizing Visual Studio project names with unicode 
character type checking.

```js
var projectName = require('vs_projectname');

projectName('1badStart');    // _badStart
projectName('some name');    // some_name
projectName('noΩmath');      // no_math
projectName('Project.Name'); // Project.Name
projectName('Project_Name'); // Project_Name
```

Inpsired by [OmniSharp/generator-aspnet#256](https://github.com/OmniSharp/generator-aspnet/issues/256#issuecomment-119287802)
