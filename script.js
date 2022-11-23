let son = +prompt("Son kiriting, biz uni toq yoki juftligini bilib beramiz.")
while (isNaN(son) || son == 0) {
    son = +prompt("Bu son emas, iltimos son kiriting")
}
if (son%2==1) {
    alert("Siz toq sonni kirittingiz")
}
else if (qiymat%2==0) {
    alert("Siz juft son kirittingiz")
}
