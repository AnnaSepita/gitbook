function accordion () {
var headd = document.getElementsByClassName("contact_name");
var  cont = document.getElementsByClassName("contact_card");
    for (var i = 0; i < headd.length; i++) { headd[i].addEventListener("click", function() {
            var clas = this.getAttribute("class"); var  newC = ""; var classesArr = clas.split(" "); var newArr = clas.split(' ');
            for (var j = 0; j < classesArr.length; j++) {
                if (classesArr[j] == "active")  classesArr.splice([j], 1);  }
            if (classesArr.length === newArr.length)
            { classesArr.push("active"); newC = classesArr.join(" ");}
            else { newC = classesArr.join(" "); }
            for (var l = 0; l < headd.length; l++) {
              var  old = headd[l].getAttribute("class"); var oArr = old.split(" ");
                for (var k = 0; k < oArr.length; k++) { if (oArr[k] == "active") { oArr.splice([k], 1);}
                    old = oArr.join(" "); headd[l].setAttribute("class", old);}
            } this.setAttribute("class", newC); }) }
}
function addContact() {document.forms["addd"].reset();  var newadd =document.getElementById("addd");  newadd.setAttribute("onsubmit","return saveContact(this)");
     var nc= document.getElementById("newcont"); nc.style.display="block";
     var as =document.getElementById("addSave"); as.style.display ="block";
     var ase= document.getElementById('addSaveEdit'); ase.style.display = "none"; }
function closeForm() { var nnew = document.getElementById("newcont"); nnew.style.display = "none"; location.reload(); }
window.onclick = function(event) { if (event.target == document.getElementById("newcont")){
    var ncc = document.getElementById("newcont"); ncc.style.display = "none"; closeForm();}};
function checkContacts(){ var contacts = [ ]; contacts = JSON.parse(localStorage.getItem("contacts"));
    if((contacts == null) || (contacts.length == 0)){var nocont= document.getElementById("noco"); nocont.style.display="block";}  else{ removeCont(); } }

function saveContact(form) {
    var contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts == null) { var contacts = []; }
    var contact = {}; contact.name = form.name.value; contact.lastname = form.lastname.value; contact.telephone = [''];
    var tel = document.getElementsByClassName("tell"); var email= document.getElementsByClassName("emailf");
    for (i = 0; i < tel.length; i++) { var inp = document.getElementById("formTelephone" + i); contact.telephone[i] = inp.value;
    } contact.email = [''];
    for (x = 0; x < email.length; x++) { var einpt = document.getElementById("formEmail"+x); contact.email[x] = einpt.value;
    }
    for(i = 0; i < tel.length; i++){
        for(j = 0; j < tel.length; j++){
            var tel1 = document.getElementById("formTelephone" + i); var tel2 = document.getElementById("formTelephone" + j);
            if(i !== j){
                if(tel1.value == tel2.value){ tel1.style.border = "1px solid blue"; tel2.style.border = "1px solid blue"; var w = 1;
                    return false;
                }else { tel1.style.border = "none"; tel2.style.border = "none"; }
            }
        }
    }
    for(i = 0; i < email.length; i++){
        for(j = 0; j < email.length; j++){
            var email1 = document.getElementById("formEmail" + i); var email2 = document.getElementById("formEmail" + j);
            if(i !== j){
                if(email1.value == email2.value){ email1.style.border = "2px solid blue"; email2.style.border = "2px solid blue"; var m = 1;
                    return false;
                }else { email1.style.border = "none"; email2.style.border = "none"; }
            }
        }
    }
    var tel_oblig = /[0-9+]{4,13}/i;
    var email_oblig = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
    for (i = 0; i < tel.length; i++) {
        if ((document.getElementById("formTelephone" + i).value == "") ||  (!document.getElementById("formTelephone" + i).value.match(tel_oblig))){
            var emptyTel = 1; document.getElementById("formTelephone" + i).style.border = "2px solid red";
            return false;
        }else{ document.getElementById("formTelephone" + i).style.border = "1px solid #F9B341"; }
    }
    for (i = 0; i < email.length; i++) {
        if ((document.getElementById("formEmail" + i).value == "") ||  (!document.getElementById("formEmail" + i).value.match(email_oblig))){
            var emptyEmail = 1; document.getElementById("formEmail" + i).style.border = "2px solid red";
            return false;
        }else{ document.getElementById("formEmail" + i).style.border = "1px solid #F9B341" }
    }
    if((w !== 1) && (m !== 1) && (emptyTel !== 1) && (emptyEmail !== 1)){
        contacts.push(contact); contacts.sort(compare); localStorage.setItem("contacts", JSON.stringify(contacts)); document.getElementById("newcont").style.display = "none";
        var modal = document.getElementById("myModalCreating"); modal.style.display = "block";
        return false;
    }
}
function closeMessage() { var creat = document.getElementById("myModalCreating"); creat.style.display = "none"; location.reload(); }
function removeContact(contact){ var remov = document.getElementById("myModalRemove"); remov.style.display = "inline-block";
      var yes =document.getElementById("remove_yes") ; yes.onclick = function () { var id = contact.id;  contacts = JSON.parse(localStorage.getItem("contacts")); contacts.splice(id, 1);
        var remov2 = document.getElementById("myModalCreating"); remov2.style.display = "inline-block";
        if (contacts.length == 0) {var nocon = document.getElementById("noco"); nocon.style.display="block"; } localStorage.setItem("contacts", JSON.stringify(contacts));
        var contacts = document.getElementById("contact-" +id); contacts.parentNode.removeChild(contacts); remov.style.display = "none"; };
      var no = document.getElementById("remove_no"); no.onclick = function () {var  rem = document.getElementById("myModalRemove"); rem.style.display = "none";}; }
