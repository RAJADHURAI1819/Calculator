var aaa = "";
let s = 0;
var i = 0;
let spl;
let sp = "";
let f = true;

function getbutton(e) {
    var aa = e.innerText;
    aaa += aa;
    sp += aa;
    document.getElementById("display").value = aaa;
    switch (aa) {
        case "=":
            document.getElementById("display").value = s;
            document.getElementById("ans").value = "";
            aaa = s;
            break;
        case "clr":
            document.getElementById("display").value = "";
            document.getElementById("ans").value = "";
            aaa = ""
            s = 0
            sp = ""
            i = 0

            break;
        default:
            if (aaa.length >= 1 && Number.isInteger(Number(aaa))) {
                s = Number(aaa);
                i = aaa.length - 1;
            } else {
                if (aaa[aaa.length - 1] == "+") {
                    sp = "" + s + "+";
                    i++;
                } else if (aaa[aaa.length - 1] == "-") {
                    sp = "" + s + "-";
                    i++;
                } else if (aaa[aaa.length - 1] == "*") {
                    sp = "" + s + "*";
                    i++;
                } else if (aaa[aaa.length - 1] == "/") {
                    sp = "" + s + "/";
                    i++;
                } else {
                    if (sp.indexOf("+") != -1) {
                        if (Number.isInteger(sp.length - 1)) {
                            spl = sp.split("+")
                            s = Number(spl[0]) + Number(spl[1])
                            document.getElementById("ans").value = s;

                        }
                    } else if (sp.indexOf("-") != -1) {
                        if (Number.isInteger(sp.length - 1)) {
                            spl = sp.split("-")
                            s = Number(spl[0]) - Number(spl[1])
                            document.getElementById("ans").value = s;

                        }
                    } else if (sp.indexOf("*") != -1) {
                        if (Number.isInteger(sp.length - 1)) {
                            spl = sp.split("*")
                            s = Number(spl[0]) * Number(spl[1])
                            document.getElementById("ans").value = s;

                        }
                    } else {
                        if (Number.isInteger(sp.length - 1)) {
                            spl = sp.split("/")
                            s = Number(spl[0]) / Number(spl[1])
                            document.getElementById("ans").value = s;

                        }
                    }
                }
            }
    }

}