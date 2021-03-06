var HelloWorld = SuperWidget.extend({
    message: null,

    init: function () {
        //code
    },

    bindings: {
        local: {
            'iniciar-processo': ['click_iniciarProcessoSeletivo']
        }
    },

    iniciarProcessoSeletivo: function () {
        var nome = $("#nome").val();
        var email = $("#email").val();
        var telefone = $("#telefone").val();
        var vaga = $("#vaga").val();

        var url = WCMAPI.getServerURL() + '/widget_publica/api/rest/service/iniciarProcessoSeletivo';
        var data = {'nome': nome, 'email': email, 'telefone': telefone, 'vaga': vaga};

        WCMAPI.Read({
            type: "POST",
            url: url,
            async: true,
            data: JSON.stringify(data),
            success: function funcao(data) {
                console.log(data);
                var msg = "O processo seletivo iniciado foi iniciado com sucesso, a seguinte solicitação foi criada: " + data.processInstanceId
                FLUIGC.toast({
                	title: "Parabéns!",
                	message: msg,
                	type:"success"
                });
            },
            
            error: function (a, b, c) {
                console.log(a);
                console.log(b);
                console.log(c);
                
                FLUIGC.toast({
                	title: "Ops!",
                	message: "Aconteceu um erro inesperado! Por favor, contate o administrador.",
                	type:"error"
                });
            }
        });
    }
});