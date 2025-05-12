// Games data
const gamesData = [
  {
    title: "Doors but classic",
    image: "https://tr.rbxcdn.com/6847aac179e04d8dc44e9647a28410ec/768/432/Image/Png",
    url: "https://www.roblox.com/games/100924853968864/Doors-but-classic",
  },
  {
    title: "Retro Menu - Explore and Play (WORKING)",
    image: "https://tr.rbxcdn.com/1e7a4549a461c36ee1116d3ee4f82ae4/768/432/Image/Png",
    url: "https://www.roblox.com/games/133671644438595/Retro-Menu-Explore-and-Play-WORKING",
  },
  {
    title: "Each Server Has an Owner",
    image: "https://tr.rbxcdn.com/41f6a2bba3c3cf0a0a034f8656807231/768/432/Image/Png",
    url: "https://www.roblox.com/games/74283855134306/each-server-has-an-owner",
  }
];

// Translations dictionary including new pages rules & privacy
const translations = {
  en: {
    header: "Bacons Gamez",
    tabs: { games: "Games", about: "About Us", talk: "Talk to Us", rules: "Rules", privacy: "Privacy", settings: "Settings" },
    aboutText: "I started creating games so that people could have fun. We began making games in 2022. At first, our games didn’t get much attention, so we created even more games to improve and grow. Our passion drives us to keep making engaging experiences for everyone to enjoy!",
    talkHeader: "Tell us what you want.",
    labelReason: "Choose a Reason",
    reasonOptions: { buy: "Buy a game", feedback: "Feedback", bug: "Bug" },
    labelComments: "Comments",
    sendButton: "Send",
    disclaimerText: "After publishing the message, you agree with the rules.",
    rulesTitle: "Rules",
    rulesList: [
      "No exploits of any kind are allowed here.",
      "No messages breaking Roblox rules or violating them.",
      "No spam is permitted here.",
      "We do not accept people who turn our games into pay-to-win or break the game, or who cannot build, make UIs, or write code properly.",
      "Follow all Roblox rules."
    ],
    privacyTitle: "Privacy Policy",
    privacyContent: [
      "We will never publish, share, or sell your data, passwords, or any personal information on the Internet.",
      "Our commitment to your privacy is absolute. All submitted information is treated with the utmost confidentiality.",
      "We do not store your data beyond what is necessary to send your message, and that is handled securely.",
      "Your trust is important to us, and we strictly adhere to privacy best practices to keep your information safe.",
      "If you have any concerns or questions about your privacy, please feel free to contact us."
    ],
    settings: {
      themeLabel: "Theme Mode:",
      themeDark: "Dark Mode",
      themeLight: "Light Mode",
      themeSystem: "System",
      languageLabel: "Language:",
      languageEnglish: "English",
      languageSpanish: "Spanish",
      languagePortuguese: "Portuguese"
    },
    alerts: {
      selectReason: "Please select a reason.",
      enterComments: "Please enter comments."
    }
  },
  es: {
    header: "Bacons Gamez",
    tabs: { games: "Juegos", about: "Sobre Nosotros", talk: "Contáctanos", rules: "Reglas", privacy: "Privacidad", settings: "Configuración" },
    aboutText: "Comencé a crear juegos para que la gente pudiera divertirse. Empezamos a hacer juegos en 2022. Al principio, nuestros juegos no tuvieron mucha atención, así que creamos aún más juegos para mejorar y crecer. ¡Nuestra pasión nos impulsa a seguir creando experiencias atractivas para que todos disfruten!",
    talkHeader: "Dinos lo que quieres.",
    labelReason: "Elige una razón",
    reasonOptions: { buy: "Comprar un juego", feedback: "Comentarios", bug: "Error" },
    labelComments: "Comentarios",
    sendButton: "Enviar",
    disclaimerText: "Después de publicar el mensaje, aceptas las reglas.",
    rulesTitle: "Reglas",
    rulesList: [
      "No se permiten exploits de ningún tipo aquí.",
      "No se permiten mensajes que rompan o violen las reglas de Roblox.",
      "No se permite spam aquí.",
      "No aceptamos personas que conviertan nuestros juegos en pay-to-win o rompan el juego, o que no puedan construir, hacer interfaces o escribir código correctamente.",
      "Sigue todas las reglas de Roblox."
    ],
    privacyTitle: "Política de Privacidad",
    privacyContent: [
      "Nunca publicaremos, compartiremos o venderemos tus datos, contraseñas o cualquier información personal en Internet.",
      "Nuestro compromiso con tu privacidad es absoluto. Toda la información enviada se trata con la máxima confidencialidad.",
      "No almacenamos tus datos más allá de lo necesario para enviar tu mensaje, y eso se maneja de forma segura.",
      "Tu confianza es importante para nosotros, y seguimos estrictamente las mejores prácticas de privacidad para mantener tu información segura.",
      "Si tienes alguna preocupación o pregunta sobre tu privacidad, no dudes en contactarnos."
    ],
    settings: {
      themeLabel: "Modo de tema:",
      themeDark: "Modo oscuro",
      themeLight: "Modo claro",
      themeSystem: "Sistema",
      languageLabel: "Idioma:",
      languageEnglish: "Inglés",
      languageSpanish: "Español",
      languagePortuguese: "Portugués"
    },
    alerts: {
      selectReason: "Por favor, selecciona una razón.",
      enterComments: "Por favor, ingresa comentarios."
    }
  },
  pt: {
    header: "Bacons Gamez",
    tabs: { games: "Jogos", about: "Sobre Nós", talk: "Fale Conosco", rules: "Regras", privacy: "Privacidade", settings: "Configurações" },
    aboutText: "Comecei a criar jogos para que as pessoas pudessem se divertir. Começamos a fazer jogos em 2022. No começo, nossos jogos não tiveram muita atenção, então criamos ainda mais jogos para melhorar e crescer. Nossa paixão nos impulsiona a continuar fazendo experiências envolventes para todos aproveitarem!",
    talkHeader: "Diga-nos o que você quer.",
    labelReason: "Escolha um motivo",
    reasonOptions: { buy: "Comprar um jogo", feedback: "Feedback", bug: "Bug" },
    labelComments: "Comentários",
    sendButton: "Enviar",
    disclaimerText: "Após publicar a mensagem, você concorda com as regras.",
    rulesTitle: "Regras",
    rulesList: [
      "Nenhum tipo de exploit é permitido aqui.",
      "Nenhuma mensagem que quebre ou viole as regras da Roblox.",
      "Nenhum spam é permitido aqui.",
      "Não aceitamos pessoas que transformem nossos jogos em pay-to-win ou os quebrem, ou que não consigam construir, fazer UIs ou programar corretamente.",
      "Siga todas as regras da Roblox."
    ],
    privacyTitle: "Política de Privacidade",
    privacyContent: [
      "Nunca publicaremos, compartilharemos ou venderemos seus dados, senhas ou qualquer informação pessoal na Internet.",
      "Nosso compromisso com a sua privacidade é absoluto. Todas as informações enviadas são tratadas com a máxima confidencialidade.",
      "Não armazenamos seus dados além do necessário para enviar sua mensagem, que é tratado com segurança.",
      "Sua confiança é importante para nós, e seguimos estritamente as melhores práticas de privacidade para manter suas informações seguras.",
      "Se você tiver alguma preocupação ou dúvida sobre sua privacidade, por favor, entre em contato conosco."
    ],
    settings: {
      themeLabel: "Modo do tema:",
      themeDark: "Modo escuro",
      themeLight: "Modo claro",
      themeSystem: "Sistema",
      languageLabel: "Idioma:",
      languageEnglish: "Inglês",
      languageSpanish: "Espanhol",
      languagePortuguese: "Português"
    },
    alerts: {
      selectReason: "Por favor, selecione um motivo.",
      enterComments: "Por favor, insira comentários."
    }
  }
};

