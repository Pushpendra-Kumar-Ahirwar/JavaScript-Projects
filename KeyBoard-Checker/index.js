const insert = document.querySelector("#insert")
window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key===' '?'Sapce':e.key} </td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
 
</table>

  
  
  
  `
})