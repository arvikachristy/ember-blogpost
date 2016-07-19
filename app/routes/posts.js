import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return this.get('store').findAll('post');
	},
	actions:{
		deletePost(model){
			return model.destroyRecord();
		}	
	}

});
