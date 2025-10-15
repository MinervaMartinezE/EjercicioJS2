import './style.css'

//Array con los datos a introducir
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    job: 'web developer',
    img:'https://www.course-api.com/images/people/person-1.jpeg',
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: 'anna johnson',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
  },
  {
    id: 3,
    name: 'peter jones',
    job: 'intern',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
  },
  {
    id: 4,
    name: 'bill anderson',
    job: 'the boss',
    img: 'https://www.course-api.com/images/people/person-3.jpeg',
    text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
  },
];
//Constantes para buscar en el DOM
const img = document.getElementsByClassName('img')[0];
const name = document.getElementsByClassName('name')[0];
const job = document.getElementsByClassName('job')[0];
const text = document.getElementsByClassName('text')[0];

let currentItem = 0; //Seteo de la variable que controla los elementos del array que se van a mostrar

//Función que muestra la información de la review
function showReview(index){
  const item = reviews[index];
  img.src = item.img;
  name.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
}
document.addEventListener("DOMContentLoaded", (event)=>{
  console.log("DOM fully loaded and parsed");
  showReview(currentItem);
});

//Botones
const leftbtn = document.querySelector('.left-btn');
const rightbtn = document.querySelector('.right-btn');

rightbtn.addEventListener('click',() =>{
  currentItem++;
  if (currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showReview(currentItem);
});

leftbtn.addEventListener('click',() =>{
  currentItem--;
  if (currentItem < 0 ){
    currentItem = reviews.length - 1;
  }
  showReview(currentItem);
});

const surprisebtn = document.querySelector('.random-btn');

surprisebtn.addEventListener('click', ()=> {
  let previousItem = currentItem;
  let randomIndex
  
  do {
    randomIndex = Math.floor(Math.random()* reviews.length);
  } while (randomIndex === previousItem);
  
  currentItem = randomIndex;
  showReview(currentItem);
})


