let HAND = ['3','S','2','D','9','S'];
let ARRAN = ['','',''];
let SEQ = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];
let z=0

let arrange = DEMO => {
    let i,j;
    for( i=0; i<=12; i++ ) {
        for( j=0; j<=2; j++ ) {
            if( SEQ[i] == DEMO[j] ) {
                ARRAN[z++] = SEQ[i];
                DEMO[j]='';
            }
        }
    }
    console.log(ARRAN);
}

let seqCheck = () => {
    let i,pos;
    arrange(D_HAND);
    for( i=0; i<13; i++ ) {
        if( ARRAN[0]==SEQ[i] ) {
            pos=i;
            break;
        }
    }
    if( SEQ[pos+1]==ARRAN[1] ) {
        if( SEQ[pos+2]==ARRAN[2] )
            return true;
        else if( ARRAN[0]=='A' && ARRAN[1]=='K' && ARRAN[2]=='J' ) 
            return true;
        else return false;
    }
    else if( ARRAN[0]=='A' && ARRAN[1]=='3' && ARRAN[2]=='2' )
        return true;
    else return false;
}

let strength = HAND => {

    if( HAND[0]==HAND[2] && HAND[2]==HAND[4] && HAND[0]==HAND[4] )
        return "TRAIL";
    if( HAND[0]==HAND[2] || HAND[2]==HAND[4] || HAND[0]==HAND[4] )
        return "PAIR";
    if( HAND[1]==HAND[3] && HAND[3]==HAND[5] && HAND[1]==HAND[5] ) {
        if( seqCheck()===true ) 
            return "COLOR-RUN"
        return "COLOR";
    }
    if( seqCheck()===true ) 
        return "RUN"
    return ARRAN[0]+"-HIGH";
}

let D_HAND=[ HAND[0], HAND[2], HAND[4] ];
console.log(HAND);
// arrange(D_HAND);
// seqCheck();
let Res=strength(HAND)

console.log(Res);