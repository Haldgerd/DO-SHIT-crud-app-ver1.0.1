# do-shit-CRUD-app

DO SHIT is a CRUD application akin to to do lists, for all bold designers and developers.

https://medium.com/geekculture/setting-up-a-react-app-from-scratch-withwebpack-babel-and-eslint-57eb3dcaf2e9

# ENVIRONMENT SETUP ERRORS you can and probably will encounter

---

1. <strong>ReferenceError: \_\_dirname is not defined in ES module scope</strong><BR>
   This file is being treated as an ES module because it has a '.js' file extension and 'C:\personal-projects-folder\do-shit-CRUD-app\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.
   at file:///C:/personal-projects-folder/do-shit-CRUD-app/webpack.config.js:7:18

    <strong>SOLUTION:</strong> https://www.kindacode.com/article/node-js-using-__dirname-and-__filename-with-es-modules/

2. <strong>ReferenceError: module is not defined in ES module scope</strong><BR>
   This file is being treated as an ES module because it has a '.js' file extension and 'C:\personal-projects-folder\do-shit-CRUD-app\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file extension.<br>
   This error reffered to <em><strong>webpack.config.js</strong></em>

    <strong>SOLUTION: </strong> Remove "type": "module" from package.json. But it returns a new error:<br><br>
    =====> 3. import path from "path";

    <strong>SyntaxError: Cannot use import statement outside a module</strong>

    <strong>SOLUTION: </strong> If returning "type": "module" to package.json, ERROR assigned under point 2 occurs again.

    https://stackoverflow.com/questions/58273824/typescript-cannot-use-import-statement-outside-a-module/60225870#60225870

    IMPORTANT: Use ESM syntax, for importing and exporting files! Add "type": "module" to package.json.
    https://gist.github.com/johnrichardrinehart/c8ec6ab1e60f39fc3b8dc738db649ec0 - some dev server properties are not supported anymore. NOTE!

3. <strong>eslint --init</strong> <br>
   eslint : The term 'eslint' is not recognized as the name of a cmdlet, function, script file, or  
   operable program. Check the spelling of the name, or if a path was included, verify that the path is  
   correct and try again.
   At line:1 char:1

-   eslint --init
-   ```
      + CategoryInfo          : ObjectNotFound: (eslint:String) [], CommandNotFoundException
      + FullyQualifiedErrorId : CommandNotFoundException
    ```

<strong>SOLUTION: </strong> Follow guide on official site https://eslint.org/docs/user-guide/getting-started

eslint-loader depricated https://laurieontech.com/posts/eslint-webpack-plugin/ USE `eslint-webpack-plugin`.

# WHAT I LEARNED - 2022 edition (march)

---

NOTE: All dependancies NOT CRUCIAL for production- not to be included in production bundle- are saved with --save-dev or -D option.

1. <strong>STEP ONE: SET WEBPACK</strong><br>
   Setting webpack is not that difficult. You need to install `npm i webpack webpack-cli --save-dev`.
   This will install webpack and webpack interface to work with webpack via terminal.

2. <strong>STEP TWO: Choose your stack</strong><br>
   If you'll work with React, install 'npm i react react-dom --save-dev' first. Choose your linter and traspiler. I chose BABEL and ESLINT. I am also using PRETTIER to format my code on save.
   Install all three via `npm i --save-dev babel-loader eslint prettier`

BABEL needs additional plugins:  
 `"@babel/core": "^7.17.5", "@babel/preset-env": "^7.16.11", "@babel/preset-react": "^7.16.7",`

to work with webpack. You also need to install:
`"sass-loader": "^12.6.0", "style-loader": "^3.3.1", "css-loader": "^6.7.1",`

These loaders will ensure that CSS modules are recognized. If you're using CSS (vanilla, DO NOT INSTALL SASS-LOADER) or SASS (install SASS-LOADER) you need to install them.

3. <strong>STEP THREE: WHAT the f\*\*\* is LOADER</strong><br>
   Well simply put webpack uses loaders to recognize file types. This is important because without loaders webpack won't know how to bundle your code. ERRORS GALORE.

4. <strong>STEP FOUR: install file-loader</strong><br>
   You'll need it to preocess font files (or any file for that matter) - if they're custom.

5. <strong>STEP FIVE: HELLS LOSE WITH configuration files!</strong><br>
   So the most challenging part is to make it all work together. To make all of your dependencies friends with webpack you need to create `webpack.config.js` file in root of your document.

You can create `.prettierrc`, `.eslintrc`, `babel.config.json` files as well, also in root folder.
For now leave them empty, besides babel.

<strong>IMPORTANT: </strong>Add this line to babel.config.json as stated in their official web page:
https://babeljs.io/setup#installation