function renderGames() {
  const container = document.getElementById('games-list');
  container.innerHTML = '';
  gamesData.forEach(game => {
    const el = document.createElement('a');
    el.href = game.url;
    el.target = '_blank';
    el.rel = "noopener noreferrer";
    el.className = 'game-card';
    el.setAttribute('aria-label', `${game.title} game`);
    el.innerHTML = `
      <img src="${game.image}" alt="${game.title} screenshot" class="game-image" loading="lazy" />
      <div class="game-info">${game.title}</div>
    `;
    container.appendChild(el);
  });
}

function updateRulesContent(lang) {
  const dict = translations[lang] || translations.en;
  const rulesSection = document.getElementById('rules-section');
  let html = `<h2>${dict.rulesTitle}</h2><ul>`;
  dict.rulesList.forEach(rule => {
    html += `<li>${rule}</li>`;
  });
  html += `</ul>`;
  rulesSection.querySelector('.rules-content').innerHTML = html;
}

function updatePrivacyContent(lang) {
  const dict = translations[lang] || translations.en;
  const privacySection = document.getElementById('privacy-section');
  let html = `<h2>${dict.privacyTitle}</h2>`;
  dict.privacyContent.forEach(paragraph => {
    html += `<p>${paragraph}</p>`;
  });
  privacySection.querySelector('.privacy-content').innerHTML = html;
}

