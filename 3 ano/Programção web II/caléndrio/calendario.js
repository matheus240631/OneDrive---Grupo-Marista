const monthNames = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const date = new Date();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

const monthYearDisplay = document.getElementById('month-year');
const daysContainer = document.getElementById('days');

function updateCalendar(month, year) {
  const firstDay = new Date(year, month).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  daysContainer.innerHTML = '';
  monthYearDisplay.innerHTML = `${monthNames[month]} ${year}`;

  // Preencher dias em branco antes do primeiro dia do mês
  for (let i = 0; i < firstDay; i++) {
    const emptyCell = document.createElement('div');
    daysContainer.appendChild(emptyCell);
  }

  // Preencher dias do mês
  for (let i = 1; i <= daysInMonth; i++) {
    const dayCell = document.createElement('div');
    dayCell.innerText = i;

    // Destacar o dia atual
    if (i === date.getDate() && month === date.getMonth() && year === date.getFullYear()) {
      dayCell.classList.add('current');
    }

    daysContainer.appendChild(dayCell);
  }
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  updateCalendar(currentMonth, currentYear);
}

document.getElementById('prev-month').addEventListener('click', () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  updateCalendar(currentMonth, currentYear);
});

document.getElementById('next-month').addEventListener('click', nextMonth);

// Inicializar o calendário com o mês e ano atuais
updateCalendar(currentMonth, currentYear);

// Troca automática de mês a cada 4 segundos (4000 ms)
setInterval(nextMonth, 4000);

// Obter a data e hora atuais
let dataAtual = new Date();

// Im primir a data e hora atuais
console.log("Data e hora atuais:");
console.log(dataAtual.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }));

// Configurar o calendário com a data correta
function configurarCalendario(data) {
    // Verificar se a data está no formato correto
    let dataFormatada = new Date(data);
    if (isNaN(dataFormatada.getTime())) {
        console.log("Data inválida. Por favor, use o formato dd/mm/aaaa.");
        return null;
    }
    return dataFormatada;
}

// Exemplo de uso
let dataConfigurada = configurarCalendario("26/07/2024");
if (dataConfigurada) {
    console.log("Data configurada:");
    console.log(dataConfigurada.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" }));
}

