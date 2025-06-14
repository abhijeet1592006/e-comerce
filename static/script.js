let products=[

    {
        pid:1,
        pname:"hi",
        price:111,
    }


]
   


function scrolls(a){
    const section=document.getElementById(a);
    section.scrollIntoView({behavior:"instant"})
    
}

function view(uid){
    console.log(uid)
    console.log(typeof(uid))

    for (let i of products){
        if (i['pid']==uid){
            console.log(i['pname'],i['price'])
        }
    }

}