let todos = ['first todo', 'second todo', 'third todo'];
let i = 0;

function markAsDone(todos){
    while(i < todos.length){
        todos[i] = 'done - ' + todos[i];
        i++;
    }
    return todos;
}

document.getElementById('result').innerHTML = todos;