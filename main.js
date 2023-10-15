function result(){
    var score=0;
    for(let i =1 ; i<= 10 ; i++){
   if(document.getElementById(`correct${i}`).checked){
        score++;
    }
}
document.getElementById("end").textContent = `عدد الإجابات الصحيحة هي  :  ${+score} `;
if(   (score == 9) || (score == 10)  ) {
    document.getElementById("level").textContent = `مستوى هلاليتك صنديدي , تستحق لقب الطاقية العظمى `;
}
if(  (score == 8) || (score == 7) ) {
    document.getElementById("level").textContent = `مستوى هلاليتك عالي , شقردي أصيل `;
}
if(  (score == 6) || (score == 5) ) {
    document.getElementById("level").textContent = `مستوى هلاليتك متوسط , يجي منك  `;
}
if(  (score == 4) || (score == 3) || (score == 2) || (score == 1) || (score == 0) ) {
    document.getElementById("level").textContent = `مستوى هلاليتك منخفض , شكلك نصراوي  `;
}
} 
