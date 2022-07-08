let movies = [
    {
        name: 'loki',
        des: 'Tempor excepteur culpa dolor consectetur ad excepteur in in fugiat nisi.',
        image: 'images/slider 1.PNG'
    },
    {
        name: 'falcon and the winter soldier',
        des: 'Mollit ea non ea velit duis eu ex cillum laboris quis eiusmod.',
        image: 'images/slider 2.PNG'
    },
    {
        name: 'wanda vision',
        des: 'Ad voluptate do occaecat magna fugiat sunt ipsum anim mollit sunt nulla. ',
        image: 'images/slider 3.PNG'
    },
    {
        name: 'raya and the last dragon',
        des: 'Magna ut cupidatat nisi do consectetur enim irure Lorem.',
        image: 'images/slider 4.PNG'
    },
    {
        name: 'luca',
        des: 'Eiusmod ex ullamco aute incididunt officia dolore incididunt tempor labore anim anim ipsum et adipisicing.',
        image: 'images/slider 5.PNG'
    }
];

const carousel = document.querySelector('.carousel');
let sliders = [];

let slideIndex = 0; // track the current slide

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }

    // creating DOM elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    // attaching all the elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    // slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up the images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    //setting element class-names
    slide.ClassName = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);

    //adding sliding effect
    
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)} - ${
            30 * (sliders.length - 2)
        }px)`;
    }
}

for (let i = 0; i<3; i++) {
    createSlide();
}

setInterval(()=>{
    createSlide();
}, 3000);

// video cards


const videoCards = [...document.querySelectorAll('.card-video')];

videoCards.forEach(item => {
    item.addEventListener('mouseover', ()=> {
        let video = item.children[1];
        video.play();
    });
    
    item.addEventListener('mouseleave', ()=> {
        let video = item.children[1];
        video.pause();
    });
});

//card sliders 

let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', ()=> {
        item.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener('click', ()=> {
        item.scrollLeft -= containerWidth + 200;
    });
});
