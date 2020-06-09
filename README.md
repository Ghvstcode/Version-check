![npm](https://img.shields.io/npm/v/@ghvst/version-check)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![npm bundle size](https://img.shields.io/bundlephobia/min/@ghvst/version-check)

# Version-check
![goku](https://user-images.githubusercontent.com/46195831/83947012-535e8a00-a80c-11ea-8e11-6c5221d8e474.gif)

 This is a simple CLI tool that helps you know if all the packages in your Package.json file are up to date!
 it checks your package.json file and in a tabular form tells you if all the packages are up to date!
 
 ### Installation
 
  to Install globally
```npm install -g @ghvst/version-check```

  to run directly with npx (this installs the package on every run)
```npx @ghvst/version-check```
 
 ### Usage
 
**`version-check vc --path="Name/Path to your package.json"`** - This command checks the main dependencies listed in the package.json file to see if they are up to date

**`version-check vc-dev --path="Name/Path to your package.json"`** - This command checks your devDependencies listed in the package.json file to see if they are up to date


**`version-check vc-all --path="Name/Path to your package.json"`** - This command checks all the dependencies in the package.json file to see if they are up to date

![NPMversion-check1](https://user-images.githubusercontent.com/46195831/84167701-79836480-aa6e-11ea-8c15-480ac8ec07dc.png)

  If the path that was passed in isn't found, you would be prompted and asked if you would like to check the parent directory for that file, if the file is found then the package would 
scan that file and print the result ofthe version check! If it is not found, you will be notified and the process exited!

![NPMpackage2](https://user-images.githubusercontent.com/46195831/84167841-9fa90480-aa6e-11ea-9cf4-d0f5cb1db79d.png)
