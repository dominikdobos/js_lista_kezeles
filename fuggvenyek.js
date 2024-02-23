export function listaKiir(SZEMELYLISTA) {
  for (let index = 0; index < SZEMELYLISTA.length; index++) {
    console.log(`${SZEMELYLISTA[index].nev}: ${SZEMELYLISTA[index].tel}`);
  }
}

export function listaOsszeallit(SZEMELYLISTA) {
  let txt = "<ul>";
  for (let index = 0; index < SZEMELYLISTA.length; index++) {
    txt += `<li>${SZEMELYLISTA[index].nev}: ${SZEMELYLISTA[index].tel}</li>`;
  }
  txt += "</ul>";
  return txt;
}

export function cardOsszeallit(SZEMELYLISTA) {
  let txt = "";
  for (let index = 0; index < SZEMELYLISTA.length; index++) {
    txt += "<div class='card'>";
    txt += `<h3>Név: ${SZEMELYLISTA[index].nev}</h3>`;
    txt += `<p>kor: ${SZEMELYLISTA[index].kor}</p>`;
    txt += `<p>tel: ${SZEMELYLISTA[index].tel}</p>`;
    txt += `<p>barát: ${SZEMELYLISTA[index].barat}</p>`;
    txt += "</div>";
  }
  return txt;
}

export function tablazatOsszeallit(SZEMELYLISTA) {
  let txt = "<table>";
  txt += "<tr>";
  txt += "<td>Név</td>";
  txt += "<td>Tel</td>";
  txt += "<td>Kor</td>";
  txt += "<td>Barát</td>";
  txt += "</tr>";
  for (let index = 0; index < SZEMELYLISTA.length; index++) {
    txt += "<tr>";
    txt += `<td>${SZEMELYLISTA[index].nev}</td>`;
    txt += `<td>${SZEMELYLISTA[index].kor}</td>`;
    txt += `<td>${SZEMELYLISTA[index].tel}</td>`;
    txt += `<td>${SZEMELYLISTA[index].barat}</td>`;
    txt += "</tr>";
  }
  txt += "</table>";
  return txt;
}
