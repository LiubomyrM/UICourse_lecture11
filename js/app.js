function run(id) {
    var result = 0;
    for (var i = 0; i < 1000; i++) {
        for (var j = 0; j < 700; j++) {
            for (var k = 0; k < 300; k++) {
                result = result + i + j + k;
            }
        }
    }
    document.getElementById(id).innerHTML = "done";
}

document.getElementById('act').onclick = function () {
    document.getElementById('status').innerHTML = 'calculating...';
    run ('status');
}

document.getElementById('act_ok').onclick = function () {
    document.getElementById('status_ok').innerHTML = 'calculating...';
    //letting javascript pause the execution to let the rendering catch up.
    setTimeout(function() {run('status_ok')},0);
}
//BAD EXAMPLE- Timeout took the property out of context of "this" and resulted in undefined, or if the object is re-written the latter one will be the new context.
var obj = {
    name: 'Me',
    hi: function() {
    alert('Hi ' + this.name);
}
}
setTimeout(function(){obj.hi()}, 2000);
setTimeout(obj.hi.bind(0),3000);
var obj = {
    hi: function() {
        alert('go to hell!');
    }
}