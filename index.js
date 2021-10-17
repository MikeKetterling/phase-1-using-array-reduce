const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const batteries = (previous, current) => previous + current;

const totalBatteries = batteryBatches.reduce(batteries,0);


console.log(totalBatteries)