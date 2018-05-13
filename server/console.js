app.factory('consoleServer',function(){
    return {
        name:'yaozhu',
        console:function(title){
            console.log(title)
            console.log('这厮master分支')
        },
        alert:function(){
            alert(this.name)
        }
    }
})