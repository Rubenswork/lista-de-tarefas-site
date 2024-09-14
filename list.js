function Adicionar() {
    var text = document.querySelector('input#texto').value;
    
    if (text.trim() !== "") {
        var tarefas = document.createElement('div');
        tarefas.classList.add('tarefa');
        
        var imagem = document.createElement('img');
        imagem.src = 'botao.png';
        
        var completar = document.createElement('button');
        completar.onclick = function() {
            var p = tarefas.querySelector('p');
            p.classList.toggle('riscado'); // Alterna a classe 'riscado'
            if (imagem.src.includes('ok.png')) {
                imagem.src = 'botao.png';
            } else {
                imagem.src = 'ok.png';
            }
        };
        
       
        
        var novaTarefa = document.createElement('p');
        novaTarefa.textContent = text;
        
        
        var imagem2 = document.createElement('img')
        imagem2.src='remover.png'
        var remover = document.createElement('button');
        remover.onclick = function() {
            tarefas.remove();
        };
        
        remover.appendChild(imagem2)
        completar.appendChild(imagem);        
        tarefas.appendChild(novaTarefa);
        tarefas.appendChild(completar);
        tarefas.appendChild(remover);
        
        document.querySelector('div#container').appendChild(tarefas);
    }
}