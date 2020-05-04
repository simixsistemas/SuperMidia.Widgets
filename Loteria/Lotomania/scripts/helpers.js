function formatMoney(n, c, d, t) {
    var c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "," : d,
        t = t == undefined ? "." : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;

    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function startAjax() {
    var start = new Date().getTime();
    $.ajax({
        url: "https://api-loterias.azurewebsites.net/game/lotomania",
        type: 'GET',
        cache: false,
        dataType: "json",
        crossDomain: true,
        headers: {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
            "Accept-Language": "pt-BR,pt;q=0.9,es;q=0.8,en;q=0.7,es-ES;q=0.6,en-US;q=0.5",
        }
    }).done(function (response, message) {
        const splitedDate = String(response.data.draw_date).split('-');
        const splitedNextDate = String(response.data.next_draw_date).split('-');
        const dezEl = document.getElementById('ulDezenas');
        const suggNextValEl = document.getElementById('suggNextValue');
        const suggNextDateEl = document.getElementById('suggNextDate');
        const nextValEl = document.getElementById('nextValue');
        const idDateEl = document.getElementById('idDate');
        const hasNextEl = document.getElementById('hasNext');

        for (var i = 0; i < response.data.drawing.draw.length; i++) {
            dezEl.innerHTML += "<li>" + response.data.drawing.draw[i] + "</li>";
        }

        suggNextValEl.innerText = "R$ " + formatMoney(response.data.next_draw_prize);
        nextValEl.innerText = "R$ " + formatMoney(response.data.next_draw_prize);
        idDateEl.innerText = "Concurso " + response.data.draw_number + " (" + splitedDate[2].substr(0,2) + "/" + splitedDate[1] + "/" + splitedDate[0] + ")";
        hasNextEl.innerText = response.data.has_winner === false ? "Acumulou!" : "";
        suggNextDateEl.innerText = "Estimativa de prêmio do próximo concurso " + splitedNextDate[2].substr(0,2) + "/" + splitedNextDate[1] + "/" + splitedNextDate[0];

        const end = new Date().getTime();
        const difference = end - start;
        if (difference < 2000) {
            setTimeout(function () {
                $('#loader').removeClass("in-vertical").addClass("out-vertical");
            }, 2000);
        } else {
            $('#loader').removeClass("in-vertical").addClass("out-vertical");
        }
    });
};