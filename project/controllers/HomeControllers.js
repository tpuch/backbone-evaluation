BM.TasksProject.HomeController = function(){
    BM.TasksProject.HomeView.render();
};

BM.TasksProject.Router.on('route:home', BM.TasksProject.HomeController);
