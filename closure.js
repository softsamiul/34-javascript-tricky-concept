// Closure

// If we return any function from inside any function it will create a new clousure or new private reference it's called clousure. See the exam below---->

function stopClock() {
    let counter = 0;
    return () => {
        counter++;
        return counter;
    }
}

const clock1 = stopClock();

console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopClock();

console.log(clock2());