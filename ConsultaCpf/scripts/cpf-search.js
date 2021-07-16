$('#title').text(config.Title.toLocaleString("pt-BR"))
$('#title').css("color", config.TitleColor)
$("body").css("background", config.BaseColor);

$("#formSearch").submit(function (e) {
    e.preventDefault();
    const cpf = $("#inputSearch").val();

    if (cpf) {
        CpfSearch(cpf);
    } else {
        alert("Informe um CPF");
    }
})

$('.cpf').mask('000.000.000-00', { reverse: true });

function CpfSearch(cpf) {
    $.ajax({
        url: "https://www.crescevendas.com/admin/integrations/raffle_coupons?registration=" + cpf,
        type: 'GET',
        timeout: 0,
        headers: {
            "X-AdminUser-Email": config.Email,
            "X-AdminUser-Token": config.Token
        },
        success: function (data) {
            CreateTable(data);
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    });
}

function AppendCountCoupons(item) {
    $('#resultTable').empty();
    if (item) {
        $('<tr>').append(
            $('<td colspan="2" class="h2">').html('Total de Cupons: <span class="badge badge-warning">' + item.count + '</span>'),
        ).appendTo('#resultTable')
    }
    else {
        $('<tr>').append(
            $('<td colspan="2">').text('Não existem registros'),
        ).appendTo('#resultTable')
    }
}

function AppendRaffleCoupons(item) {
    $('<tr>').append(
        $('<td colspan="2" class="h3">').html('Sorteio: <span class="badge badge-info">' + item.name + '</span>')
    ).appendTo('#resultTable');
    $('<tr>').append(
        $('<td class="h5">').text("Cupom"),
        $('<td class="h5">').text("Data"),
    ).appendTo('#resultTable');
}

function AppendRaffleSortables(item) {
    $('<tr>').append(
        $('<td>').text(item.coupon),
        $('<td>').text(DateFormat(item.shop_date)),
    ).appendTo('#resultTable');
}

function CreateTable(data) {
    $.each(data, function (i, item) {
        AppendCountCoupons(item);
        $.each(item.raffle_coupons, function (i, raffleCoupons) {
            AppendRaffleCoupons(raffleCoupons);
            $.each(raffleCoupons.raffle_sortables, function (i, raffleSortables) {
                AppendRaffleSortables(raffleSortables)
            })
        })
    });
}

function DateFormat(dateString) {
    return new Date(dateString).toLocaleString("pt-BR");
}