<strong>IMPORTANT: </strong>For prettier and eslint to play nice with each other check: https://prettier.io/docs/en/install.html

Configuration for webpack with all of these dependecies - MINUS ESLINT AND PRETTIER - check `webpack.config.js` file.
DISCLAIMER: I also added `webpack-dev-server` for live server and `cssMini` plugin for minifiying CSS files into one.

6.<strong> STEP SIX: ESLINT ERROR GALORE</strong><br>
First add this lines to prettierc.json file:
{
"trailingComma": "es5",
"tabWidth": 4,
"semi": false,
"singleQuote": true
}

NOTE: This is a very basic configuration for prettier.

Then install eslint and eslint-webpack-plugin. Run command `npx @eslint/config`. This will bring up a set of questions about your preffered styles. But BEWARE. GET READY FOR ERROR GALORE.

```
ERROR in
C:\personal-projects-folder\DO-SHIT-crud-app-ver1.0.1\src\App.js
   1:27  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   2:42  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   3:40  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   4:1   error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   5:13  error  Function component is not a function declaration
             react/function-component-definition
   5:19  error  Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`  arrow-body-style
   5:20  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   6:1   error  Expected indentation of 2 spaces but found 4
             indent
   6:13  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   7:9   error  Expected indentation of 6 space characters but found 8
             react/jsx-indent
   7:9   error  JSX not allowed in files with extension '.js'
             react/jsx-filename-extension
   7:14  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   8:13  error  Expected indentation of 10 space characters but found 12
             react/jsx-indent
   8:22  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   9:13  error  Expected indentation of 10 space characters but found 12
             react/jsx-indent
   9:24  error  `'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`
             react/no-unescaped-entities
   9:33  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  10:13  error  Expected indentation of 10 space characters but found 12
             react/jsx-indent
  10:44  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  11:15  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  12:1   error  Expected indentation of 2 spaces but found 4
             indent
  12:7   error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  13:3   error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  14:1   error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  15:20  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style

C:\personal-projects-folder\DO-SHIT-crud-app-ver1.0.1\src\components\Button.js
   1:27  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   2:39  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   3:1   error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   4:16  error  Function component is not a function declaration
             react/function-component-definition
   4:19  error  'buttonClass' is missing in props validation
             react/prop-types
   4:37  error  Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`  arrow-body-style
   4:38  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   5:1   error  Expected indentation of 2 spaces but found 4
             indent
   5:13  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   6:9   error  Fragments should contain more than one child - otherwise, there‘s no need for a Fragment at all        react/jsx-no-useless-fragment
   6:9   error  Expected indentation of 6 space characters but found 8
             react/jsx-indent
   6:9   error  JSX not allowed in files with extension '.js'
             react/jsx-filename-extension
   6:11  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   7:13  error  Expected indentation of 10 space characters but found 12
             react/jsx-indent
   7:59  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   7:59  error  Expected indentation of 14 space characters but found 16
             react/jsx-indent
   8:25  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   9:22  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  10:12  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  11:1   error  Expected indentation of 2 spaces but found 4
             indent
  11:7   error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  12:3   error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  13:1   error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  14:23  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style

C:\personal-projects-folder\DO-SHIT-crud-app-ver1.0.1\src\components\Title.js
   1:27  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   2:73  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   3:37  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   4:1   error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   5:15  error  Function component is not a function declaration
             react/function-component-definition
   5:21  error  Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`  arrow-body-style
   5:22  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   6:1   error  Expected indentation of 2 spaces but found 4
             indent
   6:13  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   7:9   error  Expected indentation of 6 space characters but found 8
             react/jsx-indent
   7:9   error  JSX not allowed in files with extension '.js'
             react/jsx-filename-extension
   7:11  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   8:13  error  Expected indentation of 10 space characters but found 12
             react/jsx-indent
   8:37  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
   9:13  error  Expected indentation of 10 space characters but found 12
             react/jsx-indent
   9:61  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  10:12  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  11:1   error  Expected indentation of 2 spaces but found 4
             indent
  11:7   error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  12:3   error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  13:1   error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style
  14:22  error  Expected linebreaks to be 'LF' but found 'CRLF'
             linebreak-style

