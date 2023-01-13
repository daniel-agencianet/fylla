import { ConfigProps } from "../@types/config";

//
// Configurações do template
//

//
// obs: NÃO utilize hífen no nome da pasta ex: (cliente-ftp)
//

const clienteFTP = "question"; // nome da pasta no FTP que ficarão os arquivos

//
// Configurações de contato
//

const telefones = [
  { numero: "(54) 3292.4595", tipo: "Comercial", icon: "fa fa-phone" },
  { numero: "(54) 99916.9136", tipo: "WhatsApp", icon: "fab fa-whatsapp" },
];

const emails = [{ endereco: "contato@agencianet.net.br", icon: "fa fa-envelope" }];

const endereco = "Rua Raimundo Montanari, 1534 Sala 35 - Centro Flores da Cunha - RS";

const atendimento = "Seg - Sex 07:45h-11:45h e 13:15h-18:00h";

// propriedade float: adiciona o botão flutuante na página
const sociais = [
  { nome: "Facebook", icon: "fab fa-facebook-f", color: "#4470cf", float: true },
  { nome: "Instagram", icon: "fab fa-instagram", color: "#d53581", float: false },
  { nome: "Twitter", icon: "fab fa-twitter", color: "#5daed5", float: false },
];

const [latitude, longitude] = [-29.02972277940848, -51.18374504013255];

//
// Configurações do banner na Home
//

const slides = [
  {
    titulo: "Banner 1 - Título",
    subtitulo: "Bem-vindo",
    texto:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum fuga non sint culpa molestias consequatur doloribus.",
    url: `banner-1.jpg`,
  },
  {
    titulo: "Banner 2 - Título",
    subtitulo: "Bem-vindo",
    texto:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum fuga non sint culpa molestias consequatur doloribus.",
    url: `banner-2.jpg`,
  },
  {
    titulo: "Banner 3 - Título",
    subtitulo: "Bem-vindo",
    texto:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum fuga non sint culpa molestias consequatur doloribus.",
    url: `banner-3.jpg`,
  },
];

//
// Configurações do menu
//

const menu = "Serviços"; // Define o nome usado para o menu principal

const produtos = [
  { nome: "Websites Profissionais", src: `menu/1.jpg` },
  { nome: "Revendas Multimarcas", src: `menu/2.jpg` },
  { nome: "Mídias Sociais", src: `menu/3.jpg` },
  { nome: "E-mail Marketing", src: `menu/4.jpg` },
  { nome: "Hospedagem", src: `menu/5.jpg` },
  { nome: "Registro de Domínio", src: `menu/6.jpg` },
  // {
  //   nome: "Submenu Teste",
  //   src: `menu/1.jpg`,
  //   submenu: [{ nome: "Submenu I" }, { nome: "Submenu II" }, { nome: "Submenu III" }],
  // },
];

//
// Configurações gerais
//

const cliente = "Orbito"; // Auto explicativo

const sobre =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti molestiae ea omnis similique ut commodi magni sit officiis provident, nam in ipsum quas doloribus unde, ratione eligendi veniam nostrum modi aut alias eos debitis quis expedita. Inventore cupiditate, voluptate accusamus earum eaque fuga iure repellat minima veniam cum et iusto.";

const breadcrumb_opacity = 0.48; // Define a opacidade de fundo da imagem do breadcrumb

const swiper_opacity = 0; // Define a opacidade do overlay do swiper na home

const newsletter = true; // habilita a section newsletter (false para remover)

const clientes = true; // habilita a section clientes (false para remover)

const galeria = true; // habilita a galeria na home (false para remover)

const logoSize = "166"; // largura do logo

const modal = ""; // habilita a visualização do modal ("show" para habilitar)

const header = "white"; // define qual header será utilizado ("transparent" ou "white")

const shapes = true; // habilita shapes no slider da home e breadcrumb (false para remover)

const sliderMainTipo = 1; // define qual o tipo do slider a ser utilizado (1 ou 2)

//
// Atenção: Alterar tbm no arquivo "template.config.scss"
//

export const navbarBreakpoint = "lg"; // ("md" ou "lg")

//
//
//
//
//
//
//
//
//
//
// Aviso:
// Favor não alterar as configurações abaixo!

const contato = { telefones, sociais, emails, endereco, atendimento };
const coordenadas = [latitude, longitude];
const props: ConfigProps = {
  slides,
  sobre,
  breadcrumb_opacity,
  contato,
  coordenadas,
  cliente,
  menu,
  newsletter,
  produtos,
  clientes,
  galeria,
  swiper_opacity,
  logoSize,
  navbarBreakpoint,
  modal,
  header,
  shapes,
  sliderMainTipo,
};

export { clienteFTP, props };
