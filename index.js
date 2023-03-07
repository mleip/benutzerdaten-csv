// Array zum Speichern der Benutzerdaten
let users = [];

// Benutzerdaten hinzufügen
function addUser() {
  // Eingabefelder auswählen
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');

  // Benutzerobjekt erstellen
  const user = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value
  };

  // Benutzerobjekt zum Array hinzufügen
  users.push(user);

  // Eingabefelder leeren
  nameInput.value = '';
  emailInput.value = '';
  phoneInput.value = '';

  // Benutzerliste aktualisieren
  updateTable();
}

// Benutzerliste aktualisieren
function updateTable() {
  // Tabelle auswählen
  const table = document.createElement('table');
  table.classList.add('table');

  // Tabellenkopf erstellen
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const th1 = document.createElement('th');
  th1.textContent = 'Name';
  const th2 = document.createElement('th');
  th2.textContent = 'E-Mail';
  const th3 = document.createElement('th');
  th3.textContent = 'Telefon';
  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  thead.appendChild(tr);
  table.appendChild(thead);

  // Tabelleninhalt erstellen
  const tbody = document.createElement('tbody');
  users.forEach(user => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = user.name;
    const td2 = document.createElement('td');
    td2.textContent = user.email;
    const td3 = document.createElement('td');
    td3.textContent = user.phone;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  // Ausgabe leeren und Tabelle einfügen
  const output = document.getElementById('output');
  output.innerHTML = '';
  output.appendChild(table);
}

// CSV-Datei herunterladen
function downloadCsv() {
  const csv = users.map(user => {
    return `${user.name},${user.email},${user.phone}`;
  }).join('\n');
  const blob = new Blob([csv], {type: 'text/csv'});
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'benutzerdaten.csv');
  link.click();
}

// Formular absenden verhindern
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  addUser();
});
