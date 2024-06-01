//EXPLICIT_CASTING_STEP 06
//VARIABLE can convert from one type to another
//as : means type_casting(convert type)
let student:any = "Ambreen";
//console.log(student as string);
console.log((student as string).length);

//STEP_07 a
//ENUM are used for constant values like colors,weekdays,etc
//ENUM used for paid websites (for their hidden values )
enum color{Red, Blue ,Purple ,Yellow}
let c: color = color.Purple

enum color1{Red = 1, Blue ,Purple ,Yellow}
let colorName :string = color1[3]
console.log(colorName);
//another method:value can be assign to all colors
enum color2{Red = 1, Blue=2 ,Purple=4 ,Yellow=5}
let colorindex = color2["Purple"]
console.log(colorindex);






