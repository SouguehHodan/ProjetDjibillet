// document.body.onload=function(){
//     nb=3
//     p=0
//     Conteiner=document.getElementById("conteiner")
//     g=document.getElementById("lg")
//     d=document.getElementById("rd")
//     Conteiner.style.width=(800*nb)+"px"
//     for(i=1;i<=nb;i++){
//         dv=document.createElement("div")
//         dv.className="tof"
//         dv.style.backgroundImage="url(/imd)"+i+".jpeg"
//         Conteiner.appendChild(dv)
//     }
// }
// g.onclick=function(){
//     if(p>-nb+1)
//         p--
//         Conteiner.style.transform="translate("+p*800+"px)"
//         Conteiner.style.transition="all 0.5s ease"
// }
// d.onclick=function(){
//     if(p<0)
//         p++
//         Conteiner.style.transform="translate("+p*800+"px)"
//         Conteiner.style.transition="all 0.5s ease"
// }


// Example starter JavaScript for disabling form submissions if there are invalid fields
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach((form) => {
    form.addEventListener('submit', (event) => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();