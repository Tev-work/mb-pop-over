/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-mb-pop-over',

  included: function(app) {
    this._super.included.apply(this, app);
    var emberTetherAddon = this.addons.filter(function(addon) {
      return addon.name === 'ember-tether';
    })[0];
    emberTetherAddon.importBowerDependencies(app);
  }
};
