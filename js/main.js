$(document).ready(function(){
    
    $("#dimensionar").click(function(){
        if($("#numero").val() === ""){
            alert("Campos vazios!");
            $("#numero").focus();
        } else{
            var grau = $("#grau").val();
            var numero = $("#numero").val();
            dimensionar(grau,numero);
        }
    });
    
    $("#limpar").click(function(){
        limpar();
    });
    
    function dimensionar(grau, numero){
        var linha = -1;
        var coluna = -1;
        var tabela = [
            [
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [1,0,0,0,0],
                [1,0,0,0,1],
                [1,1,1,0,1],
                [2,1,1,1,1],
                [1,1,1,0,1]
            ],
            [
                [0,0,0,0,0],
                [0,0,0,0,0],
                [0,0,0,0,0],
                [1,0,0,0,0],
                [1,1,1,0,1],
                [2,1,1,0,1],
                [5,1,1,1,1],
                [1,1,1,0,1]
            ],
            [
                [0,0,0,0,0],
                [1,0,0,0,0],
                [2,0,0,0,0],
                [3,1,0,0,1],
                [4,1,1,0,1],
                [6,1,2,0,1],
                [8,2,1,1,2],
                [3,1,1,0,1]
            ],
            [
                [1,0,0,0,0],
                [2,1,0,0,1],
                [3,1,0,0,1],
                [4,1,1,0,1],
                [5,1,1,0,1],
                [8,2,2,0,2],
                [10,3,1,1,3],
                [3,1,1,0,1]
            ]
        ];

        if (grau === "1") {
            coluna = 0;
        } else if(grau === "2"){
            coluna = 1;
        }  else if(grau === "3"){
            coluna = 2;
        }  else if(grau === "4"){
            coluna = 3;
        } 

        if (numero > 5000) {
            linha = 7;
        } else if(numero > 3500){
            linha = 6;
        } else if(numero > 2000){
            linha = 5;
        } else if(numero > 1000){
            linha = 4;
        } else if(numero > 500){
            linha = 3;
        } else if(numero > 250){
            linha = 2;
        } else if(numero > 100){
            linha = 1;
        } else if(numero > 49){
            linha = 0;
        } else if(numero > 0){
        	linha = 0;
        	coluna = 0;
        }

        if (linha < 0 || coluna < 0) {
            alert("Valores inválidos!");
            limpar();
        } else{
            if (linha === 7) {
                var dados = tabela[coluna][linha - 1];
                var resto = numero - 5000;
                if (resto > 2000) {
                	var qtdGrupos = Math.floor(resto/4000);
                	resto = resto % 4000;
                	if (resto > 2000) {
                		qtdGrupos++;
                	}
                    var grupos = [0,0,0,0,0];
                    for(var i = 0 ; i < 5 ; i++){
			            grupos[i] = dados[i] + (tabela[coluna][linha][i] * qtdGrupos)
			        }
			        dados = grupos;
                }
                carregar(dados);
            } else{
                carregar(tabela[coluna][linha]);
            }
        }
    };

    function carregar(dados){
        var profissionais = [
            "Técnico de Seg. do Trabalho",
            "Engenheiro de Seg. do Trabalho",
            "Auxiliar de Enfermagem do Trabalho",
            "Enfermeiro do Trabalho",
            "Médico do Trabalho"
        ];
        var table = "<thead class=\"thead-dark\"><th>Profissional</th><th>Quantidade</th></thead><tbody>";
        for(var i = 0 ; i < 5 ; i++){
            table += "<tr><td>" + profissionais[i] + "</td><td>" + dados[i] + "</td></tr>";
        }
        table += "</tbody>";
        document.getElementById("listaProfissionais").innerHTML = table;
    };

    function limpar(){
        $("#numero").val("");
        $("#numero").focus();
    }
});