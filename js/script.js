var n1 = prompt("Write the first number : ");
var n2 = prompt("Write the Second number : ");
var n3 = prompt("Write the Third number : ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if(n1 >= n2){
    if(n1>=n3){
        document.write(n1 + " Is the largest Number!");
    }
    else{
        document.write(n3 + " Is the largest Number!");
    }    
} else{
    if(n2 >= n3){
        document.write(n2 + " Is the largest Number!");        
    }
    else{
        document.write(n3 + " Is the largest Number!");
    }
};