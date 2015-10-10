PlayersList = new Mongo.Collection('players');


if (Meteor.isClient) {



  // log sent messages
  var _send = Meteor.connection._send;
  Meteor.connection._send = function (obj) {
    console.log("send", obj);
    _send.call(this, obj);
  };

  // log received messages
  Meteor.connection._stream.on('message', function (message) {
    console.log("receive", JSON.parse(message));
  });



  _.once(console.log('hello'))
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {

  });
}
