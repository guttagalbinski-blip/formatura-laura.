/* =====================================================================
   ✿  CONFIGURAÇÃO DO SITE — EDITE AQUI  ✿
   ---------------------------------------------------------------------
   Tudo o que você precisa alterar está neste arquivo.
   • Textos entre aspas "..." podem ser trocados livremente.
   • Campos marcados com  ⚠ PROVISÓRIO  ainda precisam dos dados reais.
   • Depois de salvar, publique novamente na Vercel (ou só faça o push).
   ===================================================================== */

window.SITE_CONFIG = {

  /* ---------- FORMANDA ---------- */
  formanda: {
    nome: "Laura Berres Friedrich",      // nome completo (aparece em caligrafia)
    monograma: "LBF",                    // iniciais (usadas no rodapé)
    curso: "Medicina",
    ano: "2026",
  },

  /* ---------- EVENTO (dados do convite do Canva) ---------- */
  evento: {
    // Data/hora no formato ISO (usada na contagem regressiva e no "Salvar na agenda")
    dataISO: "2026-12-11T20:00:00-03:00",
    dataExtenso: "11 . dez . 26",        // como aparece na tela
    diaSemana: "sexta-feira",
    horario: "20h",
    local: "Villa Bento",
    endereco: "Rua Bento Gonçalves, 304",
    cidade: "Ijuí · RS",
    // Link do Google Maps. Pode colar aqui o link do botão "Compartilhar" do Maps.
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Villa+Bento+Rua+Bento+Gon%C3%A7alves+304+Iju%C3%AD+RS",
    duracaoHoras: 6,                     // usado apenas no arquivo de agenda (.ics)
  },

  /* ---------- CONVITE ---------- */
  convite: {
    chamada: "convida para a sua formatura",
    // Texto principal do convite (pode ter vários parágrafos)
    texto: [
      "Depois de anos de estudo, plantões e muita dedicação, chegou o momento de celebrar o início de um novo capítulo.",
      "Será uma alegria imensa ter você ao meu lado nesta noite tão especial.",
    ],
    assinatura: "Com carinho, Laura",
    rsvp: {
      telefone: "(51) 99628-3444",
      whatsapp: "5551996283444",         // só números, com 55 + DDD
      prazo: "até o dia 30.11",
      mensagem: "Olá! Confirmo minha presença na formatura da Laura 🎓",
    },
  },

  /* ---------- FOTOGRAFIAS ----------
     Coloque os arquivos na pasta /img e ajuste os nomes abaixo.
     "foco" define qual parte da foto fica visível quando ela é recortada
     (ex.: "50% 20%" = centro na horizontal, mais para o topo).          */
  fotos: {
    principal:  { src: "laura-jaleco.jpg", alt: "Laura de jaleco, sorrindo",            foco: "50% 30%" },
    secundaria: { src: "laura-beca.jpg",   alt: "Laura de beca segurando o canudo",     foco: "50% 25%" },
    legenda: "O jaleco, o juramento e um sonho que agora tem nome: doutora.",
  },

  /* ---------- PIX ----------
     ⚠ PROVISÓRIO — substitua pelos dados reais antes de publicar.
     • chave: CPF (só números), e-mail, telefone (+5551999999999) ou chave aleatória.
     • recebedor: nome do titular da conta, como aparece no banco.
     • cidade: cidade do titular (sem acentos, até 15 letras) — exigida pelo Pix Copia e Cola. */
  pix: {
    chave: "04802641044",                 // CPF (somente números)
    recebedor: "NOME DO RECEBEDOR",       // ⚠ PROVISÓRIO — nome do titular do CPF
    cidade: "IJUI",                       // ⚠ PROVISÓRIO (confirme)
    banco: "",                            // opcional, ex.: "Nubank" (só exibição)
    copiaEColaAtivo: true,                // false para esconder o Pix Copia e Cola
  },

  /* ---------- LISTA DE PRESENTES ----------
     Para adicionar: copie uma linha { ... }, cole abaixo e edite.
     Para remover: apague a linha inteira.
     valor: número em reais, sem "R$" (use ponto para centavos: 89.90)
     icone: "estetoscopio" | "cafe" | "livro" | "aviao" | "jaleco" | "flor" | "taca" | "coracao"
            | "relogio" | "maleta" | "plantao" | "estrela" | "carimbo" | "sushi" | "caneta" | "camisa" | "presente"
     aPartirDe: true → mostra "a partir de R$ X" e o convidado escolhe o valor
     livre: true     → valor livre
     fisico: true    → card sem botão de Pix (presente entregue pessoalmente)              */
  presentes: [
    { nome: "Café especial para os estudos",  descricao: "Para manter a doutora acordada às 3h da manhã.",          valor: 50,   icone: "cafe" },
    { nome: "Carimbo personalizado",          descricao: "Para as muitas receitas e atestados.",                     valor: 100,  icone: "carimbo" },
    { nome: "Spa pós-provas",                 descricao: "Uma massagem relaxante.",                                  valor: 150,  icone: "flor" },
    { nome: "Sushi para a formanda",          descricao: "Um mimo que amo muito.",                                valor: 200,  icone: "sushi" },
    { nome: "Caneta Swarovski",               descricao: "Para assinar muitas receitas e atestados.",                valor: 300,  icone: "caneta" },
    { nome: "Look de médica",                 descricao: "Uma camisa chique para atender.",                          valor: 350,  icone: "camisa" },
    { nome: "Jaleco novo com bordado",        descricao: "Agora com “Dra.” antes do nome.",                          valor: 500,  icone: "jaleco" },
    { nome: "Congresso médico",               descricao: "Me atualizar e aprender ainda mais sobre dermatologia.", valor: 1000, icone: "maleta" },
    { nome: "Viagem com a Nathi",             descricao: "Um sonho muito esperado.",                                 valor: 100,  icone: "aviao", aPartirDe: true },
    { nome: "Um abraço em forma de Pix",      descricao: "Qualquer carinho é muito bem-vindo.",                      valor: 0,    icone: "coracao", livre: true },
    { nome: "Presentes físicos também são bem-vindos", descricao: "Se preferir, você pode entregar o seu presente no dia da festa.", valor: 0, icone: "presente", fisico: true },
  ],

  /* ---------- DICAS: HOSPEDAGEM E BELEZA ----------
     whatsapp: só números, com 55 + DDD (ex.: "5555999999999"). Deixe "" se não tiver.
     mapa: link do Google Maps (pode colar o link de "Compartilhar" do Maps).        */
  dicas: {
    mensagemHotel: "Olá! Vou à formatura da Laura em Ijuí (11/12) e gostaria de informações sobre hospedagem.",
    mensagemSalao: "Olá! Vou a uma formatura em Ijuí no dia 11/12 e gostaria de agendar um horário.",
    hoteis: [
      { nome: "Hotel Ijuí",          endereco: "Rua David José Martins, 351 · Centro", whatsapp: "5555984150632", mapa: "https://www.google.com/maps/search/?api=1&query=Hotel+Iju%C3%AD+Rua+David+Jos%C3%A9+Martins+351+Iju%C3%AD" },
      { nome: "Hotel Vera Cruz",     endereco: "Rua 15 de Novembro, 234 · Centro",     whatsapp: "5555991344812", mapa: "https://www.google.com/maps/search/?api=1&query=Hotel+Vera+Cruz+Iju%C3%AD" },
      { nome: "Hotel Jardim Europa", endereco: "BR-285, km 457",                       whatsapp: "5555999320343", mapa: "https://www.google.com/maps/search/?api=1&query=Hotel+Jardim+Europa+Iju%C3%AD" },
      { nome: "Hotel 44",            endereco: "RS-342, km 119 · Distrito Industrial", whatsapp: "5555997010535", mapa: "https://www.google.com/maps/search/?api=1&query=Hotel+44+Iju%C3%AD" },
    ],
    saloes: [
      // ⚠ WhatsApp dos salões não encontrado em fontes oficiais — preencha quando tiver
      { nome: "Salles Coiffeur",               endereco: "Rua Floriano Peixoto, 529", whatsapp: "", mapa: "https://www.google.com/maps/search/?api=1&query=Salles+Coiffeur+Iju%C3%AD" },
      { nome: "Glória Beilfuss Beauty House",  endereco: "Centro",                     whatsapp: "", mapa: "https://www.google.com/maps/search/?api=1&query=Gl%C3%B3ria+Beilfuss+Beauty+House+Iju%C3%AD" },
      { nome: "Madamliê Beauty Center",        endereco: "Ijuí",                       whatsapp: "", mapa: "https://www.google.com/maps/search/?api=1&query=Madamli%C3%AA+Beauty+Center+Iju%C3%AD" },
    ],
  },

  /* ---------- RODAPÉ ---------- */
  rodape: {
    frase: "Obrigada por fazer parte desta história.",
  },
};
