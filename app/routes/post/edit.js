import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
    updatePost(newTitle, newAuthor, id){
			var store = this.store;

      store.findRecord('post', id).then(function(post) {
        post.set(post.get('title'), newTitle);
        post.set(post.get('author'), newAuthor);
        post.save();

      });

		}
	}

});
