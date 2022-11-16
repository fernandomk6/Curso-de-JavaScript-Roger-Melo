# Introdução ao firebase

## O que é um banco de dados?

É um local para armazenar dados.

### Quais tipos de dados podem ser armazenados em um banco de dados?

Qualquer tipo de dado.

## Por que persistir dados no backend ao invés do local storage?

LocalStorage persiste dados no navegador apenas. Se o usuário
usar a aplicação no computador, o local storage salva as informações no navegador
do computador. Caso o usuário acesse depois a sua aplicação usando o navegador
do celular dele, os dados não estarão salvos no navegador do celular, pois os dados
foram salvos no navegador do computador.

Os dados que precisarem ser acessados de multiplos dispositivos, você deve persistir os 
dados no backend.

Os dados que precisarem ser acessados apenas em um dispositivo específico, podem ser
armazenados no local storage.

## O que é o firebase?

Serviço de backend que tem o firestore como banco de dados noSQL.

Bancos noSQL usam dados que são "quase" a mesma coisa que objetos javascript.
Bancos SQL são menos flexíveis e usam schemas que nada tem haver com objetos javascript.

São filosofias diferentes. Quando estamos começando uma aplicação não
sabemos tudo o que aquele banco de dados precisará no futuro. Isso irá lhe dar mais 
liberdade na hora de modelar seu banco de dados.

O firebase não é a unica opção quando se trata de bancos de dados noSQL.

Por que o firebase?

Pela quantidade de serviço usado no plano free.
O firebase é um serviço de backend.

Frontend é a parte visual do aplicativo, tudo o que é executado no lado do cliente.
Backend é a parte não visual, os códigos são executados no servidor.

O firebase ofereçe um serviço de backend completo para a sua aplicação.
A vantagem disso é que você fica focado em construir o frontend.

O firebase é um serviço que só está disponível online. Ou seja, não é usado na máquina.

Firebase é um BaaS. Que significa Backend as a Service. Um serviço de backend.

### Quanto custa o firebase?

Para aplicações pequenas e médias é gratuito. O plano gratuíto tem alguns limites, caso
esse limite seja excedido, você pode fazer um upgrade para um plano pago, aonde você será cobrado
pelo que exceder o limite do plano gratuito.

## Vantagens e desvantagens

### Vantagens

- Economiza tempo
- Não precisa desenvolver backend do zero
- Upload de arquivos
- Segurança
- Seu banco de dados na nuvem
- Alta disponibilidade

### Desvantagem

- Personalização limitada
- Regras de negócios limitadas
- Autenticações limitadas
- Você se adequa ao firebase não ele a você

## Como um banco de dados noSQL funciona?

Um banco de dados noSQL tem a seguinte estrutura

- Primeiro existe uma instância do banco de dados
- Essa instancia é um container para todas as informações
- Dentro desse container podem haver vários collections
- Cada collection pode representar um tipo específico de informações
- Um collections comentários vai armazenar os comentários
- Podem existir vários collections em um banco de dados noSQL
- Dentro de cada collections pode haver multiplos documents
- Cada document qrepresenta uma unica gravação ads informações
- Um document no collection comentários, vai armazenar os dados de um comentário apenas
- Cada document tem um id único
- Cada document é um objeto muito parecido com os objetos javascript
- Ou seja os documents são estruturas de pares de chave e valor

Resumindo

-> Banco de dados (Instância do banco de dados que está na nuvem)
  -> Collection (comment)
    -> Document: { id: uniqueValue, key: value, ... } (comment data)
    -> Document: { id: uniqueValue, key: value, ... } (comment data)
    -> Document: { id: uniqueValue, key: value, ... } (comment data)
  -> Colection (post)
    -> Document: { id: uniqueValue, key: value, ... } (post data)
    -> Document: { id: uniqueValue, key: value, ... } (post data)
    -> Document: { id: uniqueValue, key: value, ... } (post data)
    -> Document: { id: uniqueValue, key: value, ... } (post data)

