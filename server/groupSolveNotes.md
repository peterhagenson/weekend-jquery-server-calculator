# TODO FOR PROJECT

- [] project setup

  - [] project
    - npm init (npm init --yes) -- this creates a package.json, which allows us to install express
    - install express
    - .gitignore
    - folders...
  - [] client side ui
    - jquery
    - client.js
    - index.html
    - style.css
  - [] server setup
    - server.js
  - [] start script in package.json

- [] static file server

  - [] I should be able to see index.html when I visit localhost:5000
    - [] require express
    - [] urlencoded setup (req.body)
    - [] static setup (server/public)
    - [] set up port 5000
    - [] listen

- [] calculate
  - do math
    - [] client side HTML
      - [] two inputs
      - [] operators
      - [] = button
      - [] c button
      - [] history zone
      - [] answer zone
    - [] client side JS
      - [] operator click logic
        - "when I click on an operator, I should be able to see the correct one I clicked"
      - [] submit
        - "when I click on =, it should..
          - [] POST to /calculate
            - save on server
            - send back OK/CREATED
      - [] clear
        - "when I click on clear it should empty input fields"
      - [] history
        - "when I load the page, I should see all the previous calculations"
          - [] GET/calculations
          - [] append to DOM
      - [] answer - append to DOM
        -[] server side - [] store calculations - [] POST /calculation route - trigger saving, mathing, doing - [] do math
        receive input, calculate the result - [] send history, answer...
        [] GET /calculation route
        setup 1) npm init --yes 2) npm install express 3) node_modules in gitignore
