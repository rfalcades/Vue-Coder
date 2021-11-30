new Vue({
    el: "#desafio",
    data: {
        nome: "Falca",
        idade: 42,
        linkImagem:
            "https://1.bp.blogspot.com/-Y9xOuthufIA/YBIUl5ysIdI/AAAAAAAApak/IY3Hn-sFpAoXNkrnTTHblQWeAB1ckQ3SQCLcBGAsYHQ/s2048/Novo-Tesla-Model-S-2022%2B%252829%2529.jpg",
    },
    methods: {
        idadeVezes3() {
            return this.idade * 3;
        },
        random() {
            return Math.random();
        },
    },
});
