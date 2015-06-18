import Ember from 'ember';

export default Ember.Controller.extend({

  // default value for when you are opening the page first
  nameFromInput: '',  // could have default for name and phone number
  phoneFromInput: '',

  isShowingPhoneNumber: false,

  actions: {
    toggleShowPhoneNumber() {
      this.toggleProperty('isShowingPhoneNumber');
    },

    addNewContact() {
      var newName = this.get('nameFromInput');
      var newPhone = this.get('phoneFromInput');
      var addressFromInput = this.get('address');

      var newContact = this.store.createRecord('contact', {
        name: newName,
        phone: newPhone,
        address: addressFromInput
      });

      newContact.save();

      this.set('nameFromInput', '');
      this.set('phoneFromInput', '');
      this.set('address', '');
    },


    deleteContact(item) {
      // in second console, type 'item.' and it will bring up a list of what you can do
      // debugger;
      // console.log('delete pushed', item)
      item.destroyRecord();
    }

  }

});
