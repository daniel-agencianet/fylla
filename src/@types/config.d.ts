type Telefone = {
  numero: string;
  tipo: string;
  icon: string;
};

type Email = {
  endereco: string;
  icon: string;
};

type Social = {
  nome: string;
  icon: string;
  color: string;
  float: boolean;
};

type Slide = {
  titulo: string;
  subtitulo: string;
  url: string;
};

type Produto = {
  nome: string;
  src: string;
  submenu?: { nome: string }[];
};

type Contato = {
  telefones: Telefone[];
  sociais: Social[];
  emails: Email[];
  endereco: string;
  atendimento: string;
};

export interface ConfigProps {
  slides: Slide[];
  sobre: string;
  breadcrumb_opacity: number;
  contato: Contato;
  coordenadas: number[];
  cliente: string;
  menu: string;
  newsletter: boolean;
  produtos: Produto[];
  clientes: boolean;
  galeria: boolean;
  swiper_opacity: number;
  logoSize: string;
  navbarBreakpoint: "md" | "lg";
  modal: "" | "show";
  header: "transparent" | "white";
  shapes: boolean;
  sliderMainTipo: 1 | 2;
}
