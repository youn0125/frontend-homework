var url = 'https://swapi.co/api/planets/?page=';
let getDataAsync = async () => {
  var page = 1;
  url = url + page;
  while(url){
    let response = await fetch(url);
    let data = await response.json();
    let next = data.next;
    url = next;
    for (let i = 0; i < data.results.length; i++) { 
      console.log(data.results[i].name); 
    } 
  }
}
getDataAsync();