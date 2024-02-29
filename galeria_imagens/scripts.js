$(document).ready(function(){

    const baseImagens = {
        todes:[ 'cidade.jpg','animal.jpg', 'natureza.jpg'],
        animais:['animal.jpg', 'animal1.jpg','animal2.jpeg', 'animal3.jpg'],
        natureza:['natureza.jpg', 'natureza1.jpg','natureza2.jpg', 'natureza3.jpg'],
        cidade:['cidade.jpg', 'cidade1.jpg','cidade2.jpg', 'cidade3.jpg']
    }

    function carregaImagens(categoria){
       const imagens = baseImagens[categoria];
       const boxImagens = $('body').find('.box-imagens');
       boxImagens.empty();
       imagens.forEach(img => {
        console.log(img);
        boxImagens.append('<div class="imagem-item"><img src="img/' +img+ '" alt="' +img+ '"/></div>');
       });
    }

    $('.botao-categoria').click(function(){
        $('body').find('.botao-categoria').removeClass('active');
        $(this).addClass('active');
        const categoria = $(this).data('categoria');
        carregaImagens(categoria);
    });
    function sortImages(sort){
        const imagens = $('.box-imagens .imagem-item')
        imagens.sort(function(a,b){
            const imagemA = $(a).find('img').attr('alt');
            const imagemB = $(b).find('img').attr('alt');
                if (sort == 'asc'){
            return imagemA.localeCompare(imagemB);
                }
                else{
            return imagemB.localeCompare(imagemA);
                }
        });

        $('body').find('.box-imagens').append(imagens);
    }

    $('body').on('click','.botao-ordenar', function (){
        const sort = $(this).data('sort');
        sortImages(sort);
    });

});