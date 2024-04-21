//my method

// var element = document.createElement("div");
// element.setAttribute("class", "container");
// var f = document.createElement("div");
// f.setAttribute("class", "row");
// element.append(f);
// var g = document.createElement("div");
// g.setAttribute("class", "col");
// g.innerText = "this is col"
// f.append(g);
// document.body.append(element);

//mentor loc
// var container = document.createElement("div");
// container.className = "container";
// // container.id = "main1";

// var row = document.createElement("div");
// row.className = "row";

// var col = document.createElement("div");
// col.className = "col-1";
// col.innerText = "this is col";


// row.append(col);
// container.append(row);
// document.body.append(container);


// function foo(){
//     var res = document.getElementById("first").value;
//     var res1 = document.getElementById("middle").value;
//     var res2 = document.getElementById("last").value;
//     var res3 = document.getElementById("email").value;
//     var res4 = document.getElementById("addres").value;
//     console.log("First name is: ",res);
//     console.log("Middle name is: ",res1);
//     console.log("Last name is: ",res2);
//     console.log("Email-Id is: ",res3);
//     console.log("Address is: ",res4);
// }

function labels(tagname, aname, avalue, content){
    var pie = document.createElement(tagname);
    pie.setAttribute(aname, avalue);
    pie.innerHTML =  content;
    return pie;
}

function inputs(input_tag, aname1, avalue1, aname2, avalue2){
    var cake = document.createElement(input_tag);
    cake.setAttribute(aname1, avalue1);
    cake.setAttribute(aname2, avalue2);
    return cake;
}

function ln_break(){
    var line_br = document.createElement("br");
    return line_br;
}

var fir = labels("label", "for", "first", "First Name");
var label_break_1 = ln_break();
var fir_inp = inputs("input", "type", "text", "id", "first");
var input_break_1 = ln_break();
var mid = labels("label", "for", "middle", "Middle Name");
var label_break_2 = ln_break();
var mid_inp = inputs("input", "type", "text", "id", "middle");
var input_break_2 = ln_break();
var las = labels("label", "for", "last", "Last Name");
var label_break_3 = ln_break();
var las_inp = inputs("input", "type", "text", "id", "last");
var input_break_3 = ln_break();
var eml = labels("label", "for", "email", "Email-Id");
var label_break_4 = ln_break();
var eml_inp = inputs("input", "type", "email", "id", "email");
var input_break_4 = ln_break();
var addr = labels("label", "for", "addres", "Address");
var label_break_5 = ln_break();
var addr_inp = inputs("input", "type", "text", "id", "addres");
var input_break_5 = ln_break();
var button_create = document.createElement("button");
button_create.setAttribute("type","button");
button_create.setAttribute("onclick","foo()");
button_create.innerHTML ="Click Me";
document.body.append(fir, label_break_1, fir_inp, input_break_1, 
                    mid,label_break_2, mid_inp, input_break_2, 
                    las, label_break_3, las_inp,input_break_3,
                    eml,label_break_4,eml_inp,input_break_4,
                    addr,label_break_5,addr_inp,input_break_5,button_create);
function foo() {
    var res = document.getElementById("first").value;
    var res1 = document.getElementById("middle").value;
    var res2 = document.getElementById("last").value;
    var res3 = document.getElementById("email").value;
    var res4 = document.getElementById("addres").value;
    console.log("First name is: ", res);
    console.log("Middle name is: ", res1);
    console.log("Last name is: ", res2);
    console.log("Email-Id is: ", res3);
    console.log("Address is: ", res4);
}
