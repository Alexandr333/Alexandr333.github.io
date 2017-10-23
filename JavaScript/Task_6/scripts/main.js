//-----------------------------------------------------------------------//
function CalendarControl()
{
    let currentYear=new Date().getFullYear();
    let currentMonth=new Date().getMonth();
    let calendarView;
    function CreateCalendarView()
    {
        let calendarInfo=CalendarInfo.Create(DaysOfWeekStyle.Europe,currentYear,currentMonth);
        let calendarRenderer=new CalendarRenderer();
        document.querySelectorAll('.calendar-container')[0].appendChild(calendarRenderer.renderNewCalendarLayout(calendarInfo));
        return calendarRenderer;
    }
    function CalendarCreateButtonsEventHandlers()
    {
        calendarView.nextButton.onclick=function()
        {
            let newDate = new Date(currentYear,(currentMonth+1));
            currentYear=newDate.getFullYear();
            currentMonth=newDate.getMonth();
            document.querySelectorAll('.calendar-container')[0].removeChild(calendarView.calendarElement);

            calendarView=CreateCalendarView();
            CalendarCreateButtonsEventHandlers();
        }
        calendarView.previousButton.onclick=function()
        {
            let newDate = new Date(currentYear,(currentMonth-1));
            currentYear=newDate.getFullYear();
            currentMonth=newDate.getMonth();
            document.querySelectorAll('.calendar-container')[0].removeChild(calendarView.calendarElement);

            calendarView=CreateCalendarView();
            CalendarCreateButtonsEventHandlers();

        }
    }
    calendarView = CreateCalendarView();
    CalendarCreateButtonsEventHandlers();
    
}
CalendarControl();
//---//
