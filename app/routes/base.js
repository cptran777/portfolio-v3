import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		didTransition() {
			let mainWindow = document.getElementById('app-body');
			if (mainWindow) {
				mainWindow.scrollTop = 0;			
			}
		}
	}
});