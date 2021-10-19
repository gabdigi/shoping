// creer les variables
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
    // si la valeur du select est égal à la valeur on passe dans la condition
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
                if(sel1.value == "white" && sel2.value == "tshirt" || sel1.value == "white" && sel3.value == "5€" || sel1.value == "white" && sel2.value == "tshirt" && sel3.value == "5€"){
                  console.log('ok');
                  // si la valeur blanc et tshirt sont égale à leur valeurs ou blanc et 5€ ou les 3 valeurs blanc tshirt 5€ sont égale à leur valeur
                  // on passe par la 3eme condition
                  // si la div1 à comme style un display different à none 'cacher'
                  if(getComputedStyle(d1).display != "none"){
                      // les autres div seron cacher
                      d2.style.display = "none";
                      d3.style.display = "none";
                      d4.style.display = "none";
                      d5.style.display = "none";
                      d6.style.display = "none";
                      d7.style.display = "none";
                      d8.style.display = "none";
                      d9.style.display = "none";
                      d10.style.display = "none";
                      d11.style.display = "none";
                      d12.style.display = "none";
                    } else {
                      // sinon la div avec couleur les valeurs tshirt blanc sera afficher et les autres masquer 
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
          
              }
                if(sel1.value == "white" && sel2.value == "sweatshirt" || sel1.value == "white" && sel3.value == "25€" || sel1.value == "white" && sel2.value == "sweatshirt" && sel3.value == "25€"){
                  console.log('ok');
                  // si la valeur blanc et sweatshirt sont égale à leur valeurs ou blanc et 5€ ou les 3 valeurs blanc sweatshirt 5€ sont égale à leur valeur
                  // on passe par la 3eme condition
                  // si la div1 à comme style un display different à none 'cacher'
                  if(getComputedStyle(d7).display != "none"){
                      // les autres div seron cacher
                      d1.style.display = "none";
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
                      // sinon la div avec couleur les valeurs sweatshirt blanc sera afficher et les autres masquer 
                      // je remer un display none sur les autres div pour bien cacher les autres display
                      d1.style.display = "none";
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
          
              }
              
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

          if(sel1.value == "black" && sel2.value == "tshirt" || sel1.value == "black" && sel3.value == "5€" || sel1.value == "black" && sel2.value == "tshirt" && sel3.value == "5€"){
            console.log('ok');
            // si la valeur noir et tshirt sont égale à leur valeurs ou noir et 5€ ou les 3 valeurs noir tshirt 5€ sont égale à leur valeur
            // on passe par la 3eme condition
            // si la div1 à comme style un display different à none 'cacher'
            if(getComputedStyle(d2).display != "none"){
                // les autres div seron cacher
                d1.style.display = "none";
                d3.style.display = "none";
                d4.style.display = "none";
                d5.style.display = "none";
                d6.style.display = "none";
                d7.style.display = "none";
                d8.style.display = "none";
                d9.style.display = "none";
                d10.style.display = "none";
                d11.style.display = "none";
                d12.style.display = "none";
              } else {
                // sinon la div avec couleur blanc sera afficher et les autres masquer 
                // je remer un display none sur les autres div pour bien cacher les autres display
                d1.style.display = "none";
                d7.style.display = "none";
                d2.style.display = "block";
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

        }

          if(sel1.value == "black" && sel2.value == "sweatshirt" || sel1.value == "black" && sel3.value == "25€" || sel1.value == "black" && sel2.value == "sweatshirt" && sel3.value == "25€"){
            console.log('ok');
            // si la valeur noir et sweatshirt sont égale à leur valeurs ou noir et 25€ ou les 3 valeurs noir tshirt 25€ sont égale à leur valeur
            // on passe par la 3eme condition
            // si la div1 à comme style un display different à none 'cacher'
            if(getComputedStyle(d8).display != "none"){
                // les autres div seron cacher
                d1.style.display = "none";
                d2.style.display = "none";
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
                // sinon la div avec couleur blanc sera afficher et les autres masquer 
                // je remer un display none sur les autres div pour bien cacher les autres display
                d1.style.display = "none";
                d7.style.display = "none";
                d2.style.display = "none";
                d3.style.display = "none";
                d4.style.display = "none";
                d5.style.display = "none";
                d6.style.display = "none";
                d8.style.display = "block";
                d9.style.display = "none";
                d10.style.display = "none";
                d11.style.display = "none";
                d12.style.display = "none";
              }
    
        }
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
          if(sel1.value == "orange" && sel2.value == "tshirt" || sel1.value == "orange" && sel3.value == "5€" || sel1.value == "orange" && sel2.value == "tshirt" && sel3.value == "5€"){
            console.log('ok');
            // on passe par la 2eme condition
            // si la div1 à comme style un display different à none 'cacher'
            if(getComputedStyle(d3).display != "none"){
                // les autres div seron cacher
                d1.style.display = "none";
                d2.style.display = "none";
                d4.style.display = "none";
                d5.style.display = "none";
                d6.style.display = "none";
                d7.style.display = "none";
                d8.style.display = "none";
                d9.style.display = "none";
                d10.style.display = "none";
                d11.style.display = "none";
                d12.style.display = "none";
              } else {
                // sinon la div avec couleur blanc sera afficher et les autres masquer 
                // je remer un display none sur les autres div pour bien cacher les autres display
                d1.style.display = "none";
                d7.style.display = "none";
                d2.style.display = "none";
                d3.style.display = "block";
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
        if(sel1.value == "orange" && sel2.value == "sweatshirt" || sel1.value == "orange" && sel3.value == "25€" || sel1.value == "orange" && sel2.value == "sweatshirt" && sel3.value == "25€"){
          console.log('ok');
          // on passe par la 2eme condition
          // si la div1 à comme style un display different à none 'cacher'
          if(getComputedStyle(d9).display != "none"){
              // les autres div seron cacher
              d1.style.display = "none";
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d7.style.display = "none";
              d10.style.display = "none";
              d11.style.display = "none";
              d12.style.display = "none";
            } else {
              // sinon la div avec couleur blanc sera afficher et les autres masquer 
              // je remer un display none sur les autres div pour bien cacher les autres display
              d1.style.display = "none";
              d7.style.display = "none";
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "block";
              d10.style.display = "none";
              d11.style.display = "none";
              d12.style.display = "none";
            }
  
      }
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
        if(sel1.value == "purple" && sel2.value == "tshirt" || sel1.value == "purple" && sel3.value == "5€" || sel1.value == "purple" && sel2.value == "tshirt" && sel3.value == "5€"){
          console.log('ok');
          // on passe par la 2eme condition
          // si la div1 à comme style un display different à none 'cacher'
          if(getComputedStyle(d4).display != "none"){
              // les autres div seron cacher
              d1.style.display = "none";
              d2.style.display = "none";
              d4.style.display = "block";
              d5.style.display = "none";
              d6.style.display = "none";
              d7.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "none";
              d10.style.display = "none";
              d11.style.display = "none";
              d12.style.display = "none";
            } else {
              // sinon la div avec couleur blanc sera afficher et les autres masquer 
              // je remer un display none sur les autres div pour bien cacher les autres display
              d1.style.display = "none";
              d7.style.display = "none";
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "block";
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
        if(sel1.value == "purple" && sel2.value == "sweatshirt" || sel1.value == "purple" && sel3.value == "25€" || sel1.value == "purple" && sel2.value == "sweatshirt" && sel3.value == "25€"){
          console.log('ok');
          // on passe par la 2eme condition
          // si la div1 à comme style un display different à none 'cacher'
          if(getComputedStyle(d10).display != "none"){
              // les autres div seron cacher
              d1.style.display = "none";
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d7.style.display = "none";
              d8.style.display = "none";
              d11.style.display = "none";
              d12.style.display = "none";
            } else {
              // sinon la div avec couleur blanc sera afficher et les autres masquer 
              // je remer un display none sur les autres div pour bien cacher les autres display
              d1.style.display = "none";
              d7.style.display = "none";
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "none";
              d10.style.display = "block";
              d11.style.display = "none";
              d12.style.display = "none";
            }

      }
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
        if(sel1.value == "red" && sel2.value == "tshirt" || sel1.value == "red" && sel3.value == "5€" || sel1.value == "red" && sel2.value == "tshirt" && sel3.value == "5€"){
          console.log('ok');
          // on passe par la 2eme condition
          // si la div1 à comme style un display different à none 'cacher'
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
              d11.style.display = "none";
              d12.style.display = "none";
            } else {
              // sinon la div avec couleur blanc sera afficher et les autres masquer 
              // je remer un display none sur les autres div pour bien cacher les autres display
              d1.style.display = "none";
              d7.style.display = "none";
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "block";
              d6.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "none";
              d10.style.display = "none";
              d11.style.display = "none";
              d12.style.display = "none";
            }
            return
  
      }
        if(sel1.value == "red" && sel2.value == "sweatshirt" || sel1.value == "red" && sel3.value == "25€" || sel1.value == "red" && sel2.value == "sweatshirt" && sel3.value == "25€"){
          console.log('ok');
          // on passe par la 2eme condition
          // si la div1 à comme style un display different à none 'cacher'
          if(getComputedStyle(d11).display != "none"){
              // les autres div seron cacher
              d1.style.display = "none";
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d7.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "none";
              d10.style.display = "none";
              d12.style.display = "none";
            } else {
              // sinon la div avec couleur blanc sera afficher et les autres masquer 
              // je remer un display none sur les autres div pour bien cacher les autres display
              d1.style.display = "none";
              d7.style.display = "none";
              d2.style.display = "none";
              d3.style.display = "none";
              d4.style.display = "none";
              d5.style.display = "none";
              d6.style.display = "none";
              d8.style.display = "none";
              d9.style.display = "none";
              d10.style.display = "none";
              d11.style.display = "block";
              d12.style.display = "none";
            }

      }
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
            if(sel1.value == "blue" && sel2.value == "tshirt" || sel1.value == "blue" && sel3.value == "5€" || sel1.value == "blue" && sel2.value == "tshirt" && sel3.value == "5€"){
              console.log('ok');
              // on passe par la 2eme condition
              // si la div1 à comme style un display different à none 'cacher'
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
                  d12.style.display = "none";
                  
                } else {
                  // sinon la div avec couleur blanc sera afficher et les autres masquer 
                  // je remer un display none sur les autres div pour bien cacher les autres display
                  d1.style.display = "none";
                  d7.style.display = "none";
                  d2.style.display = "none";
                  d3.style.display = "none";
                  d4.style.display = "none";
                  d5.style.display = "none";
                  d6.style.display = "block";
                  d8.style.display = "none";
                  d9.style.display = "none";
                  d10.style.display = "none";
                  d11.style.display = "none";
                  d12.style.display = "none";
                }
                return
      
          }
          if(sel1.value == "blue" && sel2.value == "sweatshirt" || sel1.value == "blue" && sel3.value == "25€" || sel1.value == "blue" && sel2.value == "sweatshirt" && sel3.value == "25€"){
            console.log('ok');
            // on passe par la 2eme condition
            // si la div1 à comme style un display different à none 'cacher'
            if(getComputedStyle(d12).display != "none"){
                // les autres div seron cacher
                d1.style.display = "none";
                d2.style.display = "none";
                d3.style.display = "none";
                d4.style.display = "none";
                d5.style.display = "none";
                d6.style.display = "none";
                d7.style.display = "none";
                d8.style.display = "none";
                d9.style.display = "none";
                d10.style.display = "none";
                d11.style.display = "none";
                d11.style.display = "none";
              } else {
                // sinon la div avec couleur blanc sera afficher et les autres masquer 
                // je remer un display none sur les autres div pour bien cacher les autres display
                d1.style.display = "none";
                d2.style.display = "none";
                d3.style.display = "none";
                d4.style.display = "none";
                d5.style.display = "none";
                d6.style.display = "none";
                d7.style.display = "none";
                d8.style.display = "none";
                d9.style.display = "none";
                d10.style.display = "none";
                d11.style.display = "none";
                d12.style.display = "block";
              }
  
        }
    }

    else if(sel3.value == "5€" || sel2.value == "tshirt"){
      console.log('ok');
      // on passe par la 2eme condition
      // si la div1 à comme style un display different à none 'cacher'
      if(getComputedStyle(d1).display != "none"){
          // les autres div seron cacher
          d2.style.display = "block";
          d3.style.display = "block";
          d4.style.display = "block";
          d5.style.display = "block";
          d6.style.display = "block";
          d7.style.display = "none";
          d8.style.display = "none";
          d9.style.display = "none";
          d10.style.display = "none";
          d11.style.display = "none";
          d12.style.display = "none";
        } else {
          // sinon la div avec couleur blanc sera afficher et les autres masquer 
          // je remer un display none sur les autres div pour bien cacher les autres display
          d1.style.display = "block";
          d2.style.display = "block";
          d3.style.display = "block";
          d4.style.display = "block";
          d5.style.display = "block";
          d6.style.display = "block";
          d7.style.display = "none";
          d8.style.display = "none";
          d9.style.display = "none";
          d10.style.display = "none";
          d11.style.display = "none";
          d12.style.display = "none";
        }   
    }
    
    else if(sel3.value == "25€" || sel2.value == "sweatshirt"){
      console.log('ok');
      // on passe par la 2eme condition
      // si la div1 à comme style un display different à none 'cacher'
      if(getComputedStyle(d7).display != "none"){
          // les autres div seron cacher
          d1.style.display = "none";
          d2.style.display = "none";
          d3.style.display = "none";
          d4.style.display = "none";
          d5.style.display = "none";
          d6.style.display = "none";
          d8.style.display = "block";
          d9.style.display = "block";
          d10.style.display = "block";
          d11.style.display = "block";
          d12.style.display = "block";
        } else {
          // sinon la div avec couleur blanc sera afficher et les autres masquer 
          // je remer un display none sur les autres div pour bien cacher les autres display
          d1.style.display = "none";
          d2.style.display = "none";
          d3.style.display = "none";
          d4.style.display = "none";
          d5.style.display = "none";
          d6.style.display = "none";
          d7.style.display = "block";
          d8.style.display = "block";
          d9.style.display = "block";
          d10.style.display = "block";
          d11.style.display = "block";
          d12.style.display = "block";
        }   
  }   

    else {
        console.log('non');
       
    }
    
}
