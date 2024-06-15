// optional

//substract 함수 (a,b)

// const substract = (a: number, b?: number) => {
//   if (typeof b === undefined) {
//     return 0;
//   } else {
//     return a - b;
//   }
// };

// optional : ? undefined일수도 있음
type TFood = {
  name: string;
  price: number;
  kcal?: number;
};
const lunch: TFood = {
  name: "냉면",
  price: 9000,
  kcal: 300,
};

//keyof
type TCourse = {
  name: string;
  classroom: "A" | "B" | "C";
};
type TA = keyof TCourse; // === "name" and "classroom"
const test3: TA = "name";
