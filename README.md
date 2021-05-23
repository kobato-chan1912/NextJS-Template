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

res@response :~ $ id = 14 
status: 200,
data: {
id: 14,
id_category: 1,
name_product: "Mellany Sofa",
virtual_price: 230000,
main_price: 450000,
image_url: "http://www.elathemes.com/themes/divano/assets/images/product-9.jpg",
description: ".."
},
related: [
{
id: 17,
image_url: "http://www.elathemes.com/themes/divano/assets/images/product-6.jpg",
id_category: 1,
main_price: 233000,
virtual_price: 340000,
name_product: "Sofa 5"
},
...
]
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


res@response :~ $ id = 1


status: 200,
data: {
id: 1,
category_id: 1,
cover_img: "http://www.elathemes.com/themes/divano/assets/images/product-1.jpg",
title: "Cách nấu cà chua",
description: "Món cà chua này ngon quá ",
content: "...",
created_at: "2021-05-17T06:58:46.000000Z",
updated_at: "2021-05-17T06:58:55.000000Z",
name_category: "Nấu ăn ngon"
},
related: [
{
id: 2,
cover_img: "http://www.elathemes.com/themes/divano/assets/images/product-2.jpg",
title: "Sài Gòn mưa to gió lớn",
created_at: "2021-05-17T06:58:52.000000Z"
}
]
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

res@response :~ $ id = 1
name: Dung Mai,
phone: 0222222222
address: Distc 5 

if data (phone_) has registerd: 
>> 
"status" => 404,
"message" => "User has been registered"

if data(_phone_) hasn'r registered yet 
>> 
"status" => 200,
"message" => "User registered successfully"
```
