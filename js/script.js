const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const jump = () => {
  mario.classList.add('jump');
   
  setTimeout(() => {
  mario.classList.remove('jump');

  }, 500);
}
const loop = setInterval(() => {

 const pipePosition = pipe.offsetLeft;
 const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');
 


 if (pipePosition <= 65 && pipePosition > -100 && marioPosition < 10) {
  pipe.style.animation = 'none';
  pipe.style.left = `${pipePosition}px`;

  mario.style.animation = 'none';
  mario.style.bottom = `${marioPosition}px`;

  mario.src = '../imagem/game-over.png';
  mario.style.width = '60px'
  mario.style.marginLeft ='40px'

  clearInterval(loop);


 }
    
    
} ,10);


document.addEventListener('keydown',jump);