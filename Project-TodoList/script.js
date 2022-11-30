let ulTasks = $('#ulTasks')
let btnAdd = $('#btnAdd')
let btnReset = $('#btnReset')
let inpNewTask = $('#inpNewTask')
let btnClear = $('#btnClear')
let btnSort = $('#btnSort')

function addItem() {
    let listItem = $('<li>', {
        'class': 'list-group-item',
        text: inpNewTask.val()
    })

    $(listItem).click(() => {
        listItem.toggleClass('d')
    })
    ulTasks.append(listItem);

    // console.log(inpNewTask.val())
    inpNewTask.val('');
}

function clear(){
    
    $('#ulTasks .d').remove();
}

function sort(){
    $('#ulTasks .d').appendTo(ulTasks);
}

function resetButton(valIsEmpty){
    if(!valIsEmpty){
        btnReset.prop('disabled',false);
        btnAdd.prop('disabled',false);
    }
    else{
        btnReset.prop('enabled',true)
        btnAdd.prop('enabled',true)
    }
}

btnAdd.click(() => {
    addItem();
})

inpNewTask.keypress((e) => {
    if (e.which == 13) {
        addItem();
    }
})

btnReset.click(() => {
    inpNewTask.val('')
    resetButton(true);
})

btnClear.click(()=>{
    clear();
})

btnSort.click(()=>{
    sort();
})

inpNewTask.on('input', ()=>{
    console.log(inpNewTask.val())
    resetButton(inpNewTask.val() == "")
    
})





