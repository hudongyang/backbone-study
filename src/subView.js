let Backbone = require('backbone'),

    _ = require('underscore'),

    User = Backbone.Model.extend({}),
    Users = Backbone.Collection.extend({
        model: User
    }),

    users = new Users([{
        id: 1,
        name: 'hudy'
    }, {
        id: 2,
        name: 'caih'
    }, {
        id: 3,
        name: 'huyf'
    }]),

    UserItemView = Backbone.View.extend({
        tagName: 'li',
        template: '<%= name %>',
        events: {
            'click': 'showName'
        },
        render() {
            let html = _.template(this.template)(this.model.toJSON());

            this.$el.html(html);

            return this;
        },
        showName: function() {
            console.log(this.model.get('name'));
        }
    }),

    UsersView = Backbone.View.extend({
        tagName: 'ul',
        render() {
            let fragment = document.createDocumentFragment(),
                itemView;

            this.collection.each(function(model) {
                itemView = new UserItemView({
                    model: model
                });

                fragment.appendChild(itemView.render().el);
            }, this);

            this.$el.html(fragment);

            return this;
        }
    }),

    usersView = new UsersView({
        collection: users
    }).render();


$('body').prepend(usersView.el);