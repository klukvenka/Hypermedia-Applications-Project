# PLUGINS

## Client-side

**1. MMCC:** Plugin for chatbot: https://gitlab.com/i3lab/mmcc/frontend/mmcc-vue.git.


**2. Axios:** Defined in `http-common.js`. API served in /api base URL. Makes use of services defined in ../services/ folder. Axios was installed with the command `npm install --save axios`
```
AreaDataService:
    getAll - /api/areas/all
    getByName(name) - /api/areas/name?name=${name}
MemberDataService:
    getAll - /api/members/all
    getByName(name) - /api/members/name?name=${name}
    getByProduct(name) - /api/members/product?product=${name}
    getByArea(name) - /api/members/area?area=${name}
ProductDataService:
    getAll - /api/products/all
    getByName(name) - /api/products/name?name=${name}
    getByArea(name) - /api/products/area?area=${name}
    getByManager(name) - /api/products/manager?manager=${name}
    getByReference(name) - /api/products/reference?reference=${name}
```

## Server-side

**1. Router**: For setting up the server, `express` is installed with the command `npm install --save express cors`. **cors** is used to provide cross-origin resource sharing capability to allow access from only allowed external websites. `vue-router` is also installed to enable routing for the server using  the command `npm install --save vue-router`.

The routes for the server are configured using files in server/controllers and server/routes folders. There are controllers and routes for each table, namely areas, members and products. The following routes are configured:

```
Areas:
    POST /areas/ - Create area (calls create function in controllers)
    POST /areas/initdb - Initialize DB (calls initdata function in controllers)
    GET /areas/all - Queries all values in areas table (calls findAll in controllers)
    GET /areas/name - Queries all values in areas table based on name parameter (calls findByName function in controllers and requires parameter name)
Products:
    POST /products/ - Create product (calls create function in controllers)
    POST /products/initdb - Initialize DB (calls initdata function in controllers)
    GET /products/all - Queries all values in products table (calls findAll in controllers)
    GET /products/name - Queries all values in products table based on name parameter (calls findByName function in controllers and requires parameter name)
    GET /products/area - Queries all values in products table based on area parameter (calls findByArea function in controllers and requires parameter area)
    GET /products/manager - Queries all values in products table based on manager parameter (calls findByManager function in controllers and requires parameter manager)
    GET /products/reference - Queries all values in products table based on reference parameter (calls findByReference function in controllers and requires parameter reference)
Members:
    POST /members/ - Create member (calls create function in controllers)
    POST /members/initdb - Initialize DB (calls initdata function in controllers)
    GET /members/all - Queries all values in members table (calls findAll in controllers)
    GET /members/name - Queries all values in members table based on name parameter (calls findByName function in controllers and requires parameter name)
    GET /members/area - Queries all values in members table based on area parameter (calls findByArea function in controllers and requires parameter area)
```


**2. Sequelize:** Sequelize is the plugin used to interact with the DB. It provides ability to create tables with models, insert and search from DB by calling required functions. 

Reference: https://sequelize.org/v3/docs/getting-started/  

The DB model was created with the sequelize-cli installed with command `npm install --save sequelize-cli sequelize`. It also requires installation of components for postgres: `npm install --save pg pg-hstore pg-native`

Sequelize makes use of DB connection strings configured in server/config/config.js file.

The DB model was created from cli with command `sequelize-cli model:generate --name <table_name> --attributes <field_name1>:<field_type>,<field_name2>:<field_type>,...`. This will create files in server/models and server/migrations folder.

Then it needs to be migrated with command `sequelize-cli db:migrate`. This will create the table with the provided attributes.

For interacting with the DB, only the following functions are used for this implementation:
```
model.create()
model.findAll()
```

