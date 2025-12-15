let count = 0;
function increment() {
    count++;
    document.getElementById("counter").innerText = count;
}
function decrement() {
    count--;
    document.getElementById("counter").innerText = count;
}
function reSet() {
    count = 0;
    document.getElementById("counter").innerText = count;
}
