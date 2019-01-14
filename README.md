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

 public 
      |__ css
           |__ style.css

- src 
      |__ database
                |__ db_build.js
                |__db_connection.js
                |__db_bulid.sql
      |__ queries
      |__ controllers
                |__ homeController.js
                |__ 
      |__ views
              |__ layout
                     |__main.hbs
              |__ home.hbs
      |__ app.js
      |__ server.js
      |__ test
           |__ db_test.js
           |__ test.js
- .gitignore
            
### Variable naming
We're gonna be using camelCase across our whole app.

### Linting rules
We're gonna be using ES-Lint.

### How we're gonna be handling Async JS
Using promises. 
