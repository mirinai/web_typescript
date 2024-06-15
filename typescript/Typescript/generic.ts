//generic.ts -> generalize

type TG<T, K> = {
  first: T;
  second: K;
}; //generic 아래의 타입들을 일반화함

// type TA1 = {
//   first: string;
//   second: number;
// };
// type TB = {
//   first: boolean;
//   second: number;
// };
// type TC = {
//   first: number;
//   second: number;
// };

// type TD = {
//   first: { name: string; price: number };
//   second: number;
// };
const test4: TG<string, number> = {
  first: "문자넣기",
  second: 1234,
};

//type HamburgerSet<> = {main:side,drink}

type THamburgerSet<T1, T2, T3> = {
  main: T1;
  side: T2;
  drink: T3;
};

type TMorning = "머핀";
type TNotMorning = "참깨빵";
type TRice = "라이스";

type THamburger<T> = {
  bread: T;
  contents: "불고기" | "쉬림프" | "치킨" | "토마토에그";
};
type TSide = "감자튀김" | "코울슬로" | "맥너겟" | "소프트아이스크림";
type TCoffee1 = "드립커피" | "아메리카노" | "디카페인" | "라떼";
type TBeverage1 = "콜라" | "스프라이트" | "제로콜라" | "환타";

const macMorning: THamburgerSet<
  THamburger<TRice | TMorning>,
  TSide,
  TCoffee1 | TBeverage1
> = {
  main: {
    bread: "머핀",
    contents: "토마토에그",
  },
  side: "감자튀김",
  drink: "제로콜라",
};

type TSuccess<T> = { result: "success"; value: T };
type TFail = { result: "fail"; value: "ERROR" };
type TResponse_<T> = TSuccess<T> | TFail;
const getResponse = (b: TResponse_<number>) => {
  if (b.result === "success") {
    return b.value + 100;
  } else {
    console.log(b.value);
  }
};
