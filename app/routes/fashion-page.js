import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.get('https://newsapi.org/v1/articles?source=sky-sports-news&sortBy=top&apiKey=bf1f37239598480f9f9a5d12a5d79e79').then (results => {
      return results;
    })
  }
});
