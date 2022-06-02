
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

### Get all friends

```http
  GET /friends
```
#### This returns the following response.
```bash
{
  Title: 'Jai Bhim',
  movie_release_year: '2021',
  imdb_rating: '8.9',
  summary: 'When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.',
  duration: '2h 44m',
  awards: '3 wins'
}
{
  Title: 'Anbe Sivam',
  movie_release_year: '2003',
  imdb_rating: '8.7',
  summary: 'Two men, one young and arrogant, the other damaged - physically but not spiritually - by life, are thrown together by circumstances, and find that they are in some ways bound together by fat... Read all',
  duration: '2h 40m',
  awards: '2 wins & 3 nominations'
}
{
  Title: 'Hanky Panky',
  movie_release_year: '1979',
  imdb_rating: '8.5',
  summary: "A man's simple lie to secure his job escalates into more complex lies when his orthodox boss gets suspicious.",
  duration: '2h',
  awards: '3 wins'
}
```

### Get specific friend

```http
  GET /friends/${id}
```

#### This returns the following response.
```bash
{
  Title: 'Jai Bhim',
  movie_release_year: '2021',
  imdb_rating: '8.9',
  summary: 'When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.',
  duration: '2h 44m',
  awards: '3 wins'
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

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` = `3000`

`MONGO_URI` =`"mongodb://localhost/demo"`
