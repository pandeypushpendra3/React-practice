var arr = [9,4,7,6,3,1,5];
var n =7;
var l =0;
var r = n-1;



function mergesort(a,l,r){
    if(l<r){
        var mid = Math.floor((l+r)/2);
    
        mergesort(a,l,mid);
        mergesort(a,mid+1,r);
        merge(a,l,mid,r);
    }
    
    }
function merge(a,l,mid,r){
    var i =l; var j =mid+1;
    var b =[];
var k = l;
while (i<=mid && j<=r){
    if(a[i]<a[j]){
        b[k]=a[i]
        i++;
    }
    else{
        b[k]= a[j];
        j++;
    }
}
k++;

if(i>mid){
    while(j<=r){
        b[k]= a[j];
        k++;
        j++;

    }
}

else{
    while(i<=mid){
        b[k]= a[i];
        k++;
        i++;
    }
}
 for(k=l;k<r;k++){
     a[k]= b[k];
 }
 console.log(a)
}


    (mergesort(arr,l,r));