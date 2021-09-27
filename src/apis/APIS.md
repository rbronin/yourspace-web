# Codespace - API docs

A soical media application for code's stories

## API Reference

#### Login

```http
  POST /api/signin  //github login(OAuth)
```

#### Signup

```http
  POST /api/signup     //github signup(OAuth)
```

---

#### Feed

```http
  GET /api/feed/:userid
```

| Parameter    | Type     | Description                   |
| :----------- | :------- | :---------------------------- |
| `auth_token` | `string` | **Required**. User auth token |

---

#### Create Post

```http
  POST /api/post
```

#### Get a Post

```http
  GET /api/post?id=postid
```

#### Delete Post

```http
  DELETE /api/post/${postid}
```

#### Get all user Posts

```http
  GET /api/posts
```

| Authentication | Type     | Description                 |
| :------------- | :------- | :-------------------------- |
| `auth_key`     | `string` | **Required**. Your Auth key |

---

#### Get Own Profile

```http
  GET /api/profile/${userid}
```

#### Get Profile

```http
  GET /api/user/profile/${userid}
```

| Authentication | Type     | Description                       |
| :------------- | :------- | :-------------------------------- |
| `auth-token`   | `string` | **Required**. Id of item to fetch |

---

#### Get User

```http
  GET /api/user/${userid}
```

| Authentication | Type     | Description                       |
| :------------- | :------- | :-------------------------------- |
| `auth-token`   | `string` | **Required**. Id of item to fetch |

#### Search Users

```http
  GET /api/user/search?q=user
```

| Authentication | Type     | Description                       |
| :------------- | :------- | :-------------------------------- |
| `auth-token`   | `string` | **Required**. Id of item to fetch |

---

#### Follow User

```http
  POST /api/user/follow/${userid}
```

#### Unfollow User

```http
  DELETE /api/user/follow/${userid}
```

| Authentication | Type     | Description                       |
| :------------- | :------- | :-------------------------------- |
| `auth-token`   | `string` | **Required**. Id of item to fetch |

---

#### Add like to Post

```http
  POST /api/like/${postid}
```

#### Get likes to Post

```http
  GET /api/likes/${postid}
```

#### Add comments to Post

```http
  POST /api/comment/${postid}
```

#### Get comments to Post

```http
  GET /api/comments/${postid}
```

#### Add post to collections

```http
  POST /api/collections/${postid}
```

| Authentication | Type     | Description                       |
| :------------- | :------- | :-------------------------------- |
| `auth-token`   | `string` | **Required**. Id of item to fetch |