function editContact(editbtn) {
    var newcontact = document.getElementById("newcont"); newcontact.style.display = "block"; var id = editbtn.id; var contacts = JSON.parse(localStorage.getItem("contacts"));
    var contact = contacts[id]; var forma = document.getElementById("addd"); forma.removeAttribute("onsubmit");
    var save = document.getElementById("addSaveEdit"); save.style.display = "block";
    var adds = document.getElementById("addSave"); adds.style.display = "none";  var nameedit = document.getElementById('formName'); nameedit.value = contact.name;
    var surmane = document.getElementById('formLastname'); surmane.value = contact.lastname; var tel = document.getElementById("formTelephone0"); tel.value = contact.telephone[0];
    var contel = contact.telephone;
    for (i = 1; i < contel.length; i++) {
        var pph = document.createElement("p"); var telff = document.getElementById("tels_form"); pph.id = "tel_field" + i; pph.className = "tell"; telff.appendChild(pph);
        var str = '<i class="fa new fa-phone" aria-hidden="true"></i>';
        str += '<input type="tel" value="' + contact.telephone[i] + '" name="telephone" id="formTelephone' + i + '" required placeholder="Phoner">';
        str += '<button onclick="minusTel(this)" type="button" id="' + i + '"><i class="fa fa-minus" aria-hidden="true"></i></button>';
        pph.innerHTML += str; }
    var emailed = document.getElementById('formEmail0'); emailed.value = contact.email[0];
    var contem = contact.email;
    for (i = 1; i < contem.length; i++) { var inpemail = document.createElement("p"); var emf = document.getElementById("emails_form");
        inpemail.id = "email_field" + i; inpemail.className = "emailf"; emf.appendChild(inpemail); inpemail.innerHTML += str; }
        save.onclick = function () { var contacts = JSON.parse(localStorage.getItem("contacts")); var contact = contacts[id];
        contact.name = nameedit.value; contact.lastname = surmane.value;
        var teel = document.getElementsByClassName("tell"); var emff = document.getElementsByClassName("emailf");
        for (i = 0; i < teel.length; i++) { var t = document.getElementById("formTelephone" + i); contact.telephone[i] = t.value; }
        for (l = 0; l < emff.length; l++) { var e = document.getElementById("formEmail" + l); contact.email[l] = e.value; }
        var eN = 0; var eS = 0; var eP = 0; var eE = 0; var oblig =/[0-9+]{4,13}/i; var oem = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i;
        var cName = contact.name; var cSurname = contact.lastname;
        if (cName == ""){ eN = 1; var fName = document.getElementById("formName"); fName.style.border = "1px solid red"; }
        if(cSurname == ""){ eS = 1; var fSurnm= document.getElementById("formLastname"); fSurnm.style.border = "1px solid red"; }
        for(i = 0; i < teel.length; i++){ for(j = 0; j < teel.length; j++){
                var pph1 = document.getElementById("formTelephone" + i); var pph2 = document.getElementById("formTelephone" + j);
                if(i !== j){ if(pph1.value == pph2.value){ pph1.style.border = "1px solid blue"; pph2.style.border = "1px solid blue"; var w = 1;
                        return false; }else { pph1.style.border = "1px solid black"; pph2.style.border = "1px solid black"; } } } }
        for(i = 0; i < emff.length; i++){ for(j = 0; j <emff.length; j++){
                var e1 = document.getElementById("formEmail" + i); var e2 = document.getElementById("formEmail" + j);
                if(i !== j){ if(e1.value == e2.value){ e1.style.border = "1px solid black"; e2.style.border = "1px solid black"; var m = 1;
                        return false; }else { e1.style.border = "1px solid blue"; e2.style.border = "1px solid blue";} } } }
        for (i = 0; i < teel.length; i++) { var formPh = document.getElementById("formTelephone" + i);
            if ((formPh.value == "") || (!formPh.value.match(oblig))){ eP = 1; formPh.style.border = "1px solid red";
            }else{ formPh.style.border = "1px solid black"; } }
        for (i = 0; i <emff.length; i++) { var formEmail=document.getElementById("formEmail" + i);
            if ((formEmail.value == "") ||  (!formEmail.value.match(oem))){
                eE = 1; formEmail.style.border = "1px solid red" }else{ formEmail.style.border = "1px solid black" } }
        if ((eN !== 1) && (eS !== 1) && (eP !== 1) && (eE !== 1) && (w !== 1) && (m !== 1)) {
            contacts.sort(compare); localStorage.setItem("contacts", JSON.stringify(contacts)); document.getElementById("newcont").style.display = "none";
            var qw = document.getElementById("myModalCreating"); qw.style.display = "block"; } }; }
