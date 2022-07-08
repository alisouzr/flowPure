
var chooseElement;

const move = function (element) {
    const elements = document.querySelectorAll(".element");
    const cardright = document.querySelector(".card-right");

    elements.forEach(element => {
        element.addEventListener("mousedown", () => {
            element.style.position = "absolute";
            chooseElement = element

            document.onmousemove = (e) => {
                var x = e.pageX;
                var y = e.pageY;

                let where = chooseElement.style.left = x - 50 + "px";
                chooseElement.style.top = y - 50 + "px";

                const cal = (12 / 100) * document.documentElement.scrollWidth;

                if (where < cal) {
                    document.querySelector('.element').remove()
                }
            }
        })
    })
    document.onmouseup = function (e) {
        chooseElement = null;
    }
}
