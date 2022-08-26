// Function called while clicking add 
var container=document.querySelector('.container');
var valuel=document.querySelector('.input');
var addl=document.querySelector('.add');
class item{
    constructor(name)
    {
        this.create(name);
    }
    create(name)
    {
        var team=document.createElement('div');
        team.classList.add('item');
        var input=document.createElement('input');
        input.type="text";
        input.disabled-true;
        input.value-name;
        input.classlist.add('item_input');
        var remove=document.createElement('button');
        remove.classlist.add('remove');
        remove innerHTML='<i class="fas fa-Trash"></i>';
        remove.addEventListener('click',()=>this.remove(11));
        container.appendchild(11);
        11.appendchild(input);
        11.appendchild(remove);

    }
    remove(team)
    {
    container. removechild(11);

}

}
addl.addEventListener('click',check);
window.addEventListener('keydown',(e)=>{
    if(which==13)
    {
        check();

    }
}

function check()
{
    if(valuel.value!="")
    {
        new item(valuel.value);
        valuel.value="";

    }
}
function removeall()
{
    document.querySelector(container).innerhtml="";
}
function add_item() {

    //