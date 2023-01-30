/**
 * Alias for document.getElementById
 * @param {string} id The id of the element to select.
 * @returns {Node}
 */
const _ = (id) => document.getElementById(id);
/**
 * Alias for document.querySelector.
 * @param {string} selector The selector for searching for the element. # prefix for id, . for class names, and no prefix for tag name.
 * @returns {Node}
 */
const $ = (selector) => document.querySelector(selector);


let numAlu = 0; // Numero total de alumnos
let sumMarks = 0; // El sumatorio de las notas
let presAlu = 0; // Numero de alumnos presentados
let approvAlu = 0; // Numero de alumnos aprobados
let maxMark = 0; // Nota máxima
let marks = []; // La lista de notas completa

const table = $('.upv_listacolumnas');
const nodes = table.getElementsByTagName('tbody')[0].children;

/**
 * Obtains a GET parameter from the URL named {key}.
 * @param {string} key The key of the parameter to get.
 * @returns {string}
 */
const getParameter = (key) => {
  /**
   * Obtains a list of all the GET parameters in the URL.
   * @returns {string[]}
   */
  const getParameters = () => {
    const search = window.location.search.substring(1);
    const items = search.split('&');
    const result = {};
    for(const item in items){
      const iitem = item.split('=');
      result[iitem[0]] = iitem[1];
    }
    return result;
  }
  return getParameters()[key];
}

const localizedString = (key) => {
  const language = getParameter('P_IDIOMA');
  if(chrome != null)
    return chrome.i18n.getMessage(key);
  else if(firefox != null)
    return firefox.i18n.getMessage(key);
  else
    return null;
}

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
constrainedHeader.innerText = localizedString("adj_mark");
constrainedHeader.setAttribute('title', localizedString('adj_mark_info'));
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
extraDataHeader.innerText = localizedString("data_extra");
extraDataContainer.appendChild(extraDataHeader);
const extraDataContainerWrap = document.createElement('div');
extraDataContainerWrap.classList.add('upv_containerwrap');
const extraDataContainerContent = document.createElement('div');
extraDataContainerContent.classList.add('upv_containercontent');
const extraDataContainerTable = document.createElement('table');
extraDataContainerTable.classList.add('upv_listacolumnas');
const extraDataContainerTableBody = document.createElement('tbody');

/**
 * Creates a data row element, used for displaying the calculated data to the user.
 * @param {string} label The label that represents the value.
 * @param {string|number} value The value to display.
 * @param {boolean} anon If the row should be displayed as anonymous, this is, clearer than the others.
 * @returns {HTMLTableRowElement} The built `tr` element.
 */
const createDataRow = (label, value, anon = false) => {
  const row = document.createElement('tr');
  if (anon)
    row.classList.add('upv_listanon');

  const cell1 = document.createElement('td');
  cell1.classList.add('alignleft');
  cell1.innerText = label;

  const cell2 = document.createElement('td');
  cell2.classList.add('alignleft');
  cell2.innerText = value;

  row.appendChild(cell1);
  row.appendChild(cell2);

  return row;
};

extraDataContainerTableBody.appendChild(
  createDataRow(localizedString("num_alu"), numAlu, true)
);
extraDataContainerTableBody.appendChild(
  createDataRow(localizedString("num_pres"), presAlu)
);
extraDataContainerTableBody.appendChild(
  createDataRow(localizedString("per_pres"), `${(presAlu/numAlu).toFixed(4)*100} %`, true)
);
extraDataContainerTableBody.appendChild(
  createDataRow(localizedString("mean_mark"), (sumMarks/presAlu).toFixed(2))
);
extraDataContainerTableBody.appendChild(
  createDataRow(localizedString("per_aprov"), (approvAlu/presAlu).toFixed(4)*100, true)
);

extraDataContainerTable.appendChild(extraDataContainerTableBody);
extraDataContainerContent.appendChild(extraDataContainerTable);
extraDataContainerWrap.appendChild(extraDataContainerContent);
extraDataContainer.appendChild(extraDataContainerWrap);
content.insertBefore(extraDataContainer, container);