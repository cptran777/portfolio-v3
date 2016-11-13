import Ember from 'ember';

export default Ember.Component.extend({
	videoId: 'e-ORhEE9VVg',
	actions: {
		setVid(id) {
			this.set('videoId', id);
		}
	}
});