# git command

- git init
- git config --global user.name
- git config --global user.email
- git add .
- git commit
- git push origin (url)

# npm

- npm init = it will create package.json
- npm install -D parcel ( -D is for dev dependency there are 2 type of dependency dev dependency normal dependency)
- ^ = carat in package.json will minor update
- ~ = tilde wil upgrade to major update
- transitive dependency = in node module
- npm install = it wil install node module as per package.json
- package-lock.json = maintain exact version of node module

  npx parcel index.html (igniting our app)
  npm = use for installing package
  npx = use for executing package

  npm install react = for install react node package
  npm install react-dom = for install react-DOM node package

# importing react

- import react and add type="module" in our scripts file

# Parcel

- Dev build
- Local server
- HMR - Hot Module Replacement
- File Watching Algorithm - Written in C++
- Caching - Faster Build
- Image Optimization
- Minification
- Bundling
- Compress
- Constance Hashing
- Code Splitting
- Differential Bundling - Support older browser
- Diagnostic
- Error handling
- HTTPs
- Tree Shaking - Remove unused code
- Different Dev and Production Build
- npx parcel build index.html - for production build

# browserslist

- "last 2 versions" checkout this website = https://browserslist.dev/?q=bGFzdCA2IHZlcnNpb25z

# Laying the foundation

- npm start - behind the sins npm run start/ not work for npm build(you need to modify script in package.json (industry Standard))
- React.createElement() => Object => HTMLElement(render)
- it will replaced by element

# JSX

- JSX is html like syntax not HTML
- JSX (transpile code before reaches the JS engine) => PARCEL => Babel
- JSX => goes to babel and convert to React element - (Object) => render(Object => converted to HTML element and put on to DOM)

# React Components

- Class based components - OLD
- Functional components - NEW

# Functional components

- First letters capital of components name
- functional components are normal JS function which return some peace of JSX
- If you have to multiple line you have to wrap it in to ()
- Component inside components is called component composition
