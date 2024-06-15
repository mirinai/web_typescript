//annotation.ts

//타입스크립트 특징
//1. 자바스크립트랑 같음
//2. 타입에 대해서 엄격함
//에를 미리 막음
//자동완성 해줌

const name1: string = "아메리카노";
const isIcecream: boolean = false;
const cars: string[] = ["제네시스", "테슬라"];
const lotto: number[] = [1, 2, 3, 4];
const cake: { name: string; price: number } = {
  name: "치즈케이크",
  price: 3000,
}; //object

//student : object  이름, 프로그래밍 수업, 나이, 현재 재학하고있음
const student: {
  name: string;
  programmingClass: string[];
  age: number;
  isAttending: boolean;
} = {
  name: "김연우",
  programmingClass: ["리액트", "자바", "주말"],
  age: 25,
  isAttending: true,
};
const test: null = null;
const test1: undefined = undefined;

const test2: any = "이건 마지막 보루";
//안 쓰기

const add = (a: number, b: number): number => a + b;
const add1 = (a: number, b: string): string => a + b;
