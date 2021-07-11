import Model, { attr, hasMany, belongsTo } from '@ember-data/model';

// post.js
export default class Post extends Model {
  @attr('string') title;
  @attr('string') description;
  @belongsTo('user', { inverse: 'posts' }) user;
  @belongsTo('user') user;
}

// user.js
export default class User extends Model {
  @attr('string') name;
  @hasMany('post', { inverse: 'user' }) posts;
  @hasMany('post') posts;
}