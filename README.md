# Reading ducumentation id a super-power of a developer

# Init
- Create-react-app
- Configure tailwind
- Header
- Routing
- Login form
- Sign up form
- Form validation
- New hook - useRef
- Firebase setup
- Deploy app to production
- Create Signup user account
- Implement Signin/Signup user
- Create redux store with user slice
- Implement Sign out
- Update Profile
- Fetch from TBDB API

# Features
- Login/Signup page
    - signin/signup form
    - redirect to the browse page
- Browse page (only after authentication)
    - Header
    - Main Movie
        - Trailor in background
        - Title and description
        - Movie suggestions
            - MoviesList * n
- NetflixGPT
    - Search bar
    - Movie suggestions


# Hooks
- useRef - lets your reference a value  that's not needed for redering

# Firebase
- Go to firebase
- Create project
- It will give your cmds to install firebase packages
- Install firebase package
- Create firebase.js to store the config for firebase
- Go to console>Authentication>Enable the required auth methods
- Install firebase-tools, npm install -g firebase-tools
- In app, firebase login, and login
- Then do, firebase init
    - Hosting: Configure files for Firebase  hosting and set up github actions..
    - existing project
    - select the newly created project
    - public directory -> build
    - configure a single-app (rewrite all urls to /index.html)? No
    - automatic builds? No
    - configured
- npm run build - > build folder created
- firebase deploy