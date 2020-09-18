const estados = {
    'AC': 'Acre',
    'AL': 'Alagoas',
    'AP': 'Amapá',
    'AM': 'Amazonas',
    'BA': 'Bahia',
    'CE': 'Ceará',
    'DF': 'Distrito Federal',
    'ES': 'Espírito Santo',
    'GO': 'Goiás',
    'MA': 'Maranhão',
    'MT': 'Mato Grosso',
    'MS': 'Mato Grosso do Sul',
    'MG': 'Minas Gerais',
    'PA': 'Pará',
    'PB': 'Paraíba',
    'PR': 'Paraná',
    'PE': 'Pernambuco',
    'PI': 'Piauí',
    'RJ': 'Rio de Janeiro',
    'RN': 'Rio Grande do Norte',
    'RS': 'Rio Grande do Sul',
    'RO': 'Rondônia',
    'RR': 'Roraima',
    'SC': 'Santa Catarina',
    'SP': 'São Paulo',
    'SE': 'Sergipe',
    'TO': 'Tocantins'
}
const states = document.getElementById('estados')

for(const index in estados){
    option = new Option(estados[index], index);
    states.options[states.options.length] = option;
}

const subButton = document.querySelector('.button').addEventListener('click',function(event){
    event.preventDefault()
    dataValue = document.getElementById('data').value
    dataArr = dataValue.split("/")

    if(parseInt(dataArr[0]) <= 0 || parseInt(dataArr[0]) > 31){
        alert('Dia Inexistente')
    }
    if(parseInt(dataArr[1]) <= 0 || parseInt(dataArr[1]) > 12){
        alert('Mes Inexistente')
    }
})

    const resumo = document.getElementsByTagName('input').addEventListener('keyup',function(){
        document.querySelector('.resumo').innerHTML = resumo
    })