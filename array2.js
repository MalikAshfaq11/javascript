let items=[250,600,540,800,950];
for(let i=0;i<items.length;i++){
    let offer=items[i]/10;
console.log("Before offer:",items[i]);
    items[i]=items[i]-offer;
console.log("After offer:",items[i]);
}