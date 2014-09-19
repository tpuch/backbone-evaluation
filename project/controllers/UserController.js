BM.TasksProject.UserControllerIndex = function(){
   BM.TasksProject.UsersListView.render();
};

BM.TasksProject.Router.on('route:user', BM.TasksProject.UserControllerIndex);
