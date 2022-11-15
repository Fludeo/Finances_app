# Finances_app (Frontend)
TypeScript version 
# How to run the project
- Clone repository or download zip. 
- Install the project with <code>npm install</code>
- Create .env and .env.test (in root folder) files with variables listed in .env.dist
- Run the app with <code>npm run start</code> or <code>npm run start:test</code> for e2e testing

# Introduction
This is the frontend repository of https://fludeo.github.io/Finances_app/ webApp. The app is a basic Crud for tracking personal finance records. Signup or Login with: email: test@email.com, password: qwerty1234 to see an account with some data.

# Details
This app (server) is built with TypeScript and React.js
The app is tested with cypress, react-testing-library and jest. Use <code>npx run test</code> to run all tests. Run <code>npm run cypress:open</code>to open cypress and Use <code>npm run start:test</code> (in another terminal) to run the app in test mode for e2e testing (same script in backend). By default <code>npm run start:test</code> makes http://localhost:8080 your url for api calls, if you want to use another port, change the script and make sure is the same port number that backend is using.

# C4 diagram

![Architecture-Page-1](https://user-images.githubusercontent.com/55941066/200713133-f7c55fd7-c670-443c-b785-8f8e33190bf1.jpg)
![Architecture-Page-2](https://user-images.githubusercontent.com/55941066/200713146-28fc3d31-f2ca-4351-9040-363989ab6f52.jpg)
![Architecture-Page-3](https://user-images.githubusercontent.com/55941066/200713151-d4365ffa-343b-420f-86cf-a5bc820ff188.jpg)

