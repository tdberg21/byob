# BYOB
[![Build Status](https://travis-ci.org/tdberg21/byob.svg?branch=master)](https://travis-ci.org/tdberg21/byob)


### Endpoints

#### Breed Groups

* ##### GET - All Groups - `/api/v1/groups`

  Hitting this endpoint will return to you an array of all 7 breed groups - ex: `[{id: 1, group_name: 'Hounds', ...}, {id: 2, group_name: 'Terriers', ...}...]`

* ##### GET - Individual Group - `/api/v1/groups/:id`
 
  To get an individual breed group you need to send in the group ID through the params. This will return an object with the breed group matching the id. Passing in an invalid id will return an error. 

* ##### POST - New Group - `/api/v1/groups`
 
  To add an individual breed group you need to send in the new group_name, description and breed_count through the body object. This will insert the new group into the database and return an object with the new breed group id. Requests with missing parameters will return an error.

* ##### DELETE - Individual Group - `/api/v1/groups/:id`
 
  To delete an individual group you need to send in the group ID through the params. This will return a response letting you know the delete was succesful and the corresponding id. Passing in an invalid id will return an error.

#### Individual Breeds

* ##### GET - All Breeds `/api/v1/breeds`

  Hitting this endpoint will return to you an array of all the breeds in our database.

* ##### GET - Individual Breed - `/api/v1/breeds/:id`
 
  To get an individual breed you need to send in the breed ID through the params. This will return an object with the breed matching the id. Passing in an invalid id will return an error.

* ##### POST - New Breed - `/api/v1/breeds`
 
  To add an individual breed you need to send in the new breed_name, life_span, bred_for, temperament, height, weight and group_id through the body object. This will insert the new breed into the database and return an object with the new breed id. Requests with missing parameters will return an error.

* ##### DELETE - Individual Breed - `/api/v1/breeds/:id`
 
  To delete an individual breed you need to send in the breed ID through the params. This will return a response letting you know the delete was succesful and the corresponding id. Passing in an invalid id will return an error.