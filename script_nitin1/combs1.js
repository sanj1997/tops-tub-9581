let data = [{img:"https://files.myglamm.com/site-images/800x800/Good-Hair-Day-Conditioner-Hair-Serum-Combo.jpg",img1:"https://files.myglamm.com/site-images/200x200/MyGlamm-SUPERFOODS-Onion-&-Moringa-Conditioner.jpg",img2:"https://files.myglamm.com/site-images/200x200/MyGlamm-SUPERFOODS-Onion-&-Moringa-Serum.jpg",img3:"https://files.myglamm.com/site-images/200x200/MyGlamm-SUPERFOODS-Onion-&-Moringa-Serum.jpg",img4:"https://files.myglamm.com/site-images/200x200/MyGlamm-SUPERFOODS-Onion-&-Moringa-Serum.jpg",title:"GOOD HAIR DAY - CONDITIONER & HAIR SERUM COMBO",use:"The Superfoods Onion and Moringa Conditioner.",price:"418",cutPrice:"698",rating:"4.7",ratingCount:"56 ratings",quantity:1},
{img:"https://files.myglamm.com/site-images/800x800/Exotic-Nourishment---Shampoo,-Conditioner-&-Hair-Mask-Combo.jpg",img1:"https://files.myglamm.com/site-images/200x200/SUPERFOODS-Passion-Fruit-&-Rosemary-Shampoo.jpg",img2:"https://files.myglamm.com/site-images/200x200/SUPERFOODS-Passion-Fruit-&-Rosemary-Conditioner-.jpg",img3:"https://files.myglamm.com/site-images/200x200/SUPERFOODS-Mangosteen-&-Avocado-Hair-Mask.jpg",img4:"https://files.myglamm.com/site-images/200x200/SUPERFOODS-Mangosteen-&-Avocado-Hair-Mask.jpg",title:"EXOTIC NOURISHMENT - SHAMPOO, CONDITIONER & HAIR MASK COMBO",use:"Give your hair the perfect spa treatment.",price:"908",cutPrice:"1367",rating:"5",ratingCount:"63 ratings",quantity:1},
{img:"https://files.myglamm.com/site-images/800x800/Superfoods-Amazom-Slates-Combo-04.jpg",img1:"https://files.myglamm.com/site-images/200x200/Product-1_9.jpg",img2:"https://files.myglamm.com/site-images/200x200/Product-1_8.jpg",img3:"https://files.myglamm.com/site-images/200x200/Serum-Product_1.jpg",img4:"https://files.myglamm.com/site-images/200x200/Superfoods-Amazom-Slates-1200-X-1200-px---3B-Combo-02.jpg",title:"MYGLAMM SUPERFOODS ONION & MORINGA HAIR CARE COMBO - SHAMPOO + CONDITIONER + SERUM",use:"For Hair Fall Control",price:"774",cutPrice:"997",rating:"5",ratingCount:"29 ratings",quantity:1},
{img:"https://files.myglamm.com/site-images/800x800/Superfoods-Amazom-Slates--Combo-05.jpg",img1:"https://files.myglamm.com/site-images/200x200/Product-1_11.jpg",img2:"https://files.myglamm.com/site-images/200x200/Product-1_11.jpg",img3:"https://files.myglamm.com/site-images/200x200/Oil-Product_3.jpg",img4:"https://files.myglamm.com/site-images/200x200/Serum-Product_2.jpg",title:"MyGlamm SUPERFOODS ONION & MORINGA HAIR CARE COMBO - SHAMPOO + CONDITIONER + OIL + SERUM",use:"For Hair Fall Control",price:"1076",cutPrice:"1347",rating:"4.7",ratingCount:"34 ratings",quantity:1},
{img:"https://files.myglamm.com/site-images/800x800/SF--Damage-Repair.jpg",img1:"https://files.myglamm.com/site-images/200x200/Artboard-1-11.jpg",img2:"https://files.myglamm.com/site-images/200x200/Artboard-1-11.jpg",img3:"https://files.myglamm.com/site-images/200x200/Artboard-1-07.jpg",img4:"https://files.myglamm.com/site-images/200x200/Artboard-1-07.jpg",title:"MyGlamm SUPERFOODS DAMAGE REPAIR DUO",use:"Nourishing & Hydrating Combo With Extracts From Natural Superfoods",price:"598",cutPrice:"998",rating:"5",ratingCount:"7 ratings",quantity:1},
{img:"https://files.myglamm.com/site-images/800x800/Superfoods-Amazom-Slates-Combo-04.jpg",img1:"https://files.myglamm.com/site-images/200x200/Product-1_9.jpg",img2:"https://files.myglamm.com/site-images/200x200/Product-1_8.jpg",img3:"https://files.myglamm.com/site-images/200x200/Serum-Product_1.jpg",img4:"https://files.myglamm.com/site-images/200x200/Superfoods-Amazom-Slates-1200-X-1200-px---3B-Combo-02.jpg",title:"MyGlamm SUPERFOODS ONION & MORINGA HAIR CARE COMBO - SHAMPOO + CONDITIONER + SERUM",use:"For Hair Fall Control",price:"774",cutPrice:"997",rating:"5",ratingCount:"29 ratings",quantity:1},
{img:"https://files.myglamm.com/site-images/800x800/Good-Hair-Day-Conditioner-Hair-Serum-Combo.jpg",img1:"https://files.myglamm.com/site-images/200x200/MyGlamm-SUPERFOODS-Onion-&-Moringa-Conditioner.jpg",img2:"https://files.myglamm.com/site-images/200x200/MyGlamm-SUPERFOODS-Onion-&-Moringa-Serum.jpg",img3:"https://files.myglamm.com/site-images/200x200/MyGlamm-SUPERFOODS-Onion-&-Moringa-Serum.jpg",img4:"https://files.myglamm.com/site-images/200x200/MyGlamm-SUPERFOODS-Onion-&-Moringa-Serum.jpg",title:"GOOD HAIR DAY - CONDITIONER & HAIR SERUM COMBO",use:"The Superfoods Onion and Moringa Conditioner.",price:"376",cutPrice:"579",rating:"4",ratingCount:"9 ratings",quantity:1},
]

//{img:"",img1:"",img2:"",img3:"",img4:"",title:"",use:"",price:"",cutPrice:"",rating:"",ratingCount:"",quantity:1}

import {append,productdetails} from "../componants_nitin1/script1.js"
let container= document.getElementById("container");
append(data,container);
// productdetails(el);
document.getElementById("home").addEventListener("click",()=>{
    window.location.href="index.html"
})
import { navbar,displayUserName,footer } from "../Components_5/navbar_Sanjay.js";
document.getElementById("navbar").innerHTML=navbar()
document.getElementById("footer").innerHTML=footer()
displayUserName()
let dataFromLs = JSON.parse(localStorage.getItem("userDetails"))||[];
document.getElementById("cart").addEventListener("click",()=>{
    // if(dataFromLs.length==0)
    // {
    //     alert("Please login!!")
    // }
    // else{
        window.location.href="./Rupesh_cart_day5/cart5.html"
    // }
    
 })
