// // bài 1 a
let N= prompt("Nhập số phần tử")
let arr=[] 

for (let i=0; i<N; i++)
{
    arr[i]=prompt("số thứ "+(i+1))
    arr[i] =arr[i]*1
}

console.log(arr)
let m= prompt("Nhập tổng")
let check=0
for (let i=0; i<(N-1); i++)
{
    for (let j=1; j<N; j++)
    {
        if (arr[i]+arr[j]==m)
        {
        console.log(i +","+j)
        check++
        }
    }
}
if (check ==0)
console.log("Không tìm thấy")


// Bài 1 b
let numb=prompt("Số lượng cừu là: ")
let ten=[]
let klg=[]
let tong=0
let M =prompt("Điền số tháng")
for (let i=0; i<numb; i++)
{
    ten[i]=prompt("Tên con cừu thứ "+(i+1))
    klg[i]=prompt("Khoois lượng lông con cừu thứ "+(i+1))
    klg[i]=klg[i]*1
}

let k =0
for(let j=0;j<M;j++)
{
    for (let i =0; i<numb; i++)
    {   
        klg[i]+=2
        console.log(klg[i])
    
    
    let max = klg[0];
    for (let s = 1; s < numb; s++)
    {
        if (max < klg[s])
        {
            max = klg[s];
            console.log("Max là "+max)
            k=s
        }
    }
  
    
    }
    tong = tong +klg[k]-1
    klg[k]=1
    for (let h =0; h<numb; h++)
        console.log(klg[h])

}
console.log("Số lông cắt được là :" +tong)
