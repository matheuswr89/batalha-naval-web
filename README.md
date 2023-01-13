<!-- Improved compatibility of Voltar para o início link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/matheuswr89/batalha-naval-web">
    <h3 align="center">Batalha Naval Web
  </a>
</h3>

  <p align="center">
    Batalha Naval Web
    <br />
    <br />
    <br />
    <a href="https://github.com/matheuswr89/batalha-naval-web/issues">Report Bug</a>
    ·
    <a href="https://github.com/matheuswr89/batalha-naval-web/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre o Projeto</a>
      <ul>
        <li><a href="#tecnologias-utilizadas">Tecnologias utilizadas</a></li>
      </ul>
    </li>
    <li>
      <a href="#configuração">Configuração</a>
      <ul>
        <li><a href="#pré-requisitos">Pré-requisitos</a></li>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#uso">Uso</a></li>
    <!-- <li><a href="#contact">Contato</a></li> -->
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## Sobre o Projeto

Projeto desenvolvido como trabalho prático para a disciplina _SISTEMAS DISTRIBUIDOS_, do curso superior de _SISTEMAS PARA INTERNET_ do _IF SUDESTE MG - Campus Barbacena_, pelos alunos:

- [Lucas Rodrigues De Matos](https://github.com/LucasMtss)
- [Mateus Do Nascimento Galdino](https://github.com/MateusGhaldino)
- [Matheus William Ramos De Almeida](https://github.com/matheuswr89)
- [Otávio Augusto Leite](https://github.com/OtavioAL)
- [Samuel César De Macedo Siqueira](https://github.com/samuelcms)

O objetivo do projeto é desenvolver um jogo de Batalha Naval com interface gráfica, onde duas pessoas poderão jogar via rede.

<p align="right">(<a href="#readme-top">Voltar para o início</a>)</p>

### Tecnologias utilizadas

- [React](https://pt-br.reactjs.org/)
- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

<p align="right">(<a href="#readme-top">Voltar para o início</a>)</p>

<!-- GETTING STARTED -->

## Configuração

### Pré-requisitos

- [NodeJS](https://nodejs.org/en/download/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)

### Instalação

1. Clone o respositório web
   ```sh
   git clone https://github.com/matheuswr89/batalha-naval-web.git
   ```
2. Baixe as dependencias com o comando

   ```sh
   yarn
   ```

   ou

   ```sh
   npm install
   ```

3. Clone o respositório contendo o servidor

   ```sh
   git clone https://github.com/LucasMtss/API-batalha-naval.git
   ```

4. Instale as bibliotecas com o comando
   ```sh
   pip install flask-pyMongo bson flask flask-socketio requests Flask-Cors
   ```

<p align="right">(<a href="#readme-top">Voltar para o início</a>)</p>

<!-- USAGE -->

## Uso

Para iniciar a aplicação web:

1. Execute um dos comandos abaixo

   ```sh
   npm start
   ```

   ou

   ```sh
   yarn start
   ```

2. Navegue até [http://localhost:3000](http://localhost:3000)

Para iniciar o servidor:

1. Primeiro o comando abaixo em um terminal

   ```sh
   py servidorSocket.py
   ```

2. Depois abra outro terminal e execute o comando abaixo

   ```sh
   py api.py
   ```

<p align="right">(<a href="#readme-top">Voltar para o início</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/matheuswr89/batalha-naval-web.svg?style=for-the-badge
[contributors-url]: https://github.com/matheuswr89/batalha-naval-web/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/matheuswr89/batalha-naval-web.svg?style=for-the-badge
[forks-url]: https://github.com/matheuswr89/batalha-naval-web/network/members
[stars-shield]: https://img.shields.io/github/stars/matheuswr89/batalha-naval-web.svg?style=for-the-badge
[stars-url]: https://github.com/matheuswr89/batalha-naval-web/stargazers
[issues-shield]: https://img.shields.io/github/issues/matheuswr89/batalha-naval-web.svg?style=for-the-badge
[issues-url]: https://github.com/matheuswr89/batalha-naval-web/issues
[license-shield]: https://img.shields.io/github/license/matheuswr89/batalha-naval-web.svg?style=for-the-badge
[license-url]: https://github.com/matheuswr89/batalha-naval-web/blob/master/LICENSE.txt
