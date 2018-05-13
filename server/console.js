app.factory('consoleServer',function(){
    return {
        name:'yaozhu',
        console:function(title){
            console.log(title)
        },
        alert:function(){
            alert(this.name)
        }
    }
})