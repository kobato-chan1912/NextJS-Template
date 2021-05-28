METHOD GET: {{api}}/post/paging
QUERY
```
{
    limit: number,
    page: number,
    status: boolean,
    keyword: string
}
```
RESPONSE
```
{
    code: 200,
    message: string,
    totalPage: string,
    data: [
        {
            name: string,
            content: string,
            images: [string],
            createdAt: string
        }
    ]
}
```

METHOD GET: {{api}}/post/:id
Response
```
{
    code: 200,
    message: string,
    data: {
        name: string,
        images: [string],
        content: string
    }
}
```

METHOD POST: {{api}}/post
BODY
```
{
    name: string,
    images: [string],
    content: string
}
```

METHOD PUT: {{api}}/post/:id
```
BODY
{
    name: string,
    images: [string],
    content: string
}
```

METHOD DELETE: {{api}}/post/:id
