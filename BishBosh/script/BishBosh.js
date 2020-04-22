function BishBosh(first, second, listlimit) {
    var oneline = "";
    for (let i = 1; i <= listlimit; i++) {
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
