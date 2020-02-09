# Node / Create-React-App mashup
Read the instructions thoroughly before starting your project.

## Setup
* `git clone` this repo
* `cd` into it.
* `yarn install`
* `cd client && yarn install`

## To run your Express.JS and React developer environment locally
Make sure you are in your project's directory, and then:
```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

## To deploy

* `heroku create your-app-name`
* `git push heroku master`

## Project Requirements

* [ ] Your project should pull data from an API. There are lots of options [here](https://github.com/toddmotto/public-apis) and [here](https://market.mashape.com/).
  * Avoid any APIs that require OAuth (we'll talk about that later).
  * Many APIs require an API key. Just sign up for an account and attach the key to your URL. Please make sure not to share your secret keys in a public GitHub repo.
  * Some APIs don't allow _Cross-Origin Resource Sharing_ (CORS), meaning you can't make AJAX requests to them. You can get around this by proxying your requests with your Express server.
* [ ] Your project should render a list of data from the API.
  * [ ] Your project should allow the list to be filtered or searched.
* [ ] Your project should show details about a single resource when clicked.
* [ ] Your project should look (really) pretty!
* [ ] You and your team should employ good Git and GitHub collaboration practices.
* [ ] Your project must have a README.md file explaining what the project does and why it matters. [Here's an example](https://github.com/codeforamerica/howto/blob/master/Good-READMEs.md) of a great README.md template.

Rubric Criterion | Points
--- | ---
Ability to search or filter, use of React Router | 10
Code formatting and quality: indentation, variable and file naming conventions, etc. | 10
No unused variables or imports, compiler errors | 10
Use of class components when state is needed and functional components when state is not | 10
Proper use of environment variables for API keys or CORS proxy if needed | 10
Overall look and feel of application, well organized CSS files | 10
Well written documentation | 10
Use of GitHub issues, branches and commit messages | 10
Look and feel of demo slide deck | 10
Ability to explain code decisions in demo | 10
Ability to defend code decisions in response to panel questions | 10

## Bonus

* Fanciful animations and transitions
* Incorporate multiple APIs into a single app

## Demo Requirements

Create a slide deck for the technical panel. (Here's an [example](https://docs.google.com/presentation/d/15rfR-S5qAlzx4rHwBp_kJOlu0nQ7hcZOruTwbH6zRvQ/edit?usp=sharing).)

* It should focus on *how* you built the app.
* Include code snippets with brief explanations. Or, specific references to the location of the code in your GitHub repo.
* It should emphasize your technical setbacks and solutions.
* Get straight to the point.
* Be prepared to answer questions. 
