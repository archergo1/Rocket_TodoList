const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const list = document.querySelector('.list');

let data = [];
// 用來儲存所有的資料

// 下面這個function，至用來將
function renderData(){
  let str = '';
  data.forEach(function (item,index) {
    str+=`<li>
    <input class="todo__check" type="checkbox">
    ${item.content} 
    <input class="delete" type="button" data-num="${index}" value="delete">
    </li>`
  })
//   checkbox功能參考自https://hackmd.io/@Heidi-Liu/note-js102-todolist
//   利用str這個空字串來組出完整資料
  list.innerHTML = str;
//   將組好的li植入class=list這個ul中 
}
// 新增待辦功能
save.addEventListener('click',function(e){
  if (txt.value=="") {
    alert("請輸入內容");
    return;
    // 防呆機制
  } 
  let obj = {};
  obj.content = txt.value
//   新增content這個屬性，其值就是value
  data.push(obj);
  renderData();
//   讓所儲存代辦事項的刷新顯示在頁面上
})
// 刪除待辦功能
list.addEventListener("click",function(e){
  if(e.target.getAttribute("class")!=="delete"){
    return;
  }
//   利用getattribute來取出對應的屬性的值
  let num = e.target.getAttribute("data-num");
  console.log(num);
  data.splice(num,1);
  alert("刪除成功！");
  renderData();
})


