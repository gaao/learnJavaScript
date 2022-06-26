const reviews = [
  {
    id: 1,
    name: "John1",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "JOHO2egetbegetget",
  },
  {
    id: 2,
    name: "JOHP2",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "JOHQ4dfdsadfdsfds",
  },
  {
    id: 3,
    name: "JOHR3",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "JOHS6fhfucfhfuhfu",
  },
  {
    id: 4,
    name: "JOH4",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "JOHU8gigvdgigvigv",
  },
  {
    id: 5,
    name: "JOHV5",
    job: "web developer",
    img: "http://",
    text: "JOHW10hjhwehjhwjhw",
  },
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
let currentIten = 0;
window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentIten);
});
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentIten++;
  if (currentIten > reviews.length - 1) {
    currentIten = 0;
  }
  showPerson(currentIten);
});
prevBtn.addEventListener("click", function () {
  currentIten--;
  if (currentIten < 0) {
    currentIten = reviews.length - 1;
  }
  showPerson(currentIten);
});
randomBtn.addEventListener("click", function () {
  currentIten = Math.floor(Math.random() * reviews.length);
  showPerson(currentIten);
}); 
