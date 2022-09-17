var formDOM = document.querySelector("#form")
var inputDOM = document.querySelector("#input")
var ulDOM = document.querySelector("#ul")
var idSayac = 0
formDOM.addEventListener("submit", addData);


function addData(event) {
    event.preventDefault() //Formun method işlemini kaldırdık.

    if (inputDOM.value != "") {
        liDOM = document.createElement("li")
        liDOM.id = `li${idSayac}`
        liDOM.innerHTML = `${inputDOM.value}`


        btnRemove = document.createElement("button")
        btnRemove.innerHTML = `<i class="fa-solid fa-xmark"></i>`
        btnRemove.addEventListener("click", remove)


        btnOkey = document.createElement("button")
        btnOkey.id = `check${idSayac}`
        btnOkey.innerHTML = `<i class="fa-solid fa-check"></i>`
        btnOkey.style.display = "none"
        liDOM.prepend(btnOkey)
        btnOkey.addEventListener("click", check)

        liDOM.addEventListener("click", liClick)
        liDOM.appendChild(btnRemove)


        ulDOM.appendChild(liDOM)
        idSayac += 1


        let liClickB = true
        function liClick() {
            if (liClickB == true) {
                //Lİ Düzenleniyor.
                this.style.background = "gray"
                this.style.color = "white"
                this.style.textDecoration = "line-through"
                this.style.justifyContent = "space-around"
                btnOkey.style.display = "inline"
                console.log(btnOkey.id)

                let thislength = 2
                if (this.children.length == thislength) {
                    console.log("kontrol")
                    this.prepend(btnOkey)
                }
                liClickB = false
            }


            else {
                btnOkey.style.display = "none"
                this.style.background = "rgb(239, 239, 239, 0.4)"
                this.style.color = "black"
                this.style.textDecoration = "none"
                this.style.justifyContent = "space-between"
                liClickB = true
            }



            console.log(this.id)

        }

        function remove() {
            this.parentNode.remove()
            document.getElementById("check").style.display = "none"
            document.getElementById("remove").style.display = "block"
        }
        function check() {
            this.parentNode.remove()
            document.getElementById("remove").style.display = "none"
            document.getElementById("check").style.display = "block"
        }
    }
    else {
        console.log("Boş Giriş")
    }

}
