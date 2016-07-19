import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		  return this.store.findAll('post');
	},
	actions:{
		submitPost(){
			var model = this.get('model');
			var store = this.store
			var posting = store.createRecord('post', {
				title: 'Hello',
				author: 'me'
		  		// title: model.title,
		 	 	// author: model.author
			});
			posting.save();
		}
	}
});
