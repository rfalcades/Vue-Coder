new Vue({
    el: "#desafio",
    data: {
        valor: "",
    },
    methods: {
        exibirAlerta() {
            alert("Voce clicou!");
        },
        salvarValor(event) {
            this.valor = event.target.value;
        },
    },
});
