function preço_final_de_uma_compra()  {
    var PercaT = Number(prompt("Total da Peça: "))
    var ValorU = Number(prompt("Valor Unitário: "))
    var Perce = Number(prompt("Informe o desconto a ser aplicado: "))

    valf= PecaT*ValorU

    desC = Perce / 100 * valf

    vlorF = valf - desc
}
 preço_final_de_uma_compra()

 alert('Aplicando o desconto de ${desC}% o valor final ficará de R$${vlorF}')
