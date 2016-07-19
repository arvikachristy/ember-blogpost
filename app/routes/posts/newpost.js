import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		  return this.store.findAll('post');
	},
	actions:{
		createContact(newTitle, newAuthor){
			var model = this.get('model');
			var store = this.store
			var posting = store.createRecord('post', {
				title: newTitle,
				author: newAuthor
			});
			posting.save();
		}
	}
});
