// Dados de localização - Estados e Cidades do Brasil
const locationData = {
    "AC": {
        "nome": "Acre",
        "cidades": ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira", "Tarauacá", "Feijó", "Brasiléia", "Senador Guiomard", "Porto Acre", "Bujari", "Mâncio Lima", "Rodrigues Alves", "Acrelândia", "Plácido de Castro", "Xapuri", "Capixaba", "Porto Walter", "Marechal Thaumaturgo", "Jordão", "Santa Rosa do Purus", "Manoel Urbano"]
    },
    "AL": {
        "nome": "Alagoas",
        "cidades": ["Maceió", "Arapiraca", "Rio Largo", "Palmeira dos Índios", "União dos Palmares", "Penedo", "São Miguel dos Campos", "Campo Alegre", "Coruripe", "Delmiro Gouveia", "Marechal Deodoro", "São Sebastião", "Pilar", "São José da Laje", "Murici", "Santana do Ipanema", "São Luís do Quitunde", "Viçosa", "Atalaia", "Cajueiro"]
    },
    "AP": {
        "nome": "Amapá",
        "cidades": ["Macapá", "Santana", "Laranjal do Jari", "Oiapoque", "Porto Grande", "Mazagão", "Itaubal", "Tartarugalzinho", "Amapá", "Calçoene", "Ferreira Gomes", "Cutias", "Pracuúba", "Pedra Branca do Amapari", "Serra do Navio", "Vitória do Jari"]
    },
    "AM": {
        "nome": "Amazonas",
        "cidades": ["Manaus", "Parintins", "Itacoatiara", "Manacapuru", "Coari", "Tefé", "Tabatinga", "Maués", "Manicoré", "Humaitá", "Iranduba", "São Gabriel da Cachoeira", "Benjamin Constant", "Boca do Acre", "Autazes", "Nova Olinda do Norte", "Barreirinha", "Codajás", "Anori", "Beruri"]
    },
    "BA": {
        "nome": "Bahia",
        "cidades": ["Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", "Juazeiro", "Ilhéus", "Jequié", "Teixeira de Freitas", "Barreiras", "Porto Seguro", "Simões Filho", "Paulo Afonso", "Eunápolis", "Santo Antônio de Jesus", "Valença", "Candeias", "Serrinha", "Senhor do Bonfim", "Dias d'Ávila", "Irecê"]
    },
    "CE": {
        "nome": "Ceará",
        "cidades": ["Fortaleza", "Caucaia", "Juazeiro do Norte", "Maracanaú", "Sobral", "Crato", "Itapipoca", "Maranguape", "Iguatu", "Quixadá", "Canindé", "Pacatuba", "Crateús", "Aquiraz", "Quixeramobim", "Russas", "Aracati", "Tianguá", "Baturité", "Cascavel"]
    },
    "DF": {
        "nome": "Distrito Federal",
        "cidades": ["Brasília", "Ceilândia", "Taguatinga", "Samambaia", "Plano Piloto", "Recanto das Emas", "Gama", "Guará", "Santa Maria", "São Sebastião", "Paranoá", "Núcleo Bandeirante", "Candangolândia", "Águas Claras", "Riacho Fundo", "Sudoeste/Octogonal", "Cruzeiro", "Lago Sul", "Lago Norte", "Varjão"]
    },
    "ES": {
        "nome": "Espírito Santo",
        "cidades": ["Vitória", "Vila Velha", "Serra", "Cariacica", "Cachoeiro de Itapemirim", "Linhares", "São Mateus", "Colatina", "Guarapari", "Aracruz", "Viana", "Nova Venécia", "Barra de São Francisco", "Santa Maria de Jetibá", "Castelo", "Marataízes", "Presidente Kennedy", "Itapemirim", "Afonso Cláudio", "Domingos Martins"]
    },
    "GO": {
        "nome": "Goiás",
        "cidades": ["Goiânia", "Aparecida de Goiânia", "Anápolis", "Rio Verde", "Luziânia", "Águas Lindas de Goiás", "Valparaíso de Goiás", "Trindade", "Formosa", "Novo Gama", "Itumbiara", "Senador Canedo", "Caldas Novas", "Jataí", "Catalão", "Planaltina", "Santo Antônio do Descoberto", "Mineiros", "Cristalina", "Goianésia"]
    },
    "MA": {
        "nome": "Maranhão",
        "cidades": ["São Luís", "Imperatriz", "São José de Ribamar", "Timon", "Caxias", "Codó", "Paço do Lumiar", "Açailândia", "Bacabal", "Balsas", "Santa Inês", "Barra do Corda", "Pinheiro", "Chapadinha", "Buriti", "Viana", "Itapecuru Mirim", "Zé Doca", "Pedro II", "São Bento"]
    },
    "MT": {
        "nome": "Mato Grosso",
        "cidades": ["Cuiabá", "Várzea Grande", "Rondonópolis", "Sinop", "Tangará da Serra", "Lucas do Rio Verde", "Sorriso", "Cáceres", "Alta Floresta", "Pontes e Lacerda", "Campo Verde", "Nova Mutum", "Jaciara", "Colíder", "Guarantã do Norte", "Juína", "Barra do Garças", "Diamantino", "São Félix do Araguaia", "Vila Rica"]
    },
    "MS": {
        "nome": "Mato Grosso do Sul",
        "cidades": ["Campo Grande", "Dourados", "Corumbá", "Três Lagoas", "Ponta Porã", "Naviraí", "Nova Andradina", "Aquidauana", "Sidrolândia", "Paranaíba", "Maracaju", "Amambai", "Coxim", "Rio Brilhante", "São Gabriel do Oeste", "Jardim", "Bela Vista", "Anastácio", "Ivinhema", "Ribas do Rio Pardo"]
    },
    "MG": {
        "nome": "Minas Gerais",
        "cidades": ["Belo Horizonte", "Uberlândia", "Contagem", "Juiz de Fora", "Betim", "Montes Claros", "Ribeirão das Neves", "Uberaba", "Governador Valadares", "Ipatinga", "Sete Lagoas", "Divinópolis", "Santa Luzia", "Ibirité", "Vespasiano", "Sabará", "Nova Lima", "Barbacena", "Araguari", "Itabira"]
    },
    "PA": {
        "nome": "Pará",
        "cidades": ["Belém", "Ananindeua", "Santarém", "Marabá", "Castanhal", "Parauapebas", "Itaituba", "Cametá", "Bragança", "Abaetetuba", "Tucuruí", "Altamira", "Soure", "Vigia", "Capanema", "Óbidos", "Juruti", "São Miguel do Guamá", "Igarapé-Miri", "Mãe do Rio"]
    },
    "PB": {
        "nome": "Paraíba",
        "cidades": ["João Pessoa", "Campina Grande", "Santa Rita", "Patos", "Bayeux", "Sousa", "Cajazeiras", "Guarabira", "Sapé", "Mamanguape", "Queimadas", "São Bento", "Monteiro", "Esperança", "Pombal", "Catolé do Rocha", "Alagoa Grande", "Itaporanga", "Pedras de Fogo", "Lagoa Seca"]
    },
    "PR": {
        "nome": "Paraná",
        "cidades": ["Curitiba", "Londrina", "Maringá", "Ponta Grossa", "Cascavel", "São José dos Pinhais", "Foz do Iguaçu", "Colombo", "Guarapuava", "Paranaguá", "Apucarana", "Toledo", "Araucária", "Campo Largo", "Campo Mourão", "Cambé", "Sarandi", "Umuarama", "Pinhais", "Francisco Beltrão"]
    },
    "PE": {
        "nome": "Pernambuco",
        "cidades": ["Recife", "Jaboatão dos Guararapes", "Olinda", "Caruaru", "Petrolina", "Paulista", "Cabo de Santo Agostinho", "Camaragibe", "Garanhuns", "Vitória de Santo Antão", "Igarassu", "São Lourenço da Mata", "Abreu e Lima", "Santa Cruz do Capibaribe", "Ipojuca", "Serra Talhada", "Araripina", "Gravatá", "Carpina", "Goiana"]
    },
    "PI": {
        "nome": "Piauí",
        "cidades": ["Teresina", "Parnaíba", "Picos", "Piripiri", "Floriano", "Campo Maior", "União", "Altos", "Esperantina", "José de Freitas", "Luzilândia", "Valença do Piauí", "Barras", "São Raimundo Nonato", "Corrente", "Oeiras", "Pedro II", "Água Branca", "Cocal", "Buriti dos Lopes"]
    },
    "RJ": {
        "nome": "Rio de Janeiro",
        "cidades": ["Rio de Janeiro", "São Gonçalo", "Duque de Caxias", "Nova Iguaçu", "Niterói", "Belford Roxo", "Campos dos Goytacazes", "São João de Meriti", "Petrópolis", "Volta Redonda", "Magé", "Itaboraí", "Mesquita", "Nova Friburgo", "Barra Mansa", "Macapé", "Cabo Frio", "Angra dos Reis", "Teresópolis", "Marechal Floriano"]
    },
    "RN": {
        "nome": "Rio Grande do Norte",
        "cidades": ["Natal", "Mossoró", "Parnamirim", "São Gonçalo do Amarante", "Macaíba", "Ceará-Mirim", "Caicó", "Assú", "Currais Novos", "São José de Mipibu", "Santa Cruz", "Nova Cruz", "Apodi", "João Câmara", "Canguaretama", "Touros", "São Paulo do Potengi", "Extremoz", "Baraúna", "Upanema"]
    },
    "RS": {
        "nome": "Rio Grande do Sul",
        "cidades": ["Porto Alegre", "Caxias do Sul", "Pelotas", "Canoas", "Santa Maria", "Gravataí", "Viamão", "Novo Hamburgo", "São Leopoldo", "Rio Grande", "Alvorada", "Passo Fundo", "Sapucaia do Sul", "Uruguaiana", "Santa Cruz do Sul", "Bagé", "Bento Gonçalves", "Erechim", "Guaíba", "Cachoeirinha"]
    },
    "RO": {
        "nome": "Rondônia",
        "cidades": ["Porto Velho", "Ji-Paraná", "Ariquemes", "Vilhena", "Cacoal", "Rolim de Moura", "Jaru", "Guajará-Mirim", "Machadinho d'Oeste", "Buritis", "Pimenta Bueno", "Ouro Preto do Oeste", "Espigão d'Oeste", "Nova Mamoré", "Alta Floresta d'Oeste", "São Miguel do Guaporé", "Candeias do Jamari", "Presidente Médici", "São Francisco do Guaporé", "Colorado do Oeste"]
    },
    "RR": {
        "nome": "Roraima",
        "cidades": ["Boa Vista", "Rorainópolis", "Caracaraí", "Mucajaí", "Alto Alegre", "Pacaraima", "São Luiz", "Bonfim", "São João da Baliza", "Iracema", "Uiramutã", "Normandia", "Amajari", "Cantá", "Caroebe"]
    },
    "SC": {
        "nome": "Santa Catarina",
        "cidades": ["Florianópolis", "Joinville", "Blumenau", "São José", "Criciúma", "Chapecó", "Lages", "Jaraguá do Sul", "Palhoça", "Itajaí", "Navegantes", "Balneário Camboriú", "Tubarão", "Araquari", "São Bento do Sul", "Caçador", "Concórdia", "Rio do Sul", "Mafra", "Canoinhas"]
    },
    "SP": {
        "nome": "São Paulo",
        "cidades": ["São Paulo", "Guarulhos", "Campinas", "São Bernardo do Campo", "São José dos Campos", "Santo André", "Ribeirão Preto", "Osasco", "Sorocaba", "Mauá", "São José do Rio Preto", "Mogi das Cruzes", "Jundiaí", "Piracicaba", "Bauru", "São Vicente", "Itaquaquecetuba", "Franca", "Guarujá", "Taubaté"]
    },
    "SE": {
        "nome": "Sergipe",
        "cidades": ["Aracaju", "Lagarto", "Itabaiana", "São Cristóvão", "Estância", "Tobias Barreto", "Itabaianinha", "Simão Dias", "Nossa Senhora da Glória", "Poço Redondo", "Capela", "Japaratuba", "Carmópolis", "Campo do Brito", "Boquim", "Pedrinhas", "São Domingos", "Malhada dos Bois", "Riachão do Dantas", "Barra dos Coqueiros"]
    },
    "TO": {
        "nome": "Tocantins",
        "cidades": ["Palmas", "Araguaína", "Gurupi", "Porto Nacional", "Paraíso do Tocantins", "Colinas do Tocantins", "Guaraí", "Tocantinópolis", "Miracema do Tocantins", "Taguatinga", "Formoso do Araguaia", "Pedro Afonso", "Cristalândia", "Dianópolis", "Augustinópolis", "Wanderlândia", "Araguatins", "Xambioá", "Ananás", "Pequizeiro"]
    }
};

