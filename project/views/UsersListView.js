BM.TasksProject.UsersListView = new (Backbone.View.extend({
    el: '.main-view',
    render: function() {
        var data = [
            {
                id: 1,
                firstName: 'Test',
                lastName: 'Testowsky',
                nickName: 'Test',
            }
            ,{
                id: 2,
                firstName: 'Test',
                lastName: 'Testowsky',
                nickName: 'Test',
            }
            ,{
                id: 3,
                firstName: 'Test',
                lastName: 'Testowsky',
                nickName: 'Test',
            }
            ,{
                id: 4,
                firstName: 'Test',
                lastName: 'Testowsky',
                nickName: 'Test',
            }
            ,{
                id: 5,
                firstName: 'Test',
                lastName: 'Testowsky',
                nickName: 'Test',
            }
        ];

        if (!$('#users').html()) {
            BM.loadTemplate('users');
        }

        var template = (_.template($('#users').html()))({
            users: data
        });
        this.$el.html(template);
    }
}))();
