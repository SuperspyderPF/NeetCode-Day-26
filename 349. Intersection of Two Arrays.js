var intersection = function(n1, n2) {
    var ar = []
    for( i=0;i<n1.length;i++){
        for( j=0;j<n2.length;j++){
            if(n1[i]===n2[j]){
                ar.push(n1[i])
            }
        }
    }
    return Array.from(new Set(ar))
}