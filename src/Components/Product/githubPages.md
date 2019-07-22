# Deploying a React App to GitHub Pages

## Instructions

1. Open up your terminal and navigate to a directory of your choice and run 
```javascript
create-react-app `{PROJECT-NAME}`
```

2. At the top level, add a homepage property with the value of a string.
<br />
```javascript
"homepage": "http://{GITHUBNAME}.github.io/{PROJECT-NAME}"
```
<br />
&nbsp;&nbsp;&nbsp;{GITHUBNAME} being your github username and {PROJECT-NAME} being the name of the project your called your react app

3. In the existing scripts property, add a predeploy property and a deploy property, each having the values shown below:
<br />
```javascript
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```


 Navigate to [Github](www.github.com) and create a new empty repository
    - Name the repository `your_github_username`.github.io <br />
    **Be very careful to name it exactly your username as this is important to the setup**