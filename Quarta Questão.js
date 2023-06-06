function calcule_o_desconto_aplicado()  {
    var ValorT  = Number(prompt("Qual o valor total da compra: "))
    var desconto = Number(prompt("Insira o código do cupom: "))

    while (desconto != "10"){

        alert("Cupom Inválido")
        var ValorT  = Number(prompt("Qual o valor total da compra: "))
        var desconto = Number(prompt("Insira o código do cupom: "))
    }
    desC = desconto / 100 * ValorT

    //vlorF = ValorT - desC
}
calcule_o_desconto_aplicado()

alert(`O valor do desconto aplicado é de R$${desC}`)
