import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		  return this.store.findAll('post');
	},
	actions:{
		createPost(newTitle, newAuthor){
			var store = this.store;
			var posting = store.createRecord('post', {
				title: newTitle,
				author: newAuthor
			});
			posting.save();
		}
	}
});
