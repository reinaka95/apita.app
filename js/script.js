const foodBtns  = document.querySelectorAll('#foodBtn');
const quantitys = document.querySelectorAll('#quantity');
const choices   = document.querySelectorAll('#choice');


const btns1 = document.querySelectorAll('#btn1');
const btns2 = document.querySelectorAll('#btn2');
const btns3 = document.querySelectorAll('#btn3');
const btns4 = document.querySelectorAll('#btn4');
const btns5 = document.querySelectorAll('#btn5');


const outputArea = document.getElementById('outputArea');
const calc = document.getElementById('calc');




// 商品ボタンをクリックしたら非表示にする, 選択ボタンを表示する.
foodBtns.forEach((foodBtn, num) => {
 foodBtn.addEventListener('click', () => {
   const foodName = String(foodBtns[num].textContent);


   choices[num].classList.remove('hidden');
   foodBtn.classList.add('hidden');
   quantitys[num].classList.add('hidden');
   console.log(foodName,'がクリックされました.');
 });
});


// 選択ボタンをクリックしたら非表示にする, 商品ボタンを表示する.
choices.forEach((choice, num) => {
 choice.addEventListener('click', () => {
   choice.classList.add('hidden');
   foodBtns[num].classList.remove('hidden');
   quantitys[num].classList.remove('hidden');
 });
});


// 選択ボタンをクリックしたらその商品の量に数を書き込む.
btns1.forEach((btn1, num) => {
 btn1.addEventListener('click', () => {
   quantitys[num].textContent = 1, console.log('1が選択されました.');
 });
});


btns2.forEach((btn2, num) => {
 btn2.addEventListener('click', () => {
   quantitys[num].textContent = 2, console.log('2が選択されました.');
 });
});


btns3.forEach((btn3, num) => {
 btn3.addEventListener('click', () => {
   quantitys[num].textContent = 3, console.log('3が選択されました.');
 });
});


btns4.forEach((btn4, num) => {
 btn4.addEventListener('click', () => {
   quantitys[num].textContent = 4, console.log('4が選択されました.');
 });
});


btns5.forEach((btn5, num) => {
 btn5.addEventListener('click', () => {
   quantitys[num].textContent = 5, console.log('5が選択されました.');
 });
});




function makeList() {
 console.log('計算ボタンが押されました.');
 let listHtml = '<ol>';
 let result = '';


 for (let count=1; count<=5; count++) {


   for (let num=0; num<quantitys.length; num++) {
     if (quantitys[num].textContent == count) {
       result = foodBtns[num].textContent;
       listHtml += `<li>${result} : ${count}</li>`;
     }
   }


 }


 listHtml += '</ol>';
 outputArea.innerHTML = listHtml;
}


calc.addEventListener('click', makeList);