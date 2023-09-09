**React mentoring task #1**

Create folders and files for each component. Follow the architecture below:
src
  |-- App.jsx/.tsx
  |-- App.css
  |
  |-- components
  |   |-- Header
  |   |    |__ Header.jsx/.tsx
  |   |    |
  |   |    |__ components
  |   |        |__ Logo
  |   |            |__ Logo.jsx/.tsx
  |   |
  |   |-- CourseInfo
  |   |   |__ CourseInfo.jsx/.tsx
  |   |
  |   |-- Courses
  |   |   |-- Courses.jsx/.tsx
  |   |   |
  |   |   |__ components
  |   |      |-- SearchBar (extra task)
  |   |      |  |__ SearchBar.jsx/.tsx
  |   |      |
  |   |      |__ CourseCard
  |   |         |__ CourseCard.jsx/.tsx
  |   |
  |   |__ // any components you want to add 
  |
  |-- common
  |   |--Button
  |   |  |__ Button.jsx/.tsx
  |   |  
  |   |__Input
  |   |   |__ Input.jsx/.tsx   
  |   |   |
  |   |__ //any common components you want to add
  |          
  |-- helpers
  |    |
  |    |--getCourseDuration.js/.ts // a helper to format course duration   
  |    |
  |    |--formatCreationDate.js/.ts // to format date that we will receive from server  
  |    |
  |    |__ // any helpers you want to add
  |
  |-- constants.js/.ts // file with mocked data
  |
  |_ ...

**Criteria (30 points max)**

Common
[1 point] - The architecture of the application should be the same as presented above.
[1 point] - Components are presented as function components (not class components).
[1 point] - Use .jsx extensions for files with jsx syntax.
[1 point] - All inputs and buttons should be reusable components.
[2 points] - eslint, prettier and pre-commit hook work correctly.
Header component
[3 points] - Should display Header component with:
Logo (any appropriate image)
Logout button (without functionality)
CourseCard component
[5 points] - Should display CourseCard component with:

course title;
course description;
authors list;
course duration;
creation date;
Show course button.
[2 point] Show CourseInfo component with current course information by clicking Show course button.

EmptyCourseList component
[2 points] - Show EmptyCourseList component when no courses.

[2 point] - Component Should contain:

title 'Your List Is Empty';
subtitle 'Please use "Add New Course" button to add your first course'.
Add New Course button (without functionality for current task).
Courses component
[2 points] - Show list of courses (use mocked course list for this task).

[1 point] - Show Add new course button (without functionality for current task).

CourseInfo Component
[5 points] - Create component that contains:

course title
course description
course ID
course duration
creation date
course authors
Back to courses button
[2 point] - By clicking Back to course button CourseInfo component should be replaced by Courses component.

Extra Task
Searching
Implement searching functionality by title. Reset search result when searchbar is empty.
Implement searching functionality by id. Reset search result when searchbar is empty.

**Scripts used in the task**

Project cration:

npx create-react-app courses-app --template typescript

Lint:

npm i eslint --save-dev
npm init @eslint/config

replaced eslintrc.json with:

{
  "root": true,
  "env": {
    "browser": true,
    "es2021": true
  },
  "parser": "@typescript-eslint/parser",
  "plugins": [
    "@typescript-eslint",
    "prettier"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "prettier/prettier": [
      "error", {
        "printWidth": 80,
        "trailingComma": "es5",
        "semi": true,
        "jsxSingleQuote": true,
        "singleQuote": true,
        "useTabs": true,
        "endOfLine": "auto",
        "max-len": ["error", { "code": 80 }],
        "importOrder": [
          "^react(.*)$",
          "<THIRD_PARTY_MODULES>",
          "./types",
          "^[.](?!.*.(scss|css)$).*$",
          "(.*).(scss|css)$"
        ],
        "importOrderSeparation": true,
        "importOrderSortSpecifiers": true
      }
    ],

    "@typescript-eslint/no-namespace": "off",
    "no-duplicate-imports": "error"
  }
}

added tsconfig.json with:

{
  "compilerOptions": {
    "esModuleInterop": true,
    "jsx": "react",
    "lib": [
      "ES2021",
      "dom"
    ],
    "baseUrl": ".",
    "include":["."]
  },
}

npm i -D eslint-config-prettier eslint-plugin-prettier prettier @trivago/prettier-plugin-sort-imports --legacy-peer-deps

added ESLint in VSCode and added:
"editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    "eslint.codeActionsOnSave.mode": "problems",

to settings.json

added
"eslint": "eslint --ext .ts --ext .tsx src",
"eslint:fix": "eslint --fix --ext .ts --ext .tsx src"
to scripts in package.json

npm install husky --save-dev --legacy-peer-deps
npx husky install

