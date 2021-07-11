import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

// post.js
export default class Post extends Model {
  @attr('string') title;
  @attr('string') description;
  @belongsTo('user') user;
}

// user.js
export default class User extends Model {
  @attr('string') name;
  @hasMany('post', { async: false }) posts;
  @hasMany('post', { async: true }) posts;
}

var a = user: { 
  id: 1, 
  name: 'User 1', 
  posts,
  posts: [1, 2, 3, 4, 5]
}