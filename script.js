window.addEventListener('DOMContentLoaded', function(licz){
    
    document.getElementById('button').addEventListener('click', function(licz){
        licz.preventDefault();
        let radio = document.querySelectorAll('input[name="strzyzenie"]');
        for(const i in radio){
            if(radio[i].checked){document.getElementById('wynik').innerText = "Cena strzyżenia: "+radio[i].value;}
        }
    });
    });