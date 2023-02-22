document.getElementById("alertString").onclick = function (){
    alert("I Am Muahmmad Usman Shahid.")
    document.getElementById('statement').innerHTML = "I am usman shahid"
}
document.getElementById("number1").onclick = function (){
    alert("03027175981")
    document.getElementById('statement').innerHTML = "My Phone Number is 03027175981."
}

var firstname="usman"
var secondname="shahid"
var fullname =firstname+ " "+ secondname
document.write(fullname)


                // variable practice

document.getElementById('variable1').onclick = function(){
    let html ="<ul><li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li> <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not<code>Alert</code> only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset <code>userName</code> sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li> <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li></ul>"
document.getElementById('Output').innerHTML =html;
}


               // camelCase practice
document.getElementById('camelcase1').onclick =function(){
    let css = " <ul><li><code>user</code></li><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeAndDate</code></li><li><code>userResponseTimeAndDateLimit</code></li></ul>"
    document.getElementById('Output').innerHTML=css
}

                 //sum practice
document.getElementById('sum1').onclick = function(){
    let num1= 9;
    let num2= 8;
    let sum =num1 + num2
    document.getElementById('Output').innerHTML=sum

    let statement="let num1 ="+ num1 +"<br> let num2 ="+ num2 +""
document.getElementById('statement').innerHTML=statement
}
              //subtract practice
document.getElementById('subtract1').onclick = function(){
    let num1= 9;
    let num2= 8;
    let subtract =num1 - num2
    document.getElementById('Output').innerHTML=subtract

    let statement="let num1 ="+ num1 +"<br> let num2 ="+ num2 +""
document.getElementById('statement').innerHTML=statement
}
              //multiply practice
document.getElementById('multiply').onclick = function(){
    let num1= 9;
    let num2= 8;
    let multiply =num1 * num2
    document.getElementById('Output').innerHTML=multiply

    let statement="let num1 ="+ num1 +"<br> let num2 ="+ num2 +""
document.getElementById('statement').innerHTML=statement
}
              //subtract practice
document.getElementById('divide').onclick = function(){
    let num1= 9;
    let num2= 8;
    let divide =num1 / num2
    document.getElementById('Output').innerHTML=divide

    let statement="let num1 ="+ num1 +"<br> let num2 ="+ num2 +""
document.getElementById('statement').innerHTML=statement
}









//subtract practice
document.getElementById('calculate').onclick = function(){
let num1= 9;
let num2= 8;
let calculate =5+9-8**3(6-4);
document.getElementById('Output').innerHTML=calculate

let statement="let num1 ="+ num1 +"<br> let num2 ="+ num2 +""
document.getElementById('statement').innerHTML=statement
}

