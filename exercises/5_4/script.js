window.onload = function(){
    
    document.getElementById('modoN').addEventListener('click',function(){
        document.body.style.backgroundColor = "#1C1C1C";
        document.body.style.color= "#d1d1d1";
        localStorage.setItem('color',"#d1d1d1")
     
            
    });
    document.getElementById('modoL').addEventListener('click',function(){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black"
    })
    let inputColor = document.getElementById('tC');
    document.getElementById('btColor').addEventListener('click',function(){
        document.body.style.color = inputColor.value;
    })
    document.getElementById('fT').addEventListener('click',function(){
        document.body.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif"; 
    })
    document.getElementById('fTN').addEventListener('click',function(){
        document.body.style.fontFamily = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"; 
    })
    document.getElementById('fZ').addEventListener('click',function(){
        document.body.style.fontSize = 'large'
    })
    document.getElementById('fZN').addEventListener('click',function(){
        document.body.style.fontSize = '12pt'
    })
    document.getElementById('lS').addEventListener('click',function(){
        document.body.style.lineHeight = '1.6'
    })
}