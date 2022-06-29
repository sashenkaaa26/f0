let list = document.getElementById("book_list");
let selectedli;
list.onclick = function (event) {
  let target = event.target;
  if (target.tagName != "LI") {
    return;
  }
  highlight(target);
};
function highlight(li) {
  if (selectedli) {
    selectedli.classList.remove("highlight");
  }
  selectedli = li;
  selectedli.classList.add("highlight");
}
