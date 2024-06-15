//Hybrid Type
// type TCoffee = TBean & TLiquid
// type TDirection = string;

//Literal Type
type TDirection = "north" | "south" | "west" | "east";

const destination: TDirection = "south";

type TPrimaryColor = "#05141F" | "#FFFFFF";
type TSecondaryColor = "#5D7D2B" | "#4C5B35" | "#589000";

const sectionBg: TSecondaryColor = "#589000";

type TFontSize = 11 | 12 | 13 | 14 | 16 | 20 | 24;

const component: {
  color: TPrimaryColor | TSecondaryColor;
  fontSize: TFontSize;
}[] = [
  { color: "#05141F", fontSize: 13 },
  { color: "#5D7D2B", fontSize: 20 },
];

component.forEach(({ color, fontSize }) => {
  const btn = document.createElement("button");
  btn.style.color = color;
  btn.style.fontSize = fontSize + "px";
});
