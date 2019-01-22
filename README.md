# [Familia]()

### What is Familia?

Familia is a shopping list, sharing and tracking app that aims to connect your household's needs with all of your family members. With Familia you'll never have to worry about forgetting what your fridge lacks or your mom needs.

### User Stories: what can you do on our app?

- As a user you want to create an account to be able to login.
- As a user you want to access your existing account by logging in.
- As a user you need to create your new family to have a list.
- As a user you want to be able to join an existing family.
- As a user you need to view your family-list.
- As a user you want to be able to add a new item to your list.

### How to run our app on your local machine?

**Note: this App uses MongoDB as its database.\*
**Follow these instruction in order:\*\*
1- Open your terminal.

2- Clone this repository.
Using HTTP: `git clone https://github.com/FACK1/Familia.git`
Using SSH: `git clone git@github.com:FACK1/Familia.git`

3- Go to [mLab](https://mlab.com/), and make an account. Verify your email, and login. \*_Note: mLab is a hosting service for MongoDB databases._

4- Press on `create new +`, select the free hosting plan `Sanbox`, press `continue`, then select your preffered region.

5- Name your database something unique, and press `submit order`.

6- Press on your database, and under the tab `users`, press `add database user`.

7- Select a username, a password, and **make sure to save them somewhere, we're gonna need them for step 11**. Note: don't tick the `read only` option.

8- Open the repo in your text editor, and your terminal too.

9- Install dependencies and dev dependencies; first by inititalizing a package.json by typing in the terminal `npm init` and then `npm i`.

10- Make a new file in the root directory `Familia`, and call it `config.env`.

11- Copy paste the following in your config.env file:

- `DATABASE_URL = <your database url here> , and replace <dubuser>, <dbpasswords>, <dbname> with your own, accordingly. \*_Note: you can find your database url when you select your created one on mLab._
- Copy paste the following: `SECRET = <any word you want>`.
- Copy paste the following: `PORT = <any port you want>`.

12- Run the following in your terminal `npm run dev`. \*_Note: You should get a msg in your terminal that the server is running on `localhost:<PORT>` and mongoose connected successfully._

13- Open the app in the browser by typing in the URL tab: `localhost:<PORT>`, and enter.

14- Try our app and give us feedback! :D

### App's Flow

Our user's journey starts at `/`, where it will be checked whether you are authenticated or not, and redirected accordingly. You can make an account, login, create a family or join an already existing one. Each family has one list where multiple memebers have access to it. A user can only be part of one family at a time.

# Technical stuff

### File structure

```
  |__ public
  |      |__ css
  |      |      |__ style.css
  |      |__ js
  |            |__ join.js
  |            |__ register.js
  |__ src      |__ login.js
  |   |
  |   |
  |   |__ dbConfig
  |   |        |_mongodb.config.js
  |   |
  |   |__ models
  |   |        |__ Family.model.js
  |   |        |__ User.model.js
  |   |        |__ Item.model.js
  |   |
  |   |__ controllers
  |   |        |__ authController.js
  |   |        |__ familyController.js
  |   |        |__ itemController.js
  |   |
  |   |__ middlewares
  |   |          |__ checkAuth.js
  |   |          |__ checkFamily.js
  |   |          |__ index.js
  |   |
  |   |__ views
  |   |        |__ layout
  |   |        |     |__ main.hbs
  |   |        |
  |   |        |_home.hbs
  |   |        |_auth.hbs
  |   |        |_joinFamily.hbs
  |   |
  |   |__ app.js
  |   |__ server.js
  |   |__ router.js
  |   |
  |   |__ tests
  |        |__ dbTests.js
  |
  |
  |__ .eslintrc.json
  |__ .travis.yml
  |__ package.json
  |__ package-lock.json
  |__ .gitignore
```

### Variable naming

We're gonna be using camelCase across our whole app.

### Linting rules

We're gonna be using Airbnb style guide and standard.

### Async JS

All Async operations are handled using promises.

### Database

This app is using MongoDB as its database.

##### Database Schema:

###### Collections:

User Schema: each document has an `id`, `name`, `username`, `password` and `family_id`.
Family Schema: each document has an `id`, `name` and `key`.
Items: each document has an `id`, `title`, `status`, `user_id`, `family_id`.

### Our Stack

Environement: Node.js.
Routing: Express.js.
Styling: Tachyons.
Server-side rendering: Express-handlebars.
Database: MongoDB.
