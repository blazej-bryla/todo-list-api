[![CircleCI](https://circleci.com/gh/blazej-bryla/todo-list-api/tree/master.svg?style=svg&circle-token=0491836073fc2cb406301384379f02ff7b9cb68e)](https://circleci.com/gh/blazej-bryla/todo-list-api/tree/master)

## API Reference

#### Get all items

```http
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


