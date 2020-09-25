const fn = () => {
  console.log("hi");
};
dom.on(test, "click", fn);

const testFind = dom.find("#test")[0];
const testFind2 = dom.find(".red", testFind)[1];
console.log(testFind2);
console.log(dom.siblings(dom.find("#e2")[0]));
console.log(dom.next(dom.find("#e2")[0]));
const t = dom.find("#travel")[0];
dom.each(dom.children(t), (n) => dom.style(n, { color: "red" }));
console.log(dom.index(t));

//以下是课堂测试
console.log("以下是课堂测试");
const div = dom.find("#test>.red")[0];
dom.style(div, "color", "red");
const divList = dom.find(".red");
dom.each(divList, (n) => console.log(n));
