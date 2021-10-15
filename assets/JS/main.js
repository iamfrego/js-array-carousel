
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const image = document.querySelector(`div.option`);
const selectedImageToDisplay = document.getElementById('photo');

for (let i = 0; (i < items.length); i++) {

    const optionImage = `<div class="col-12 imgContainer--${i}">
                            <img src="${items[i]}" alt="" id="photo" >
                        </div>`;
    image.innerHTML += optionImage;
}

for (let i = 0; i < items.length; i++) {

    let selected = 0;
    function next() {
        selected++;
        if (selected > (items.length - 1)) {
            selected = 0
        }
    }


    function before() {
        selected--;
        if (selected == 0) {
            selected = items.length
        }
        console.log(items[selected])

    }

}



