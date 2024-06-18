function SelectCity(event){
    if (event.target.value.length>0){
        if(event.target.value==="paris"){
            let parisTime = moment()
                .tz("Europe/paris")
                .format("dddd, MMMM D, YYYY hh:mm A");
            alert(`It is ${parisTime} in Paris/France`);
        }
        if(event.target.value==="sydney"){
            let sydneyTime = moment()
                .tz("Australia/Sydney")
                .format("dddd, MMMM D, YYYY hh:mm A");
            alert(`It is ${sydneyTime} in Sydney/Australia`);
        }
        if(event.target.value==="tokyo"){
            let tokyoTime = moment()
                .tz("Asia/Tokyo")
                .format("dddd, MMMM D, YYYY hh:mm A");
            alert(`It is ${tokyoTime} in Tokyo/Japan`);
        }
    }

}
let citiesSelect= document.querySelector("#cities")
citiesSelect.addEventListener("change",SelectCity);

