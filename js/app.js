// $('.carousel').carousel()

const buttons = document.querySelectorAll('.btn');

const users = [
  {
    image: './images/image-tanya.jpg',
    comment: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
    name: 'Tanya Sinclair',
    title: 'UX Engineer',
  },
  {
    image: './images/image-john.jpg',
    comment: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
    name: 'John Tarkpor',
    title: 'Junior Front-end Developer',
  }
];
const image = document.getElementById('image')
const comment = document.getElementById('comment');
const name = document.getElementById('name');
const title = document.getElementById('title');

let index = 0;

buttons.forEach(
  button => {
    button.addEventListener('click', () => {
      if (button.classList.contains('next')) {
        index++;
        console.log(index);

        if (index == 2) {
          index = 0;
        }
      } else {
        index--;
        console.log(index);

        if (index == -1) {
          index = 1;
        }
      }

      const element = users[index];
      
      image.src = element.image;   
      comment.textContent = element.comment;   
      name.textContent = element.name;   
      title.textContent = element.title;
    })
  }
)