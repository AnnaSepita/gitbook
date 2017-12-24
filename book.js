;(function () {
    'use strict';
    console.info(document);
   var h1 = document.getElementsByTagName('h1');
    console.dir(h1[0]);
     h1[0].style.color = "black";
    h1[0].addEventListener('mouseover', function () {
        h1[0].style.color = "blue";
    });
    h1[0].addEventListener('mouseout', function () {
        h1[0].style.color = "black";
    });
    var plus = document.getElementsByClassName('fa-plus');
    plus[0].addEventListener('mouseover', function () {
        plus[0].style.color = "lightblue"; });
    plus[0].addEventListener('mouseout', function () {
        plus[0].style.color = "blue"; });
    plus[0].addEventListener('click', function () {
        plus[0].style.color = "black";
        window.location="form.html"; });
    var p = document.getElementById('name1');
    var q = document.getElementsByName('surname');
    var contacts =  [
        { id:"1", name: "Vasil", surname: "Ivanov", phone: "+380505009876", email: "v@ukr.net" },
        { id:"2",  name: "Alla",  surname: "Zhukova", phone: "+380975066676", email: "azh@ukr.net" },
        { id:"3", name: "Alina", surname: "Andrienko", phone: "+38050567843", email: "aa89@ukr.net" },
        { id:"4", name: "Anton", surname: "Sokol", phone: "+38050544477", email: "sol90@gmail.com" },
        { id:"5", name: "Olexiy", surname: "Petrov", phone: "+38068744999", email: "olx@gmail.com" },
        { id:"6", name: "Marina", surname: "Babenko", phone: "+38099764110", email: "marine@gmail.com"  },
        { id:"7", name: "Maxim", surname: "Zhukov", phone: "+38097550099", email: "maxx@ukr.net" },
        { id:"8", name: "Sveta", surname: "Tokar", phone: "+380997665532", email: "sv@gmail.com" },
        { id:"9", name: "Artem", surname: "Dmitrenko", phone: "+38098770997", email: "arr@gmail.com" },
        { id:"10", name: "Dmitriy", surname: "Perepelitsa", phone: "+38066333997", email: "per@gmail.com" },
        { id:"11", name: "Anna", surname: "Sheffer", phone: "+38050887876", email: "aash@mail.ru" },
        { id:"12",  name: "Denis",  surname: "Mosienko", phone: "+380975011234", email: "d@ukr.net" },
        { id:"13", name: "Maxim", surname: "Hromov", phone: "+38099567843", email: "hroom8@ukr.net" },
        { id:"14", name: "Boris", surname: "Sokolovski", phone: "+38099876477", email: "sokoll90@gmail.com" },
        { id:"15", name: "Olexandr", surname: "Romanov", phone: "+38050044999", email: "romanov@gmail.com" },
        { id:"16", name: "Anastasia", surname: "Chorna", phone: "+38050074110", email: "chorna@gmail.com"  },
        { id:"17", name: "Illya", surname: "Troyan", phone: "+38099670099", email: "troy@ukr.net" },
        { id:"18", name: "Victoria", surname: "Tokar", phone: "+380505065532", email: "took@gmail.com" },
        { id:"19", name: "Angelina", surname: "Kotlyar", phone: "+38067990997", email: "kot7@gmail.com" },
        { id:"20", name: "Olya", surname: "Nikolayenko", phone: "+38067998997", email: "nik6@gmail.com" }
    ];
    contacts.sort(function (a,b) {
        if (a.name > b.name) { return 1; }
        if (a.name < b.name) { return -1; }
        return 0; });
    for(var i = 0; i < contacts.length; i++) {
        for(var j = 0; j < contacts.length; j++) {
            var srt = contacts[i].name;
            var srnm = contacts[i].surname; }
        document.write(srt + " " + srnm + " <br />" ); }

    function person(name, surmane,phone,email) {
        this.name=name;
        this.surname=surmane;
        this.phone=phone;
        this.email=email;
    }
  // var output = JSON.stringify(contacts);
  //document.write(output.name);
    document.getElementsByTagName('input')[0].onkeypress = function(e) {
        e = e || event;
        if (e.ctrlKey || e.altKey || e.metaKey) {e.filter(); return;}
        var chr = getChar(e);
        if (chr === null){ return;}
        if (chr < 'a' || chr > 'z') {
            return false; }
    };
    function getChar(event) {
        if (event.which === null) {
            if (event.keyCode < 32) return null;
            return String.fromCharCode(event.keyCode)
        }
        if (event.which != 0 && event.charCode != 0) {
            if (event.which < 32) return null;
            return String.fromCharCode(event.which)
        }
        return null;
    }
   // var cont = document.getElementsByClassName('button');
   // if (cont = 'click'){
       // contacts[contacts.length]=; }

    //document.getElementsByTagName('p').onclick = function () {
     //    document.getElementById('text').style.display = 'none';
    // }

  /*  var list = function(data) {  for (var key in data) {    document.write(data[key].name);} };
    var search = function(name) { for (var key in contacts) {  if (contacts[key].name === name) {
     document.write("Name: " + contacts[key].name + "</br>" + "Surname: " + contacts[key].surname +  "</br>" + "Phone: " + contacts[key].phone + "</br>" + "Email: " + contacts[key].email + "</br>");
                return contacts[key];  } }   }; */
})();