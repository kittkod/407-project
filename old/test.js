function save() {
    localStorage.setItem("html", document.body.innerHTML)
    }

function set() {
let content = localStorage.getItem("html")
if(content) {
    document.body.innerHTML = content
}
}