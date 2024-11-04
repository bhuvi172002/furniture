
import { detail } from './discription.js';
//  function to add to cart
let total = 0;

const cartdata = [];
export function addtocart(item){
  cartdata.push(item);
  alert('item added to cart')
   total +=  parseInt(item.price);
  show();
} 
//  function to delete to cart




function  delfromcart(item){
  const index = cartdata.indexOf(item);
  if (index > -1) {
      cartdata.splice(index, 1);
  }
total -= parseInt(item.price)
show();

}

// function to show the array 

function show(){

  const productlistcart = document.querySelector('.productlistcart');
  const footer = document.querySelector('.footer');
  
  
  productlistcart.innerHTML = '';
  footer.innerHTML = '';

  const pay = document.createElement('button')
  const total1 = document.createElement('h3')


  pay.innerHTML = 'PLACE YOUR ORDER'
  total1.innerHTML = total

  footer.classList.add('footer')
  pay.classList.add('button')
  total1.classList.add('totaltext')

pay.addEventListener('click',()=>placeyourorder())

footer.appendChild(pay)
footer.appendChild(total1)


  cartdata.forEach(item => {
    // creating a dynamic tags

    const li = document.createElement('li');
    const img = document.createElement('img');
    const  p = document.createElement('span');
    const  rs = document.createElement('span');
    const  p1 = document.createElement('p');
    const  p2 = document.createElement('p');
      const button_remove = document.createElement('button')
      
       // giving the value to the elements tags
       img.src = item.img
       p1.innerHTML = item.discount_price
       p.innerHTML = item.price
       p2.innerHTML = item.discription
       rs.innerHTML = "Rs "
      button_remove.innerHTML = 'remove'
    
      button_remove.addEventListener('click',()=>delfromcart(item))
      img.addEventListener('click',()=>detail(item))
      // adding classes to the tags

      li.classList.add('card')
      p1.classList.add('strike')
      img.classList.add('img-size')
      img.classList.add('pointer')
      button_remove.classList.add('button')
      p1.classList.add('strike')
      


      // appending  all the tags in sequence 
      li.appendChild(img);
        li.appendChild(p2);
        li.appendChild(p1);
        li.appendChild(rs);
        li.appendChild(p);
      li.appendChild(button_remove);
      productlistcart.appendChild(li);
     
    });
 
}


function placeyourorder(){
       alert('your order have been placed')

       window.location.reload();

}