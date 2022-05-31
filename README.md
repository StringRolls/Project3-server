<img src="https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png" width="200"/> &nbsp; <img src="https://iili.io/XOnNqv.png"/>

# sharelicious: order food, meet people
**TEST**

Link: INSERT LINK TO THE PROJECT DEPLOYED TO NETLIFY HERE

## Description

**sharelicious** is an online food delivery app that, in addition to offering the experience of ordering products, allows users to interact by viewing their profiles, obtain recommendations based on their latest orders, and follow each other.

## User Stories

- **Error 4xx**- As an user, I want to see a clear error page when it doesn't exist/has restricted access so that I know I probably make a mistake.
- **Error 5xx** -  As an user, I want to see a clear error page when problems are generated by the server so that I know that is not my fault.
- **launcher** - As an user, I want to seamless access the index/home so that I know I'm the right place to begin the flow.
- **signup** - As an user, I want to signup in a secure and easy way on the webpage so that I can start using the app.
- **login** - As an user, I want to be able to login on the webpage so that I can see my personal account.
- **logout** - As an user, I want to be able to logout from the webpage so that I can make sure no one will access my personal account.
- **profile** - As an user, I want to see my profile  so that I see my personal data.
- **order history**- As an user, I want to visualize all my past orders so I can keep track of them an eventually repeat them. 
- **edit profile** - As an user, I want to be able to edit my profile so that I can modify my personal data.
- **followers page** - As an user, I want to see the users I follow so that I don't lose track of their activity and potential recommendations.
- **user searcher** -  As an user, I want to find users I know or would like to know so that I can get more recommendations.
- **product filter results** - As an user, I want to filter products by type of cuisine so that I can only see what I am looking for.
- **store details** - As an user, I want to see the details of the store I select and the product catalog it has so I can easily choose what I want.
- **checkout** - As an user, I want to review the order that I'm going to carry out, so I can control what I am going to purchase.
- **order status** - As an user, I want to visualize the order status so I can know that the order was carried out successfully or not.

## Client / Frontend

### React Router Routes (React App)

|   **Path**            |    **Component**  |    **Permissions**     |                         **Behavior**                                  |
|-----------------------|-------------------|------------------------|-----------------------------------------------------------------------|
|`/`                    |SplashPage         |public <Route>          |Index when user is not logged in                                       |
|`/home`                |SplashPage         |anon only <AnonRoute>   |Launcher once user is logged in                                        |  
|`/signup`              |SignupPage         |anon only <AnonRoute>   |Signup form, link to login, navigate to launcher after signup          |    
|`/login`               |LoginPage	        |anon only <AnonRoute>   |Login form, link to signup, navigate to launcher after login           |         
|`/profile/:id`         |ProfilePage        |user only <PrivateRoute>|Shows all user's profile details in a form                             | 
|`/profile/edit/:id`    |EditProfilePage    |user only <PrivateRoute>|Allows to edits profile details                                        |
|`/friends`             |FriendsPage        |user only <PrivateRoute>|View current user's friends                                            |  
|`/seach-friends-result`|SearchFriendsPage  |user only <PrivateRoute>|Allows user to search new friends                                      |
|`/order-history`       |OrderHistoryPage   |user only <PrivateRoute>|Details of the past orders that the user placed                        |
|`/filter-results`      |SearchFriendsPage  |user only <PrivateRoute>|List of the filtered results that users request                        |
|`/store-details`       |StoreDetailsPage   |user only <PrivateRoute>|Shows store details and the product catalog so that the user can select|
|`/checkout`            |CheckoutPage       |user only <PrivateRoute>|Shows cart details and allows user to proceed the purchase.            |
|`/order-status`        |OrderStatusPage    |user only <PrivateRoute>|Shows order confirmation                                               |

### Services

- Auth Service
  - auth.login(user)
  - auth.signup(user)
  - auth.logout()
  

  
## Server / Backend
  
### Models
  
Users model
  
```javascript
{
username: {type: String, required: true, unique: true},
email: {type: String, required: true, unique: true},
password: {type: String, required: true},
savedStores: [Stores],
orderHistory: [Orders]
friends: [{type: Schema.Types.ObjectId,ref:'Users'}]
}
```

Stores model

```javascript
{
storeName: {type: String, required: true},
address: {type: String, required: true, unique: true},
phoneNumber: {type: String, required: true},
storeImg: {type: String},
deliveryTime: [{type: String}],
priceRange: [{type: String}],
isUnder30Min: {type: Boolean},
products: [{type: Schema.Types.ObjectId,ref:'Products'}]
}
```
  
Products model

```javascript
{
productName: {type: String, required: true},
productImg: {type: String},
productDescription: {type: String, required: true},
productPrice: {type: String, required: true},
}
```  
  
Orders model

```javascript
{
orderedProducts: [Products]
}
``` 

### API Endpoints (backend routes)

| HTTP Method | URL                         | Request Body                 | Success status | Error Status | Description                                                  |
| ----------- | --------------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------ |
| GET         | `/auth/profile    `           | Saved session                | 200            | 404          | Check if user is logged in and return profile page           |
| POST        | `/auth/signup`                | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`                 | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session |
| POST        | `/auth/logout`                | (empty)                      | 204            | 400          | Logs out the user                         
  
  
## Links

### Trello

[Link](https://trello.com/b/odCshzxJ/sharelicious-project)

### Git

[Repository Link](https://github.com/sharelicious/sharelicious)

[Deploy Link]() INSERT LINK TO THE PROJECT DEPLOYED TO NETLIFY HERE

### Slides

[Link]() INSERT LINK TO THE SLIDES HERE

### Contributors

Samy Ali - [`<github>`](https://github.com/SamyAliSanchez) - [`<linkedin>`](https://www.linkedin.com/in/samy-ali-sanchez/)
  
Pablo Dellacassa - [`<github>`](https://github.com/pablodellacassa) - [`<linkedin>`](https://www.linkedin.com/in/pablodellacassa)

Luisa Ojeda - [`<github>`](https://github.com/LuisaEOjeda) - [`<linkedin>`](https://www.linkedin.com/in/luisaojeda/) 

Bjork Weenk - [`<github>`](https://github.com/bjorkweenk) - [`<linkedin>`](https://www.linkedin.com/in/wuqingguibjork/)  


  
