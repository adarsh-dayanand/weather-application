//console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const paragraph1 = document.querySelector('#message-1')
const paragraph2 = document.querySelector('#message-2')


//paragraph1.textContent = ''

weatherForm.addEventListener('submit', (e)=>{

    e.preventDefault()

    paragraph1.textContent = 'Loading...'
    paragraph2.textContent = ''


    const location = search.value
    //console.log(location);
    
    fetch('/weather?address='+encodeURIComponent(location)).then((response) => {
    response.json().then((data) => {
        if (data.error) {
            paragraph1.textContent = data.error
            //console.log(data.error)
            search.value = ''
        } else {
            //console.log(data.location)
            //console.log(data.forecast)
            paragraph1.textContent = data.location
            paragraph2.textContent = data.forecast
            search.value = ''
        }
    })
})

    
})