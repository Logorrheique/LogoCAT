
const idOfCat = document.getElementById('idOfCat');
const widthOfCat = document.getElementById('width');
const heightOfCat = document.getElementById('height')
const img = document.getElementById('img');

const test = async () => {
    const req = await fetch('https://api.thecatapi.com/v1/images/search');
    const data = await req.json();
    console.log(data);
    if(data[0].height<2000){
        //console.log("YES");
        idOfCat.innerHTML = ("ID du chat : " + data[0].id);
        widthOfCat.innerHTML = ("largeur : " + data[0].width);
        heightOfCat.innerHTML = ("hauteur : " + data[0].height);
        img.src = data[0].url;
    } else {
        //console.log("NO AND WHY " + data[0].width + "-" +  data[0].height);
        img.alt = "REFRESH IL EST TROP GRAND TON CAT";
    }
}
test();