C:\personal-projects-folder\DO-SHIT-crud-app-ver1.0.1\src\index.js
   1:27  error  Expected linebreaks to be 'LF' but found 'CRLF'         linebreak-style
   2:34  error  Expected linebreaks to be 'LF' but found 'CRLF'         linebreak-style
   3:25  error  Expected linebreaks to be 'LF' but found 'CRLF'         linebreak-style
   4:1   error  Expected linebreaks to be 'LF' but found 'CRLF'         linebreak-style
   5:17  error  Expected linebreaks to be 'LF' but found 'CRLF'         linebreak-style
   6:5   error  Expected indentation of 2 space characters but found 4  react/jsx-indent
   6:5   error  JSX not allowed in files with extension '.js'           react/jsx-filename-extension
   6:23  error  Expected linebreaks to be 'LF' but found 'CRLF'         linebreak-style
   7:9   error  Expected indentation of 6 space characters but found 8  react/jsx-indent
   7:16  error  Expected linebreaks to be 'LF' but found 'CRLF'         linebreak-style
   8:25  error  Expected linebreaks to be 'LF' but found 'CRLF'         linebreak-style
   9:36  error  Expected linebreaks to be 'LF' but found 'CRLF'         linebreak-style
   9:36  error  Missing trailing comma                                  comma-dangle
  10:3   error  Expected linebreaks to be 'LF' but found 'CRLF'         linebreak-style

