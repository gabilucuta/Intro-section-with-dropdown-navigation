var hamburger = document.getElementById('hamburger');
var menuVisibile = document.getElementById('navi');
var menuCloser = document.getElementById('closer');

var dropFeatures = document.getElementById('features');
var dropCompany = document.getElementById('company');

var menu1 = document.getElementById('dropdown-features');
var menu2 = document.getElementById('dropdown-company');

var  display = window.getComputedStyle(menu1).getPropertyValue("opacity");
var display2 = window.getComputedStyle(menu2).getPropertyValue("opacity");

var  displayBlock = window.getComputedStyle(menu1).getPropertyValue("display");
var displayBlock2 = window.getComputedStyle(menu2).getPropertyValue("display");



dropFeatures.addEventListener('click' , function(){

    if(display == '0'){
        menu1.style.opacity= '1';
        display ='1';
    }else{
        menu1.style.opacity ='0';
        display = '0';
    }  
    
});

dropCompany.addEventListener('click' , function(){
    if(display2 == '0'){
        menu2.style.opacity= '1';
        display2 ='1';
    }else{
        menu2.style.opacity ='0';
        display2 = '0';
    }
    
})


dropFeatures.addEventListener('click' , function(){

    if(displayBlock == 'none'){
        menu1.style.display = 'block';
        displayBlock ='block';
    }else{
        menu1.style.display ='none';
        displayBlock = 'none';
    }  
    
});

dropCompany.addEventListener('click' , function(){
    if(displayBlock2 == 'none'){
        menu2.style.display = 'block';
        displayBlock2 ='block';
    }else{
        menu2.style.display ='none';
        displayBlock2 = 'none';
    }
    
})



hamburger.addEventListener('click',function(){

    menuVisibile.classList.toggle('slide');
    menuVisibile.style.display = 'block';
});

menuCloser.addEventListener('click' , function(){
    
    menuVisibile.style.display = 'none';
    
});


