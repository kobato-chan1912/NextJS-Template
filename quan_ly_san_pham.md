METHOD  GET: {{api}}/product/paging
```
query:{
    limit: number,
    page: number,
}
```
Response
```
{
    code: 200,
    message: string,
    totalPage: string,
    data: [
        {
            name: string,
            price: string,
            createdAt: string
        }
    ]
}
```

METHOD GET: {{api}}/product/:id
RESPONSE
```
{
    code: 200,
    message: string,
    data: {
        name: string,
        price: string,
        discount: string,
        images: [string],
        description: [string - 6 item],
    }
}
```

METHOD POST: {{api}}/product
BODY
```
{
    name: string,
    price: string,
    discount: string,
    images: [string],
    description: [string - 6 item],
}
```


METHOD PUT: {{api}}/product/:id
BODY
```
{
    name: string,
    price: string,
    discount: string,
    images: [string],
    description: [string - 6 item],
}
```
