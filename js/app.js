// creer les variable

let but1 = document.getElementById("but1");
// le bouton
// les séléecteurs
let sel1 = document.getElementById("sel1");
let sel2 = document.getElementById("sel2");
let sel3 = document.getElementById("sel3");
// récupéré les divs 
let d1   = document.querySelector(".div1");
let d2   = document.querySelector(".div2");
let d3   = document.querySelector(".div3");
let d4   = document.querySelector(".div4");
let d5   = document.querySelector(".div5");
let d6   = document.querySelector(".div6");
let d7   = document.querySelector(".div7");
let d8   = document.querySelector(".div8");
let d9   = document.querySelector(".div9");
let d10   = document.querySelector(".div10");
let d11   = document.querySelector(".div11");
let d12   = document.querySelector(".div12");

function test() {
  /****************************** RECHERCHE AVEC COULEURS SEULEMENT *****************************************/
    // si la valeur du select est égal à la valeur on passe dans la 2eme condition
    if(sel1.value == "white"){
        console.log('ok');
        // on passe par la 2eme condition
        // si la div1 à comme style un display different à none 'cacher'
        if(getComputedStyle(d1).display != "none"){
            // les autres div seron cacher
            d2.style.display = "none";
            d3.style.display = "none";
            d4.style.display = "none";
            d5.style.display = "none";
            d6.style.display = "none";
            d8.style.display = "none";
            d9.style.display = "none";
            d10.style.display = "none";
            d11.style.display = "none";
            d12.style.display = "none";
          } else {
            // sinon la div avec couleur blanc sera afficher et les autres masquer 
            // je remer un display none sur les autres div pour bien cacher les autres display
            d1.style.display = "block";
            d7.style.display = "block";
            d2.style.display = "none";
            d3.style.display = "none";
            d4.style.display = "none";
            d5.style.display = "none";
            d6.style.display = "none";
            d8.style.display = "none";
            d9.style.display = "none";
            d10.style.display = "none";
            d11.style.display = "none";
            d12.style.display = "none";
          }
          return

    }
    
    else if (sel1.value == "black"){
        if(getComputedStyle(d2).display != "none"){
            // les autres div seron cacher  
            d1.style.display = "none";
            d3.style.display = "none";
            d4.style.display = "none";
            d5.style.display = "none";
            d6.style.display = "none";
            d7.style.display = "none";
            d9.style.display = "none";
            d10.style.display = "none";
            d11.style.display = "none";
            d12.style.display = "none";
          } else {
            // sinon la div avec couleur noir sera afficher et les autres masquer 
            // je remer un display none sur les autres div pour bien cacher les autres display
            d1.style.display = "none"; 
            d2.style.display = "none";
            d4.style.display = "none";
            d5.style.display = "none";
            d6.style.display = "none";
            d7.style.display = "none";
            d8.style.display = "none";
            d10.style.display = "none";
            d11.style.display = "none";
            d12.style.display = "none";
            d2.style.display = "block";
            d8.style.display = "block";
            
          }
          return
    }

    else if (sel1.value == "orange"){
        if(getComputedStyle(d3).display != "none"){
            // les autres div seron cacher 
            d1.style.display = "none"; 
            d2.style.display = "none";
            d4.style.display = "none";
            d5.style.display = "none";
            d6.style.display = "none";
            d7.style.display = "none";
            d8.style.display = "none";
            d10.style.display = "none";
            d11.style.display = "none";
            d12.style.display = "none";
          } else {
            // sinon la div avec couleur orange sera afficher et les autres masquer 
            // je remer un display none sur les autres div pour bien cacher les autres display
            d1.style.display = "none"; 
            d2.style.display = "none";
            d4.style.display = "none";
            d5.style.display = "none";
            d6.style.display = "none";
            d7.style.display = "none";
            d8.style.display = "none";
            d10.style.display = "none";
            d11.style.display = "none";
            d12.style.display = "none";
            d3.style.display = "block";
            d9.style.display = "block";
          }
          return
    }

    else if (sel1.value == "purple"){
      if(getComputedStyle(d4).display != "none"){
          // les autres div seron cacher
            d1.style.display = "none";
            d2.style.display = "none";
            d3.style.display = "none";
            d5.style.display = "none";
            d6.style.display = "none";
            d7.style.display = "none";
            d8.style.display = "none";
            d9.style.display = "none";
            d11.style.display = "none";
            d12.style.display = "none";
        } else { 
            // sinon la div avec couleur violet sera afficher et les autres masquer 
            // je remer un display none sur les autres div pour bien cacher les autres display
            d4.style.display = "block";
            d10.style.display = "block";
            d1.style.display = "none";
            d2.style.display = "none";
            d3.style.display = "none";
            d5.style.display = "none";
            d6.style.display = "none";
            d7.style.display = "none";
            d8.style.display = "none";
            d9.style.display = "none";
            d11.style.display = "none";
            d12.style.display = "none";
          
        }
        return
    }
    
    else if (sel1.value == "red"){
      if(getComputedStyle(d5).display != "none"){
          // les autres div seron cacher
            d1.style.display = "none"; 
            d2.style.display = "none";
            d3.style.display = "none";
            d4.style.display = "none";
            d6.style.display = "none";
            d7.style.display = "none";
            d8.style.display = "none";
            d9.style.display = "none";
            d10.style.display = "none";
            d12.style.display = "none";
        } else {
          // sinon la div avec couleur rouge sera afficher et les autres masquer 
          // je remer un display none sur les autres div pour bien cacher les autres display
            d5.style.display = "block";
            d11.style.display = "block";
            d1.style.display = "none"; 
            d2.style.display = "none";
            d3.style.display = "none";
            d4.style.display = "none";
            d6.style.display = "none";
            d7.style.display = "none";
            d8.style.display = "none";
            d9.style.display = "none";
            d10.style.display = "none";
            d12.style.display = "none";
        }
        return
      }

      else if (sel1.value == "blue"){
        if(getComputedStyle(d6).display != "none"){
            // les autres div seron cacher
            d1.style.display = "none"; 
            d2.style.display = "none";
            d3.style.display = "none";
            d4.style.display = "none";
            d5.style.display = "none";
            d7.style.display = "none";
            d8.style.display = "none";
            d9.style.display = "none";
            d10.style.display = "none";
            d11.style.display = "none";
          } else {
            // sinon la div avec couleur bleu sera afficher et les autres masquer 
            // je remer un display none sur les autres div pour bien cacher les autres display
            d1.style.display = "none"; 
            d2.style.display = "none";
            d3.style.display = "none";
            d4.style.display = "none";
            d5.style.display = "none";
            d7.style.display = "none";
            d8.style.display = "none";
            d9.style.display = "none";
            d10.style.display = "none";
            d11.style.display = "none";
            d6.style.display = "block";
            d12.style.display = "block";
          }
          return
        }
    /****************************** FIN DE RECHERCHE AVEC COULEURS SEULEMENT */
   /****************************** RECHERCHE AVEC COULEURS ET TSHIRT *****************************************/
        else if(sel1.value == "white" && sel2.value == "tshirt"){
          console.log('ok');
          // on passe par la 2eme condition
          // si la div1 à comme style un display different à none 'cacher'
          if(getComputedStyle(d1).display != "none"){
              // les autres div seron cacher
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "none";
              d10.style.display = "none";
              d11.style.display = "none";
              d12.style.display = "none";
            } else {
              // sinon la div avec couleur blanc sera afficher et les autres masquer 
              // je remer un display none sur les autres div pour bien cacher les autres display
              d1.style.display = "block";
              d7.style.display = "none";
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "none";
              d10.style.display = "none";
              d11.style.display = "none";
              d12.style.display = "none";
            }
            return
  
      }
      
      else if (sel1.value == "black" && sel2.value == "tshirt"){
          if(getComputedStyle(d2).display != "none"){
              // les autres div seron cacher  
              d1.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d7.style.display = "none";
              d9.style.display = "none";
              d10.style.display = "none";
              d11.style.display = "none";
              d12.style.display = "none";
            } else {
              // sinon la div avec couleur noir sera afficher et les autres masquer 
              // je remer un display none sur les autres div pour bien cacher les autres display
              d1.style.display = "none"; 
              d2.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d7.style.display = "none";
              d8.style.display = "none";
              d10.style.display = "none";
              d11.style.display = "none";
              d12.style.display = "none";
              d2.style.display = "block";
              d8.style.display = "none";
              
            }
            return
      }
  
      else if (sel1.value == "orange" && sel2.value == "tshirt"){
          if(getComputedStyle(d3).display != "none"){
              // les autres div seron cacher 
              d1.style.display = "none"; 
              d2.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d7.style.display = "none";
              d8.style.display = "none";
              d10.style.display = "none";
              d11.style.display = "none";
              d12.style.display = "none";
            } else {
              // sinon la div avec couleur orange sera afficher et les autres masquer 
              // je remer un display none sur les autres div pour bien cacher les autres display
              d1.style.display = "none"; 
              d2.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d7.style.display = "none";
              d8.style.display = "none";
              d10.style.display = "none";
              d11.style.display = "none";
              d12.style.display = "none";
              d3.style.display = "block";
              d9.style.display = "none";
            }
            return
      }
  
      else if (sel1.value == "purple" && sel2.value == "tshirt"){
        if(getComputedStyle(d4).display != "none"){
            // les autres div seron cacher
              d1.style.display = "none";
              d2.style.display = "none";
              d3.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d7.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "none";
              d10.style.display = "none";
              d11.style.display = "none";
              d12.style.display = "none";
          } else { 
              // sinon la div avec couleur violet sera afficher et les autres masquer 
              // je remer un display none sur les autres div pour bien cacher les autres display
              d4.style.display = "block";
              d10.style.display = "none";
              d1.style.display = "none";
              d2.style.display = "none";
              d3.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d7.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "none";
              d11.style.display = "none";
              d12.style.display = "none";
            
          }
          return
      }
      
      else if (sel1.value == "red" && sel2.value == "tshirt"){
        if(getComputedStyle(d5).display != "none"){
            // les autres div seron cacher
              d1.style.display = "none"; 
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d6.style.display = "none";
              d7.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "none";
              d10.style.display = "none";
              d12.style.display = "none";
          } else {
            // sinon la div avec couleur rouge sera afficher et les autres masquer 
            // je remer un display none sur les autres div pour bien cacher les autres display
              d5.style.display = "block";
              d11.style.display = "none";
              d1.style.display = "none"; 
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d6.style.display = "none";
              d7.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "none";
              d10.style.display = "none";
              d12.style.display = "none";
          }
          return
        }
  
        else if (sel1.value == "blue" && sel2.value == "tshirt"){
          if(getComputedStyle(d6).display != "none"){
              // les autres div seron cacher
              d1.style.display = "none"; 
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d7.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "none";
              d10.style.display = "none";
              d11.style.display = "none";
            } else {
              // sinon la div avec couleur bleu sera afficher et les autres masquer 
              // je remer un display none sur les autres div pour bien cacher les autres display
              d1.style.display = "none"; 
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d7.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "none";
              d10.style.display = "none";
              d11.style.display = "none";
              d6.style.display = "block";
              d12.style.display = "none";
            }
            return
          }

    else {
        console.log('non');
       
    }
    
}