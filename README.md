# Node.js with typescript

# <span style="color: skyblue;">Index</span>

1. [About this project](#span-stylecolor-lightblueadd--d-to-the-instruction-to-run-it-detachedspan)
    1. [How the CRUD works](#span-stylecolor-lightbluehow-the-crud-worksspan)
    2. [Folder structure](#span-stylecolor-lightbluefolder-structurespan)
2. [How to run docker containers](#span-stylecolor-skybluehow-to-run-docker-containersspan)
3. [Start the server](#span-stylecolor-skybluestart-the-serverspan)
4. [Swagger documentation](#span-stylecolor-skyblueswagger-documentationspan)
5. [Run the tests](#span-stylecolor-skybluerun-testsspan)
6. [Typescript snippets](#span-stylecolor-skybluetypescript-snippetsspan)
    1. [Controller creation snippet](#span-stylecolor-lightbluecontroller-creation-snippetspan)
    2. [Router creation snippet](#span-stylecolor-lightbluerouter-creation-snippetspan)
    3. [Service creation snippet](#span-stylecolor-lightblueservice-creation-snippetspan)
7. [Author](#span-stylecolor-skyblueauthorspan)

# <span  style="color: skyblue;">About this project</span>

This is a base user CRUD with groups and permissions. It can be used as a base to more complex project.

The project has been created with a MySQL database as base. However, it can be changed to any kind of database supported by the orm TypeORM:
```
MySQL
Postgres
Sqlite (sqlite3, better-sqlite, capacitor, cordova, react-native drivers)
nativescript
MsSQL
MongoDB/DocumentalDB
sql.js
expo
```
Visit __https://typeorm.io/data-source-options__ for further information.

## <span style="color: lightblue;">How the CRUD works</span>

Users, group of users and permissions can be created. An user can be part of more than one group, a group can
has more than one permission and a permission can be present in more than one user or group.

Additionally, addresses (and countries, communities, provinces and cities) can be created to complete the user
information. Also, job areas and positions in these areas can be created and linked to users. 

(To be implemented)
Permissions can block the access to users to endpoints that need an specific type of permission.

All permissions have the same structure:

```Name of the permission``` <span style="color: lightgreen;">=></span> It works as the permission parent, who has the name of the permission.

```Create``` <span style="color: lightgreen;">=></span>  Permission to create new elements in the CRUD for the specified endpoint

```Update``` <span style="color: lightgreen;">=></span>  Permission to update data

```Delete``` <span style="color: lightgreen;">=></span>  Permission to delete data

```Export``` <span style="color: lightgreen;">=></span>  Permission to export data


## <span style="color: lightblue;">Folder structure</span>

The project has a modular structure, so it can be easily scalable and expand it.

<span style="color: lightgreen;">__ tests __</span>

All unit tests can be found here

<span style="color: lightgreen;">controllers</span>

Controllers for endpoints. A base controller interface can be found.

Find at the end of this README a snippet to quickly create new controllers.

<span style="color: lightgreen;">database</span>

All database related configuration files. A __db__ file can be found here. It contains all data source objects for this application

<span style="color: lightgreen;">Doc</span>

All documentation for this project

<span style="color: lightgreen;">interfaces</span>

All interfaces that work as types can be stored here

<span style="color: lightgreen;">middlewares</span>

All middlewares can be found here.

This project comes with 4 middlewares: 

__errorHandling__ <span style="color: lightgreen;">=></span> Response interceptor that parse the response body in case an error occurred in some process

__jwtVerify__ <span style="color: lightgreen;">=></span> Verification for jwt authentication

__parseResponse__ <span style="color: lightgreen;">=></span> Response interceptor that parse the response body if no errors found in the process

__validateFields__ <span style="color: lightgreen;">=></span> Validation for the body request data. The validation and possible error response happens before the request reach the controller.

<span style="color: lightgreen;">models</span>

All entity classes can be found here.
A base entity class is provided. Extending it will give to the inheriting entity the basics to work (id and timestamps)

<span style="color: lightgreen;">routes</span>

All routes and route objects can be found here.
A base route class is provided. It contains all basic CRUD routes. The inheriting class can instantiate all routes just calling to its __init__ method.
Find at the end of this README a snippet to create quickly a CRUD route class.

<span style="color: lightgreen;">Server</span>

Class that contains all express server configuration

<span style="color: lightgreen;">services</span>

All services can be found here.

This project comes with a base service interface and a base service abstract class. Inheriting the base abstract class will provide the inheriting service class all needed method to work.

Find at the end of this project a snippet to create quickly a service.

<span style="color: lightgreen;">util</span>

All util functions (helpers) can be found here.

This project comes with a async error interceptor, a generate jwt helper and a permission helper.
The permission helper provide a method to entity classes to easily update permissions in a request. Instead of sending ids, permissions need to be sent as an object with the following structure:

```
    name_of_the_permission: {
        create: true/false,
        update: true/false,
        delete: true/false,
        export: true/false
    }
```


# <span style="color: skyblue">How to run docker containers</span>

## <span style="color: darkgreen;">Copy .env.example as .env and fulfill the needed vars</span>

Run mysql server locally with docker
```
$ docker-compose up -d
```

To stop both database servers:
```
$ docker-compose down
```

### <span style="color: darkgreen;">Add -d to the instruction to run it detached</span>

# <span style="color: skyblue;">Start the server</span>

## <span style="color: lightblue;">Install all dependencies</span>
Before we can start our server, we need to install all needed node dependencies: 

```
$ npm i
```

## <span style="color: lightblue;">Run the server</span>
Start the server without live reloading: 
```
$ npm run start
```

Start the server with live reloading (nodemon)
```
$ npm run dev
```


# <span style="color: skyblue;">Swagger documentation</span>
This project comes with swagger API documentation.
Run the following command to generate it before start running the server:
```
$ npm run prebuild
```

It can be also generated generated with:
```
$ npm run swagger
```

To reach to the documentation, start the server and navigate to the url:
__http://{base_url}/docs__

If the project has been initialized with the default values, just go to the url:
__http://localhost:8000/docs__

# <span style="color: skyblue;">Creating and editing docs</span>
Docs are created in controllers as decorators for the functions:

```
@Tag('tag')
```
Tag (group) for the controller methods. It will organize the documentation in groups

```
@Route('route')
```
Define the base route for the controller. Ej: We define @Route('user'), and a get route as @Get('all'). We will find in the docs the route
for get inside this controller is __/base_url/user/all__.

```@Get('route')```
```@Post('route')```
```@Put('route')```
```@Delete('route')```
```@Patch('route')```
Define the method route and type


```
@Example<Type of the response>({
    content of the response as example
})
```
Define a response example for the current method. It can be provided more than one example per method

We need to specify also where the controller method params comes from

```
@Body() param_name:  param_type
```
It specifies a param is taken from the __request body__. As example, we could use it as: 
```
method_name(@Body() name: string, @Body() last_name: string) {}
```

```
@Query() param_name: param_type
```
It specifies a param is taken from the __request params__. As example, we could use it as:
```
method_name(@Query() id: number) {}
```


# <span style="color: skyblue;">Run tests</span>
Test are included in this project, under the folder **__tests__**.

To run the tests use the following instruction:
```
$ npm run test
```

To run the tests in watch mode (live reloading of test execution), use:
```
$ npm run test:watch
```

# <span style="color: skyblue;">Typescript snippets</span>

The following snippets can be used to save time on the creation of new components and endpoints for this CRUD.
They may be added to our __Visual Studio Code__ personal snippets, as personal typescript snippets.

To add them we must press __control + shift + p__ and select __Configure user snippets__. Then select typescript from the list and copy them at the end of the file.

Note that once any of these snippets are used, a name for the component is required. Tab must be pressed once a name is wrote in order to get text transformations to work.

## <span style="color: lightblue">Controller creation snippet</span>

```
"Node custom controller class with tsoa": {
		"prefix": "tsaocontrollerclass",
		"body": [
			"import { Body, Controller, Delete, Example, Get, Post, Put, Query, Route, Tag } from 'tsoa';",
			"import { DeleteResult } from 'typeorm';",
			"import { BaseJsonResponse } from '../../interfaces/response.interface';",
			"import { ${1/(.*)/${1:/capitalize}/} } from '../../models';",
			"import { ${1/(.*)/${1:/downcase}/}Service } from '../../services';",
			"import { BaseController } from '../BaseController';",
			"",
			"@Tag('${1/(.*)/${1:/capitalize}/}')",
			"@Route('${1/(.*)/${1:/downcase}/}')",
			"export class ${1/(.*)/${1:/capitalize}/}Controller extends Controller implements BaseController<${1/(.*)/${1:/capitalize}/}> {",
			"",
			"  /**",
			"   * Create a new ${1/(.*)/${1:/capitalize}/}",
			"   * @param attributes ",
			"   * ",
			"   */",
			"  @Example<BaseJsonResponse<Partial<${1/(.*)/${1:/capitalize}/}>>>({",
			"   message: 'Ok',",
			"   error: false,",
			"   code: 201,",
			"   result: {",
			"      //todo",
			"   }",
			"  })",
			"  @Post('/store')",
			"  public async create(@Body() attributes: ${1/(.*)/${1:/capitalize}/}): Promise<${1/(.*)/${1:/capitalize}/}> {",
			"    return ${1/(.*)/${1:/downcase}/}Service.create(attributes);",
			"  }",
			"",
			"  /**",
			"   * Get one ${1/(.*)/${1:/capitalize}/}",
			"   * @param id ",
			"   * ",
			"   */",
			"  @Example<BaseJsonResponse<Partial<${1/(.*)/${1:/capitalize}/}>>>({",
			"   message: 'Ok',",
			"   error: false,",
			"   code: 201,",
			"   result: {",
			"     //todo",
			"   }",
			"  })",
			"  @Get('/')",
			"  public async getOne(@Query() id: number): Promise<${1/(.*)/${1:/capitalize}/}> {",
			"    return ${1/(.*)/${1:/downcase}/}Service.getOne(id);",
			"  }",
			"",
			"  /**",
			"   * Get all ${1:Name}",
			"   * ",
			"   */",
			"  @Example<BaseJsonResponse<Partial<${1/(.*)/${1:/capitalize}/}>>>({",
			"   error: false,",
			"   message: 'Ok',",
			"   code: 201,",
			"   result: {",
			"     //todo",
			"   }",
			"  })",
			"  @Post('/')",
			"  public async getAll(): Promise<${1/(.*)/${1:/capitalize}/}[]> {",
			"    return ${1/(.*)/${1:/downcase}/}Service.getAll();",
			"  }",
			"",
			"  /**",
			"   * Update one ${1/(.*)/${1:/capitalize}/}",
			"   * @param id ",
			"   * @param attributes ",
			"   * ",
			"   */",
			"  @Example<BaseJsonResponse<Partial<${1/(.*)/${1:/capitalize}/}>>>({",
			"    message: 'Ok',",
			"    error: false,",
			"    code: 201,",
			"    result: {",
			"      //todo",
			"    }",
			"  })",
			"  @Put('/:id')",
			"  public async update(@Query() id: number, @Body() attributes: ${1/(.*)/${1:/capitalize}/}): Promise<${1/(.*)/${1:/capitalize}/}> {",
			"     return ${1/(.*)/${1:/downcase}/}Service.update(id, attributes);",
			"  }",
			"",
			"  /**",
			"   * Delete one ${1/(.*)/${1:/capitalize}/}",
			"   * @param id ",
			"   * ",
			"   */",
			"  @Example<BaseJsonResponse<Partial<${1/(.*)/${1:/capitalize}/}>>>({",
			"    message: 'Ok',",
			"    error: false,",
			"    code: 201,",
			"    result: {",
			"      //todo",
			"    }",
			"  })",
			"  @Delete('/:id')",
			"  public async delete(@Query() id: number): Promise<DeleteResult> {",
			"    return ${1/(.*)/${1:/downcase}/}Service.delete(id);",
			"  }",
			"}"
			
		],
		"description": "Node custom controller snippet"
```

## <span style="color: lightblue">Router creation snippet</span>

```
"Custom router": {
		"prefix": "tsaorouter",
		"body": [
			"import { router } from '..';",
			"import { ${1/(.*)/${1:/capitalize}/} } from '../../models';",
			"import { BaseRoute } from '../BaseRoute';",
			"",
			"class ${1/(.*)/${1:/capitalize}/}Route extends BaseRoute<${1/(.*)/${1:/capitalize}/}> {",
			"   constructor() {",
			"      super(new ${1/(.*)/${1:/capitalize}/}Controller(), router, '${1/(.*)/${1:/downcase}/}')",
			"   }",
			"}",
			"",
			"const ${1/(.*)/${1:/downcase}/}Route = new ${1/(.*)/${1:/capitalize}/}Route();",
			"",
			"export default ${1/(.*)/${1:/downcase}/}Route.init();",
		],
		"description": "Node custom router"
	},
```

## <span style="color: lightblue">Service creation snippet</span>

```
"Custom service": {
		"prefix": "tsaoservice",
		"body": [
			"import db from '../../database/db';",
			"import { ${1/(.*)/${1:/capitalize}/} } from '../../models';",
			"import { BaseService } from '../BaseService.service';",
			"import { IBaseService } from '../IBaseService.service';",
			"",
			"const repository = db.getRepository(${1/(.*)/${1:/capitalize}/});",
			"",
			"class ${1/(.*)/${1:/capitalize}/}Service extends BaseService<${1/(.*)/${1:/capitalize}/}> implements IBaseService<${1/(.*)/${1:/capitalize}/}> {",
			"   constructor() {",
			"      super(repository);",
			"   }",
			"}",
			"",
			"const service = new ${1/(.*)/${1:/capitalize}/}Service();",
			"",
			"export default service;",
		],
		"description": "Node custom service"
	},
```

# <span style="color: skyblue;">Author</span>
Ivan Betanzos Macias