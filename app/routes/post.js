import Ember from 'ember';
const {
  get
} = Ember;

export default Ember.Route.extend({

  model(params){
    return get(this, 'store').findRecord('post',params.id);
  },
  actions:{
    deletePost(id){
      //var self = this;
      this.get('store').findRecord('post', id).then((post) => {
        post.destroyRecord();
        this.transitionTo('posts');
      });
    }
  }
});
