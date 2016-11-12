import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('portfolio', function() {
    this.route('avalon');
    this.route('labit');
    this.route('reeltime');
    this.route('other');
    this.route('inprogress');
  });
  this.route('interests');
});

export default Router;