added 
"test:nowatch": "react-scripts test --watchAll=false",
"prepare": "husky install",
"prepublish": "npm run eslint:fix"
to package.json

npx husky add .husky/pre-commit "npm run prepublish"

npm run eslint:fix
npm run eslint
npm run start

Prettier extension in VSCode was configured as in eslintrc.json.

**Task 2**

Project structure requirements
Create new folders and jsx(tsx) files for each component:
src
|-- components
|   |-- Login
|   |    |__ Login.jsx/.tsx
|   |
|   |-- Registration
|   |   |__ Registration.jsx/.tsx
|   |
|   |-- CreateCourse
|   |   |__ CreateCourse.jsx/.tsx
|   |   |
|   |   |__ components
|   |      |-- AuthorItem
|   |         |__ AuthorItem.jsx/.tsx
|   |
|   |__ ...
|__ ...

For sending requests to API you should use fetch or axios.
APIs from SWAGGER for Module 2:
/login [POST]
/register [POST]

**Criteria (35 points max)**

Common

[3 points] - Use react-router-dom hooks: useParams, useNavigate etc.

[5 points] - Add data type checking for props to all components using PropTypes or TypeScript.
If you already use TypeScript, please ignore this requirement.

Registration Component

[2 points] - Create component Registration with.

[1 point] - Registration form should appear after clicking on the Registration link on the Login form.

[1 point] - Registration form should appear by route /registration.
[1 points] - Registration should have an auth functionality.
User enters email, name and password, presses the Registration button then application sends request to API.
See /register endpoint in API Swagger.
After successful registration application navigates you to Login page.
[1 point] - Validation required for all fields.

Login Component

[2 points] - Create component Login.
[1 point] - Login should be shown after first open application by route /login.
[1 point] - Login form should appear after clicking on the link Login on the Registration form.
[1 points] - Login should have an auth functionality.
When you entered an email and password application sends request to API.
See /login endpoint in API Swagger.
After successful login application navigates to Courses page.
[2 points] - Save token from API after login.
Add functionality that check if token in localStorage. If token is in the localStorage app automatically navigates to /courses route.
[1 point] - Validation required for all fields.

CourseInfo Component

[2 points] - Show information about the course. Use route /courses/:courseId (courseId - id of the current course).

[2 points] - To find out which course info you should render on CourseInfo page,
you should use id of the course from path-parameters.

[2 points] - Back to course button should navigate to the route /courses.

Courses Component

[2 points] - Component Courses should be opened by route /courses.

[2 points] - Show Courses component by default if there is token in the localStorage.

[2 points] - Navigate to the route courses/add by clicking Add New Course button.

CreateCourse Component

[1 point] - Possibility to add a title.
[1 point] - Possibility to add a description.
[1 point] - Possibility to add a duration.
[2 points] - Show duration time in a format «hh:mm».
Example: 122 min should be showed as 02:02 hours.
[1 point] - Add logic for creating a new author.
[1 point] - Add logic for adding an author to Course authors.
[1 point] - Add logic for deleting an author from Course authors.
[3 points] - Add logic for saving course (new course should be presented in the courses list).
[1 points] - Add validation for required fields.
[2 point] - Open CreateCourse component by route /courses/add.

EmptyCourseList Component

[4 point] - Navigate to /courses/add FOR ADMIN USER OR show spacial message for REGULAR USER by clicking Add New Course button.

Header Component

[2 point] - Add logout functionality.
When user clicks Logout button in the Header component, token should be removed from localStorage and user is navigated to Login page.

[2 point] - Get user's name from the Login response and display it in the header.

[2 point] - Remove user's name for the Login and Registration pages.

[2 point] - Remove Logout button for the Login and Registration pages.

**Scripts used in the task**

Cloned the backend repo:
https://git.****.com/<Some_Person>/courses-app-backend

backend:
npm install
npm run start

Created a branch for task2 from main of courses-app

npm install react-router-dom --save --legacy-peer-deps

npm run start


**Task 3**

Criteria (35 points max)

APIs
[2 points] - All functionality with back-end should be in services.js.
(Create api service for each endpoint that you use and call methods or functions from service into your components)
[2 points] - Get courses from back-end. See API /courses/all in the SWAGGER. Save courses list to the store.
[2 points] - Get authors from back-end. See API /authors/all in the SWAGGER. Save authors list to the store.

Store
[3 points] - Store should have User reducer.
User reducer manage data with user's info and should have next model:
 const userInitialState = {
     isAuth: boolean, // default value - false. After success login - true
     name: string, // default value - empty string. After success login - name of user
     email: string, // default value - empty string. After success login - email of user
     token: string, // default value - empty string or token value from localStorage. 
     // After success login - value from API /login response. See Swagger.
 };

