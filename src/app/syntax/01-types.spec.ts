// describe('Basic Jasmine Tests', () => {
//   it('can add two numbers', () => {
//     // const myName = 'pankaz';
//     let myAge = 89;

//     myAge = 'Old';

//     expect(myAge).toBe('Old');
//   });
// });
describe('Basic Types', () => {
  it('Implict Types', () => {
    const num1 = 12;
    const num2 = 10;

    const ans = num1 + num2;

    let age: string | number;
    age = 'Old';
    age = 'older';

    let friends: string[];
    friends = ['Bob', 'John'];

    const luckyNumbers = getLuckyNumber();

    expect(age).toBeDefined();
    expect(ans).toBe(22); //this will fail
  });
});

function getLuckyNumber() {
  return [1, 4, 8];
}
