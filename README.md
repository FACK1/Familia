# Familia
An app to track family's required groceries

### User Stories
- As a user I want to create an account to be able to login.
- As a user I want to access my existing account by logging in.
- As a user I need to create my new family to have a list.
- As a user I want to be able to join an existing family. 
- As a user I need to view my family-list.
- As a user I want to be able to add a new item to my list.

### File structure 
```
  |__ public 
  |      |__ css
  |            |__ style.css
  |
  |__ src 
  |   |__ database
  |   |        |_db_build.js
  |   |        |_db_connection.js
  |   |
  |   |__ controllers
  |   |        |__ homeController.js
  |   |
  |   |__ queries
  |   |
  |   |__ views
  |   |        |__ layout
  |   |        |     |__ main.hbs
  |   |        |
  |   |        |_home.hbs
  |   |__ app.js
  |   |__ server.js
  |   |__ tests
  |        |__ db_test.js
  |        |__ test.js
  |
  |__ .gitignore
  ```
### Variable naming
We're gonna be using camelCase across our whole app.

### Linting rules
We're gonna be using ES-Lint.

### How we're gonna be handling Async JS
Using promises. 
