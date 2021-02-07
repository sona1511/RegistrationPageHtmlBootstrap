console.log("Hello Says javaScript")

var fullName=" Sona ";

var sal=4000.00;

var carArr= new Array("Maruti","BMW");

var city=new  String("Pune");

function greetMe()

{

    alert(" Welcome To Capgemini :"+ fullName);

    alert(" I have  :"+ carArr[1]);

}

function display()

{

    alert(" Registraion Page is loaded");

}

function validateData()

{

    alert("..in .validateData..");

   var passValue=window.document.formRegistration.txtPassword.value;

   var confPassValue=window.document.formRegistration.txtConfPassword.value;

   if(passValue!=confPassValue)

   {

        alert ("UR Passworn and Confirm Password id not matching");

        return false;

   }

   var fnData=document.getElementById("txtFirstnameId").value;

   document.write (" First Name :"+fnData);

    return true;

}
