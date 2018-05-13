app.factory('consoleServer',function(){
    return {
        name:'yaozhu',
        console:function(title){
            console.log(title)
            console.log('这是一场打印')
        },
        alert:function(){
            alert(this.name)
        }
    }
})