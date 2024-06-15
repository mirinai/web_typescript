// typeAlias:별명

type TTest = string | string[];

const americano: TTest = "디카페인 아이스 아메리카노";

//Coffee : name,kcal,shot,hasDecaffein,ingredients
type TBean = {
  shot: number;
  hasDecaffein: boolean;
};
type TLiquid = {
  name: string;
  kcal: number;
  shot: number;
  ingredients: string[];
};

type TCarbonated = {
  isZero: boolean;
};
// type TCoffee = {
//   name: string;
//   kcal: number;
//   shot: number;
//   hasDecaffein: boolean;
//   ingredients: string[];
// };
// const coffee: TCoffee = {
//   name: "americano",
//   kcal: 120,
//   shot: 3,
//   hasDecaffein: true,
//   ingredients: ["1", "2", "3"],
// };
//beverage: name, kcal, ingredients
// type TBeverage = {
//   name: string;
//   kcal: number;
//   ingredients: string[];
// };
type TMilk = {
  isLowFat: boolean;
  isSoy: boolean;
};
type TCoffee = TBean & TLiquid;
type TBeverage = TCarbonated & TLiquid;
type TLatteCoffee = TBean & TCarbonated & TMilk;

// const coke:TBeverage={

// }
type TMyTypograph = {
  font: string;
  fontWeight: number;
  color: string;
};
type TMyButton = {
  border: string;
  borderRadius: number;
  backgroundColor: string;
  click: () => void;
};

// const newButton : TMyButton & TMyTypograph ={

// }
