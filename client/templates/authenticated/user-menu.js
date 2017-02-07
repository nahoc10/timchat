import changeUsername from '../../modules/change-username';

Template.userMenu.helpers({
    name(userId) {
            if (userId) {
                let user = Meteor.users.findOne(userId, {
                    fields: {
                        'username': 1
                    }
                });
                return user.username;
            }
        },
        avatar() {
            if (!Meteor.user().avatar) {
                return user.profile.avatar;
            } else {
                return Images.findOne({
                    _id: Meteor.user().avatar
                });
            }
            /*if (userId) {
                let user = Meteor.users.findOne(userId);

                if (Meteor.user()) {
                    if (Meteor.user().profile) {
                        return user.profile.avatar;
                    } else {
                        return user.avatar;
                        return Images.findOne({
                            _id: Meteor.user().avatar
                        });
                    }
                    return user.avatar;
                }
            }*/
        }
});

Template.userMenu.onRendered(function () {
    $('#textArea.editable').editable({
        success: function (response, newValue) {
            changeUsername(newValue);
        }
    });
});