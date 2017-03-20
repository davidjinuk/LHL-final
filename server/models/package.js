import bookshelf from '../bookshelf';
import Shelter from './Shelter';
import User from './User';
import Box from './Box';
import Grocery from './grocery';

const Package = bookshelf.Model.extend({
  tableName: 'package',
  shelter: function() {
    return this.belongsTo(Shelter);
  },
  user() {
    return this.belongsTo(User, 'users_id');
  },
  box: function() {
    return this.hasMany(Box)
  },
  grocery: function(){
    return this.hasOne(Grocery).through(Box, 'id');
  }
});

export default Package;

export function insertPackages(data) {
  return Package.forge({
    shelter_id: data.shelter,
    users_id: data.user,
  }, { hasTimestamps: true }).save()
}

export function deliveryValidate(data) {
  return Package.query({
    where: {id: 2}
    }).save(
    { delivered_at: new Date().toISOString() },
    { method: 'update' }
  );
}

export function getScheduledPackages() {
  return Package.forge({id: 3})
  .fetch({ withRelated: ['shelter', 'box', 'user', 'grocery'] })
  .then(function(packages) {
    return packages.toJSON();
  }).catch(function(err) {
    console.error(err);
  });
}