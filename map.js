import Ember from 'ember';

export default Ember.Component.extend({
  lat: 45.5231,
  long: -122.6765,
  actions: {
    lookup() {
      var latitude = this.get('latitude')
      var longitude = this.get('longitude')
      this.set('lat', latitude);
      this.set('long', longitude);
    }
  }
});