function removeCont(){
    var contacts = [ ]; contacts = JSON.parse(localStorage.getItem("contacts")); var allcontacts = document.getElementById("contacts");
    for(var i = 0; i < contacts.length; i++){
        var somecont = document.createElement("div"); somecont.id = "contact-" + i; somecont.className = "contact"; allcontacts.appendChild(somecont);
        var str =  '<div id="contact_name'+ i +'" class="contact_name">';
        str += contacts[i].name + ' '+ contacts[i].lastname + '<form>';
        str += '<input class="first_name" type="text" id="firstname'+i+ contacts[i].name + '">';
        str += '<input class="last_name" type="text" id="lastname'+i+ contacts[i].lastname + '"></form></div>';
        str += '<div class="contact_card"><div class="card_actions">';
        str += '<button onclick="removeContact(this)" title="Delete " class="delbtn" id ="'+ i +'"><i class="fa fa-trash-o" aria-hidden="true"></i></button>';
        str += '<button id="'+i+'"  onclick="editContact(this)" title="Edit"><i class="fa fa-pencil" aria-hidden="true"></i></div></button>';
        str += '<div class="card_content"><form><div class="tels" id="tels'+ i +'">'; str += '</div><div class="emails" id="emails'+i+'"></div></form></div></div>';
        somecont.innerHTML += str; var telArr = contacts[i].telephone;
        for(l = 0; l < telArr.length; l++) { var tels = document.getElementById("tels" + i); var pc = document.createElement("p"); tels.appendChild(pc);
            var strq = '<i class="fa fa-phone" aria-hidden="true"></i>';
            strq += '<input id="tel_card-' + i + '-' + l + '"  type="tel" value="' + contacts[i].telephone[l] + '" readonly>'; pc.innerHTML += strq; }
        var emailArr = contacts[i].email; for(j = 0; j < emailArr.length; j++){ var emails = document.getElementById("emails"+i); var pEmail = document.createElement("p");
            pEmail.id = "email_p" +j; emails.appendChild(pEmail);
            var strq = '<i class="fa fa-envelope" aria-hidden="true"></i>';
            strq += '<input id="email_card-'+i+'-'+j+'"  type="email" value="' + contacts[i].email[j] + '" readonly>'; pEmail.innerHTML += strq; } } accordion();
}
function search() {
    var contacts = JSON.parse(localStorage.getItem('contacts')); var searchcon = document.getElementById("sfield");
    for (i = 0; i < contacts.length; i++) { var filter = searchcon.value.toUpperCase();
            if ((contacts[i].name.toUpperCase().indexOf(filter) > -1) || (contacts[i].lastname.toUpperCase().indexOf(filter) > -1)) {
                document.getElementById("contact-" + i).style.display = "";
                var withoutrez = 1; } else { document.getElementById("contact-" + i).style.display = "none"; }
        if(withoutrez == 1){ document.getElementById("no_res").style.display = "none" }
        else { document.getElementById("no_res").style.display = "block" } } }
function compare(a,b) {
    var contacts = JSON.parse(localStorage.getItem("contacts"));
    if (a.name < b.name)  return -1; if (a.name > b.name)  return 1;
    return 0;  }