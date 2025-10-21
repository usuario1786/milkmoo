// Sistema de Delivery Milk Moo
let carrinho = [];
let produtos = {};

// Função para obter parâmetros UTM armazenados (reutilizada do index.html)
function obterParametrosUTM() {
    const stored = localStorage.getItem('milkmoo_utm_params');
    return stored ? JSON.parse(stored) : {};
}

// Função para adicionar parâmetros UTM à URL (reutilizada do index.html)
function adicionarParametrosUTM(url) {
    const utmParams = obterParametrosUTM();
    if (Object.keys(utmParams).length === 0) return url;

    const urlObj = new URL(url);
    Object.keys(utmParams).forEach(param => {
        urlObj.searchParams.set(param, utmParams[param]);
    });

    return urlObj.toString();
}

$(document).ready(function () {
    // Carregar produtos do JSON
    carregarProdutos();

    // Eventos
    $(document).on('click', '.produto-link', function(e) {
        e.preventDefault();
        const produtoId = $(this).data('id');
        abrirDetalhesProduto(produtoId);
    });

    $(document).on('click', '.adicionarProduto', function(e) {
        e.preventDefault();
        adicionarAoCarrinho();
    });

    $(document).on('click', '.verSacola', function(e) {
        e.preventDefault();
        mostrarCarrinho();
    });

    $(document).on('click', '.fechar', function(e) {
        e.preventDefault();
        $('#opacidade').removeClass('opacidade');
        $('#meuCarrinho').removeClass('mostrar');
        $('#produto').removeClass('mostrar');
        $('body').css('overflow', 'auto');
    });

    // Evento para finalizar pedido (quando implementado no HTML)
    $(document).on('click', '#btFinalizar', function(e) {
        e.preventDefault();
        finalizarPedido();
    });

    $(document).on('click', '.adicionarQtde', function(e) {
        e.preventDefault();
        let qtde = parseInt($('#detalhesProduto .qtde').val());
        if (qtde < 10) {
            $('#detalhesProduto .qtde').val(qtde + 1);
        }
    });

    $(document).on('click', '.removerQtde', function(e) {
        e.preventDefault();
        let qtde = parseInt($('#detalhesProduto .qtde').val());
        if (qtde > 1) {
            $('#detalhesProduto .qtde').val(qtde - 1);
        }
    });
});

function carregarProdutos() {
    $.getJSON('produtos.json', function(data) {
        produtos = data;

        // Renderizar produtos em cada categoria
        renderizarProdutosPorCategoria(data.categorias);
    }).fail(function() {
        console.error('Erro ao carregar produtos');
        mostrarPopup('Erro', 'Não foi possível carregar os produtos. Tente novamente.');
    });
}

function renderizarProdutosPorCategoria(categorias) {
    categorias.forEach(function(categoria) {
        const categoriaId = categoria.nome.toLowerCase()
            .replace(/ /g, '')
            .replace(/ç/g, 'c')
            .replace(/ã/g, 'a')
            .replace(/é/g, 'e')
            .replace(/í/g, 'i')
            .replace(/ó/g, 'o')
            .replace(/ô/g, 'o')
            .replace(/ú/g, 'u');

        const produtosHtml = categoria.produtos.map(function(produto) {
            if (!produto.disponivel) return '';

            return `
                <div class="item">
                    <a class="disponivel produto-link" href="#" data-id="${produto.id}">
                        <div class="texto">
                            <h3>${produto.nome}</h3>
                            <span class="preco">R$ ${parseFloat(produto.preco).toFixed(2)}</span>
                            <p class="descricao">${produto.descricao}</p>
                        </div>
                        <div class="fotoProduto">
                            <figure>
                                <img src="images/${produto.imagem}" width="110px" height="110px" loading="lazy" alt="${produto.nome}">
                            </figure>
                        </div>
                    </a>
                </div>
            `;
        }).join('');

        $(`#produtos-${categoriaId}`).html(produtosHtml);

        // Adicionar também na categoria "todos" (exceto combos)
        if (categoriaId !== 'promocao') {
            $('#produtos-todos').append(produtosHtml);
        }
    });
}

function abrirDetalhesProduto(produtoId) {
    // Encontrar produto
    let produto = null;
    produtos.categorias.forEach(function(categoria) {
        categoria.produtos.forEach(function(p) {
            if (p.id === produtoId) {
                produto = p;
            }
        });
    });

    if (!produto) {
        mostrarPopup('Erro', 'Produto não encontrado');
        return;
    }

    // Preencher modal com dados do produto
    $('#idProduto').val(produto.id);
    $('#produtoNome').text(produto.nome);
    $('#produtoImagem').attr('src', `images/${produto.imagem}`);
    $('#produtoDescricao').text(produto.descricao);
    $('#produtoPreco').text(`R$ ${parseFloat(produto.preco).toFixed(2)}`);
    $('#detalhesProduto .qtde').val(1);

    // Mostrar modal
    $('#opacidade').addClass('opacidade');
    $('#produto').addClass('mostrar');
    $('body').css('overflow', 'hidden');
}

