function openForm(e){
    let form = document.querySelector('#formArea')
    form.innerHTML = `
        <div class="form" id="form">
            <form class="container" action="/newItem" method="post">
                <h3>${(e.value.toUpperCase())}</h3>
                <span class="closeForm" onclick="closeForm()">&times;</span>
                <div class="formArea">
                    <label for="product">Produto:</label>
                    <select class="input" name="product" id="product">
                        <option value="TILAPIA">TILAPIA</option>
                    </select>
                </div>
                
                <div class="formArea">
                    <label for="amount">Quatidade:</label>
                    <input class="input" type="number" id="amount" name="amount" required placeholder="Quantidade em Kg">
                </div>

                <div class="formArea">
                    <label for="price">Preço:</label>
                    <input class="input" type="number" id="price" name="price" step=".01" min="0" required placeholder="Preço por Kg">
                </div>

                <div class="operation">
                    <input type="text" id="operation" name="operation" required value="${e.value.toUpperCase()}">
                </div>

                <button class="formButton">${e.value.toUpperCase()}</button>
            </form>
        </div>`
}

function closeForm(){
    let form = document.querySelector('#formArea')
    form.innerHTML = ''
}

console.log(items)