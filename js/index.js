function search() {
    var contacts = JSON.parse(localStorage.getItem('contacts')); var searchcon = document.getElementById("sfield");
    for (i = 0; i < contacts.length; i++) { var filter = searchcon.value.toUpperCase();
        var find = contacts[i].name.toUpperCase().indexOf(filter);
        var cont = document.getElementById("contact-" + i);
        if (find> -1 ) { cont.style.display = "";
            var withoutrez = 1; } else { cont.style.display = "none"; } var norez = document.getElementById("no_res");
        if(withoutrez == 1){ norez.style.display = "none"; }
        else { norez.style.display = "block"; }
    }
}
// function compare(a,b) {
//     var contacts = JSON.parse(localStorage.getItem("contacts"));
//     if (a.name < b.name)  return -1; if (a.name > b.name) {return 1;}
//     return 0;  }
function addContact() { document.forms["addd"].reset();
    var newadd = document.getElementById("addd"); var nc = document.getElementById("newcont");  var as =document.getElementById("addSave");
    var ase= document.getElementById('addSave2');
    newadd.setAttribute("onclick","return saveContact(this)");
    nc.style.display="block"; as.style.display ="block"; ase.style.display = "none";
}
function checkContacts(){ var contacts = [ ]; contacts = JSON.parse(localStorage.getItem("contacts"));
    if((contacts == null) || (contacts.length == 0)){var nocont= document.getElementById("noco"); nocont.style.display="block";}  else{ removeCont(); }
}
function closeAnswear() { var nnew = document.getElementById("rem"); nnew.style.display = "none";
}
window.onclick = function(event) { var ncc = document.getElementById("rem"); if (event.target == ncc){
    ncc.style.display = "none"; closeAnswear();}
};
function closeInfo() { var nnew = document.getElementById("creating"); nnew.style.display = "none";
    location.reload();
}
window.onclick = function(event) { var ncc = document.getElementById("creating"); if (event.target == ncc){
    ncc.style.display = "none"; closeInfo();}
};
function saveContact(form) {
    var contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts == null) { var contacts = []; }
    var contact = {};
    var tel = document.getElementsByClassName("tell"); var email= document.getElementsByClassName("emailf");
    contact.name = form.name.value; contact.lastname = form.lastname.value; contact.telephone = ['']; contact.email = [''];
    var eN = 0; var eS = 0;
    var cName = contact.name; var cSurname = contact.lastname;
    if (cName == " "){ eN = 1; var fName = document.getElementById("formName"); fName.style.border = "1px solid blue";
        alert("Enter name!");}
    if(cSurname == " "){ eS = 1; var fSurnm= document.getElementById("formSurnm"); fSurnm.style.border = "1px solid blue";
        alert("Enter surname!");}
    for (i = 0; i < tel.length; i++) { var inp = document.getElementById("formTelephone" + i); contact.telephone[i] = inp.value; }
    for (x = 0; x < email.length; x++) { var einpt = document.getElementById("formEmail"+x); contact.email[x] = einpt.value; }
    for(i = 0; i < tel.length; i++){
        for(j = 0; j < tel.length; j++){
            var tel1 = document.getElementById("formTelephone" + i); var tel2 = document.getElementById("formTelephone" + j);
            if(i !== j){ if(tel1.value == tel2.value){ tel1.style.border = "1px solid blue"; tel2.style.border = "1px solid blue";
                tel1.style.borderRadius="8px"; tel2.style.borderRadius="8px"; var z = 1;
                return false;
            }
            }
        }
    }
    for(i = 0; i < email.length; i++){
        for(j = 0; j < email.length; j++){
            var email1 = document.getElementById("formEmail" + i); var email2 = document.getElementById("formEmail" + j);
            if(i !== j){
                if(email1.value == email2.value){ email1.style.border = "1px solid blue"; email2.style.border = "1px solid blue";
                    email1.style.borderRadius="8px"; email2.style.borderRadius="8px"; var m = 1; return false;
                }
            }
        }
    }
    var tel_oblig = /[0-9+]{4,13}/i;
    var email_oblig = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    for (i = 0; i < tel.length; i++) {
        var formPhone = document.getElementById("formTelephone" + i);
        if ((formPhone.value == " ")||(formPhone.value == "")) {
            var noth = 1; formPhone.style.border = "1px solid red"; alert("Enter phonenumber! At least four numbers!");
            return false;
        } else {formPhone.style.border= "1px solid black";}
    }
    for (i = 0; i < tel.length; i++) {
        var formPhone = document.getElementById("formTelephone" + i);
        if  (!formPhone.value.match(tel_oblig)){
            var noth1 = 1; formPhone.style.border = "1px solid red"; alert("Incorrect phonenumber! Use only numbers!");
            return false;
        } else {formPhone.style.border= "1px solid black";}
    }
    for (i = 0; i < email.length; i++) { var formEmail = document.getElementById("formEmail" + i);
        if ((formEmail.value == " ")|| (formEmail.value == "")){
            var nott = 1; formEmail.style.border = "1px solid red"; alert("Enter email! Don't forget to use symbol '@'!Use only english letters");
            return false;
        } else {formEmail.style.border= "1px solid black";}
    }
    for (i = 0; i < email.length; i++) { var formEmail = document.getElementById("formEmail" + i);
        if ( !formEmail.value.match(email_oblig)){
            var nott1 = 1; formEmail.style.border = "1px solid red"; alert("Incorrect email! Try again!");
            return false;
        } else {formEmail.style.border= "1px solid black";}
    }
    if((z !== 1) && (m !== 1) && (noth !== 1) && (noth1 !== 1) && (nott !== 1) && (nott1 !== 1) && (cName !== 1) && (cSurname !== 1)){
        contacts.push(contact);
//         contacts.sort(compare);
        localStorage.setItem("contacts", JSON.stringify(contacts));
        document.getElementById("newcont").style.display = "none"; location.reload();
         return false;
    }
}
function removeContact(contact){ var remov = document.getElementById("rem"); remov.style.display = "inline-block";
    var yes =document.getElementById("remove_yes") ; yes.onclick = function () { var id = contact.id-1;
        contacts = JSON.parse(localStorage.getItem("contacts")); contacts.splice(id, 1);
        if (contacts.length == 0)  {var nocon = document.getElementById("noco"); nocon.style.display="block"; }
        localStorage.setItem("contacts", JSON.stringify(contacts));
        var contacts = document.getElementById("contact-" + id); contacts.parentNode.removeChild(contacts); remov.style.display = "none"; };
    var no = document.getElementById("remove_no"); no.onclick = function () {var  rem = document.getElementById("rem"); rem.style.display = "none";};
}
function editContact(editbtn) {
    var newcontact = document.getElementById("newcont");
    var id = editbtn.id; var contacts = JSON.parse(localStorage.getItem("contacts"));
    var contact = contacts[id]; var forma = document.getElementById("addd"); var adds = document.getElementById("addSave");
    var save = document.getElementById("addSave2");  var nameedit = document.getElementById('formName');
    var surmane = document.getElementById('formSurnm');  var tel = document.getElementById("formTelephone0");
    var contel = contact.telephone;
    newcontact.style.display = "block"; forma.removeAttribute("onclick");
    save.style.display = "block"; adds.style.display = "none";   nameedit.value = contact.name;
    surmane.value = contact.lastname;
    tel.value = contact.telephone[0];
    for (i = 1; i < contel.length; i++) {
        var pph = document.createElement("p");
        var telff = document.getElementById("tels_form");
        pph.id = "tel_field" + i; pph.className = "tell"; telff.appendChild(pph);
        var new_string = '<i class="fa new fa-phone" aria-hidden="true"></i>';
        new_string += '<input type="tel" value="' + contact.telephone[i] + '" name="telephone" id="formTelephone' + i + '" required placeholder="Phone">';
        new_string += '<button type="button" id="' + i + '"></button>';
        pph.innerHTML += new_string;
    }
    var emailed = document.getElementById('formEmail0');  var contem = contact.email;
    emailed.value = contact.email[0];
    for (i = 1; i < contem.length; i++) { var inpemail = document.createElement("p");
        var emf = document.getElementById("emails_form");
        inpemail.id = "email_field" + i; inpemail.className = "emailf"; emf.appendChild(inpemail); inpemail.innerHTML += new_string; }
    save.onclick = function () { var contacts = JSON.parse(localStorage.getItem("contacts")); var contact = contacts[id];
        contact.name = nameedit.value; contact.lastname = surmane.value;
        var teel = document.getElementsByClassName("tell"); var emff = document.getElementsByClassName("emailf");
        for (i = 0; i < teel.length; i++) { var t = document.getElementById("formTelephone" + i); contact.telephone[i] = t.value; }
        for (l = 0; l < emff.length; l++) { var e = document.getElementById("formEmail" + l); contact.email[l] = e.value; }
        var eN = 0; var eS = 0; var eP = 0; var eE = 0; var eP1 = 0; var eE1 = 0;
        var oblig =/[0-9+]{4,13}/i; var oem = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
        var cName = contact.name; var cSurname = contact.lastname;
        if (cName == ""){ eN = 1; var fName = document.getElementById("formName"); fName.style.border = "1px solid red";
            alert("Enter name!"); }
        if(cSurname == ""){ eS = 1; var fSurnm= document.getElementById("formSurnm"); fSurnm.style.border = "1px solid red";
            alert("Enter surname!");}
        for(i = 0; i < teel.length; i++){ for(j = 0; j < teel.length; j++){
            var pph1 = document.getElementById("formTelephone" + i); var pph2 = document.getElementById("formTelephone" + j);
            if(i !== j){ if(pph1.value == pph2.value){ pph1.style.border = "1px solid blue"; pph2.style.border = "1px solid blue";
            var w = 1;
                return false; }
            } }
        }
        for(i = 0; i < emff.length; i++){ for(j = 0; j < emff.length; j++){
            var e1 = document.getElementById("formEmail" + i); var e2 = document.getElementById("formEmail" + j);
            if(i !== j){ if(e1.value == e2.value){ e1.style.border = "1px solid blue"; e2.style.border = "1px solid blue";
            var m = 1;
                return false; }
            } }
        }
        for (i = 0; i < teel.length; i++) { var formPh = document.getElementById("formTelephone" + i);
            if ((formPh.value == " ") || (formPh.value == "")){ eP = 1; formPh.style.border = "1px solid red";
                alert("Enter phonenumber! At least four numbers!");
            }
        }
        for (i = 0; i < teel.length; i++) { var formPh = document.getElementById("formTelephone" + i);
            if  (!formPh.value.match(oblig)){ eP1 = 1; formPh.style.border = "1px solid red";
                alert("Incorrect phonenumber! Use only numbers!");
            }
        }
        for (i = 0; i <emff.length; i++) { var formEmail=document.getElementById("formEmail" + i);
            if ((formEmail.value == " ") || (formEmail.value == "")){
                eE = 1; formEmail.style.border = "1px solid red";
                alert("Enter email! Don't forget to use symbol '@'!Use only english letters"); }
        }
        for (i = 0; i <emff.length; i++) { var formEmail=document.getElementById("formEmail" + i);
            if (!formEmail.value.match(oem)){
                eE1 = 1; formEmail.style.border = "1px solid red";
                alert("Incorrect email! Try again!Use only english letters"); }
        }
        if ((eN !== 1) && (eS !== 1) && (eP !== 1)&& (eP1 !== 1) && (eE !== 1) && (eE1 !== 1) && (w !== 1) && (m !== 1)) {
//             contacts.sort(compare); 
            localStorage.setItem("contacts", JSON.stringify(contacts));
            document.getElementById("newcont").style.display = "none";
            var qw = document.getElementById("creating"); qw.style.display = "block"; location.reload();

        }
    };
}
//$(function(){
//    $("#contacts").accordion();
//});
function openmore () {
    var headd = document.getElementsByClassName("cname"); var  cont = document.getElementsByClassName("info");
    for (var i = 0; i < headd.length; i++) { headd[i].addEventListener("click", function() {
        var clas = this.getAttribute("class"); var  newC = ""; var classesArr = clas.split(" "); var newArr = clas.split(' ');
        for (var j = 0; j < classesArr.length; j++) { if (classesArr[j] == "active")  classesArr.splice([j], 1);  }
        if (classesArr.length === newArr.length)  { classesArr.push("active"); newC = classesArr.join(" ");}
        else { newC = classesArr.join(" "); }
        for (var l = 0; l < headd.length; l++) {
            var  old = headd[l].getAttribute("class"); var oArr = old.split(" ");
            for (var k = 0; k < oArr.length; k++) { if (oArr[k] == "active") { oArr.splice([k], 1);}
                old = oArr.join(" "); headd[l].setAttribute("class", old);}
        } this.setAttribute("class", newC); }) }
}
function removeCont(){
    var contacts = [ ]; contacts = JSON.parse(localStorage.getItem("contacts")); var allcontacts = document.getElementById("contacts");
    for(var i = 0; i < contacts.length; i++){
        var somecont = document.createElement("div"); somecont.id = "contact-" + i; somecont.className = "contact"; allcontacts.appendChild(somecont);
        var new_string = '<div id="cname'+ i +'" class="cname">'; new_string += contacts[i].name + ' '+ contacts[i].lastname + '<form>';
        new_string += '<input class="first_name" type="text" id="firstname'+i+ contacts[i].name + '">';
        new_string += '<input class="last_name" type="text" id="lastname'+i+ contacts[i].lastname + '"></form></div>'; new_string += '<div class="info"><div class="smth">';
        new_string += '<button id="'+ i +'"  onclick="editContact(this)" title="Edit"><i id="pencil0" class="fa fa-pencil" aria-hidden="true"></i></button>';
        new_string += '<button onclick="removeContact(this)" title="Delete" class="delbtn" id ="'+ i +'"><i class="fa fa-trash-o" aria-hidden="true"></i></div></button>';
        new_string += '<div class="infoContact"> <form><div class="tels" id="tels'+ i +'">';
        new_string += '</div><div class="emails" id="emails'+i+'"></div></form></div></div>';
        somecont.innerHTML += new_string; var telArr = contacts[i].telephone;
        for(l = 0; l < telArr.length; l++) { var tels = document.getElementById("tels" + i); var pc = document.createElement("p"); tels.appendChild(pc);
            var add_new = '<i class="fa fa-phone" aria-hidden="true" title="Call">&nbsp;Number </i>';
            add_new += '<input id="tel_card-' + i + '-' + l + '"  type="tel" value="' + contacts[i].telephone[l] + '" readonly>'; pc.innerHTML += add_new; }
        var email4 = contacts[i].email; for(j = 0; j < email4.length; j++){ var emails = document.getElementById("emails"+i); var newemail = document.createElement("p");
            newemail.id = "email_p" +j; emails.appendChild(newemail);
            var add_new = '<i class="fa fa-envelope" aria-hidden="true" title="Send">&nbsp;Email&nbsp;</i>';
            add_new += '<input id="email_card-'+i+'-'+j+'"  type="email" value="' + contacts[i].email[j] + '" readonly>'; newemail.innerHTML += add_new; }
        $( function() {
            $( "#addd" ).dialog({
                autoOpen: false,
                show: {
                    effect: "explode",
                    duration: 1000
                },
                hide: {
                    effect: "blind",
                    duration: 1000
                }
            });
            $( "#pencil0" ).on( "click", function() {
                $( "#addd" ).dialog( "open" );
            });
        } )
    }
    openmore();

}
$( function() {
    $( "#addd" ).dialog({
        autoOpen: false,
        show: {
            effect: "explode",
            duration: 1000
        },
        hide: {
            effect: "blind",
            duration: 1000
        }
    });

    $( "#addBtn" ).on( "click", function() {
        $( "#addd" ).dialog( "open" );
    });
} );
$('#addd').insertBefore('#contacts')
