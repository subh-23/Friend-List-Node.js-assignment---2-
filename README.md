
# Friend List (Node.js assignment - 2)

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

#### Get all friends

```http
  GET /friends
```

#### Get specific friend

```http
  GET /friends/${id}
```

#### Post a specific friend

```bash
{
  "name": "Elon Musk",
  "nickname": "Elon"
}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` = `3000`

`MONGO_URI` =`"mongodb://localhost/demo"`
