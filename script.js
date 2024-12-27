let api_key = '28172d1cd8f7ad130d66d61b7dd29c1e'
let kelvin = 273.15 // convertir a kelvin
let urlBase = `https://api.openweathermap.org/data/2.5/weather`


document.getElementById('botonBusqueda').addEventListener('click', () => {
    const ciudad = document.getElementById('ciudadEntrada').value
    if (ciudad) {
        fetchDatosClima(ciudad)
    } 
})

function fetchDatosClima(ciudad){    
    fetch(`${urlBase}?q=${ciudad}&appid=${api_key}`)
      .then(data => data.json())
      .then(data => mostrarDatos(data))
}

function mostrarDatos(data){
    const divDatosClima = document.getElementById('datosClima')
    divDatosClima.innerHTML=''

    const ciudadNombre = data.name 
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const icono = data.weather[0].icon
 

    const ciudadTitulo =  document.createElement('h2')
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`
    
    const temperaturaInfo = document.createElement('p')
    temperaturaInfo.textContent =  `La temperatura es de: ${Math.floor(temperatura - kelvin)}ºC en esta ciudad`

    const humedadInfo = document.createElement('p')
    humedadInfo.textContent = `La humedad es de: ${humedad}%`

    const iconoInfo = document.createElement('img')
    iconoInfo.src = `https://openweathermap.org/img/wn/${icono}@2x.png`
    
    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    
}

// cuando doy click al boton de modo nocturno tiene que pasar. 
// body cambia a modo oscuro, el icono modo oscuro desaparece y aparece el icono modo claro.

document.getElementById('botonNoche').addEventListener('click', () => {
    const body = document.body;
    const botonDia = document.getElementById('botonDia')
    const botonNoche = document.getElementById('botonNoche') 

    body.classList.toggle('modoNoche')
    botonNoche.classList.add('hidden')
    botonDia.classList.remove('hidden')
})

document.getElementById('botonDia').addEventListener('click', () => {
    const body = document.body;
    const botonDia = document.getElementById('botonDia')
    const botonNoche = document.getElementById('botonNoche') 

    body.classList.toggle('modoNoche')
    botonDia.classList.add('hidden')
    botonNoche.classList.remove('hidden')
})
