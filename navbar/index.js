var counter=1;
setInterval(function(){
    document.getElementById("ridio"+counter).checked=true;
    counter++;
    if(counter>9){
        counter=1;
    }
},5000);


var productData=[{productImg:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/1/_/1_51_1.jpg",
productName:"Muscletech Mass Tech Extreme",
productPrice:"MRP (Rs.4999)",
productDiscountPrice:"Rs.3249.35"},

    {productImg:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/1/_/1_34_5.jpg",
    productName:"MuscleTech Nitrotech",
    productPrice:"MRP (Rs.2199)",
    productDiscountPrice:"Rs.1429.35"},
    {productImg:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/m/u/mus0169.jpg",
    productName:"Muscletech Hydroxycut ",
    productPrice:"MRP (Rs.2999)",
    productDiscountPrice:"Rs.1919.35"},
    {productImg:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/1/8/18068_mt_nitro_mc_1kg_1gal_redesign_in10_mi_00_cc_3d.png",
    productName:"Muscletech Nitrotech ",
    productPrice:"MRP (Rs.4199)",productDiscountPrice:"Rs.2729.35"},
    {productImg:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/1/_/1_51.jpg",
    productName:"Muscletech Performance ",
    productPrice:"MRP (Rs.4999)",productDiscountPrice:"Rs.3249.35"},
    {productImg:"https://newassets.apollo247.com/pub/media/catalog/product/cache/resized/100x/1/6/16328_mt_100percentglutamine_250g_25oz_redesign_in21_mi_00_cc_3d.png",
    productName:"MuscleTech Platinum",
    productPrice:"MRP (Rs.2199)",productDiscountPrice:"Rs.1429.35"}];

    productData.forEach(function(elem){
        var box=document.createElement("div");

        var productImage=document.createElement("img");
        productImage.setAttribute("src",elem.productImg)
var ProductName=document.createElement("p");
ProductName.innerText=elem.productName;

var productPrice=document.createElement("p");
productPrice.innerText=elem.productPrice;
var discountPrice= document.createElement("p");
discountPrice.innerText=elem.productDiscountPrice
        box.append(productImage,ProductName, productPrice,discountPrice )
        document.querySelector("#container").append(box);
    })
