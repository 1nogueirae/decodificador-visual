# GT06 Web Parser - V1 (Client-Side)

## 📌 Sobre o Projeto

Este projeto é a Versão 1 (V1) de um decodificador para o protocolo de comunicação de rastreadores veiculares **GT06**.

O objetivo desta etapa inicial foi desenvolver a lógica core de parsing do protocolo diretamente no client-side (navegador), permitindo que logs hexadecimais brutos enviados pelo hardware sejam traduzidos em informações legíveis (como Latitude, Longitude, Ignição e Data/Hora) através de uma interface simples.

## 🚀 Funcionalidades

- **Decodificação Hexadecimal**: Recebe pacotes de dados brutos (ex: `78 78 0A 13...`) e realiza o parse estruturado.
- **Extração de Coordenadas**: Conversão de dados hexadecimais para valores de geolocalização (Lat/Lng).
- **Validação de Pacotes**: Checagem de cabeçalho e integridade básica do protocolo GT06.
- **Interface Rápida**: Tela desenvolvida com HTML/CSS (Bootstrap) para testes rápidos de logs.

## 🛠️ Tecnologias Utilizadas

- **TypeScript / JavaScript**: Responsável por toda a regra de negócio matemática (conversões de base, manipulação de strings e arrays de bytes).
- **HTML5 & CSS3 (Bootstrap)**: Estruturação de uma interface limpa e responsiva para inserção dos dados de teste.

## 🗺️ Roadmap e Próximos Passos (V2 - Full Backend)

Como os rastreadores físicos operam via rede (TCP/UDP) enviando pacotes diretamente para IPs/Portas, a arquitetura ideal de processamento não ocorre no navegador.

Por isso, o desenvolvimento lógico construído nesta V1 servirá como base para a Versão 2, que terá uma arquitetura orientada a serviços:

- [ ] Migração da lógica de Parser para Node.js.
- [ ] Criação de uma API REST com Express para recepção dos pacotes simulados.
- [ ] Integração com MySQL (via Sequelize ORM) para armazenamento dos logs decodificados.
- [ ] Documentação da API com OpenAPI/Swagger.

## 👨‍💻 Autor

Emanuel Nogueira
