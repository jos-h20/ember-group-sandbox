import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr(),
  city: attr(),
  state: attr(),
  lat: attr(),
  lon: attr(),
  // image: attr(),
  description: attr(),
  directions: attr(),
  hikeDistance: Ember.computed('lat', function() {

    var lat1 = this.get('lat');
    var lon1 = this.get('lon');
    var lat2 = 45.5231;
    var lon2 = -122.6765;
    var radlat1 = Math.PI * lat1/180;
    var radlat2 = Math.PI * lat2/180;
    var theta = lon1-lon2;
    var radtheta = Math.PI * theta/180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180/Math.PI;
    dist = dist * 60 * 1.1515;
    console.log(dist.toFixed(1));
    return dist.toFixed(1);
  }),
});

afterModel(){
  console.log('hey, i\'m the after model');
  return "stuff!"
}