```

Well, what now?

To solve this we can try a few things. Installing a plugin that may help us fix prettier/eslint problems.<br><br> 1.<strong>SOLUTION 1:</strong> <br>Install `npm install --save-dev eslint-config-prettier`.
Then add this line in .eslintrc.json under extends: ` "extends": ["plugin:react/recommended", "airbnb", "prettier"],`

DID IT WORK: Well yes and no. We did get right of most errors but 12 of them persist.

```
[{
	"resource": "/C:/personal-projects-folder/DO-SHIT-crud-app-ver1.0.1/src/App.js",
	"owner": "eslint",
	"code": {
		"value": "react/function-component-definition",
		"target": {
			"$mid": 1,
			"external": "https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md",
			"path": "/yannickcr/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md",
			"scheme": "https",
			"authority": "github.com"
		}
	},
	"severity": 8,
	"message": "Function component is not a function declaration",
	"source": "eslint",
	"startLineNumber": 5,
	"startColumn": 13,
	"endLineNumber": 13,
	"endColumn": 2
},{
	"resource": "/C:/personal-projects-folder/DO-SHIT-crud-app-ver1.0.1/src/App.js",
	"owner": "eslint",
	"code": {
		"value": "arrow-body-style",
		"target": {
			"$mid": 1,
			"external": "https://eslint.org/docs/rules/arrow-body-style",
			"path": "/docs/rules/arrow-body-style",
			"scheme": "https",
			"authority": "eslint.org"
		}
	},
	"severity": 8,
	"message": "Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`.",
	"source": "eslint",
	"startLineNumber": 5,
	"startColumn": 19,
	"endLineNumber": 13,
	"endColumn": 2
},{
	"resource": "/C:/personal-projects-folder/DO-SHIT-crud-app-ver1.0.1/src/App.js",
	"owner": "eslint",
	"code": {
		"value": "react/jsx-filename-extension",
		"target": {
			"$mid": 1,
			"external": "https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md",
			"path": "/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md",
			"scheme": "https",
			"authority": "github.com"
		}
	},
	"severity": 8,
	"message": "JSX not allowed in files with extension '.js'",
	"source": "eslint",
	"startLineNumber": 7,
	"startColumn": 9,
	"endLineNumber": 11,
	"endColumn": 15
},{
	"resource": "/C:/personal-projects-folder/DO-SHIT-crud-app-ver1.0.1/src/App.js",
	"owner": "eslint",
	"code": {
		"value": "react/no-unescaped-entities",
		"target": {
			"$mid": 1,
			"external": "https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md",
			"path": "/yannickcr/eslint-plugin-react/tree/master/docs/rules/no-unescaped-entities.md",
			"scheme": "https",
			"authority": "github.com"
		}
	},
	"severity": 8,
	"message": "`'` can be escaped with `&apos;`, `&lsquo;`, `&#39;`, `&rsquo;`.",
	"source": "eslint",
	"startLineNumber": 9,
	"startColumn": 24,
	"endLineNumber": 9,
	"endColumn": 24
},{
	"resource": "/c:/personal-projects-folder/DO-SHIT-crud-app-ver1.0.1/src/components/Button.js",
	"owner": "eslint",
	"code": {
		"value": "react/function-component-definition",
		"target": {
			"$mid": 1,
			"external": "https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md",
			"path": "/yannickcr/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md",
			"scheme": "https",
			"authority": "github.com"
		}
	},
	"severity": 8,
	"message": "Function component is not a function declaration",
	"source": "eslint",
	"startLineNumber": 4,
	"startColumn": 16,
	"endLineNumber": 12,
	"endColumn": 2
},{
	"resource": "/c:/personal-projects-folder/DO-SHIT-crud-app-ver1.0.1/src/components/Button.js",
	"owner": "eslint",
	"code": {
		"value": "react/prop-types",
		"target": {
			"$mid": 1,
			"external": "https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/prop-types.md",
			"path": "/yannickcr/eslint-plugin-react/tree/master/docs/rules/prop-types.md",
			"scheme": "https",
			"authority": "github.com"
		}
	},
	"severity": 8,
	"message": "'buttonClass' is missing in props validation",
	"source": "eslint",
	"startLineNumber": 4,
	"startColumn": 19,
	"endLineNumber": 4,
	"endColumn": 30
},{
	"resource": "/c:/personal-projects-folder/DO-SHIT-crud-app-ver1.0.1/src/components/Button.js",
	"owner": "eslint",
	"code": {
		"value": "arrow-body-style",
		"target": {
			"$mid": 1,
			"external": "https://eslint.org/docs/rules/arrow-body-style",
			"path": "/docs/rules/arrow-body-style",
			"scheme": "https",
			"authority": "eslint.org"
		}
	},
	"severity": 8,
	"message": "Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`.",
	"source": "eslint",
	"startLineNumber": 4,
	"startColumn": 37,
	"endLineNumber": 12,
	"endColumn": 2
},{
	"resource": "/c:/personal-projects-folder/DO-SHIT-crud-app-ver1.0.1/src/components/Button.js",
	"owner": "eslint",
	"code": {
		"value": "react/jsx-no-useless-fragment",
		"target": {
			"$mid": 1,
			"external": "https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md",
			"path": "/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-no-useless-fragment.md",
			"scheme": "https",
			"authority": "github.com"
		}
	},
	"severity": 8,
	"message": "Fragments should contain more than one child - otherwise, there‘s no need for a Fragment at all.",
	"source": "eslint",
	"startLineNumber": 6,
	"startColumn": 9,
	"endLineNumber": 10,
	"endColumn": 12
},{
	"resource": "/c:/personal-projects-folder/DO-SHIT-crud-app-ver1.0.1/src/components/Button.js",
	"owner": "eslint",
	"code": {
		"value": "react/jsx-filename-extension",
		"target": {
			"$mid": 1,
			"external": "https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md",
			"path": "/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md",
			"scheme": "https",
			"authority": "github.com"
		}
	},
	"severity": 8,
	"message": "JSX not allowed in files with extension '.js'",
	"source": "eslint",
	"startLineNumber": 6,
	"startColumn": 9,
	"endLineNumber": 10,
	"endColumn": 12
},{
	"resource": "/C:/personal-projects-folder/DO-SHIT-crud-app-ver1.0.1/src/components/Title.js",
	"owner": "eslint",
	"code": {
		"value": "react/function-component-definition",
		"target": {
			"$mid": 1,
			"external": "https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md",
			"path": "/yannickcr/eslint-plugin-react/tree/master/docs/rules/function-component-definition.md",
			"scheme": "https",
			"authority": "github.com"
		}
	},
	"severity": 8,
	"message": "Function component is not a function declaration",
	"source": "eslint",
	"startLineNumber": 5,
	"startColumn": 15,
	"endLineNumber": 12,
	"endColumn": 2
},{
	"resource": "/C:/personal-projects-folder/DO-SHIT-crud-app-ver1.0.1/src/components/Title.js",
	"owner": "eslint",
	"code": {
		"value": "arrow-body-style",
		"target": {
			"$mid": 1,
			"external": "https://eslint.org/docs/rules/arrow-body-style",
			"path": "/docs/rules/arrow-body-style",
			"scheme": "https",
			"authority": "eslint.org"
		}
	},
	"severity": 8,
	"message": "Unexpected block statement surrounding arrow body; move the returned value immediately after the `=>`.",
	"source": "eslint",
	"startLineNumber": 5,
	"startColumn": 21,
	"endLineNumber": 12,
	"endColumn": 2
},{
	"resource": "/C:/personal-projects-folder/DO-SHIT-crud-app-ver1.0.1/src/components/Title.js",
	"owner": "eslint",
	"code": {
		"value": "react/jsx-filename-extension",
		"target": {
			"$mid": 1,
			"external": "https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md",
			"path": "/yannickcr/eslint-plugin-react/tree/master/docs/rules/jsx-filename-extension.md",
			"scheme": "https",
			"authority": "github.com"
		}
	},
	"severity": 8,
	"message": "JSX not allowed in files with extension '.js'",
	"source": "eslint",
	"startLineNumber": 7,
	"startColumn": 9,
	"endLineNumber": 10,
	"endColumn": 12
}]
```

So we can cleary see that most of this errors are connected to eslint rules. Once this is clear we can (in our terminal console - VSCode) check the documentation foe each of the errors. In some cases we only need to add a certain rule inside .eslintrc.json file and problems are solved.

<strong>DO NOTE:</strong><br>
Check the documentation for rules, read them and implement them. Experiment. Define the rules to be fit to your needs.

SOLVED!
