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

Members contain area from areas table. 1 -> Many relationship

Products contain area from areas table. 1 -> 1 relationship

Products contain manager from members table. 1 -> 1 relationship

Products contain reference from members table. 1 -> 1 relationship

## Plugins

**1. express, vue-router**: For setting up the server, `express` is installed with the command `npm install --save express cors`. **cors** is used to provide cross-origin resource sharing capability to allow access from only allowed external websites. `vue-router` is also installed to enable routing for the server using  the command `npm install --save vue-router`.

The routes for the server are configured using files in server/controllers and server/routes folders. There are controllers and routes for each table, namely areas, members and products. The following routes are configured:

<table>
    <tr>
    <td><b>Areas</b></td>
    <tr>
        <td><b>Request Method</b></td>
        <td><b>Request URL</b></td>
        <td><b>Parameters required</b></td>
        <td><b>Description</b></td>
        <td><b>Controller path</b></td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/api/areas/</td>
        <td>name<br>short_description<br>description<br>image</td>
        <td>Create area</td>
        <td>create in controllers/areas.controller.js</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/api/areas/initdb</td>
        <td>NA</td>
        <td>Initialize DB</td>
        <td>initdata in controllers/areas.controller.js</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/areas/all</td>
        <td>NA</td>
        <td>Queries all values in areas table</td>
        <td>findAll in controllers/areas.controller.js</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/areas/name</td>
        <td>name</td>
        <td>Queries all values in areas table based on name parameter</td>
        <td>findByName in controllers/areas.controller.js</td>
    </tr>
</table>

<table>
    <tr>
    <td><b>Products</b></td>
    <tr>
        <td><b>Request Method</b></td>
        <td><b>Request URL</b></td>
        <td><b>Parameters required</b></td>
        <td><b>Description</b></td>
        <td><b>Controller path</b></td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/api/products/</td>
        <td>name<br>short_description<br>description<br>image<br>area<br>manager<br>reference</td>
        <td>Create Product</td>
        <td>create in controllers/products.controller.js</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/api/products/initdb</td>
        <td>NA</td>
        <td>Initialize DB</td>
        <td>initdata in controllers/products.controller.js</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/products/all</td>
        <td>NA</td>
        <td>Queries all values in products table</td>
        <td>findAll in controllers/products.controller.js</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/products/name</td>
        <td>name</td>
        <td>Queries all values in products table based on name parameter</td>
        <td>findByName in controllers/products.controller.js</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/products/area</td>
        <td>area</td>
        <td>Queries all values in products table based on area parameter</td>
        <td>findByArea in controllers/products.controller.js</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/products/manager</td>
        <td>manager</td>
        <td>Queries all values in products table based on manager parameter</td>
        <td>findByManager in controllers/products.controller.js</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/products/reference</td>
        <td>reference</td>
        <td>Queries all values in products table based on reference parameter</td>
        <td>findByReference in controllers/products.controller.js</td>
    </tr>
</table>

<table>
    <tr>
    <td><b>Members</b></td>
    <tr>
        <td><b>Request Method</b></td>
        <td><b>Request URL</b></td>
        <td><b>Parameters required</b></td>
        <td><b>Description</b></td>
        <td><b>Controller path</b></td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/api/members/</td>
        <td>name<br>short_description<br>description<br>image<br>area<br>designation</td>
        <td>Create Member</td>
        <td>create in controllers/members.controller.js</td>
    </tr>
    <tr>
        <td>POST</td>
        <td>/api/members/initdb</td>
        <td>NA</td>
        <td>Initialize DB</td>
        <td>initdata in controllers/members.controller.js</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/members/all</td>
        <td>NA</td>
        <td>Queries all values in members table</td>
        <td>findAll in controllers/members.controller.js</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/members/name</td>
        <td>name</td>
        <td>Queries all values in members table based on name parameter</td>
        <td>findByName in controllers/members.controller.js</td>
    </tr>
    <tr>
        <td>GET</td>
        <td>/api/members/area</td>
        <td>area</td>
        <td>Queries all values in members table based on area parameter</td>
        <td>findByArea in controllers/members.controller.js</td>
    </tr>
