const container = document.getElementById('container');

for(let i = 0; i < 1000; i++){
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.backgroundColor = 'yellow';
    star.style.position = 'absolute';
    star.style.left = `${Math.random() * window.innerWidth}px`;
    star.style.top = `${Math.random() * window.innerHeight}px`;
    
    container.appendChild(star);
}