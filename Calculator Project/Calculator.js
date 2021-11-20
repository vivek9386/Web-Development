function display(val){
    document.getElementById("result").value += val;
}

function clearText(){
    document.getElementById('result').value = '';
}

function equate(){
    let x = document.getElementById('result').value;
    let y = eval(x);
    document.getElementById('result').value = y;
}