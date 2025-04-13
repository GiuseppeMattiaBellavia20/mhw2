
function onFocus1(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlur1(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Cerca idee per cene facili, moda e molto altro.';
    }
    console.log('Blur');
}

function onFocus2(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlur2(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Email';
    }
    console.log('Blur');
}

function onFocus3(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlur3(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Crea una password';
    }
    console.log('Blur');
}

function onFocus4(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlur4(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='gg/mm/aaaa';
    }
    console.log('Blur');
}

function onFocusemail(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBluremail(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Email';
    }
    console.log('Blur');
}

function onFocuspassword(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlurpassword(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Crea una password';
    }
    console.log('Blur');
}

function onFocusdata(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlurdata(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='gg/mm/aaaa';
    }
    console.log('Blur');
}

function onFocusemaillog(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBluremaillog(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Email';
    }
    console.log('Blur');
}

function onFocuspasswordlog(event){
    const text = event.currentTarget;
    text.value='';
    console.log('Focus');
}

function onBlurpasswordlog(event){
    const text = event.currentTarget;
    if(text.value.length == 0){
    text.value='Crea una password';
    }
    console.log('Blur');
}


function cambiaim3_4(event){
const img=event.currentTarget;
img.src='im3.4.2.jpg';
}

function registrazione(event){
event.preventDefault();
const regis=document.querySelector('#men-iscr');
document.body.classList.add('no-scroll');
regis.style.top=window.pageYOffset + 'px';
regis.classList.remove('hidden');
}

function regesc(){
    document.querySelector('#men-iscr').classList.add('hidden');
    document.body.classList.remove('no-scroll');
    console.log('Menù registrazioine nascoscto');
}

function login(event){
    event.preventDefault();
    const regis=document.querySelector('#login');
    document.body.classList.add('no-scroll');
    regis.style.top=window.pageYOffset + 'px';
    regis.classList.remove('hidden');
    }
    
    function logesc(){
        document.querySelector('#login').classList.add('hidden');
        document.body.classList.remove('no-scroll');
        console.log('Menù login nascoscto');
    }

    function passaAdAccedi(event){
        event.preventDefault();
        document.querySelector('#men-iscr').classList.add('hidden');
        document.querySelector('#login').classList.remove('hidden');
    }

    function passaAdInscriviti(event){
        event.preventDefault();
        const regis2=document.querySelector('#men-iscr');
        document.body.classList.add('no-scroll');
        regis2.style.top=window.pageYOffset + 'px';
        document.querySelector('#login').classList.add('hidden');
        document.querySelector('#men-iscr').classList.remove('hidden');
    }

    function Accedi(event){
        event.preventDefault();
        const acc=document.querySelector('#login')
        document.body.classList.add('no-scroll');
        acc.style.top=window.pageYOffset + 'px';
        acc.classList.remove('hidden');
    }

    function apriMenu3Linee(event){
        event.preventDefault();
        const men=document.querySelector('#men-3linee-open');
        const xmen=document.querySelector('#x-menu-3linee');
        men.classList.remove('hidden');
        event.currentTarget.classList.add('hidden');
        xmen.classList.remove('hidden');
        
        }

    function chiudiMenu3Linee(event){
        const men2=document.querySelector('#men-3linee-open');
        const men3linee=document.querySelector('#menu-3linee');
        event.currentTarget.classList.add('hidden');
        men2.classList.add('hidden');
        men3linee.classList.remove('hidden');
    }

    function ModNotte(){
        const nav=document.querySelectorAll('.white')
        for(const n of nav){
        n.classList.remove('white');
        n.classList.add('gray');}
        const menu=document.querySelectorAll('.menu');
        for(const m of menu){
        m.classList.remove('menu');
        m.classList.add('menuVariant');
        }

        const esp=document.querySelector('.esp')
        esp.classList.remove('esp');
        esp.classList.add('espVariant');

        const int1=document.querySelector('.int1');
        int1.classList.remove('int1');
        int1.classList.add('int1Variant');

        const int2=document.querySelector('.int2');
        int2.classList.remove('int2');
        int2.classList.add('int2Variant');

        const men=document.querySelectorAll('.menu-iscr');
        for(const m of men){
        m.classList.remove('menu-iscr');
        m.classList.add('menu-iscrVar');
        }

        const log=document.querySelectorAll('.menu-log');
        for(const l of log){
            l.classList.remove('menu-log');
            l.classList.add('menu-logVar');
        }

        const fine=document.querySelector('.fine');
        fine.classList.remove('fine');
        fine.classList.add('fineVar');

    }

    function ModGiorno(){
        const nav=document.querySelectorAll('.gray')
        for(const n of nav){
        n.classList.remove('gray');
        n.classList.add('white');}
        const menu=document.querySelectorAll('.menuVariant');
        for(const m of menu){
        m.classList.remove('menuVariant');
        m.classList.add('menu');
        }

        const esp=document.querySelector('.espVariant')
        esp.classList.remove('espVariant');
        esp.classList.add('esp');

        const int1=document.querySelector('.int1Variant');
        int1.classList.remove('int1Variant');
        int1.classList.add('int1');

        const int2=document.querySelector('.int2Variant');
        int2.classList.remove('int2Variant');
        int2.classList.add('int2');

        const men=document.querySelectorAll('.menu-iscrVar');
        for(const m of men){
        m.classList.remove('menu-iscrVar');
        m.classList.add('menu-iscr');
        }

        const log=document.querySelectorAll('.menu-logVar');
        for(const l of log){
            l.classList.remove('menu-logVar');
            l.classList.add('menu-log');
        }

        const fine=document.querySelector('.fineVar');
        fine.classList.remove('fineVar');
        fine.classList.add('fine');
    }


