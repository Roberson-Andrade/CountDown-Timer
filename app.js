

function gettingTime() {
    // testing
    
    data = document.getElementById("data-futura").value

    let dataReference = new Date()
    let dataUser = new Date(data)
    dataUser.setDate(dataUser.getDate() + 1,)
    dataUser.setHours(dataUser.getHours() - 21)

    if(dataUser < dataReference || dataUser == 'Invalid Date') {
        window.alert('Preencha com um valor válido')
        clearInterval(updatingTime)
        return
    }

    // dataReference = dataReference.toString()
    // dataUser = dataUser.toString()

    dataReference = dataReference.getTime()
    dataUser = dataUser.getTime()

    let diff =  dataUser - dataReference 

    let update = undefined

    //Time's variables
    let differenceInSeconds = Math.floor(diff / 1000) 
    let differenceInMinutes =   Math.floor(differenceInSeconds / 60)
    let differenceInHours =  Math.floor(differenceInMinutes / 60) 
    let differenceInDays = Math.floor(differenceInHours/ 24)
    
    differenceInHours %= 24
    differenceInMinutes %= 60
    differenceInSeconds %= 60

    
   
    
    document.querySelector('.days').innerHTML = differenceInDays
    document.querySelector('.hours').innerHTML = differenceInHours
    document.querySelector('.minutes').innerHTML = differenceInMinutes
    document.querySelector('.seconds').innerHTML = differenceInSeconds

    
    

    setTimeout(gettingTime, 1000);
}


