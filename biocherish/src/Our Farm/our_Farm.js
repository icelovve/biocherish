document.addEventListener('DOMContentLoaded', () => {
    const counters = [
        { element: document.getElementById('counter1'), endValue: 15 },
        { element: document.getElementById('counter2'), endValue: 400 },
        { element: document.getElementById('counter3'), endValue: 300 }
    ];
    const duration = 18000;  
    const incrementTime = 10; 

    counters.forEach(counter => {
        let startValue = 0;
        const incrementValue = counter.endValue / (duration / incrementTime);
        
        function updateCounter() {
            startValue += incrementValue;
            if (startValue >= counter.endValue) {
                startValue = counter.endValue;
                clearInterval(counter.interval);
            }
            counter.element.textContent = Math.floor(startValue);
        }
        
        counter.interval = setInterval(updateCounter, incrementTime);
    });
});
