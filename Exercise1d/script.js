function addList(value) {
    if(document.querySelectorAll("li").length <= 10)
    {
        var li = document.createElement("li")
        li.setAttribute("contentEditable", true)
        li.textContent = value
    
        document.getElementById("list").append(li);
    }else {

        alert("The list is full");
    }
}