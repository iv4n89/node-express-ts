# Node.js with typescript

## Copy .env.example as .env and fulfill the needed vars

Run mysql server and mongo db server locally with docker
```
$ docker-compose up -d
```

To stop both database servers:
```
$ docker-compose down
```

### Add -d to the instruction to run it detached

## Start the server

### Install all dependencies
Before we can start our server, we need to install all needed node dependencies: 

```
$ npm i
```

### Run the server
Start the server without live reloading: 
```
$ npm run start
```

Start the server with live reloading (nodemon)
```
$ npm run dev
```


## Swagger documentation
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

## Creating and editing docs
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


## Run tests
Test are included in this project, under the folder **__tests__**.

To run the tests use the following instruction:
```
$ npm run test
```

To run the tests in watch mode (live reloading of test execution), use:
```
$ npm run test:watch
```



## Author
Ivan Betanzos Macias