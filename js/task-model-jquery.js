$(function(){
  
  (function(){
    var projectHeader = 'Project Header';
    var tasks = [
         { name: 'Task1 first task name', desc: 'Description first task', status: 'todo' },
         { name: 'Task2 second task name', desc: 'Description second task', status: 'inprogress' },
         { name: 'Task3 third task name', desc: 'Description third task', status: 'done'},
         { name: 'Task4 fourth task name', desc: 'Description fourth task', status: 'todo'},
         { name: 'Task5', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dol', status: 'done'}
    ];  
    
    var project = $('<div />').appendTo('body').addClass('project'),
         projectHeader = $('<header />').appendTo(project);
        
    project.wrap('<div class="wrapper"></div>'); 
    projectHeader.text('projectHeader');   
        
    function addTask(item){
      var render = '<div class=\'task-item\'>' +
                          '<div class=\'cube\'>' +
                            '<i class=\'cube-top\'></i>'+
                            '<div class=\'task-layout\'>' +  
                            '<div class=\'task-name\'>' + item.name + '</div>' +
                            '<div class=\'task-desc\'>' + item.desc + '</div>' +
                            '<div class=\'task-status\'>' + '<p>' + item.status + '</p>' + '</div>' +
                            '<a href="#" class=\'btn-delete\'>' + 'delete task' + '</a>' +
                            '</div>'
                            '<i class=\'cube-bottom\'></i>'+
                          '</div>' +
                      '</div>';  
                        
      $(render).appendTo(project);
      
      return render;
    }   
    
    for(var i in tasks){
      addTask(tasks[i]);
    }
    
    $('.task-status').each(function(index, elem) {
      $(this).addClass( $(elem).text());
    });
   
    
    function createTask() {
      
    }
    
    function deleteTask(item) {
      console.log(item);
    }
    
    $('.btn-delete').on('click',function(){
      $(this).closest('.task-item').hide('slow', function(){ $(this).closest('.task-item').remove(); });
    });
        
})();
  
});