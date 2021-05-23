## API Here

# Banners 

- Get the current banners 

```console
method@GET :~  $ https://api-digital.azurewebsites.net/api/banners
```


# Products 

- Get all products categories 

```console
method@GET :~  $ https://api-digital.azurewebsites.net/api/products/categories
```

- Get all: Get all products order by created time. 
```console
method@GET :~  $ https://api-digital.azurewebsites.net/api/products
```

- Get limit: Get all limit products order by created time. 
```console
method@GET :~  $ https://api-digital.azurewebsites.net/api/products?limit={limit}
limit: number (integer)
```

- Get product detail. 
```console
method@GET :~  $ https://api-digital.azurewebsites.net/api/products/{id}
id: number (integer)
```

# Projects

- Get all projects categories 

```console
method@GET :~  $ https://api-digital.azurewebsites.net/api/projects/categories
```

- Get all: Get all projects order by created time. 
```console
method@GET :~  $ https://api-digital.azurewebsites.net/api/projects
```

- Get limit: Get all limit projects order by created time. 
```console
method@GET :~  $ https://api-digital.azurewebsites.net/api/projects?limit={limit}
limit: number (integer)
```


# Posts

- Get all posts categories 

```console
method@GET :~  $ https://api-digital.azurewebsites.net/api/posts/categories
```

- Get all: Get all posts order by created time. 
```console
method@GET :~  $ https://api-digital.azurewebsites.net/api/posts
```

- Get limit: Get all limit posts order by created time. 
```console
method@GET :~  $ https://api-digital.azurewebsites.net/api/posts?limit={limit}
limit: number (integer)
```


- Get post Detail: 
```console
method@GET :~  $ https://api-digital.azurewebsites.net/api/posts/{id}
limit: number (integer)
```

# Users Register 
```console
method@POST :~  $ https://api-digital.azurewebsites.net/api/users/products/{id}
Format: params: type
-->
name: string,
phone: string,
adress: string,
id: int
<--
```