const text1= document.querySelector(".ric-testo");
text1.addEventListener("focus", onFocus1);
text1.addEventListener("blur", onBlur1);

const textem= document.querySelectorAll(".email-testo");
for(const em of textem){
  em.addEventListener("focus", onFocus2);
  em.addEventListener("blur", onBlur2);  
}


const textpass= document.querySelectorAll(".pass-testo");
for(const pas of textpass){
pas.addEventListener("focus", onFocus3);
pas.addEventListener("blur", onBlur3);
}

const textdata= document.querySelectorAll(".data-testo");
for(const dat of textdata){
dat.addEventListener("focus", onFocus4);
dat.addEventListener("blur", onBlur4);
}

const im3_4=document.querySelector('.im3-4cambio');
im3_4.addEventListener('click', cambiaim3_4);

const log= document.querySelectorAll('.spec');
for(const sp of log){
sp.addEventListener("click", login);
}
const nascondi_log= document.querySelectorAll('.X2');
for(const x2 of nascondi_log){
x2.addEventListener("click", logesc);
}

const reg= document.querySelectorAll('.spec2');
for(const sp2 of reg){
sp2.addEventListener("click", registrazione);
}
const nascondi_reg= document.querySelectorAll('.X');
for(const x of nascondi_reg){
x.addEventListener("click", regesc);
}

const inscrivitidaaccedi=document.querySelector(".tasto-inscr");
inscrivitidaaccedi.addEventListener("click", passaAdInscriviti);

const accedi=document.querySelector(".accedi2");
accedi.addEventListener("click", Accedi);

const acceditas=document.querySelector(".tasto-accedi");
acceditas.addEventListener("click", passaAdAccedi);

const men_3linee=document.querySelector("#menu-3linee");
men_3linee.addEventListener("click", apriMenu3Linee);

const x_3_linee=document.querySelector("#x-menu-3linee");
x_3_linee.addEventListener("click", chiudiMenu3Linee);

const notte=document.querySelector(".ModNotte");
notte.addEventListener("click", ModNotte);

const giorno=document.querySelector(".Modgiorno");
giorno.addEventListener("click", ModGiorno);

