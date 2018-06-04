# API Document

This is sample balar.

## Get User

```GET
/users
```

### Request

Here is the request

```
{
    "username" : "hello",
    "password" : "2312"
}
```

### Response

Response is

```
{
    "code" : "000",
    "message" : "success"
}
```

## Update User

```POST
/user/123
```

### Request

Update

```
{
    "username" : "hello"
}
```

### Response

Response is

```
{
    "code" : "000",
    "message" : "success"
}
```