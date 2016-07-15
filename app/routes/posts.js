import Ember from 'ember';

let posts = [{
	title: 'Get a  corgi',
	author: 'Anna'
},{
	title: 'Water the plant',
	author: "Bob"
}, {
	title: 'Laundry day',
	author: "Charlie"
}];

export default Ember.Route.extend({
	model(){
		    return Ember.RSVP.hash({
      title: this.get('store').findAll('title')
    });
		// return posts;
	}
});
