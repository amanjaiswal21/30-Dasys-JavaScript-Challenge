// Activity 1

//Task 1
const arr=[1,2,3,4,5];

//Task 2
const first=arr[0];
const last=arr[arr.length - 1];


//++++++++++++++++++++++++++++++++++++++++++++++

// Activity 2

//Task 3
arr.push(6);
console.log(arr);

//Task 4
arr.pop();
console.log(arr);

//Task 5
arr.shift();
console.log(arr);

//Task 6
arr.unshift(1);
console.log(arr);


//++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

//Activity 3

//Task 7
const newArr=arr.map((el)=>{ return 2*el});
console.log(newArr);

//Task 8
const newArr2=arr.filter((el)=>{return el%2==0;})
console.log(newArr2);

//Task 9
const initialValue=5;
const totalSum=arr.reduce((acc,el)=>acc+el,initialValue);
console.log(totalSum)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Activity 4

//Task 10
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

//Task 11
arr.forEach((el)=>console.log(el))


//++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Activity 5

//Task 12
const twodArr=[];
const row=3;
const col=3;

for(let i=0; i<row; i++){
    twodArr[i]=[];
    for(let j=0; j<col; j++){
        twodArr[i][j]=j;
    }
}
console.log(twodArr);


//Task 13
console.log(twodArr[1][2]);;