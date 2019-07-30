describe("Protractor POC", function(){

    var homePage = requirePO('homePage');
    
    var newTask = 'Create POC for Protractor';
    
    it('should navigate to site', function(){
        browser.get(browser.params.siteURL);
    });

    it('should add a todo item to list', function(){
        homePage.addToDoTask(newTask);
    });

    it('should validate newly added todo item', function(){
        expect(homePage.getToDoTaskCount()).toEqual(3);
        expect(homePage.getToDoTaskText(2)).toEqual(newTask);
    });

    it('should complete newly added task', function(){
        homePage.completeTask(2);
    });

    it('should validate completed tasks count', function(){
        expect(homePage.getCompletedTaskCount()).toEqual(2);
    });
   
});