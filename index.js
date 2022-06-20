// home and guest scores//
let homeCount = document.getElementById("home-score")
let guestCount = document.getElementById("guest-score")
// save and new game //
let savePoint = document.getElementById("save-points")

//let savePoints = count
let countHome = 0
let countGuest = 0
// Home Buttons//
function plusH1() {
    countHome += 1
    homeCount.textContent = countHome
}
function plusH2() {
    countHome += 2
    homeCount.textContent = countHome
}
function plusH3() {
    countHome += 3
    homeCount.textContent = countHome
}
//Guest Buttons//
function plusG1() {
    countGuest += 1
    guestCount.textContent = countGuest
}
function plusG2() {
    countGuest += 2
    guestCount.textContent = countGuest
}
function plusG3() {
    countGuest += 3
    guestCount.textContent = countGuest
}
//Save Points button //
function results() {
    savePoint.textContent = "HOME: " + homeCount.textContent + "   /   "+ "  GUEST: " + guestCount.textContent
    //savePoint.textContent = guestCount.textContent
}
//NEW GAME BUT//
function newGame() {
    savePoint.textContent = "HOME: " + homeCount.textContent + "   /   "+ "  GUEST: " + guestCount.textContent
    countHome = 0
    countGuest = 0
    homeCount.textContent = countHome
    guestCount.textContent = countGuest
}
