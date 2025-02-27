// Select elements
const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

// Function to update the clock hands
function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // Calculate degrees for each hand
    const secondsDeg = (seconds / 60) * 360; 
    const minutesDeg = (minutes / 60) * 360 + (seconds / 60) * 6;
    const hoursDeg = (hours % 12) / 12 * 360 + (minutes / 60) * 30;

    // Apply rotation to hands
    secondHand.style.transform = `rotate(${secondsDeg}deg)`;
    minHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hoursDeg}deg)`;
}

// Initialize and update every second
setInterval(updateClock, 1000);
updateClock();