User reducer has logic:
After success login isAuth property has value true, save token, email and name.
After logout isAuth property has value false, token, email and name have value as empty string.
[3 point] - Store should have Courses reducer.
Courses reducer manage data with courses list and should have next model:
   const coursesInitialState = [] // default value - empty array. After success getting courses from API - array of courses.

Courses reducer has logic:
Save new course.
Delete course.
Update course.
Get courses. Save courses to the store after getting them from API. See Swagger /courses/all.
[3 point] - Store should have Authors reducer.
Authors reducer manage data with authors list and should have the next model:
  const authorsInitialState = [] // default value - empty array. After success getting authors from API - array of authors.

Authors reducer has logic:
Save a new author.
Get authors. Save authors to store after getting them from API. See Swagger /authors/all .
Login Component
[2 point] - Save user's info to the store after success login.
Header Component
[1 point] - Get user's name from the store.

[2 point] - Dispatch REMOVE_USER action by LOGOUT button click.

Courses Component
[3 point] - Get courses from the store and render them into Courses component.

[3 points] - If token is present in the localStorage the user should be immediately redirected to the Courses page when opening the application.

CreateCourse Component
[2 points] - After saving course in CreateCourse component course should be added to store.

[2 point] - Get authors from the store.

[1 point] - Save new authors to the store.

CourseCard Component
[2 point] - Add a new button "Delete course" into CourseCard.

[1 point] - Add a new button "Update course" into CourseCard (CourseCard in COMPONENTS).

[1 point] - After clicking on the Delete course button a selected course should be deleted from the store.

**Scripts used in the task**

Installation of redux and react-redux:

npm i @reduxjs/toolkit react-redux --save --legacy-peer-deps

axios:
npm install axios --saveDev --legacy-peer-deps

Chrome devtool link: 
https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

npm install --save-dev redux-devtools-extension --legacy-peer-deps

** Task4 **

Create a new folder and jsx / tsx file for new components:
src / components / PrivateRoute / PrivateRoute.jsx/.tsx
Rename CreateCourse folder and file:
src / components / CreateCourse / CreateCourse.jsx/.tsx => CourseForm / CourseForm.jsx/.tsx
Create new js/ts files for thunk functions:
  src
   |-- store
   |   |
   |   |-- user
   |   |   |-- thunk.js/.ts //new file
   |   |   |
   |   |   |__ //old files
   |   |
   |   |-- courses
   |   |   |-- thunk.js/.ts //new file
   |   |   |
   |   |   |__ // old files
   |   |
   |   |__ authors
   |       |-- thunk.js/.ts //new file
   |       |
   |       |__ //old files
   |   
   |__ ...

Admin credentials. These credentials provide role ADMIN.
email: admin@email.com
password: admin123

APIs from SWAGGER for Module 4:
/courses/add [POST] (use ADMIN credentials)
/courses/{id} [PUT] (use ADMIN credentials)
/authors/add [POST] (use ADMIN credentials)
/courses/{id} [DELETE] (use ADMIN credentials)
/logout [DELETE]
/users/me [GET]

For fetching requests you should add Authorization header with user's token
Authorization: token

Criteria (30 points max)
APIs
[8 points] - Use Thunk for asynchronous actions. Rewrite old GET requests /courses/all and /authors/all.
[2 points] - Create request to get current user if localStorage contains token. (See /users/me [GET] in the SWAGGER).
PrivateRoute Component
[2 points] - Create new component PrivateRoute.
Use PrivateRoute for routes:
/courses/add;
/courses/update/:courseId.
Header
[2 points] - Modify Logout functionality. Call endpoint for loggout on a back-end. (See /logout in the SWAGGER)
CourseCard Component
[1 point] - Show buttons Delete course and Update course when role - ADMIN.
[2 points] - Sent delete request to the back-end. (See /courses/{id} in the SWAGGER).
[1 point] - Delete the course from the store after success API response.
(Course card with ADMIN role in COMPONENTS.pdf).
CourseForm Component (create mode)
[1 point] - Show /courses/add route only for user with ADMIN role.
[2 points] - Send new course to the back-end. (See /courses/add in the SWAGGER).
[2 points] - Send new author to the back-end. (See /authors/add in the SWAGGER).
[1 point] - Save new course to the store after success response.
(Add new course in COMPONENTS).
CourseForm Component (update mode)
[1 point] - Update Course form should be opened by route /courses/update/:courseId.
[1 point] - Show route only for user with ADMIN role.
[1 point] - Show information about course in fields with the same name.
[2 points] - Send updated course to the back-end. (See [PUT] /courses/{id} in the SWAGGER).
[1 point] - Save updated course to the store after success response.
(Update course in COMPONENTS).
