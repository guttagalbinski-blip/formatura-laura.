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
     icone: "estetoscopio" | "cafe" | "livro" | "aviao" | "jaleco" | "flor"
            | "taca" | "coracao" | "relogio" | "maleta" | "plantao" | "estrela" */
  presentes: [
    { nome: "Café para o primeiro plantão",        descricao: "Para manter a doutora acordada às 3h da manhã.",   valor: 50,   icone: "cafe" },
    { nome: "Kit sobrevivência de plantão",         descricao: "Lanchinhos, meia de compressão e paciência.",     valor: 120,  icone: "plantao" },
    { nome: "Jantar de comemoração",               descricao: "Um brinde a todos os anos de estudo.",            valor: 180,  icone: "taca" },
    { nome: "Jaleco novo com bordado",             descricao: "Agora com “Dra.” antes do nome.",                 valor: 250,  icone: "jaleco" },
    { nome: "Livros para a residência",            descricao: "Porque o estudo nunca termina.",                  valor: 300,  icone: "livro" },
    { nome: "Dia de spa pós-provas",               descricao: "Descanso merecido depois da maratona.",           valor: 350,  icone: "flor" },
    { nome: "Inscrição na prova de residência",    descricao: "O próximo grande passo.",                         valor: 450,  icone: "estrela" },
    { nome: "Estetoscópio dos sonhos",             descricao: "O companheiro inseparável da nova médica.",       valor: 800,  icone: "estetoscopio" },
    { nome: "Primeiro congresso médico",           descricao: "Aprender, conhecer gente e voltar inspirada.",    valor: 1000, icone: "maleta" },
    { nome: "Viagem de formatura",                 descricao: "Uma pausa antes de começar a nova fase.",         valor: 1500, icone: "aviao" },
    { nome: "Um abraço em forma de Pix",           descricao: "Qualquer carinho é muito bem-vindo.",             valor: 0,    icone: "coracao", livre: true },
  ],

  /* ---------- RODAPÉ ---------- */
  rodape: {
    frase: "Obrigada por fazer parte desta história.",
  },
};
