import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', { path:'/'});

  this.route('posts', function() {
    this.route('newpost');
  });
  
  this.route('post', { path:'/posts/:id'}, function() {
    this.route('edit');
  });
});

export default Router;
