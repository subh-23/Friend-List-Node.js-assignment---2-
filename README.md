
# Friend List

This project is based on a assignment for Fullstack intern role at Talentglass.ai


## Run Locally

Clone the project

```bash
  gh repo clone subh-23/FriendList-Node.js-assignment-2
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```


## Tech Stack

**Client:** Bootstrap, Ejs

**Server:** NodeJs, ExpressJs, Mongoose, MongoDB


## API Reference

### Get all friends

```http
  GET /friends
```
#### This returns the following response.
```bash
[
  {
    "_id": "62985ed8079de9fc90c02945",
    "name": "Elon Musk",
    "nickname": "Elon",
    "time": "2022-06-02T06:55:20.304Z",
    "__v": 0
  },
  {
    "_id": "62985efe079de9fc90c02948",
    "name": "Jeff Bezoz",
    "nickname": "Jeff",
    "time": "2022-06-02T06:55:58.790Z",
    "__v": 0
  },
  {
    "_id": "62985f0d079de9fc90c0294a",
    "name": "Mark Zukerburg",
    "nickname": "Mark",
    "time": "2022-06-02T06:56:13.596Z",
    "__v": 0
  }
]
```

### Get specific friend

```http
  GET /friends/${id}
```

#### This returns the following response.
```bash
{
  "_id": "62985ed8079de9fc90c02945",
  "name": "Elon Musk",
  "nickname": "Elon",
  "time": "2022-06-02T06:55:20.304Z",
  "__v": 0
}
```

### Post a specific friend

```bash
{
  "name": "Elon Musk",
  "nickname": "Elon"
}
```
#### This returns the following response.
```bash
{
  "message" : "User added Successfully"
}
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` = `3000`

`MONGO_URI` =`"mongodb://localhost/demo"`
