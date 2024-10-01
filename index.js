#!/usr/bin/env node

const radToTurn = (radians) => {
  return radians / (2 * Math.PI);
};

const [radians] = process.argv.slice(2).map(Number);

if (isNaN(radians)) {
  console.error("Invalid input. Please provide a valid number for radians.");
  console.error("Usage: rad-to-turn-cli <radians>");
  process.exit(1);
}

const turns = radToTurn(radians);

console.log(`Radians: ${radians} rad`);
console.log(`Turns: ${turns} turn(s)`);