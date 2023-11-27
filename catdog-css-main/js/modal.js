/** 모달 창 */
const btn = document.querySelector('#submit-btn');
const cancleBtn =document.querySelector('#cancleBtn');
const modalAlert = document.querySelector('#modalAlert');

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    modalAlert.classList.toggle('hidden');
})
cancleBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    modalAlert.classList.toggle('hidden');
})