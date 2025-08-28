"use strict";
var promise2 = Promise.resolve("Code ");
var promise3 = Promise.resolve("React native ");
var promise4 = Promise.resolve(" with type script");
Promise.all([promise2, promise3, promise4])
    .then((result) => {
    var rs1 = result[0];
    var rs2 = result[1];
    var rs3 = result[2];
    console.log(rs1.concat(rs2, rs3));
});
