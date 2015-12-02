let Backbone = require('backbone');

let UserItemView = Backbone.View.extend({
    template: '<span><%= name %></span>'
});

Function.prototype.curry = function() {
    let slice = Array.prototype.slice;
    let args = slice.apply(arguments);
    let that = this;

    return function () {
       return that.apply(null, args.concat(slice.apply(arguments)));
    };
};

var DraggableMixin = (function () {
    var startDrag = function (options) {
       console.log('Options = ', options);
    };
    var onDrag = function () {};

    return function (config) {
       this.startDrag = startDrag.curry(config);
       this.onDrag = onDrag;
       return this;
    };
})();


DraggableMixin.call(UserItemView.prototype, {
    foo: 'bar'
});

var userView = new UserItemView();

userView.startDrag(123);