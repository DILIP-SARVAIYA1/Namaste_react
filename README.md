# git command

- git init
- git config --global user.name
- git config --global user.email
- git add .
- git commit
- git push origin (url)

# npm

- npm init = it will create package.json
- npm install -D parcel ( -D is for dev dependency ther are 2 type of dependency dev dependency normal dependency)
- ^ = carat in package.json will minor update
- ~ = tilday wil upgrade to major update
- transitive dependency = in node module
- npm install = it wil install node module as per package.json
- package-lock.json = maintain exact version of node module

  npx parcel index.html (ignight our app)
  npm = use for installing package
  npx = use for executing package

  npm install react = for install react node package
  npm install react-dom = for install react-DOM node package

# importing react

- import react and add type="module" in our scripts file

# Parcel

- Dev buil
- Local server
- HMR - Hot Module Replacement
- File Waching Algorithm - Written in C++
- Caching - Faster Build
- Image Optimization
- Minification
- Bundling
- Compress
- Consitance Hashing
- Code Spliting
- Diffrencial Bundling - Support older browser
- Diagnostic
- Error handling
- HTTPs
- Tree Shaking - Remove unused code
- Diffrent Dev and Production Build
- npx parcel build index.html - for production build
