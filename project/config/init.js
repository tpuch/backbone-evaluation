var files = [
    'project/views/UsersListView.js',
    'project/views/HomeView.js',
    'project/controllers/HomeControllers.js',
    'project/controllers/UserController.js'
];

var templates = {
    users: {
        url: 'project/templates/users.template',
        id: 'users'
    }
};

var BM = {};

BM.load = function(files){
    files.forEach(function(d){
        var script = $('<script>').attr('src', d);
        $('body').append(script);
    });
};

BM.loadTemplate = function(name) {
        $.ajax({
                method: "GET",
                async: false,
                url: templates[name].url,
                success: function(contents){
                    var script = $('<script>')
                        .attr('id', templates[name].id)
                        .attr('type', 'text/template')
                        .text(contents);
                    $('body').append(script);
                }
            });
}



BM.TasksProject = {};

BM.Routing = Backbone.history;

BM.TasksProject.Router = new (Backbone.Router.extend({
            routes: {
                '' : 'home',
                'users' : 'user'
            }
        }))();

BM.load(files);

BM.Routing.start();
