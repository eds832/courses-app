**React mentoring task**

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