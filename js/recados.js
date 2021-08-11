// Funciona perfeitamente 70% das vezes, as vezes dá bug e não consigo deletar recados específicos... well

let recados = Array.from(document.querySelectorAll("#recados_table > tr"));
let username;
let pass;

let dbRecados;
table = document.getElementById("recados_table");

function getRecados() {
    return axios
        .get("https://thawing-fjord-37360.herokuapp.com/api/recados")
        .then((response) => {
            console.log("GET Response");
            //console.log(response.data);

            return response.data;
        })
        .catch(function (error) {
            console.log("Error in fetching market updates");
        });
}

function start() {
    getRecados().then((data) => {
        dbRecados = data;
        for (let i = 0; i < data.length; i++) {
            console.log(data[i]);
            table.innerHTML += `<tr id=${data[i].uid}><td scope="row">${data[i].uid}</td><td>${data[i].recado}</td>
            <td>${data[i].detalhes}</td>                        <td>
            <button
                type="button"
                id="apagar_1"
                class="btn btn-danger"
                onclick="apagarRecado(\'id_${data[i].uid}\')"
            >
                Apagar</button
            ><button
                type="button"
                id="editar_1"
                class="btn btn-success"
                onclick="editarRecado(\'id_${data[i].uid}\')"
            >
                Editar
            </button>
        </td></tr>`;
        }
    });
}

function inserirRecado() {
    let recado = {
        recado: document.getElementById("description").value,
        detalhes: document.getElementById("details").value,
    };

    axios({
        method: "post",
        url: "https://thawing-fjord-37360.herokuapp.com/api/recados",
        data: {
            recado: recado.recado,
            detalhes: recado.detalhes,
        },
    }).then(
        (response) => {
            table.innerHTML += `<tr id=${response.data.uid}><td scope="row">${response.data.uid}</td><td>${response.data.recado}</td>
            <td>${response.data.detalhes}</td>                        <td>
            <button
                type="button"
                id="apagar_1"
                class="btn btn-danger"
                onclick="apagarRecado(\'id_${response.data.uid}\')"
            >
                Apagar</button
            ><button
                type="button"
                id="editar_1"
                class="btn btn-success"
                onclick="editarRecado(\'id_${response.data.uid}\')"
            >
                Editar
            </button>
        </td></tr>`;
        },
        (error) => {
            console.log(error);
        }
    );
}

function apagarRecado(id) {
    id = id.split("_");
    console.log(id[1]);
    axios({
        method: "delete",
        url: "https://thawing-fjord-37360.herokuapp.com/api/recados",
        data: { id: id[1] },
    }).then(
        (response) => {
            console.log("apagou");
            location.reload();
        },
        (error) => {
            console.log(error);
        }
    );
}

function editarRecado(id) {}

function editarBotao(id) {}

function logout() {
    window.location.href = "./index.html";
}

start();