// Função para carregar estados
function carregarEstados() {
    const estadoSelect = $('#estadoSelect');
    estadoSelect.empty();
    estadoSelect.append('<option value="">Escolha um estado...</option>');

    Object.keys(locationData).sort().forEach(uf => {
        estadoSelect.append(`<option value="${uf}">${locationData[uf].nome} (${uf})</option>`);
    });
}

// Função para carregar cidades baseado no estado selecionado
function carregarCidades(uf) {
    const cidadeSelect = $('#cidadeSelect');
    cidadeSelect.empty();
    cidadeSelect.prop('disabled', false);

    if (!uf || !locationData[uf]) {
        cidadeSelect.append('<option value="">Primeiro selecione um estado...</option>');
        return;
    }

    cidadeSelect.append('<option value="">Escolha uma cidade...</option>');

    locationData[uf].cidades.sort().forEach(cidade => {
        cidadeSelect.append(`<option value="${cidade}">${cidade}</option>`);
    });
}

// Função para verificar se é a primeira visita
function verificarPrimeiraVisita() {
    const visitou = localStorage.getItem('milkmoo_visitou');
    return !visitou;
}

// Função para marcar como visitado
function marcarComoVisitado() {
    localStorage.setItem('milkmoo_visitou', 'true');
}

// Função para obter localização salva
function obterLocalizacaoSalva() {
    return {
        estado: localStorage.getItem('milkmoo_estado'),
        cidade: localStorage.getItem('milkmoo_cidade')
    };
}

// Função para salvar localização
function salvarLocalizacao(estado, cidade) {
    localStorage.setItem('milkmoo_estado', estado);
    localStorage.setItem('milkmoo_cidade', cidade);
    marcarComoVisitado();
}
