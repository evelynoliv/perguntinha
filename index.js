const sim = window.document.getElementById("yesButton");
        const nao = window.document.getElementById("noButton"); 
        const resp = window.document.getElementById("respostasim");

        function moverBotao() {
            var botao = nao;
            var novoX = Math.random() * window.innerWidth;
            var novoY = Math.random() * window.innerHeight;

            botao.style.left = novoX + 'px';
            botao.style.top = novoY + 'px';
        }

        let estado = -1;

        function entrar() {
            estado++;
            if (estado === 0) {
                sim.style.transform = "translate(50%)";
                nao.style.transform = "translate(130px, -150px)";
            }
            if (estado == 1) {
                nao.style.transform = "translate(130px, 150px)"; 
            }
            if (estado == 2) {
                nao.style.transform = "translate(-325px, 150px)";
            }
            if (estado == 3) {
                nao.style.transform = "translate(-325px, -150px)";
            }
            if (estado == 4) {
                nao.style.transform = "translate(135px, 150px)";
            }
            if (estado == 5) {
                nao.style.transform = "translate(135px, -150px)";
            }
            if (estado == 6) {
                nao.style.transform = "translate(-325px, 150px)";
            }
            if (estado == 7) {
                nao.style.transform = "translate(-325px, -150px)";
                estado = -1;
            }
        }

        nao.addEventListener("mouseenter", entrar);

        sim.addEventListener("click", clicar);

        function clicar() {
            resp.innerHTML = "Eu te amo meu amor!!"; 
            sim.style.transform = "translate(0px)";
            nao.style.transform = "translate(0px, 0px)";

            resp.style.opacity = 1;

            setTimeout(function () {
                resp.style.opacity = 0;
            }, 3000);

            moverBotao();
        }