</table>

**2. Axios:** Defined in `http-common.js`. API served in /api base URL. Makes use of services defined in ../services/ folder. Axios was installed with the command `npm install --save axios`

<table>
    <tr>
        <td><b>AreaDataService</b></td>
    </tr>
    <tr>
        <td><b>Function Name</b></td>
        <td><b>Request Method</b></td>
        <td><b>Request URL</b></td>
    </tr>
    <tr>
        <td>getAll</td>
        <td>GET</td>
        <td>/api/areas/all</td>
    </tr>
    <tr>
        <td>getByName(name)</td>
        <td>GET</td>
        <td>/api/areas/name?name=${name}</td>
    </tr>
</table>

<table>
    <tr>
        <td><b>MemberDataService</b></td>
    </tr>
    <tr>
        <td><b>Function Name</b></td>
        <td><b>Request Method</b></td>
        <td><b>Request URL</b></td>
    </tr>
    <tr>
        <td>getAll</td>
        <td>GET</td>
        <td>/api/members/all</td>
    </tr>
    <tr>
        <td>getByName(name)</td>
        <td>GET</td>
        <td>/api/members/name?name=${name}</td>
    </tr>
    <tr>
        <td>getByArea(name)</td>
        <td>GET</td>
        <td>/api/members/area?area=${name}</td>
    </tr>
</table>

<table>
    <tr>
        <td><b>AreaDataService</b></td>
    </tr>
    <tr>
        <td><b>Function Name</b></td>
        <td><b>Request Method</b></td>
        <td><b>Request URL</b></td>
    </tr>
    <tr>
        <td>getAll</td>
        <td>GET</td>
        <td>/api/areas/all</td>
    </tr>
    <tr>
        <td>getByName(name)</td>
        <td>GET</td>
        <td>/api/areas/name?name=${name}</td>
    </tr>
</table>

<table>
    <tr>
        <td><b>ProductDataService</b></td>
    </tr>
    <tr>
        <td><b>Function Name</b></td>
        <td><b>Request Method</b></td>
        <td><b>Request URL</b></td>
    </tr>
    <tr>
        <td>getAll</td>
        <td>GET</td>
        <td>/api/products/all</td>
    </tr>
    <tr>
        <td>getByName(name)</td>
        <td>GET</td>
        <td>/api/products/name?name=${name}</td>
    </tr>
    <tr>
        <td>getByArea(name)</td>
        <td>GET</td>
        <td>/api/products/area?area=${name}</td>
    </tr>
    <tr>
        <td>getByManager(name)</td>
        <td>GET</td>
        <td>/api/products/manager?manager=${name}</td>
    </tr>
    <tr>
        <td>getByReference(name)</td>
        <td>GET</td>
        <td>/api/products/reference?reference=${name}</td>
    </tr>
</table>

**3. Sequelize:** Sequelize is the plugin used to interact with the DB. It provides ability to create tables with models, insert and search from DB by calling required functions. 

Reference: https://sequelize.org/v3/docs/getting-started/  

The DB model was created with the sequelize-cli installed with command `npm install --save sequelize-cli sequelize`. It also requires installation of components for postgres: `npm install --save pg pg-hstore pg-native`

Sequelize makes use of DB connection strings configured in server/config/config.js and initialises DB using the configuration in server/models/index.js file.

The DB model was created from cli with command `sequelize-cli model:generate --name <table_name> --attributes <field_name1>:<field_type>,<field_name2>:<field_type>,...`. This will create files in server/models and server/migrations folder.

Then it needs to be migrated with command `sequelize-cli db:migrate`. This will create the table with the provided attributes.

For interacting with the DB, only the following functions are used for this implementation:
```
model.create()
model.findAll()
```