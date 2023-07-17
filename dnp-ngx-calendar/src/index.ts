const calendarContainer = document.getElementById('dnx_calendar');

function renderCalendar(container: HTMLElement | null) {
    if (calendarContainer == null) {
        console.log('Not found element dnx_calendar ,Calendar module not created!');
        return;
    }
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();

    // Tạo header cho lịch
    const header = document.createElement('h2');
    header.id="hd_calendar";
    header.textContent = 'Calendar';
    calendarContainer.appendChild(header);

    // Tạo bảng lịch
    const table = document.createElement('table');
    calendarContainer.appendChild(table);

    // Tạo tiêu đề cho các cột ngày trong tuần
    const weekdaysRow = document.createElement('tr');
    table.appendChild(weekdaysRow);

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    for (let i = 0; i < 7; i++) {
        const weekdayCell = document.createElement('th');
        weekdayCell.textContent = weekdays[i];
        weekdaysRow.appendChild(weekdayCell);
    }

    // Tính toán và tạo các ô ngày trong tháng
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const numDays = lastDayOfMonth.getDate();

    const daysTable = document.createElement('tbody');
    table.appendChild(daysTable);

    let date = 1;
    for (let i = 0; i < 6; i++) {
        const weekRow = document.createElement('tr');
        daysTable.appendChild(weekRow);

        for (let j = 0; j < 7; j++) {
            const dayCell = document.createElement('td');
            weekRow.appendChild(dayCell);

            if (i === 0 && j < firstDayOfMonth.getDay()) {
                // Ô trống trước ngày đầu tiên của tháng
                dayCell.textContent = '';
            } else if (date > numDays) {
                // Ô trống sau ngày cuối cùng của tháng
                dayCell.textContent = '';
            } else {
                // Ô chứa ngày
                dayCell.textContent = date.toString();
                date++;
            }
        }
    }
    console.log('Calendar module is created!');
}

renderCalendar(calendarContainer);