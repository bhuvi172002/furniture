
import { addtocart } from './addtocart.js';


export function detail(item) {
    const con = document.querySelector('.con');
    const diss = document.querySelector('.diss');
    const disscon = document.querySelector('.dis-con');
    const disscon1 = document.querySelector('.dis-con1');

    disscon.innerHTML=''
    disscon1.innerHTML=''


    // Toggle visibility
    con.style.display = 'none';
    diss.style.display = 'flex';


    // Create new elements
    const img = document.createElement('img');
    const imgcon = document.createElement('div');
    const  p = document.createElement('span');
    const  rs = document.createElement('span');
    const  p1 = document.createElement('p');
    const  p2 = document.createElement('h1');
    const  pd = document.createElement('p');



    const button_addtocart = document.createElement('button')
    const button_back = document.createElement('button')

    // Set attributes and content
    img.src = item.img;
    p1.innerHTML = item.discount_price
    p.innerHTML = item.price
    p2.innerHTML = item.discription
    rs.innerHTML = "Rs "
    pd.innerHTML = item.detailed_discription
      button_addtocart.innerHTML = 'Add To Cart'
      button_back.innerHTML = 'EXIT'
    // Add classes
    img.classList.add('img2');
    imgcon.classList.add('detailcon');
    p1.classList.add('strike')
    pd.classList.add('detailp')

    button_addtocart.classList.add('button')
    button_back.classList.add('button')


         // adding event listner 
         button_addtocart.addEventListener('click',()=>addtocart(item))
         button_back.addEventListener('click',()=>{
            con.style.display = 'block';
            diss.style.display = 'none';
         })



    // Append new elements
    disscon.appendChild(imgcon);
    imgcon.appendChild(img);
    disscon1.appendChild(p2)
    disscon1.appendChild(p1)
    disscon1.appendChild(rs)
    disscon1.appendChild(p)
    disscon1.appendChild(pd)
    disscon1.appendChild(button_addtocart)
    disscon1.appendChild(button_back)
    
}