function adicionarAoCarrinho() {
    const produtoId = $('#idProduto').val();
    const qtde = parseInt($('#detalhesProduto .qtde').val());
    const observacao = $('#observacao').val();

    if (!produtoId || qtde < 1) {
        mostrarPopup('Erro', 'Dados do produto inválidos');
        return;
    }

    // Encontrar produto
    let produto = null;
    produtos.categorias.forEach(function(categoria) {
        categoria.produtos.forEach(function(p) {
            if (p.id === produtoId) {
                produto = p;
            }
        });
    });

    if (!produto) {
        mostrarPopup('Erro', 'Produto não encontrado');
        return;
    }

    // Verificar se produto já está no carrinho
    const itemExistente = carrinho.find(function(item) {
        return item.id === produtoId && item.observacao === observacao;
    });

    if (itemExistente) {
        itemExistente.qtde += qtde;
    } else {
        carrinho.push({
            id: produto.id,
            nome: produto.nome,
            preco: parseFloat(produto.preco),
            qtde: qtde,
            observacao: observacao,
            imagem: produto.imagem
        });
    }

    // Atualizar contador do carrinho
    atualizarContadorCarrinho();

    // Fechar modal
    $('#opacidade').removeClass('opacidade');
    $('#produto').removeClass('mostrar');
    $('body').css('overflow', 'auto');

    mostrarPopup('Sucesso', `${produto.nome} adicionado ao carrinho!`);
}

function atualizarContadorCarrinho() {
    const totalItens = carrinho.reduce(function(total, item) {
        return total + item.qtde;
    }, 0);

    $('.contador-carrinho').text(totalItens);
}

function mostrarCarrinho() {
    if (carrinho.length === 0) {
        $('#itensCarrinho').html('<p>Carrinho vazio</p>');
        $('#subtotalCarrinho').text('R$ 0,00');
        $('#totalCarrinho').text('R$ 0,00');
    } else {
        let itensHtml = '';
        let subtotal = 0;

        carrinho.forEach(function(item) {
            const totalItem = item.preco * item.qtde;
            subtotal += totalItem;

            itensHtml += `
                <div class="item-carrinho">
                    <div class="info-item">
                        <img src="images/${item.imagem}" width="50px" height="50px" alt="${item.nome}">
                        <div class="detalhes">
                            <h4>${item.nome}</h4>
                            <p>Qtde: ${item.qtde}</p>
                            ${item.observacao ? `<p><small>Obs: ${item.observacao}</small></p>` : ''}
                        </div>
                    </div>
                    <div class="preco-item">
                        R$ ${totalItem.toFixed(2)}
                    </div>
                </div>
            `;
        });

        $('#itensCarrinho').html(itensHtml);

        const taxaEntrega = 5.00;
        const total = subtotal + taxaEntrega;

        $('#subtotalCarrinho').text(`R$ ${subtotal.toFixed(2)}`);
        $('#taxaEntrega').text(`R$ ${taxaEntrega.toFixed(2)}`);
        $('#totalCarrinho').text(`R$ ${total.toFixed(2)}`);
    }

    $('#opacidade').addClass('opacidade');
    $('#meuCarrinho').addClass('mostrar');
    $('body').css('overflow', 'hidden');
}

function mostrarPopup(titulo, mensagem) {
    Swal.fire({
        title: titulo,
        text: mensagem,
        icon: titulo.toLowerCase().includes('erro') ? 'error' : 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#FF69B4'
    });
}

// Função para verificar conexão com internet
async function verificarConexaoInternet() {
    try {
        const response = await fetch('https://www.google.com/favicon.ico', {
            method: 'HEAD',
            mode: 'no-cors'
        });
        return 'conectado';
    } catch (error) {
        return 'desconectado';
    }
}

// Função para verificar se loja está aberta
function verificarLojaAberta() {
    const agora = new Date();
    const hora = agora.getHours();
    // Loja aberta das 10h às 23h
    if (hora >= 10 && hora < 23) {
        return 's';
    }
    return 'n';
}

// Função para finalizar pedido e redirecionar para checkout
function finalizarPedido() {
    if (carrinho.length === 0) {
        mostrarPopup('Erro', 'Seu carrinho está vazio');
        return;
    }

    // Por enquanto, vamos usar um checkout padrão
    // Você pode implementar uma lógica mais sofisticada aqui
    const checkoutBaseUrl = "https://pay.pagamentos.sa.com/checkout";

    // Adicionar parâmetros UTM à URL do checkout
    const checkoutUrlComUTM = adicionarParametrosUTM(checkoutBaseUrl);

    // Adicionar informações do carrinho como parâmetros
    const urlObj = new URL(checkoutUrlComUTM);
    urlObj.searchParams.set('carrinho', JSON.stringify(carrinho));
    urlObj.searchParams.set('total', $('#totalCarrinho').text().replace('R$ ', '').replace(',', '.'));

    // Redirecionar para o checkout
    window.location.href = urlObj.toString();
}
