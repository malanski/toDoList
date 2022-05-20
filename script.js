function addTask(){
    document.getElementById('submit').addEventListener('click', function() {
        const list = document.getElementById('check-task')
        const text = document.getElementById('task')

        const input = document.createElement('input')
        const label = document.createElement('label')
        const div = document.createElement('div')

        const type = document.createAttribute('type')
        const className = document.createAttribute('class')
        const classDiv = document.createAttribute('class')
        // const checks = document.createAttribute('onclick')

        type.value = 'checkbox'
        className.value = 'checkboxs'
        classDiv.value = 'task-container'
        // checks.value = lineThrough()

        label.textContent = text.value

        input.setAttributeNode(type);
        input.setAttributeNode(className);
        div.setAttributeNode(classDiv);

        list.appendChild(div);
        div.appendChild(input);
        div.appendChild(label);

        text.value = '';
        // lineThrough()
        text.focus();
    })

}
// function lineThrough(){
//     document.getElementById('checkbox').addEventListener('checked', function() {
//         const style = document.createAttribute('style')

//         style.value = 'text-decoration: line-through;'
//     })
// }

window.addEventListener('load', addTask);
// window.addEventListener('load', lineThrough);