function updateLanguage(lang = 'en') {
  const dict = translations[lang] || translations.en;
  document.getElementById('header-title').textContent = dict.header;
  document.getElementById('tab-games').textContent = dict.tabs.games;
  document.getElementById('tab-about').textContent = dict.tabs.about;
  document.getElementById('tab-talk').textContent = dict.tabs.talk;
  document.getElementById('tab-rules').textContent = dict.tabs.rules;
  document.getElementById('tab-privacy').textContent = dict.tabs.privacy;
  document.getElementById('tab-settings').textContent = dict.tabs.settings;

  document.getElementById('about-text').textContent = dict.aboutText;
  document.getElementById('talk-header').textContent = dict.talkHeader;
  document.getElementById('label-reason').textContent = dict.labelReason;
  document.getElementById('label-comments').textContent = dict.labelComments;
  document.getElementById('send-btn').textContent = dict.sendButton;
  document.querySelector('.disclaimer-text').textContent = dict.disclaimerText;

  updateRulesContent(lang);
  updatePrivacyContent(lang);

  const reasonSelect = document.getElementById('reason-select');
  const selectedVal = reasonSelect.value;
  reasonSelect.innerHTML = `<option value="" disabled>${dict.labelReason}</option>`;
  for(const key in dict.reasonOptions) {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = dict.reasonOptions[key];
    reasonSelect.appendChild(option);
  }
  if(selectedVal && dict.reasonOptions[selectedVal]) {
    reasonSelect.value = selectedVal;
  } else {
    reasonSelect.value = "";
  }

  document.getElementById('label-mode').textContent = dict.settings.themeLabel;
  const modeSelect = document.getElementById('mode-select');
  modeSelect.options[0].textContent = dict.settings.themeDark;
  modeSelect.options[1].textContent = dict.settings.themeLight;
  modeSelect.options[2].textContent = dict.settings.themeSystem;

  document.getElementById('label-language').textContent = dict.settings.languageLabel;
  const langSelect = document.getElementById('language-select');
  langSelect.options[0].textContent = dict.settings.languageEnglish;
  langSelect.options[1].textContent = dict.settings.languageSpanish;
  langSelect.options[2].textContent = dict.settings.languagePortuguese;
}

function showTab(tabName) {
  const tabs = ['games','about','talk','rules','privacy','settings'];
  tabs.forEach(t => {
    const section = document.getElementById(t + '-section');
    const btn = document.getElementById('tab-' + t);
    if(t === tabName) {
      section.style.display = 'block';
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      section.focus();
    } else {
      section.style.display = 'none';
      btn.classList.remove('active');
      btn.setAttribute('aria-selected', 'false');
    }
  });
}

function applyThemeMode(mode) {
  if(mode === 'dark') {
    document.body.classList.remove('light');
  } else if(mode === 'light') {
    document.body.classList.add('light');
  } else {
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.remove('light');
    } else {
      document.body.classList.add('light');
    }
  }
}

function savePreferences() {
  const modeSelect = document.getElementById('mode-select');
  const langSelect = document.getElementById('language-select');
  localStorage.setItem('themeMode', modeSelect.value);
  localStorage.setItem('siteLanguage', langSelect.value);
}

function loadPreferences() {
  const storedTheme = localStorage.getItem('themeMode') || 'dark';
  const storedLang = localStorage.getItem('siteLanguage') || 'en';
  const modeSelect = document.getElementById('mode-select');
  const langSelect = document.getElementById('language-select');
  modeSelect.value = storedTheme;
  langSelect.value = storedLang;
  applyThemeMode(storedTheme);
  updateLanguage(storedLang);
}

function validateForm() {
  const reasonSelect = document.getElementById('reason-select');
  const commentsText = document.getElementById('comments-textarea');
  const sendBtn = document.getElementById('send-btn');
  sendBtn.disabled = !(reasonSelect.value && commentsText.value.trim());
}

function sendEmail() {
  const reasonSelect = document.getElementById('reason-select');
  const commentsText = document.getElementById('comments-textarea');
  const lang = document.getElementById('language-select').value;
  const dict = translations[lang] || translations.en;

  if(!reasonSelect.value) {
    alert(dict.alerts.selectReason);
    return;
  }
  if(!commentsText.value.trim()) {
    alert(dict.alerts.enterComments);
    return;
  }

  const reasonText = dict.reasonOptions[reasonSelect.value] || reasonSelect.value;
  const subject = encodeURIComponent(`Bacons Gamez Contact: ${reasonText}`);
  const body = encodeURIComponent(`Reason: ${reasonText}\n\nComments:\n${commentsText.value.trim()}`);

  const emailAddress = "your-email@example.com"; // Replace with your real email
  window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

  document.getElementById('reason-select').value = "";
  document.getElementById('comments-textarea').value = "";
  validateForm();
}

document.addEventListener('DOMContentLoaded', () => {
  renderGames();
  loadPreferences();

  const tabs = document.querySelectorAll('.tab-button');
  tabs.forEach(button => {
    button.addEventListener('click', () => {
      showTab(button.dataset.tab);
    });
  });

  document.getElementById('mode-select').addEventListener('change', (e) => {
    applyThemeMode(e.target.value);
    savePreferences();
  });

  document.getElementById('language-select').addEventListener('change', (e) => {
    updateLanguage(e.target.value);
    savePreferences();
  });

  document.getElementById('reason-select').addEventListener('change', validateForm);
  document.getElementById('comments-textarea').addEventListener('input', validateForm);

  document.getElementById('send-btn').addEventListener('click', (e) => {
    e.preventDefault();
    sendEmail();
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if(document.getElementById('mode-select').value === 'system') {
      applyThemeMode('system');
    }
  });
});
  
