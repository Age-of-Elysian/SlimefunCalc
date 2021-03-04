function refreshCalc() {

    /* Value Check */

    if (document.getElementById("carbonadoSum").value > 999) document.getElementById("carbonadoSum").value = 999;
    if (document.getElementById("carbonadoSum").value < 0) document.getElementById("carbonadoSum").value = 0;

    if (document.getElementById("reinforcedIngotSum").value > 999) document.getElementById("reinforcedIngotSum").value = 999;
    if (document.getElementById("reinforcedIngotSum").value < 0) document.getElementById("reinforcedIngotSum").value = 0;

    /* Coal Calc */

    coalSum = 0;
    coalSum += document.getElementById("carbonadoSum").value * 256;
    coalSum += document.getElementById("reinforcedIngotSum").value * 64;

    document.getElementById("coalSum").innerHTML = coalSum;
    
    /* Flint Calc */

    flintSum = 0;
    flintSum += document.getElementById("carbonadoSum").value * 1;

    document.getElementById('flintSum').innerHTML = flintSum;

    /* Iron Dust Calc */

    ironDustSum = 0;
    ironDustSum += document.getElementById("reinforcedIngotSum").value * 8;

    document.getElementById("ironDustSum").innerHTML = ironDustSum;

    /* Aluminum Dust Calc */

    aluminumDustSum = 0;
    aluminumDustSum += document.getElementById("reinforcedIngotSum").value * 4;

    document.getElementById("aluminumDustSum").innerHTML = aluminumDustSum;

    /* Silver Dust Calc */

    silverDustSum = 0;
    silverDustSum += document.getElementById("reinforcedIngotSum").value * 3;

    document.getElementById("silverDustSum").innerHTML = silverDustSum;

    /* Gold Dust Calc */

    goldDustSum = 0;
    goldDustSum += document.getElementById("reinforcedIngotSum").value  * 12;

    document.getElementById("goldDustSum").innerHTML = goldDustSum;

    /* Copper Dust Calc */

    copperDustSum = 0;
    copperDustSum += document.getElementById("reinforcedIngotSum").value * 7;

    document.getElementById("copperDustSum").innerHTML = copperDustSum;

    /* Lead Dust Calc */

    leadDustSum = 0;
    leadDustSum += document.getElementById("reinforcedIngotSum").value * 2;

    document.getElementById("leadDustSum").innerHTML = leadDustSum;

    /* Tin Dust Calc */

    tinDustSum = 0;
    tinDustSum += document.getElementById("reinforcedIngotSum").value * 3;

    document.getElementById("tinDustSum").innerHTML = tinDustSum;

};