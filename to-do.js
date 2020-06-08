const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: true
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}]​
const filters = {
    searchText: '',
    hideCompleted: false;
}​;
const renderTodos = function(todoData, filterData) {
    var filteredTodos = todoData.filter(function(todo) {
        var searchText = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        var hideCompletedMatch = !todo.completed || !filters.hideCompleted;
        return searchTextMatch && hideCompletedMatch;
    });
    var imcompleteTodos = filteredTodos.filter(function(todo) {
        return !todo.complete; //false  
    });
    document.querySelector('#todos').innerHTML = '';
    var summary = document.createElement('h2');
    summary.textContent = `you have ${incompleteTodos.length}todos left`;
    document.querySelector('#todos').appendChild(summary);

    filteredTodos.forEach(function(todo) {
        var p = document.createElement('p');
        p.textContent = todo.text;
        document.getElementById('todos').appendChild(p);
    });
};
renderTodos(todos, filters)
    // Listen for new todo creation
document.querySelector('#add-todo').addEventListener('click', function(e) {
        console.log('Add a new todo...')
    })​
    // Listen for todo text change
document.querySelector('#new-todo').addEventListener('input', function(e) {
    console.log(e.target.value)
})​;
document.querySelector('#search-text').addEventListener()




document.querySelector('#add-todo').addEventListener('submit')



document.querySelector('#add-todo');
const toggle = document.querySelector('#hide-completed');
const hideInput = _ => { //Hide the input by toggling the '.hide' css class
    input.classList.toggle('hide');
    input.focus();
}
toggle.addEventListener('click', _ => { //hideInput event listener
    hideInput();
});
document.querySelector('hide-completed').addEventListener('change', function(evt) {
    filters.hideCompleted = evt.target.checked;
    renderTodos(todos, filters);
});
// I've added above an object called filters
// filter on the input to get data based on typing 
// data on the input
// an example is if you look above if you typed"uy"
// you'll see only 'buy food' in the browser
// use the example of notes-app we created yesterday to achieve that