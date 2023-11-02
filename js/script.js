function five (){
    alert('Я ЧЕКАЮ )))))))')   
}

const random = (min, max) => {
    return min + Math.random() * (max - min);
}

const btn_anima = document.getElementById('button_hovers');

btn_anima.addEventListener('mouseenter', () => {
    btn_anima.style.left = `${random(0, 90)}%`; // Заменяем "px" на "%"
    btn_anima.style.top = `${random(0, 90)}%`; // Заменяем "px" на "%"
    
});

btn_anima.addEventListener('click' , () => {
    alert('Да ты волшебник , но 2 не ставте (((')
})