# Server and DB Technologies

## Server
This website uses `express`, `axios` `vue-router` to host the server and access using API routes. The detailed explanation is given in Plugins section of this document.

## DB Schema
The backend database used in this website is PostgreSQL setup using Heroku free Postgres. We are using the plugin `sequelize` to interact with the DB (configuration and explanation provided in Plugins section of this document). We are making use of following 3 tables for our website:

**1. Areas:**
<table>
<tr>
    <td><b>Field Name</b></td>
    <td><b>Field Type</b></td>
    <td><b>Field Description</b></td>
</tr>
<tr>
    <td>id</td>
    <td>INTEGER</td>
    <td>Primary key</td>
</tr>
<tr>
    <td>name</td>
    <td>VARCHAR</td>
    <td>Contains name of the area</td>
</tr>
<tr>
    <td>short_description</td>
    <td>VARCHAR</td>
    <td>Contains a short description of the area</td>
</tr>
<tr>
    <td>description</td>
    <td>VARCHAR</td>
    <td>Contains a full description of the area</td>
</tr>
<tr>
    <td>image</td>
    <td>VARCHAR</td>
    <td>Contains the image path of the area</td>
</tr>
<tr>
    <td>createdAt</td>
    <td>DATETIME</td>
    <td>Contains the created date of record. Automatically added by Sequelize</td>
</tr>
<tr>
    <td>updatedAt</td>
    <td>DATETIME</td>
    <td>Contains the updated date of record. Automatically added by Sequelize</td>
</tr>
</table>

**2. Members:**
<table>
<tr>
    <td><b>Field Name</b></td>
    <td><b>Field Type</b></td>
    <td><b>Field Description</b></td>
</tr>
<tr>
    <td>id</td>
    <td>INTEGER</td>
    <td>Primary key</td>
</tr>
<tr>
    <td>name</td>
    <td>VARCHAR</td>
    <td>Contains name of the member</td>
</tr>
<tr>
    <td>short_description</td>
    <td>VARCHAR</td>
    <td>Contains a short description of the member</td>
</tr>
<tr>
    <td>description</td>
    <td>VARCHAR</td>
    <td>Contains a full description of the member</td>
</tr>
<tr>
    <td>image</td>
    <td>VARCHAR</td>
    <td>Contains the image path of the member</td>
</tr>
<tr>
    <td>designation</td>
    <td>VARCHAR</td>
    <td>Contains the designation of the member</td>
</tr>
<tr>
    <td>area</td>
    <td>VARCHAR</td>
    <td>Contains all the areas of the member separated by Comma</td>
</tr>
<tr>
    <td>createdAt</td>
    <td>DATETIME</td>
    <td>Contains the created date of record. Automatically added by Sequelize</td>
</tr>
<tr>
    <td>updatedAt</td>
    <td>DATETIME</td>
    <td>Contains the updated date of record. Automatically added by Sequelize</td>
</tr>
</table>

**3. Products:**
<table>
<tr>
    <td><b>Field Name</b></td>
    <td><b>Field Type</b></td>
    <td><b>Field Description</b></td>
</tr>
<tr>
    <td>id</td>
    <td>INTEGER</td>
    <td>Primary key</td>
</tr>
<tr>
    <td>name</td>
    <td>VARCHAR</td>
    <td>Contains name of the product</td>
</tr>
<tr>
    <td>short_description</td>
    <td>VARCHAR</td>
    <td>Contains a short description of the product</td>
</tr>
<tr>
    <td>description</td>
    <td>VARCHAR</td>
    <td>Contains a full description of the product</td>
</tr>
<tr>
    <td>image</td>
    <td>VARCHAR</td>
    <td>Contains the image path of the product</td>
</tr>
<tr>
    <td>manager</td>
    <td>VARCHAR</td>
    <td>Contains the manager of the product</td>
</tr>
<tr>
    <td>reference</td>
    <td>VARCHAR</td>
    <td>Contains the reference of the product</td>
</tr>
<tr>
    <td>area</td>
    <td>VARCHAR</td>
    <td>Contains the area of the product</td>
</tr>
<tr>
    <td>createdAt</td>
    <td>DATETIME</td>
    <td>Contains the created date of record. Automatically added by Sequelize</td>
</tr>
<tr>
    <td>updatedAt</td>
    <td>DATETIME</td>
    <td>Contains the updated date of record. Automatically added by Sequelize</td>
</tr>
</table>

For this website, the relationship between the tables are as follows:

Members are part of areas table. 1 -> Many relationship

Products are part of areas table. 1 -> 1 relationship
Products contain manager from members table. 1 -> 1 relationship
Products contain reference from members table. 1 -> 1 relationship

## Plugins

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

**3. Sequelize:** Sequelize is the plugin used to interact with the DB. It provides ability to create tables with models, insert and search from DB by calling required functions. 

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