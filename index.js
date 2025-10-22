let todos = ['first todo', 'second todo', 'third todo'];
let i = 0;

function markAsDone(todos){
    while(i < todos.length){
        i++
        todos[i] = 'done - ' + todos[i];
    }
    return todos;
}

document.getElementById('result').innerHTML = todos;