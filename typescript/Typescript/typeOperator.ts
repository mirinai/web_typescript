// 마라탕: {재료들:string[], 가격:string or number, }

// Union 연산자[합집합]
const a1: string | number = 123;
//string도 숫자도 됨

const a2: Element | null = document.querySelector(`.box`);

const a3: () => number = () => 1;

const cocktail: { ingredients: string[]; price: string | number } = {
  ingredients: ["vodka", "rum", "whisky"],
  price: "10dollars",
};

//Intersection 연산자 [교집합]
const pizza: { size: string } & { topping: string[] } & { eat: () => void } = {
  size: "L",
  topping: ["페퍼로니", "치즈", "버섯"],
  eat: () => {
    console.log("피자맛있음");
  },
};
