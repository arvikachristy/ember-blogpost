import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.get('store').findRecord('post',params.id);
  }
  // actions:{
  //   deletePost(model){
  //     return model.destroyRecord();
  //   }
  // }
});
