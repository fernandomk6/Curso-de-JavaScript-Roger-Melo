# Status de resposta HTTP

Verificar se a requisição está pronta apenas pelo status
do request `request.readyState` não é o suficiente,

Por que mesmo que a resposta não seja a esperada, a requisição
cumprirá todos os seus passos, e chegará no status 4, que é 
o status que diz que a requisição cumpriu todos os processos.
Porém, isso garante apenas que a requisição foi concluída
e não que os dados foram obtidos conforme esperado.


## Verificando o status da requisição

Para ter certeza que os dados só serão usados quando forem
obtidos con sucesso, devemos verificar o status da requisição 
com a propriedade `request.status`. Caso `request.status` armazene 200,
significa que os dados forão obtidos conforme esperado.

O status 404 indica que o servidor não encontrou o que foi solicitado.

### Lista dos tipos de status agrupados

Description | Status range |
--- | ---
Informational responses | 100 – 199
Successful responses | 200 – 299
Redirection messages  |300 – 399
Client error responses | 400 – 499
Server error responses | 500 – 599
