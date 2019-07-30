var homepage = function() {
    
    var toDoInputField = element(by.model('todoList.todoText'));
    var addButton = element(by.css('[value="add"]'));
    var toDoTaskList = element.all(by.repeater('todo in todoList.todos'));
    var completedTasks = element.all(by.xpath('//span[@class="done-true"]'));
    
    this.addToDoTask = function(taskName) {  
        toDoInputField.isDisplayed();  
        toDoInputField.sendKeys(taskName);  
        addButton.click();  
    };

    this.getToDoTaskCount = function() {
        return toDoTaskList.count();
    };

    this.getCompletedTaskCount = function() {
        return completedTasks.count();
    };

    this.getToDoTaskText = function(index) {
        return toDoTaskList.get(index).getText();
    };

    this.completeTask = function(index) {
        toDoTaskList.get(index).element(by.css('input')).click();
    };
    
};
module.exports = new homepage()