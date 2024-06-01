//EXPLICIT_CASTING_STEP 06
//VARIABLE can convert from one type to another
//as : means type_casting(convert type)
let student = "Ambreen";
//console.log(student as string);
console.log(student.length);
//STEP_07 a
//ENUM are used for constant values like colors,weekdays,etc
//ENUM used for paid websites (for their hidden values )
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Blue"] = 1] = "Blue";
    color[color["Purple"] = 2] = "Purple";
    color[color["Yellow"] = 3] = "Yellow";
})(color || (color = {}));
let c = color.Purple;
var color1;
(function (color1) {
    color1[color1["Red"] = 1] = "Red";
    color1[color1["Blue"] = 2] = "Blue";
    color1[color1["Purple"] = 3] = "Purple";
    color1[color1["Yellow"] = 4] = "Yellow";
})(color1 || (color1 = {}));
let colorName = color1[3];
console.log(colorName);
//another method:value can be assign to all colors
var color2;
(function (color2) {
    color2[color2["Red"] = 1] = "Red";
    color2[color2["Blue"] = 2] = "Blue";
    color2[color2["Purple"] = 4] = "Purple";
    color2[color2["Yellow"] = 5] = "Yellow";
})(color2 || (color2 = {}));
let colorindex = color2["Purple"];
console.log(colorindex);
export {};
