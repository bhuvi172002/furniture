import data from './data.js';
import { addtocart } from './addtocart.js';
import { detail } from './discription.js';


  const productlist = document.querySelector('.productlistChair');






  function a(){
    data.forEach(item => {
        if(item.catogary==='chair'){
    // creating a dynamic tags

    const li = document.createElement('li');
    const img = document.createElement('img');
    const  p = document.createElement('span');
    const  rs = document.createElement('span');
    const  p1 = document.createElement('p');
    const  p2 = document.createElement('p');
    const button_addtocart = document.createElement('button')

     // giving the value to the elements tags
    img.src = item.img
    p1.innerHTML = item.discount_price
    p.innerHTML = item.price
    p2.innerHTML = item.discription
    rs.innerHTML = "Rs "
    button_addtocart.innerHTML = 'Add To Cart'

    // adding event listner 
    button_addtocart.addEventListener('click',()=>addtocart(item))
    img.addEventListener('click',()=>detail(item))
    
    // adding classes to the tags
     p1.classList.add('strike')
    li.classList.add('card')
    img.classList.add('img-size')
    img.classList.add('pointer')
    button_addtocart.classList.add('button')


    // appending  all the tags in sequence 
    li.appendChild(img);
    li.appendChild(p2);
    li.appendChild(p1);
    li.appendChild(rs);
    li.appendChild(p);
    li.appendChild(button_addtocart);
    productlist.appendChild(li);   
        }
      });
    }
a();
