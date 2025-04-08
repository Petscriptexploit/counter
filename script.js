const incrementBtn = document.getElementById('increment-btn');
const counterElement = document.getElementById('counter');

let counter = 0;

incrementBtn.addEventListener('click', async () => {
  // Call the backend API to increment the counter
  const response = await fetch('/api/increment', { method: 'POST' });
  const data = await response.json();
  counter = data.counter;
  counterElement.textContent = counter;
});

// Initialize the counter value from the backend
fetch('/api/counter')
  .then(response => response.json())
  .then(data => {
    counter = data.counter;
    counterElement.textContent = counter;
  });
