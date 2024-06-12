const text_list = document.querySelectorAll(".hidden-text .text")
const sub_text = document.getElementById("sub-text")

// calling the function to display the text WE and Serve
setTimeout(show, 1000)
setTimeout(show1, 1500)
function show() {
    document.getElementById("block1").innerHTML = "WE";
}
function show1() {
    document.getElementById("block2").innerHTML = "SERVE";
    // function goes through the text to display one and hide one
    text_list.forEach((text,i)=>{
        setTimeout(()=>{
            text.style.opacity = '1';
            text_list[i-1].style.display = 'none';
        },200*i);
    })
// add and remove the class to make the sub-text slide from left to right
sub_text.classList.remove('hide-text')
sub_text.classList.add('sub-text')

}
