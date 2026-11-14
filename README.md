/* =====================================================================
   ✿  CONFIGURAÇÃO DO SITE — EDITE AQUI  ✿
   ===================================================================== */

window.SITE_CONFIG = {

  formanda: {
    nome: "Laura Berres Friedrich",
    monograma: "LBF",
    curso: "Medicina",
    ano: "2026",
  },

  evento: {
    dataISO: "2026-12-11T20:00:00-03:00",
    dataExtenso: "11 . dez . 26",
    diaSemana: "sexta-feira",
    horario: "20h",
    local: "Villa Bento",
    endereco: "Rua Bento Gonçalves, 304",
    cidade: "Ijuí · RS",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Villa+Bento+Rua+Bento+Gon%C3%A7alves+304+Iju%C3%AD+RS",
    duracaoHoras: 6,
  },

  convite: {
    chamada: "convida para a sua formatura",
    texto: [
      "Depois de anos de estudo, plantões e muita dedicação, chegou o momento de celebrar o início de um novo capítulo.",
      "Será uma alegria imensa ter você ao meu lado nesta noite tão especial.",
    ],
    assinatura: "Com carinho, Laura",
    rsvp: {
      telefone: "(51) 99628-3444",
      whatsapp: "5551996283444",
      prazo: "até o dia 30.11",
      mensagem: "Olá! Confirmo minha presença na formatura da Laura 🎓",
    },
  },

  fotos: {
    principal:  { src: "laura-jaleco.jpg", alt: "Laura de jaleco, sorrindo",        foco: "50% 30%" },
    secundaria: { src: "laura-beca.jpg",   alt: "Laura de beca segurando o canudo", foco: "50% 25%" },
    legenda: "O jaleco, o juramento e um sonho que agora tem nome: doutora.",
  },

  pix: {
    chave: "04802641044",
    recebedor: "NOME DO RECEBEDOR",
    cidade: "IJUI",
    banco: "",
    copiaEColaAtivo: true,
  },

  presentes: [
    { nome: "Café especial para os estudos", descricao: "Para manter a doutora acordada às 3h da manhã.", valor: 100, icone: "cafe" },
    { nome: "Carimbo personalizado", descricao: "Para as muitas receitas e atestados.", valor: 100, icone: "carimbo" },
    { nome: "Spa pós-provas", descricao: "Uma massagem relaxante.", valor: 150, icone: "flor" },
    { nome: "Sushi para a formanda", descricao: "Um mimo que amo muito.", valor: 200, icone: "sushi" },
    { nome: "Viagem com a Nathi", descricao: "Um sonho muito esperado.", valor: 250, icone: "aviao" },
    { nome: "Caneta Swarovski", descricao: "Para assinar muitas receitas e atestados.", valor: 300, icone: "caneta" },
    { nome: "Look de médica", descricao: "Uma camisa chique para atender.", valor: 350, icone: "camisa" },
    { nome: "Jaleco novo com bordado", descricao: "Agora com “Dra.” antes do nome.", valor: 500, icone: "jaleco" },
    { nome: "Congresso médico", descricao: "Me atualizar e aprender ainda mais sobre dermatologia.", valor: 1000, icone: "maleta" },
    { nome: "Um abraço em forma de Pix", descricao: "Você escolhe o valor. Qualquer carinho é muito bem-vindo.", valor: 0, icone: "coracao", livre: true },
    { nome: "Presentes físicos também são bem-vindos", descricao: "Se preferir, você pode entregar o seu presente no dia da festa.", valor: 0, icone: "presente", fisico: true },
  ],

  dicas: {
    mensagemHotel: "Olá! Vou à formatura da Laura em Ijuí (11/12) e gostaria de informações sobre hospedagem.",
    mensagemSalao: "Olá! Vou a uma formatura em Ijuí no dia 11/12 e gostaria de agendar um horário.",
    hoteis: [
      { nome: "Hotel Ijuí", endereco: "Rua David José Martins, 351 · Centro", whatsapp: "5555984150632", mapa: "https://www.google.com/maps/search/?api=1&query=Hotel+Iju%C3%AD+Rua+David+Jos%C3%A9+Martins+351+Iju%C3%AD" },
      { nome: "Hotel Vera Cruz", endereco: "Rua 15 de Novembro, 234 · Centro", whatsapp: "5555991344812", mapa: "https://www.google.com/maps/search/?api=1&query=Hotel+Vera+Cruz+Iju%C3%AD" },
      { nome: "Hotel Jardim Europa", endereco: "BR-285, km 457", whatsapp: "5555999320343", mapa: "https://www.google.com/maps/search/?api=1&query=Hotel+Jardim+Europa+Iju%C3%AD" },
      { nome: "Hotel 44", endereco: "RS-342, km 119 · Distrito Industrial", whatsapp: "5555997010535", mapa: "https://www.google.com/maps/search/?api=1&query=Hotel+44+Iju%C3%AD" },
    ],
    saloes: [
      { nome: "Jessica Schirmer Espaço de Beleza", endereco: "Ijuí", whatsapp: "", perfil: "https://www.facebook.com/schirmerespacobelezaijui/", perfilNome: "Facebook", mapa: "https://www.google.com/maps/search/?api=1&query=Jessica+Schirmer+Espa%C3%A7o+de+Beleza+Iju%C3%AD" },
      { nome: "Glória Beilfuss Beauty House", endereco: "Centro", whatsapp: "", perfil: "https://www.facebook.com/gloriabeilfuss/", perfilNome: "Facebook", mapa: "https://www.google.com/maps/search/?api=1&query=Gl%C3%B3ria+Beilfuss+Beauty+House+Iju%C3%AD" },
      { nome: "Bellame Beauty Center", endereco: "Rua das Chácaras, 765", whatsapp: "5555996815586", perfil: "", perfilNome: "", mapa: "https://www.google.com/maps/search/?api=1&query=Bellame+Beauty+Center+Iju%C3%AD" },
      { nome: "Madamliê Beauty Center", endereco: "Ijuí", whatsapp: "", perfil: "https://www.madamlie.com.br/", perfilNome: "Site", mapa: "https://www.google.com/maps/search/?api=1&query=Madamli%C3%AA+Beauty+Center+Iju%C3%AD" },
      { nome: "Ópera Cabelo", endereco: "Ijuí", whatsapp: "", perfil: "https://www.instagram.com/operacabelo/", perfilNome: "Instagram", mapa: "https://www.google.com/maps/search/?api=1&query=%C3%93pera+Cabelo+Iju%C3%AD" },
    ],
  },

  rodape: {
    frase: "Obrigada por fazer parte desta história.",
  },
};
