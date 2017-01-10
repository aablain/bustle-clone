import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    Ember.$(".button-collapse").sideNav();
    Ember.$('.carousel.carousel-slider').carousel({full_width: true})
  }
});
