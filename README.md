This app is also support RWD.

app.js/
├── components/                       
│   ├── AddDrinkPage/                 # Add content
│   ├── DrinkDashboardPage/           # Mainpage
│   ├── DrinkForm/                    # Reusable from for Add/Edit
│   ├── DrinkList/                    # Render all the item
|   ├── DrinkListitem/                # Contained in the Drinklist
|   ├── EditDrinkPage/                # Edit content
|   ├── Header/                       # Render Header
|   ├── History/                      # Create history for AppRouter
|   └── NotFoundPage/                 # Setup 404!
|
├── actions/                          # Action generators
├── reducers/                         # Contain every reducers
├── routers/                          # Handle all the routes
├── store/                            # Create Redux Store
├── styles/                           # Will convert to css by webpack
│   ├── base/
│   ├── components/
│   └── styles.scss/
├── balbelrc                          # Setup some ES6 features
├── gitignore                         # Will not upload to github
├── jest.congig.json                  # Setup jest
├── package.json                      # Contain all the dependency
└── webpack.config                    # Setup Sass-loader/Babel/polyfill