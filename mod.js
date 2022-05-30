let numAlu = 0; // Numero total de alumnos
let sumMarks = 0; // El sumatorio de las notas
let presAlu = 0; // Numero de alumnos presentados
let approvAlu = 0; // Numero de alumnos aprobados
let maxMark = 0; // Nota máxima
let marks = []; // La lista de notas completa

const table = document.getElementsByClassName('upv_listacolumnas')[0];
const nodes = table.getElementsByTagName('tbody')[0].children;

// Calculate stats
for(const i in nodes) {
  const node = nodes[i];
  if(node.cells != null && node.cells.length > 1) {
    const mark = node.cells[1].innerText.replace(',','.');
    numAlu += mark != null;
    if (mark != null && mark.length > 0) {
      const floatMark = parseFloat(mark);
      marks.push(floatMark);
      maxMark = floatMark > maxMark ? floatMark : maxMark;
      sumMarks += floatMark;
      presAlu++;
      if (floatMark >= 5)
        approvAlu++;
    }
  }
}

// Modify DOM to add adjusted column
const constrainedHeader = document.createElement('th'); // Create header
constrainedHeader.classList.add('aligncenter');
constrainedHeader.setAttribute('scope', 'col');
constrainedHeader.innerText = 'Nota ajustada';
const rows = table.getElementsByTagName('tr');
rows[0].appendChild(constrainedHeader); // Append header to the table
for (let c = 0; c < numAlu; c++) {
  const row = rows[c + 1];
  const mark = marks[c];
  const _data = document.createElement('td'); // Create cell
  _data.classList.add('alignleft');
  _data.innerText = ((10*mark)/maxMark).toFixed(2);
  row.appendChild(_data);
}

const content = document.getElementById('contenido');
const container = document.getElementsByClassName('container')[0];
const extraDataContainer = document.createElement('div'); // Crea el contenedor
extraDataContainer.classList.add('container');
const extraDataHeader = document.createElement('h2');
extraDataHeader.classList.add('destacado');
extraDataHeader.innerText = 'Datos extra no oficiales';
extraDataContainer.appendChild(extraDataHeader);
const extraDataContainerWrap = document.createElement('div');
extraDataContainerWrap.classList.add('upv_containerwrap');
const extraDataContainerContent = document.createElement('div');
extraDataContainerContent.classList.add('upv_containercontent');
const extraDataContainerTable = document.createElement('table');
extraDataContainerTable.classList.add('upv_listacolumnas');
const extraDataContainerTableBody = document.createElement('tbody');

const extraDataContainerTableNumAlu = document.createElement('tr');
extraDataContainerTableNumAlu.classList.add('upv_listanon');
extraDataContainerTableNumAlu.innerHTML += `<td class="alignleft">Número de alumnos:</td>`;
extraDataContainerTableNumAlu.innerHTML += `<td class="alignleft">${numAlu}</td>`;
extraDataContainerTableBody.appendChild(extraDataContainerTableNumAlu);

const extraDataContainerTablePresAlu = document.createElement('tr');
extraDataContainerTablePresAlu.innerHTML += `<td class="alignleft">Número de alumnos presentados:</td>`;
extraDataContainerTablePresAlu.innerHTML += `<td class="alignleft">${presAlu}</td>`;
extraDataContainerTableBody.appendChild(extraDataContainerTablePresAlu);

const extraDataContainerTablePerAlu = document.createElement('tr');
extraDataContainerTablePerAlu.classList.add('upv_listanon');
extraDataContainerTablePerAlu.innerHTML += `<td class="alignleft">% alumnos presentados:</td>`;
extraDataContainerTablePerAlu.innerHTML += `<td class="alignleft">${(presAlu/numAlu).toFixed(4)*100} %</td>`;
extraDataContainerTableBody.appendChild(extraDataContainerTablePerAlu);

const extraDataContainerTableMedMark = document.createElement('tr');
extraDataContainerTableMedMark.innerHTML += `<td class="alignleft">Nota media alumnos presentados:</td>`;
extraDataContainerTableMedMark.innerHTML += `<td class="alignleft">${(sumMarks/presAlu).toFixed(2)}</td>`;
extraDataContainerTableBody.appendChild(extraDataContainerTableMedMark);

const extraDataContainerTablePerAprov = document.createElement('tr');
extraDataContainerTablePerAprov.classList.add('upv_listanon');
extraDataContainerTablePerAprov.innerHTML += `<td class="alignleft">% alumnos aprobados:</td>`;
extraDataContainerTablePerAprov.innerHTML += `<td class="alignleft">${(approvAlu/presAlu).toFixed(4)*100} %</td>`;
extraDataContainerTableBody.appendChild(extraDataContainerTablePerAprov);

extraDataContainerTable.appendChild(extraDataContainerTableBody);
extraDataContainerContent.appendChild(extraDataContainerTable);
extraDataContainerWrap.appendChild(extraDataContainerContent);
extraDataContainer.appendChild(extraDataContainerWrap);
content.insertBefore(extraDataContainer, container);