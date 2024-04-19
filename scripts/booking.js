/*** create variables ***/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 35; 
let totalCost = 0;
const calculatedCostElement = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button'); 
const halfDayButton = document.getElementById('half');
const fullDayButton = document.getElementById('full');

// Get all day buttons
const mondayButton = document.getElementById('monday');
const tuesdayButton = document.getElementById('tuesday');
const wednesdayButton = document.getElementById('wednesday');
const thursdayButton = document.getElementById('thursday');
const fridayButton = document.getElementById('friday');

// Initialize days selected for each day
const daysSelected = {
    monday: 0,
    tuesday: 0,
    wednesday: 0,
    thursday: 0,
    friday: 0
};

/*** colour change days of week ***/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handleDayButtonClick(day) {
    return function() {
        const button = document.getElementById(day);
        if (!button.classList.contains('clicked')) {
            button.classList.add('clicked');
            daysSelected[day]++;
        } else {
            button.classList.remove('clicked');
            daysSelected[day]--;
        }
        calculateTotalCost();
    };
}


// Add event listeners to each day button
mondayButton.addEventListener('click', handleDayButtonClick('monday'));
tuesdayButton.addEventListener('click', handleDayButtonClick('tuesday'));
wednesdayButton.addEventListener('click', handleDayButtonClick('wednesday'));
thursdayButton.addEventListener('click', handleDayButtonClick('thursday'));
fridayButton.addEventListener('click', handleDayButtonClick('friday'));

/*** clear days ***/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', function() {
    [mondayButton, tuesdayButton, wednesdayButton, thursdayButton, fridayButton].forEach(function(button) {
        button.classList.remove('clicked');
        daysSelected[button.id] = 0; // Reset daysSelected for each day
    });
    totalCost = 0; // Reset total cost to 0
    calculateTotalCost();
});


/*** change rate ***/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', function() {
    costPerDay = 20;
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateTotalCost();
});


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', function() {
    costPerDay = 35;
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateTotalCost();
});


/*** calculate ***/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateTotalCost() {
    let totalDaysSelected = 0;
    for (const day in daysSelected) {
        if (daysSelected.hasOwnProperty(day)) {
            totalDaysSelected += daysSelected[day];
        }
    }
    totalCost = totalDaysSelected * costPerDay;
    calculatedCostElement.innerHTML = totalCost; // Assuming calculatedCostElement is your HTML element
}