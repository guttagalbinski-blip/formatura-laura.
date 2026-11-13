/* =========================================================
   Formatura · comportamento do site
   (não é necessário editar este arquivo — use config.js)
   ========================================================= */
(function () {
  "use strict";
  const C = window.SITE_CONFIG;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.documentElement.classList.add("js");

  const get = (path) => path.split(".").reduce((o, k) => (o ? o[k] : undefined), C);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const brl = (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: v % 1 ? 2 : 0, maximumFractionDigits: 2 });

  /* ---------- textos ---------- */
  $$("[data-bind]").forEach((el) => { const v = get(el.dataset.bind); if (v != null) el.textContent = v; });

  const nameParts = C.formanda.nome.trim().split(/\s+/);
  const nameHTML = `<span>${esc(nameParts[0])}</span><span>${esc(nameParts.slice(1).join(" "))}</span>`;
  $(".hero__name").innerHTML = nameHTML;
  $(".card__name").innerHTML = nameHTML;
  document.title = `${C.formanda.nome} · Formatura em ${C.formanda.curso}`;

  $("#inviteText").innerHTML = C.convite.texto.map((p) => `<p>${esc(p)}</p>`).join("");
  $("#mapsBtn").href = C.evento.mapsUrl;

  const rsvp = C.convite.rsvp;
  $("#rsvpLink").href = `https://wa.me/${rsvp.whatsapp}?text=${encodeURIComponent(rsvp.mensagem || "")}`;
  $("#rsvpLink").setAttribute("aria-label", `Confirmar presença pelo WhatsApp ${rsvp.telefone}`);

  /* ---------- moldura do convite (etiqueta recortada do Canva) ---------- */
  function framePath(x0, y0, x1, y1, r, bh, bw) {
    const cx = (x0 + x1) / 2, a = bw / 2;
    return `M${x0} ${y0 + bh + r} A${r} ${r} 0 0 0 ${x0 + r} ${y0 + bh}
      L${cx - a} ${y0 + bh} C${cx - a * 0.45} ${y0 + bh} ${cx - a * 0.42} ${y0} ${cx} ${y0}
      C${cx + a * 0.42} ${y0} ${cx + a * 0.45} ${y0 + bh} ${cx + a} ${y0 + bh}
      L${x1 - r} ${y0 + bh} A${r} ${r} 0 0 0 ${x1} ${y0 + bh + r}
      L${x1} ${y1 - bh - r} A${r} ${r} 0 0 0 ${x1 - r} ${y1 - bh}
      L${cx + a} ${y1 - bh} C${cx + a * 0.45} ${y1 - bh} ${cx + a * 0.42} ${y1} ${cx} ${y1}
      C${cx - a * 0.42} ${y1} ${cx - a * 0.45} ${y1 - bh} ${cx - a} ${y1 - bh}
      L${x0 + r} ${y1 - bh} A${r} ${r} 0 0 0 ${x0} ${y1 - bh - r} Z`;
  }
  const frame = $("#cardFrame");
  function drawFrame() {
    const w = frame.clientWidth, h = frame.clientHeight;
    if (!w) return;
    const t = Math.max(8, Math.min(12, w * 0.024));      // espessura da faixa ferrugem
    const r = Math.max(18, Math.min(30, w * 0.065));     // recorte dos cantos
    const bh = Math.max(22, Math.min(34, w * 0.075));    // altura do arco central
    const bw = Math.max(120, Math.min(200, w * 0.42));   // largura do arco central
    frame.setAttribute("viewBox", `0 0 ${w} ${h}`);
    frame.children[0].setAttribute("d", framePath(0, 0, w, h, r, bh, bw));
    frame.children[1].setAttribute("d", framePath(t, t, w - t, h - t, r, bh - t * 0.15, bw - t * 1.6));
  }
  new ResizeObserver(drawFrame).observe(frame);
  drawFrame();

  /* ---------- fotos ---------- */
  const setPhoto = (img, cfg) => { img.src = cfg.src; img.alt = cfg.alt; img.style.objectPosition = cfg.foco || "50% 30%"; };
  setPhoto($("#photoMain"), C.fotos.principal);
  setPhoto($("#photoSecond"), C.fotos.secundaria);
  $("#photoCaption").textContent = C.fotos.legenda;

  /* ---------- abertura (envelope) ---------- */
  const intro = $("#intro");
  let opened = false;
  function openInvite() {
    if (opened) return;
    opened = true;
    intro.classList.add("is-opening");
    setTimeout(() => intro.classList.add("is-leaving"), reduceMotion ? 0 : 700);
    const total = reduceMotion ? 50 : 2900;
    setTimeout(() => {
      intro.classList.add("is-gone");
      document.body.classList.remove("is-locked");
      document.body.classList.add("is-ready");
      window.scrollTo(0, 0);
    }, total);
    setTimeout(() => intro.remove(), total + 1200);
  }
  $("#openInvite").addEventListener("click", openInvite);
  $("#openInvite2").addEventListener("click", openInvite);
  // link direto para uma seção (ex.: .../#presentes) pula a abertura
  if (location.hash && $(location.hash)) {
    intro.remove(); opened = true;
    document.body.classList.remove("is-locked");
    document.body.classList.add("is-ready");
  }

  /* ---------- contagem regressiva ---------- */
  const target = new Date(C.evento.dataISO).getTime();
  const cd = { d: $('[data-cd="d"]'), h: $('[data-cd="h"]'), m: $('[data-cd="m"]'), s: $('[data-cd="s"]') };
  function tick() {
    let diff = Math.max(0, target - Date.now());
    if (diff === 0) { $("#countdown").innerHTML = `<p class="script" style="grid-column:1/-1;font-size:2.4rem;margin:0">é hoje!</p>`; return; }
    const d = Math.floor(diff / 864e5); diff -= d * 864e5;
    const h = Math.floor(diff / 36e5); diff -= h * 36e5;
    const m = Math.floor(diff / 6e4); diff -= m * 6e4;
    const s = Math.floor(diff / 1e3);
    cd.d.textContent = d; cd.h.textContent = String(h).padStart(2, "0");
    cd.m.textContent = String(m).padStart(2, "0"); cd.s.textContent = String(s).padStart(2, "0");
    setTimeout(tick, 1000);
  }
  if (!isNaN(target)) tick();

  /* ---------- salvar na agenda (.ics) ---------- */
  $("#icsBtn").addEventListener("click", () => {
    const start = new Date(C.evento.dataISO);
    const end = new Date(start.getTime() + (C.evento.duracaoHoras || 5) * 36e5);
    const f = (d) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Formatura//PT-BR", "BEGIN:VEVENT",
      `UID:${f(start)}-formatura@convite`, `DTSTAMP:${f(new Date())}`,
      `DTSTART:${f(start)}`, `DTEND:${f(end)}`,
      `SUMMARY:Formatura de ${C.formanda.nome} · ${C.formanda.curso}`,
      `LOCATION:${C.evento.local}\\, ${C.evento.endereco}\\, ${C.evento.cidade}`,
      `DESCRIPTION:${location.href.split("#")[0]}`,
      "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    a.download = "formatura.ics";
    document.body.appendChild(a); a.click(); a.remove();
  });

  /* ---------- lista de presentes ---------- */
  const ICONS = {
    estetoscopio: '<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v3a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/><path d="M5 3h2M13 3h2"/>',
    cafe: '<path d="M4 9h12v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z"/><path d="M16 11h1.5a2.5 2.5 0 0 1 0 5H16"/><path d="M8 3c-1 1 1 2 0 3M12 3c-1 1 1 2 0 3"/>',
    livro: '<path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5z"/>',
    aviao: '<path d="M10.5 13.5L3 11l1.5-1.5 8 .5 4-4.5c1-1 2.5-1.5 3.5-.5s.5 2.5-.5 3.5l-4.5 4 .5 8L13.5 21 11 13.5"/><path d="M7 17l-2 2"/>',
    jaleco: '<path d="M9 3l3 4 3-4"/><path d="M9 3L5 5l-1 15h5V9"/><path d="M15 3l4 2 1 15h-5V9"/><path d="M12 7v13"/><path d="M15.5 12h2"/>',
    flor: '<circle cx="12" cy="9" r="2"/><path d="M12 7c0-3 3-3 3-1s-1 3-3 3c2 0 3 1 3 3s-3 2-3-1c0 3-3 3-3 1s1-3 3-3c-2 0-3-1-3-3s3-2 3 1"/><path d="M12 13v8M12 18c-2-2-4-2-5-1M12 17c1.5-1.5 3.5-1.5 4.5-.5"/>',
    taca: '<path d="M7 3h10l-1 6a4 4 0 0 1-8 0z"/><path d="M12 13v7M8.5 20.5h7"/><path d="M7.5 6.5h9"/>',
    coracao: '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
    relogio: '<circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/>',
    maleta: '<rect x="3.5" y="7" width="17" height="12.5" rx="1.5"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/><path d="M12 10.5v5M9.5 13h5"/>',
    plantao: '<path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9z"/><path d="M16 4.5h3l-3 3h3"/>',
    estrela: '<path d="M12 3.5l2.4 5.2 5.6.6-4.2 3.8 1.2 5.6L12 15.9 7 18.7l1.2-5.6L4 9.3l5.6-.6z"/>',
  };
  const giftIcon = (k) => `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[k] || ICONS.flor}</svg>`;

  const list = $("#giftList");
  list.innerHTML = C.presentes.map((g, i) => {
    const free = g.livre || !g.valor;
    return `<li class="gift" style="--d:${(i % 3) * 0.12}s">
      <span class="gift__icon">${giftIcon(g.icone)}</span>
      <h3 class="gift__name">${esc(g.nome)}</h3>
      ${g.descricao ? `<p class="gift__desc">${esc(g.descricao)}</p>` : ""}
      <div class="gift__foot">
        ${free ? `<span class="gift__price is-free">valor livre</span>`
               : `<span class="gift__price"><small>R$</small>${brl(g.valor)}</span>`}
        <button class="btn btn--rust" type="button" data-gift="${i}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="9" width="17" height="11" rx="1"/><path d="M12 9v11M3.5 13h17"/><path d="M12 9c-2-4-6-4-6-2s3 2 6 2c3 0 6 0 6-2s-4-2-6 2z"/></svg>
          Presentear
        </button>
      </div>
    </li>`;
  }).join("");

  /* ---------- Pix: BR Code (Copia e Cola) ----------
     Padrão EMV/BACEN com valor fixo. Gerado no navegador. */
  const norm = (s, max) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^A-Za-z0-9 .\-]/g, "").toUpperCase().trim().slice(0, max);
  const tlv = (id, v) => id + String(v.length).padStart(2, "0") + v;
  function crc16(str) {
    let crc = 0xffff;
    for (let i = 0; i < str.length; i++) {
      crc ^= str.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) crc = crc & 0x8000 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
    }
    return crc.toString(16).toUpperCase().padStart(4, "0");
  }
  function brCode(valor) {
    const p = C.pix;
    let payload =
      tlv("00", "01") +
      tlv("26", tlv("00", "br.gov.bcb.pix") + tlv("01", p.chave.trim())) +
      tlv("52", "0000") + tlv("53", "986") +
      (valor > 0 ? tlv("54", valor.toFixed(2)) : "") +
      tlv("58", "BR") +
      tlv("59", norm(p.recebedor, 25) || "RECEBEDOR") +
      tlv("60", norm(p.cidade, 15) || "BRASIL") +
      tlv("62", tlv("05", "***")) +
      "6304";
    return payload + crc16(payload);
  }
  window.__brCode = brCode; // útil para testes

  /* ---------- modal ---------- */
  const modal = $("#pixModal");
  const sheet = $(".modal__sheet", modal);
  const keyPending = /AQUI|PROVIS|SUA-CHAVE/i.test(C.pix.chave);
  const namePending = /NOME DO RECEBEDOR/i.test(C.pix.recebedor);
  const isPlaceholder = keyPending || namePending;
  let lastFocus = null;

  function openModal(i) {
    const g = C.presentes[i];
    const free = g.livre || !g.valor;
    $("#pixTitle").textContent = g.nome;
    $("#pixValue").innerHTML = free ? "valor livre" : `<small>R$</small>${brl(g.valor)}`;
    $("#pixValue").style.fontSize = free ? "2rem" : "";
    $("#pixValueHint").textContent = free
      ? "Você escolhe quanto quer presentear."
      : "Digite este valor no app do seu banco.";
    $("#pixStepValue").textContent = free ? "que desejar" : `R$ ${brl(g.valor)}`;
    $("#pixReceiver").textContent = C.pix.recebedor + (C.pix.banco ? ` · ${C.pix.banco}` : "");
    const k = C.pix.chave.trim();
    $("#pixKey").textContent = /^\d{11}$/.test(k) ? k.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4") + " (CPF)" : k;
    $("#pixWarn").hidden = !isPlaceholder;
    $("#pixWarn").innerHTML = `⚠ ${keyPending ? "Chave Pix" : "Nome do recebedor"} provisório — configure em <code>config.js</code>.`;

    const box = $("#brcodeBox");
    box.hidden = !C.pix.copiaEColaAtivo;
    box.open = false;
    $("#bcSub").textContent = free ? "sem valor definido" : `com R$ ${brl(g.valor)} já preenchido`;
    $("#brcode").value = brCode(free ? 0 : g.valor);
    resetBtn($("#copyKeyBtn"), "Copiar chave Pix");
    resetBtn($("#copyCodeBtn"), "Copiar código Pix");

    lastFocus = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    sheet.scrollTop = 0;
    requestAnimationFrame(() => requestAnimationFrame(() => modal.classList.add("is-open")));
    setTimeout(() => $("#copyKeyBtn").focus({ preventScroll: true }), 350);
  }
  function closeModal() {
    if (modal.hidden) return;
    modal.classList.remove("is-open");
    document.body.style.overflow = "";
    setTimeout(() => { modal.hidden = true; lastFocus && lastFocus.focus({ preventScroll: true }); }, 500);
  }
  list.addEventListener("click", (e) => { const b = e.target.closest("[data-gift]"); if (b) openModal(+b.dataset.gift); });
  modal.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeModal(); });
  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") closeModal();
    if (e.key === "Tab") { // mantém o foco dentro da janela
      const f = $$("button, [href], textarea, summary", sheet).filter((el) => el.offsetParent !== null);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
      else if (!e.shiftKey && document.activeElement === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
    }
  });
  // arrastar para baixo fecha (celular)
  let y0 = null;
  sheet.addEventListener("touchstart", (e) => { y0 = sheet.scrollTop <= 0 ? e.touches[0].clientY : null; }, { passive: true });
  sheet.addEventListener("touchmove", (e) => {
    if (y0 == null) return;
    const dy = e.touches[0].clientY - y0;
    if (dy > 0) { sheet.style.transition = "none"; sheet.style.transform = `translateY(${dy}px)`; }
  }, { passive: true });
  sheet.addEventListener("touchend", (e) => {
    if (y0 == null) return;
    const dy = e.changedTouches[0].clientY - y0;
    sheet.style.transition = ""; sheet.style.transform = "";
    if (dy > 110) closeModal();
    y0 = null;
  });

  /* ---------- copiar (com alternativas) ---------- */
  async function copyText(text) {
    try {
      if (navigator.clipboard && window.isSecureContext) { await navigator.clipboard.writeText(text); return true; }
    } catch (_) { /* tenta a alternativa */ }
    try {
      const ta = document.createElement("textarea");
      ta.value = text; ta.setAttribute("readonly", "");
      ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;font-size:16px";
      document.body.appendChild(ta);
      ta.focus(); ta.select(); ta.setSelectionRange(0, text.length);
      const ok = document.execCommand("copy");
      ta.remove();
      return ok;
    } catch (_) { return false; }
  }
  function resetBtn(btn, label) { btn.classList.remove("is-done"); $("span", btn).textContent = label; }
  const CHECK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  let toastT;
  function toast(msg) {
    const t = $("#toast");
    t.innerHTML = CHECK + `<span>${esc(msg)}</span>`;
    t.classList.add("is-on");
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove("is-on"), 2600);
  }
  async function handleCopy(btn, text, okMsg, fallbackSel) {
    const ok = await copyText(text);
    if (ok) {
      btn.classList.add("is-done"); $("span", btn).textContent = okMsg;
      toast(okMsg);
      if (navigator.vibrate) navigator.vibrate(18);
    } else {
      // alternativa manual: seleciona o conteúdo para o convidado copiar
      const el = $(fallbackSel);
      if (el.tagName === "TEXTAREA") { el.focus(); el.select(); }
      else { const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); }
      toast("Selecionado — toque e segure para copiar");
    }
  }
  $("#copyKeyBtn").addEventListener("click", (e) => handleCopy(e.currentTarget, C.pix.chave.trim(), "Chave Pix copiada!", "#pixKey"));
  $("#copyCodeBtn").addEventListener("click", (e) => handleCopy(e.currentTarget, $("#brcode").value, "Código Pix copiado!", "#brcode"));

  /* ---------- micro-interação: brilho no toque ---------- */
  document.addEventListener("pointerdown", (e) => {
    const b = e.target.closest(".btn"); if (!b) return;
    const r = b.getBoundingClientRect();
    b.style.setProperty("--x", e.clientX - r.left + "px"); b.style.setProperty("--y", e.clientY - r.top + "px");
    b.classList.remove("is-rippling"); void b.offsetWidth; b.classList.add("is-rippling");
  });

  /* ---------- revelação na rolagem ---------- */
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      const el = en.target;
      el.classList.add("is-in"); io.unobserve(el);
      if (el.dataset.speed) setTimeout(() => { el.classList.add("is-par"); requestAnimationFrame(parallax); }, 1900);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  $$("[data-reveal], .gift, .ph").forEach((el) => io.observe(el));

  /* ---------- parallax suave ---------- */
  const par = $$("[data-speed]");
  let ticking = false;
  function parallax() {
    const vh = innerHeight;
    par.forEach((el) => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const center = r.top + r.height / 2 - vh / 2;
      if (el.dataset.reveal && !el.classList.contains("is-par")) return; // espera a entrada terminar
      el.style.translate = `0 ${(center * parseFloat(el.dataset.speed)).toFixed(1)}px`;
    });
    ticking = false;
  }
  if (!reduceMotion) {
    addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(parallax); } }, { passive: true });
    addEventListener("resize", parallax);
    parallax();
  }

  /* ---------- dock (navegação) ---------- */
  const dock = $("#dock");
  const links = $$("a", dock);
  const sections = links.map((a) => $(a.getAttribute("href")));
  addEventListener("scroll", () => {
    dock.classList.toggle("is-visible", scrollY > innerHeight * 0.6);
    let cur = -1;
    sections.forEach((s, i) => { if (s.getBoundingClientRect().top < innerHeight * 0.5) cur = i; });
    links.forEach((a, i) => a.classList.toggle("is-active", i === cur));
  }, { passive: true });
})();
