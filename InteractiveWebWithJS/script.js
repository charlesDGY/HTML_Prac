const hackerBtn = document.getElementById('hackerBtn');
const main = document.getElementById('main');
const gif = document.getElementById('gif');
const gnrtJkBtn = document.getElementById('gnrtJkBtn');
const setUp = document.getElementById('setUp');
const punchline = document.getElementById('punchline');

hackerBtn.addEventListener('click', () => {
    //change the background color
    main.style.backgroundColor = 'black';
    //change the text color
    main.style.color = 'chartreuse';

    gif.setAttribute("src", "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNGw0NHEzeDRsdnU1OGdnNHZ6djdqMG41b2c2OWdlc3d4dzd1N3h5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT77XZrTKOxycjaYvK/giphy.gif");
});

gnrtJkBtn.addEventListener('click', async () => {
   console.log('Hacker button clicked!'); 
   const response = await fetch('https://official-joke-api.appspot.com/random_joke')
   const jsonResponse = await response.json();
   console.log(jsonResponse);
   setUp.innerText = jsonResponse.setup;
   punchline.innerText = jsonResponse.punchline;
});