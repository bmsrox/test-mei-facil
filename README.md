### TESTE MEI FÁCIL

#### How to install

    docker-compose up -d

#### How to test

    yarn test

#### How to use (POSTMAN OR INSOMNIA)

POST http://localhost:5000

```
{
    "value": 400,
    "number_of_installment": 1,
    "account_origin": 1,
    "account_destiny": 2
}
```

#### Teste para desenvolvedor

Leia atentamente as instruções abaixo e responda as questões da melhor forma possível.

O teste será composto de três perguntas técnicas e uma avaliação prática.

Responda as perguntas com suas palavras, com o seu entendimento sobre o tema.

Publique o teste prático com as respostas em um arquivo readme em um repositório git-hub e envie o link para dev@meifacil.com.


Perguntas:

Explique com suas palavras o que é domain driven design e sua importância na estratégia de desenvolvimento de software.

    É uma abordagem para resolver problemas complexos no desenvolvimento de software. A importância desta estratégia facilita o entendimento durante o processo de desenvolvimento utilizando uma linguagem ubíqua entre todos os envolvidos.

Explique com suas palavras o que é e como funciona uma arquitetura baseada em microservices. explique ganhos com este modelo, desafios em sua implementação e desvantagens.

    Microservices é uma arquitetura para isolar responsabilidades do negócio, assim cada responsabilidade se comunica através de uma API via HTTP ou Mensageria e podem ser publicadas em produção de forma independente.

    Os ganhos: facilidade no desenvolvimento, escalabilidade de serviços mais requisitados, etc.
    Os desafios: Exige muito conhecimento sobre o negócio e gerenciamento dos serviços.
    As Desvantagens: Dificuldade de implantação, gerenciamento das informações, etc.

Explique qual a diferença entre processamento síncrono e assíncrono e qual o melhor cenário para utilizar um ou outro.

    Processamento síncrono: Há uma ordem a ser seguida, usado quando é necessário esperar a resposta de um outro processamento para continuar o fluxo.
    
    Processamento assíncrono: Não há a necessidade de esperar uma resposta de um outro processamento, sendo assim, o fluxo continua e o processamento executado de forma assíncrona recebe um callback quando for finalizado.
