
function conversion(){
    //$( ".card" ).empty();
    var namearray =[];

    var nums  =['1','2','3','4','5','6','7','8','9']
    var nums_1 =['','10','11','12','13','14','15','16','17','18','19']
    var nums_2=['','10','20','30','40','50','60','70','80','90']
    var digit = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
    var ones  = ["","Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"]
    var tens = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
var a =document.getElementById('input').value
console.log(a)
var array = a.split('').reverse();
console.log(array);

var array_len = array.length;
console.log(array_len);
if(array_len > 7 || a<0){
    window.alert("enter a valid number")
}
else{
    for(let i=0;i<array_len;i++){

        //single digit
        if(i==0){
            if(array[1]!== '1'){
                console.log(array[1])
                if(nums.includes(array[0])){
                    namearray.push(digit[array[0]]);
            } 
            }                    
        }
        //2 digit numbers
        if(i==1){
            if(array[1]==1){
                var new_num = array[1]+array[0];
                console.log(new_num);
                for(let i=0;i<nums_1.length;i++){
                    if(new_num == nums_1[i]){
                        console.log(i)
                        namearray.push(ones[i]);
                }
                
            }
            }
            else if(nums.includes(array[1])){
                namearray.push(tens[array[1]]);
            }

        }
        if(i==2){
            if(nums.includes(array[2])){
                namearray.push(digit[array[2]]+ " "+"Hundred and ");
            }

        }
       if(i==3 && array_len==4){
            
            if(nums.includes(array[3])){
                namearray.push(digit[array[3]]+ " "+"Thousand ");
            }

        }
        if(i==4){
            if(array[array_len-1]=='1'){
                t_new_num = array[array_len-1]+array[array_len-2];
                console.log("t_new"+t_new_num);
                for(let j=0;j<nums_1.length;j++){
                     if(t_new_num==nums_1[j]){
                        namearray.push(ones[j]+ " "+"Thousand ");
            }
                }
               
            }
            else{
                if(nums.includes(array[4])){
                    namearray.push(tens[array[4]]+digit[array[3]]+ " "+"Thousand ");
            }

            }
            
            

        }
        if(i==5 && array_len==6){
            
            if(nums.includes(array[5])){
                namearray.push(digit[array[5]]+ " "+"Lakh ");
            }

        }
    
    if(i==6){
            if(array[array_len-1]=='1'){
                L_new_num = array[array_len-1]+array[array_len-2];
                console.log("L_new"+L_new_num);
                for(let j=0;j<nums_1.length;j++){
                     if(L_new_num==nums_1[j]){
                        namearray.push(ones[j]+ " "+"Lakhs ");
            }
                }
               
            }
            else{
                if(nums.includes(array[6])){
                    namearray.push(tens[array[6]]+digit[array[5]]+ " "+"Lakhs ");
            }

            }
            
            

        }
    }

}

swal(namearray.reverse().join(''));



};
