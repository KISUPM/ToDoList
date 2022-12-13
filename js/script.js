let tdl = document.getElementById("show-list");
let text = document.getElementById("ttd");
let i = 0;

function add(){
    let list = createTDL();
    let del = createDeleteBtn();
    if (text.value != '') {
        list.innerHTML = text.value;
        list.appendChild(del);
        tdl.appendChild(list);
        text.value = 'test';
    } else{
        alert("please input your work!");
    }
}

function createTDL(){
    let list = document.createElement("div");
    list.setAttribute("class","tdl");
    list.setAttribute("onclick","finish(this)");
    i+=1;
    return list;
}

function createDeleteBtn(){
    let btn_del = document.createElement("button");
    btn_del.innerHTML = "x";
    btn_del.setAttribute("class","btn btn-danger del");
    btn_del.setAttribute("onclick","deleteTDL(this)");
    return btn_del;
}

function deleteTDL(obj){
    obj.parentElement.remove()
}

function finish(obj){
    obj.classList.toggle("tdldone");
}