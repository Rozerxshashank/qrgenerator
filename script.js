const input=document.getElementById("input");
const btn=document.getElementById("btn");
const qr=document.getElementById("qr");
const download=document.getElementById("download");
download.style.opacity=0;
qr.style.opacity=0;
btn.addEventListener("click",()=>{
    const val=input.value.trim();
    qr.innerHTML="";
    if(val){
        new QRCode(qr,{
            text:val,
            width:400,
            height:400,
            colorDark:"black",
            colorLight:"white",
            correctLevel: QRCode.CorrectLevel.H
        });
        download.style.opacity=1;
        qr.style.opacity=1;
    }
    else{
        alert("Enter something like link or text to generate (pigga)!");
    };
});
download.addEventListener("click",()=>{
    const img=qr.querySelector("img")
    const link=document.createElement("a");
    link.download="QRCode.png";
    link.href=img.src;
    link.click();
    console.log("CLicked");
})
