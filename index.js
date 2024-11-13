
 function  toggleon(to_toggle){
         const home = document.querySelector('.home');
         const Almirah = document.querySelector('.Almirah');
         const Chair = document.querySelector('.Chair');
         const Coutch = document.querySelector('.Coutch');
         const Dining = document.querySelector('.Dining');
         const Dressing = document.querySelector('.Dressing');
         const Shanglere = document.querySelector('.Shanglere');
         const Sofa = document.querySelector('.Sofa');
         const beds = document.querySelector('.beds');
         const cart = document.querySelector('.cart');
        const diss = document.querySelector('.diss');
        const con = document.querySelector('.con');
         if(to_toggle == "home"){

          con.style.display = 'block'
          diss.style.display = 'none'
          home.style.display = 'block'
          beds.style.display = 'none'
          Almirah.style.display = 'none'
          Chair.style.display = 'none'
          Coutch.style.display = 'none'
          Dining.style.display = 'none'
          Dressing.style.display = 'none'
          Shanglere.style.display = 'none'
          Sofa.style.display = 'none'
           cart.style.display = 'none'

         }
         if(to_toggle == "Almirah"){
          home.style.display = 'none'
           con.style.display = 'block'
           diss.style.display = 'none'
          beds.style.display = 'none'
           cart.style.display = 'none'
           Almirah.style.display = 'block'
           Chair.style.display = 'none'
           Coutch.style.display = 'none'
           Dining.style.display = 'none'
           Dressing.style.display = 'none'
           Shanglere.style.display = 'none'
           Sofa.style.display = 'none'
         }
         if(to_toggle == "Chair"){
          home.style.display = 'none'
           con.style.display = 'block'
           diss.style.display = 'none'
          beds.style.display = 'none'
           cart.style.display = 'none'
           Almirah.style.display = 'none'
           Chair.style.display = 'block'
           Coutch.style.display = 'none'
           Dining.style.display = 'none'
           Dressing.style.display = 'none'
           Shanglere.style.display = 'none'
           Sofa.style.display = 'none'
         }
         if(to_toggle == "Coutch"){
          home.style.display = 'none'
           con.style.display = 'block'
           diss.style.display = 'none'
          beds.style.display = 'none'
           cart.style.display = 'none'
           Almirah.style.display = 'none'
           Chair.style.display = 'none'
           Coutch.style.display = 'block'
           Dining.style.display = 'none'
           Dressing.style.display = 'none'
           Shanglere.style.display = 'none'
           Sofa.style.display = 'none'
         }
         if(to_toggle == "Dining"){
          home.style.display = 'none'
           con.style.display = 'block'
           diss.style.display = 'none'
          beds.style.display = 'none'
           cart.style.display = 'none'
           Almirah.style.display = 'none'
           Chair.style.display = 'none'
           Coutch.style.display = 'none'
           Dining.style.display = 'block'
           Dressing.style.display = 'none'
           Shanglere.style.display = 'none'
           Sofa.style.display = 'none'
         }
         if(to_toggle == "Dressing"){
          home.style.display = 'none'
           con.style.display = 'block'
           diss.style.display = 'none'
          beds.style.display = 'none'
           cart.style.display = 'none'
           Almirah.style.display = 'none'
           Chair.style.display = 'none'
           Coutch.style.display = 'none'
           Dining.style.display = 'none'
           Dressing.style.display = 'block'
           Shanglere.style.display = 'none'
           Sofa.style.display = 'none'
         }
         if(to_toggle == "Shanglere"){
          home.style.display = 'none'
           con.style.display = 'block'
           diss.style.display = 'none'
          beds.style.display = 'none'
           cart.style.display = 'none'
           Almirah.style.display = 'none'
           Chair.style.display = 'none'
           Coutch.style.display = 'none'
           Dining.style.display = 'none'
           Dressing.style.display = 'none'
           Shanglere.style.display = 'block'
           Sofa.style.display = 'none'
         }
         if(to_toggle == "Sofa"){
          home.style.display = 'none'
           con.style.display = 'block'
           diss.style.display = 'none'
          beds.style.display = 'none'
           cart.style.display = 'none'
           Almirah.style.display = 'none'
           Chair.style.display = 'none'
           Coutch.style.display = 'none'
           Dining.style.display = 'none'
           Dressing.style.display = 'none'
           Shanglere.style.display = 'none'
           Sofa.style.display = 'block'
         }
         if(to_toggle == "beds"){
         
          home.style.display = 'none'
           con.style.display = 'block'
           diss.style.display = 'none'
          beds.style.display = 'block'
           cart.style.display = 'none'
           Almirah.style.display = 'none'
           Chair.style.display = 'none'
           Coutch.style.display = 'none'
           Dining.style.display = 'none'
           Dressing.style.display = 'none'
           Shanglere.style.display = 'none'
           Sofa.style.display = 'none'
         }
         if(to_toggle == "cart"){
          home.style.display = 'none'
           con.style.display = 'block'
           diss.style.display = 'none'
          beds.style.display = 'none'
          cart.style.display = 'block'
          Almirah.style.display = 'none'
          Chair.style.display = 'none'
          Coutch.style.display = 'none'
          Dining.style.display = 'none'
          Dressing.style.display = 'none'
          Shanglere.style.display = 'none'
          Sofa.style.display = 'none'

         }


}

function togglemenu(){
  const tabs = document.querySelectorAll('.tab');
 const nav =  document.querySelector('nav')
 if (tabs[0].style.display === 'none') {
  nav.style.width = '200px';
  nav.style.backgroundColor = 'black'
  tabs.forEach(tab => {
    tab.style.display = 'block';
  });
} else {
  nav.style.width = '50px';
  nav.style.backgroundColor = ''
  tabs.forEach(tab => {
    tab.style.display = 'none';
  });
}
}