function age(){
    var dt1 = document.getElementById('date').value;
    var mnt1 = document.getElementById('month').value;
    var yr1 = document.getElementById('year').value;
    
    var date = new Date();
    var dt2 = date.getDate();
    var mnt2 = 1 + date.getMonth();
    var yr2 = date.getFullYear();
    var month = [31,28,31,30,31,30,31,31,30,31,30,31]
    
    if (dt1>dt2){
        dt2=dt2+month[mnt2-1];
        mnt2=mnt2-1;
    }
    if(mnt1>mnt2){
        mnt2=mnt2+12;
        yr2=yr2-1;
    }
    var d=dt2-dt1;
    var m=mnt2-mnt1;
    var y=yr2-yr1;
    document.getElementById('age').innerHTML =`Your Valuble Age is ${y} Years ${m} Months ${d} Days`;
}