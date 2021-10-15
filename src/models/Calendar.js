export class Calendar {

        #date;
        #month;
        #year;
        #days;
        #monthName;
        #firstDayOfMonth;
        #weekDays;
        #calendar;
        #initCalendar;

    constructor(date) {
        this.#date = date;
        this.#month = this.#date.getMonth();
        this.#year = this.#date.getFullYear();
        this.#days = new Date(this.#year, this.#month + 1, 0).getDate();
        this.#monthName = this.#date.toLocaleString('default', { month: 'long'});
        this.#firstDayOfMonth = new Date(this.#year, this.#month).toLocaleString('default', {weekday: 'short'});               
        this.#weekDays = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];         
        this.#initCalendar = () => {
            const calendar = [];
    
            const blank = this.#weekDays.indexOf(this.#firstDayOfMonth);
            for(let i=0; i < blank; i++) {
                calendar.push('');
            }
    
            for(let i=1; i <= this.#days; i++) {
                calendar.push(i);            
            } 
            return calendar;
        }   
        this.#calendar = this.#initCalendar();    
    }     

    getDate() {
        return this.#date;
    }

    getMonth() {
        return this.#month;
    }

    getYear() {
        return this.#year;
    }

    getDays() {
        return this.#days;
    }    
    
    getMonthName() {
        return this.#monthName;
    }

    getFirstDayOfMonth() {
        return this.#firstDayOfMonth;
    }

    getCalendar() {
        return this.#calendar;
    }

    getWeekDays() {
        return this.#weekDays;
    }

    
}