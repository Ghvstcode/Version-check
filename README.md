# Version-check
![goku](https://user-images.githubusercontent.com/46195831/83947012-535e8a00-a80c-11ea-8e11-6c5221d8e474.gif)

 This is a simple CLI tool that helps you know if all the packages in your Package.json file are up to date!
 it checks your package.json file and in a tabular form tells you if all the packages are up to date!
 ### Usage
**`cli-version-checker vc --path="Name/Path to your package.json"`** - This command checks the main dependencies listed in the package.json file to see if they are up to date

**`cli-version-checker vc-dev --path="Name/Path to your package.json"`** - This command checks your main dependencies listed in the package.json file to see if they are up to date


**`cli-version-checker vc-all --path="Name/Path to your package.json"`** - This command checks all the dependencies in the package.json file to see if they are up to date

  If the path that was passed in isn't found, you would be prompted and asked if you would like to check the parent directory for that file, if the file is found then the package would 
scan that file and print the result ofthe version check! If it is not found, you will be notified and the process exited!
