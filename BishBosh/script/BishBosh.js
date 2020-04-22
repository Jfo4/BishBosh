function BishBosh(first, second, limit) {
    var oneline = "";
    for (let i = 1; i <= limit; i++) {
        let out = "";
        if (i % first == 0 && i % second == 0) {
            out = "Bish-Bosh";
        }
        else if (i % first == 0) {
            out = "Bish";
        }
        else if (i % second == 0) {
            out = "Bosh";
        }
        else if (out == "") {
            out = i; // .tostring();
        }
        else {
            out = "Impossible?"
        }
        oneline += out + ', ';
        }
    return oneline;
}

function ReadForm() {
    var bish = document.getElementById("bish").value;
    var bosh = document.getElementById("bosh").value;
    var limit = document.getElementById("limit").value;
    //alert(bish + ',' + bosh + ',' + limit);
    var result = BishBosh(bish, bosh, limit);
    //alert(result);
    document.getElementById("output").innerHTML = result.slice(0, result.length - 2) + '.';
    return false;
}

window.onload = function () {
    //var bish = document.getElementById("bish").value;
    //    bosh = document.getElementById("bosh").value,
    //    limit = document.getElementById("limit").value,
    
    var showlistbutton = document.getElementById("clickme");
     showlistbutton.addEventListener('click', function () {
        var firstdivider = document.getElementById("bish").value,
            seconddivider = document.getElementById("bosh").value,
            listlimit = document.getElementById("limit").value;
         var f = parseInt(firstdivider),
             s = parseInt(seconddivider),
             l = parseInt(listlimit);
        if (f < s && l > s && f <= 20 && s <= 30 && l < 1000) {
            var result = BishBosh(f, s, l);
            //alert(result);
            document.getElementById("output").innerHTML = result.slice(0, result.length - 2) + '.';
        }
        else {
            var msg = "";
            if (f > s)
                msg ='Bish > Bosh';
            else if (l < s)
                msg= 'Bosh > Limit';
            else if (l > 999)
                msg= 'Limit > 999';
            else if (f > 20)
                msg= 'Bish > 20';
            else if (s > 30)
                msg= 'Bosh > 30';
            else msg = 'Ojdå:' + f + ',' + s + ',' + l;
            alert(msg + ', avbryter.');
        }
    });

    var resetbutton = document.getElementById("resetinput");
    
    resetbutton.addEventListener('click', function () {
        document.getElementById("bish").value = null; // ...or default
        document.getElementById("bosh").value = null;
        document.getElementById("limit").value = null;
        document.getElementById("output").innerHTML = "Rensat...";
     });
}
