function fun1() {
    try {
        let a = document.getElementById("billAmount").value;
        let b = document.getElementById("percentageTip").value;
        if (a === "" || b === "" || isNaN(a) || isNaN(b) || (a<=0) || (b<=0)) {
            throw new Error("Invalid input");
        }
        let billAmount = parseInt(a);
        let tipPercentage = parseInt(b);
        let tip = (tipPercentage / 100) * billAmount;
        let total = billAmount + tip;
        document.getElementById("tipAmount").value = tip;
        document.getElementById("totalAmount").value = total;
    } catch (err) {
        document.getElementById("errorMessage").innerHTML ="Please Enter a Valid Input";
        document.getElementById("tipAmount").value = " ";
        document.getElementById("totalAmount").value = " ";
    }
}
