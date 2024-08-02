
 // Inside app.js

const loginForm = document.getElementById('login-form');
const x =  document.getElementById('bunnyji');
const y=  document.getElementById('box');
const z=  document.getElementById('hi');
const w= document.getElementById('blink');
const containers = document.getElementsByClassName('container')
const myintro= document.getElementById('my');
const navigations=document.getElementById('mySidenav');
const aboutLink = document.getElementById('about');
const collectionsLink = document.getElementById("blog");
const projectlink = document.getElementById("projects");
const contactlink = document.getElementById("contact");




loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  // Simulate successful login (replace with actual validation)
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === 'bhumi' && password === '123') {
    loginForm.style.display = 'none'; // Hide login form
    x.style.display = 'none';
    y.style.display = 'none';
    z.style.display= 'none';
    w.style.display= 'none';
    document.getElementById('background').style.display = 'block';
    myintro.style.display='block';
    navigations.style.display='block';
    
   
aboutLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default behavior (following the link)
  document.getElementById('art-collection').style.display='none';
  document.getElementById('background').style.display = 'none';
  document.getElementById('aboutbhumi').style.display= 'block';
  document.getElementById('bhumiji4').style.display= 'block';
  document.getElementById('bhumiji5').style.display= 'block';
 containers.style.display= 'none';
 document.getElementById('contact-page').style.display='none';

  


});


collectionsLink.addEventListener("click", (event)   =>{
  event.preventDefault(); // Prevent default behavior (following the link)
  
  document.getElementById('background').style.display = 'none';
  document.getElementById('aboutbhumi').style.display= 'none';
  document.getElementById('bhumiji4').style.display= 'none';
  document.getElementById('bhumiji5').style.display= 'none';
  document.getElementById('project-collection').style.display='none';
  document.getElementById('art-collection').style.display='block';
  document.getElementById('contact-page').style.display='none';
 
});


projectlink.addEventListener("click", (event)   =>{
  event.preventDefault(); // Prevent default behavior (following the link)
  
  document.getElementById('background').style.display = 'none';
  document.getElementById('aboutbhumi').style.display= 'none';
  document.getElementById('bhumiji4').style.display= 'none';
  document.getElementById('bhumiji5').style.display= 'none';
 
  document.getElementById('art-collection').style.display='none';
  document.getElementById('project-collection').style.display='block';
  document.getElementById('contact-page').style.display='none';
  
 
});



contactlink.addEventListener("click", (event)   =>{
  event.preventDefault(); // Prevent default behavior (following the link)
  
  document.getElementById('background').style.display = 'none';
  document.getElementById('aboutbhumi').style.display= 'none';
  document.getElementById('bhumiji4').style.display= 'none';
  document.getElementById('bhumiji5').style.display= 'none';
 
  document.getElementById('art-collection').style.display='none';
  document.getElementById('project-collection').style.display='none';
  document.getElementById('contact-page').style.display='block';
 
});


  } 

  else {
    alert('Invalid username or password!');
  }
});
