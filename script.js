console.log('Archivos JS cargado');

document.querySelector('#boton').addEventListener('click', CargarDatos);

function CargarDatos(){

  const loadData = new XMLHttpRequest();

  loadData.open('GET', 'data.json', true);

  loadData.send();

  loadData.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
      

     // console.log(this.responseText);
      console.log('')
      console.log('data loaded');
      console.log('')

      let datos = JSON.parse(this.responseText);
      //console.log(datos)

      for(let item of datos){
        const obtenerName = document.getElementById("getName")
        const addName = document.createElement("p")
        addName.innerHTML += `
        <th scope="row">
        ${item.name}
        ${item.date}
        </th>
        `;
        obtenerName.appendChild(addName)        
      }
    }
  }
}
