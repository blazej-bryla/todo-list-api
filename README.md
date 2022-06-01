[![CircleCI](https://circleci.com/gh/blazej-bryla/todo-list-api/tree/master.svg?style=svg&circle-token=0491836073fc2cb406301384379f02ff7b9cb68e)](https://circleci.com/gh/blazej-bryla/todo-list-api/tree/master)


# Todo-list-API

Simply API for my todo-list app.



## API Reference

#### Get all items

```
  GET /tasks
```


#### Add item

```http
  POST /task
```
```http
  Example body: {task: "Make dinner"}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `task`      | `string` | **Required**. Add task |



#### Delete item

```http
  DELETE /task
```
```http
  Example body: {taskId: 4}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `taskId`      | `int` | **Required**. Remove task by id |

#### Modify existing task

```http
  patch /task
```
```http
  Example body: {taskId: 4, newTask: "Make lunch"}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `taskId`      | `int` | **Required**. Existing taskId for modify|
| `newTask`      | `string` | **Required**. New task|

#### Mark task as realized

```http
  patch /task
```
```http
  Example body: {taskId: 4}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `taskId`      | `int` | **Required**. Existing taskId for mark as realized|



## Project Installation

Install todo-list-api with git clone

```bash
  git clone https://github.com/blazej-bryla/todo-list-api
  cd todo-list-api
  npm install
```


## Database Setup

Todo-list-api based on Mysql Database

Create database
```bash
  Create simple database for example: "todo",
```

Create table
```bash
  Create table with 3 fields for example: "tasks"
 ``` 
  | Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `int` | **Required**. |
| `task`      | `varchar` | **Required**. |
| `isRealized`      | `Boolean/tinyint` | **Required**. |

### Setup database in Project

Create .env file, copy and paste config from .env.example then modify .env variables.
  

## Running Tests

To run tests, run the following command

```bash
  npm run test
  or
  npm run test:watch
```


    
## Tech Stack

**API:** JavaScript, Node, Express, Jest, MySql, CircleCi

