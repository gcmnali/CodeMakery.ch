var dom = {};
dom.c = "fake namespace";
console.log(dom.c);

dom.h1 = document.getElementById("myH1");
dom.h1.setAttribute;

// text fields
dom.nameTextField = document.getElementById("nameTxt");
dom.surNameTextField = document.getElementById("surnameTxt");
dom.ageTextField = document.getElementById("ageTxt");
dom.nationalityTextField = document.getElementById("nationalityTxt");
//control panel
dom.textInput = document.getElementById("inputField");
dom.tryMeBtn = document.getElementById("tryMeBtn");
dom.alertCloseBtn = document.getElementById("alertCloseBtn");
dom.alertDiv = document.getElementById("alertDiv");
dom.messageDiv = document.getElementById("messageDiv");
// checkboxes
dom.nameCb = document.getElementById("nameCb");
dom.surnameCb = document.getElementById("surnameCb");
dom.ageCb = document.getElementById("ageCb");
dom.nationalityCb = document.getElementById("nationalityCb");
//message Panel
dom.message = document.getElementById("message");
dom.msg1 = document.getElementById("msg1");
dom.msg2 = document.getElementById("msg2");
dom.msg3 = document.getElementById("msg3");

// checkboxes and inputs matches with this class
function Match(){
    this.checked = false,
    this.cb = null,
    this.input = null
};
var matches = new Array();

var nameM = new Match();
nameM.cb = dom.nameCb;
nameM.input = dom.nameTextField;

var surnameM = new Match();
surnameM.cb = dom.surnameCb;
surnameM.input = dom.surNameTextField;

var ageM = new Match();
ageM.cb = dom.ageCb;
ageM.input = dom.ageTextField;

var nationalityM = new Match();
nationalityM.cb = dom.nationalityCb;
nationalityM.input = dom.nationalityTextField;

matches.push(nameM);
matches.push(surnameM);
matches.push(ageM);
matches.push(nationalityM);

// event listeners
dom.tryMeBtn.addEventListener("click",tryBtnClicked);
dom.textInput.addEventListener("input",inputChanged);
dom.alertCloseBtn.addEventListener("click", closeAlert);

function tryBtnClicked(){
    var reg = new RegExp('^[0-9]*$');
    var check3 = reg.test(ageM.input.value);
    if(!check3){
        ageM.input.style.border = "thin solid #FF0000";
    }
    var check1 = nameM.input.value != "";
    if(!check1){
        nameM.input.style.border = "thin solid #FF0000";   
    }
    var check2 = surnameM.input.value != "";
    if(!check2){
        surnameM.input.style.border = "thin solid #FF0000";   
    }
    var check4 = nationalityM.input.value != "";
    if(!check4){
        nationalityM.input.style.border = "thin solid #FF0000";   
    }
    if(check1 && check2 && check3 && check4){
        console.log("comes here");
        dom.message.style.visibility = "visible";
        dom.msg1.textContent = "My name is "+nameM.input.value.charAt(0).toUpperCase() + nameM.input.value.slice(1)+" "+surnameM.input.value.toUpperCase()+".";
        dom.msg2.textContent = "I am "+ageM.input.value+" years old.";
        dom.msg3.textContent = "I am from "+nationalityM.input.value.toUpperCase()+".";

        ageM.input.style.border = "none"; 
        nameM.input.style.border = "none";
        surnameM.input.style.border = "none";
        nationalityM.input.style.border = "none";
    }else{
        dom.alertDiv.classList.remove("fade");
        dom.alertDiv.classList.add("show");
    }
};
function closeAlert(){
    dom.alertDiv.classList.remove("show");
    dom.alertDiv.classList.add("fade");
}
function inputChanged(e){
    matches.forEach(element =>{
        if(element.checked){
            element.input.value = e.target.value;
        }
    });
};
function CheckBoxClicked(cb){
    matches.forEach(element => {
        if(element.cb == cb){
            if(cb.checked){
                console.log("cb checked");
                element.input.style.backgroundColor = "darksalmon";
                element.checked = true;
            }else{
                console.log("cb UN-checked");
                element.input.style.backgroundColor = "#e9ecef";
                element.checked = false;
            }
        }
    });
}

// documnet.getelementbyid().textContent = "";
// document.getelementById().innerHtml = "";
// document.querySelector("body").addEventListener("mouseOver", function(event){
//      console.log(event.clientX);
//      console.log(event.clientY);
//});