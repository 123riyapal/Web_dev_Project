var h1Elements = document.querySelectorAll("h1");

h1Elements.forEach((h1) => {
    var text = h1.textContent;
    var splittedText = text.split("");
    var clutter = "";
    var halflength=splittedText.length/2;

    splittedText.forEach((e,idx) => {
        if(idx<halflength)
        clutter += `<span class="a">${e}</span>`;
        else
        clutter += `<span class="b">${e}</span>`;

    });

    h1.innerHTML = clutter;
});

gsap.from("h1 .a", {
    stagger: 0.15,
    duration: 0.8,
    opacity: 0,
    delay: 0.3,
    y: 40,
});

gsap.from("h1 .b", {
    stagger: -0.15,
    duration: 0.8,
    opacity: 0,
    delay: 0.3,
    y: 40,
});
