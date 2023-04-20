<div align="center"><img src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*WJ9DEdlUwhJSALwjpQItdg.png"/></div>

English version : <a href="https://olavomello.medium.com/creating-a-google-chrome-extension-using-html-css-javascript-d39d65b7d790" target="_blank">Medium</a>

# TabNews Reader - Google Chrome Extension

Como gosto sempre de acompanhar as novidades no TabNews, resolvi criar uma <b>Extensão para o Chrome</b> para facilitar meu dia a dia.

Uma extensão pode ser útil para vários projetos e situações específicas, por isso resolvi disponibilizar a você para que entenda um pouco mais como uma extensão para o Google Chrome pode ser útil e simples de ser implementada. Além disto você que provavelmente é leitor assíduo do TabNews, terá uma forma fácil de acompanhar os artigos.

Sinta-se a vontade para enviar seus PR e melhor a implementação desse pequeno projeto. Abaixo descrevo um pouco mais como ele é e alguns desafios para implementá-lo.

## TabNews Reader

Leitor RSS do TabNews com função de listagem de artigos recentes e opção <b>Dark Mode</b> ativa de acordo com a seleção padrão do usuário.

## Desafios

Logicamente este não é um projeto oficial TabNews, sendo assim o acesso ao rss é bloqueado via CORS. Para contornar a leitura dos dados utilizei um Proxy free de roteamento que basicamente carrega os dados e devolve para a aplicação.

## Usage

Acesse no Google Chrome
 - Mais Ferramentas;
 - Extensões;
 - Ative o "Modo do desenvolvedor" no topo direito;
 - Botão "Carregar sem compactação" topo esquerdo;
 
 Pronto. A extensão TabNews Reader estará instada em seu navegador. Basta acessá-la junto as outras extensões.

## Google Chrome Store

É possível compactar e enviar a extensão para a Chrome Store, porém a um custo único para desenvolvedores de extensões. Como não é o meu caso,
não subirei para a store ( por enquanto ) ;)

Para quem quiser saber mais sobre como subir sua extensão para a Google Chrome Store:
https://developer.chrome.com/docs/webstore/register/

## Finalizando

Bom é isso ai. Espero este material seja útil a você e em seus projetos.
<br>Me siga no <a href="https://www.linkedin.com/in/olavo-mello/" target="_blank">Linkedin</a> e fique por dentro de muitas coisas mais pela frente 🚀