
function reposition(selectedItem) {
  let removeId = document.getElementById('selected-photo').removeAttribute('id');
  selectedItem.id = "selected-photo";
  let classElem = document.getElementsByClassName(selectedItem.classList[1]);
  console.log(classElem);
  var classElemArr = Array.from(classElem);
  classElemArr.forEach(function (element) {
    element.style.display = 'block';
  });
};
