const container = document.querySelector(".container"),
textarea  = container.querySelector(".textarea"),
word = container.querySelector(".word .word-num"),
Characters = container.querySelector('.Characters .word-num'),
clearBtn = container.querySelector(".btn");

textarea.addEventListener("input",()=>{
    //  ---- word count here --
    word.textContent = textarea.value.split(" ").filter((ele)=> ele !=="").length;

    // ------ Characters count here ---
    Characters.textContent = textarea.value.split("").filter((ele)=> ele !==" ").length;

});

clearBtn.addEventListener("click",()=>{
    textarea.value = "";
    word.textContent = 0;
    Characters.textContent = 0;
});