import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('news-page');
  this.route('beauty-page');
  this.route('entertainment-page');
  this.route('fashion-page');
  this.route('books-page');
  this.route('about-page');
});

export default Router;
