const wallets = {
  BTC: {
    title: "Bitcoin — Bitcoin Network",
    address: "bc1qxyrvcq22pr82g2ej8de3wwe2jm8l60up7as72q"
  },
  TRC20: {
    title: "USDT — TRC20",
    address: "TUsuoW2Jfw77EHkEWbXkVwn842yBrDey1a"
  },
  ERC20: {
    title: "USDT — ERC20",
    address: "0x046178936da1617Cb2e6a99F59D8875909A15DCE"
  },
  BEP20: {
    title: "USDT — BEP20",
    address: "0x046178936da1617Cb2e6a99F59D8875909A15DCE"
  }
};

const translations = {
  en: {
    pageTitle: "Help Me Get Rich",
    navStory: "My Story",
    navPlan: "The Plan",
    navImpact: "Impact",
    navFaq: "FAQ",
    donateNow: "Donate Now",
    heroEyebrow: "The world’s most honest personal crowdfunding page",
    heroTitle: "I tried working. It didn’t make me rich.",
    heroText: "After years of working hard and trying almost everything, I’m asking the internet for help. No shame. Just strategy.",
    heroButton: "Help Me Get Rich",
    readStory: "Read My Story",
    noPressure: "No pressure. Seriously.",
    marqueeText: "Taxi Driver → Waiter → Cleaner → Quality Control → Contractor → Technical Drafter → Private Driver → Personal Assistant → CMO → CTO → MLM → Still In Debt →",
    storyTitle: "I really did try.",
    storyP1: "I’ve had more jobs than financial breakthroughs.",
    storyP2: "Taxi driver. Waiter. Cleaner. Quality Control. Contractor. Technical Drafter. Private Driver. Personal Assistant. CMO. CTO. Multi-Level Marketing.",
    storyP3: "Different jobs. Different salaries. Different levels of exhaustion. Same debt.",
    storyP4: "At this point, I have to consider the possibility that working alone may not be enough.",
    whyTitle: "Why donate?",
    why1Title: "My debt is very loyal.",
    why1Text: "Jobs come and go. Opportunities come and go. But my debt stays. Please help us break up.",
    why2Title: "I already tried working harder.",
    why2Text: "Excellent idea. I’ve been testing it for years. Results remain disappointing.",
    why3Title: "Money can’t buy happiness.",
    why3Text: "Maybe. But I’m willing to participate in this important scientific experiment.",
    planTitle: "The financial plan",
    plan1Title: "Paying debt",
    plan1Text: "The responsible part. Very boring. Unfortunately necessary.",
    plan2Title: "Surviving",
    plan2Text: "Food. Bills. Life. Apparently, staying alive is a subscription service.",
    plan3Title: "Enjoying life",
    plan3Text: "Maybe ordering food without sorting the menu from cheapest first.",
    plan4Title: "Questionable decisions",
    plan4Text: "Transparency is important.",
    impactTitle: "Choose your impact",
    impact5: "Moral Support",
    impact25: "Debt Annoyer",
    impact100: "Serious Supporter",
    impact500: "Financial Hero",
    impact1000: "Absolute Legend",
    helpTitle: "How you can help",
    paypalText: "Fast. Simple. International. And most importantly... money.",
    paypalButton: "Donate With PayPal",
    cryptoText: "Bitcoin and USDT. Choose your preferred network carefully.",
    cryptoButton: "View Crypto Options",
    bankTitle: "Bank Transfer",
    bankText: "Prefer traditional banking? Request my bank details securely.",
    bankButton: "Request Bank Details",
    specialEyebrow: "FOR SERIOUSLY GENEROUS PEOPLE",
    specialTitle: "Planning Something Suspiciously Generous?",
    specialText1: "Want to make a large donation, request bank transfer details, or simply confirm that I am a real person with very real debt?",
    specialText2: "Feel free to contact me directly.",
    signalText: "For private conversations, generous ideas, and people who type “I’d like to help” without joking.",
    emailText: "For bank transfer requests, questions, or financial miracles that require paperwork.",
    specialNote: "Please don’t send investment offers, crypto schemes, MLM opportunities, or advice telling me to “just work harder.” I’ve already tried enough things.",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Is this serious?",
    faq1A: "Unfortunately, yes.",
    faq2Q: "Is this a joke?",
    faq2A: "Also yes. Life is complicated.",
    faq3Q: "Is this a charity?",
    faq3A: "No. This is personal financial support.",
    faq4Q: "Is this an investment?",
    faq4A: "No shares. No tokens. No guaranteed returns. Just gratitude.",
    faq5Q: "Why don’t you just work harder?",
    faq5A: "Great idea. I’ve been testing it for years.",
    finalTitle: "Still here. Still in debt. Still accepting donations.",
    finalText: "Help me pay my debt. And if we accidentally go too far... help me get rich.",
    footerText: "Personal donation page. Not a charity. Not an investment. No returns promised.",
    modalTitle: "Choose Payment Method",
    paypalModalText: "Donate using PayPal.Me:",
    cryptoModalText: "Choose coin and network:",
    walletDefault: "Select a crypto option first.",
    cryptoWarning: "Only send using the selected network. Crypto transactions are irreversible.",
    bankModalText: "Fill this form to request bank transfer details.",
    formName: "Your name",
    formEmail: "Your email",
    formCountry: "Country",
    formCurrency: "Preferred currency",
    selectedAmount: "Selected amount: ",
    copied: "Wallet address copied.",
    copyFailed: "Could not copy automatically. Please copy it manually.",
    copyAddress: "Copy Address"
  },

  id: {
    pageTitle: "Bantu Saya Kaya",
    navStory: "Cerita Saya",
    navPlan: "Rencana",
    navImpact: "Dampak",
    navFaq: "FAQ",
    donateNow: "Donasi Sekarang",
    heroEyebrow: "Halaman crowdfunding pribadi paling jujur di internet",
    heroTitle: "Saya sudah coba kerja. Tetap tidak kaya.",
    heroText: "Setelah bertahun-tahun bekerja keras dan mencoba hampir semuanya, sekarang saya meminta bantuan internet. Bukan malu. Ini strategi.",
    heroButton: "Bantu Saya Kaya",
    readStory: "Baca Cerita Saya",
    noPressure: "Tidak ada paksaan. Serius.",
    marqueeText: "Supir Taksi → Pelayan → Cleaning Service → Quality Control → Contractor → Drafter Teknik → Driver Pribadi → Asisten Pribadi → CMO → CTO → MLM → Tetap Berhutang →",
    storyTitle: "Saya benar-benar sudah mencoba.",
    storyP1: "Jumlah pekerjaan saya lebih banyak daripada terobosan finansial saya.",
    storyP2: "Supir taksi. Pelayan. Cleaning service. Quality Control. Contractor. Drafter teknik. Driver pribadi. Asisten pribadi. CMO. CTO. Multi-Level Marketing.",
    storyP3: "Pekerjaan beda-beda. Gaji beda-beda. Lelahnya beda-beda. Hutangnya tetap sama.",
    storyP4: "Di titik ini, saya harus menerima kemungkinan bahwa bekerja saja mungkin tidak cukup.",
    whyTitle: "Kenapa donasi?",
    why1Title: "Hutang saya sangat setia.",
    why1Text: "Pekerjaan datang dan pergi. Peluang datang dan pergi. Tapi hutang saya tetap tinggal. Tolong bantu kami putus.",
    why2Title: "Saya sudah coba kerja lebih keras.",
    why2Text: "Ide bagus. Saya sudah mengujinya bertahun-tahun. Hasilnya tetap mengecewakan.",
    why3Title: "Uang tidak bisa membeli bahagia.",
    why3Text: "Mungkin. Tapi saya bersedia ikut eksperimen ilmiah penting ini.",
    planTitle: "Rencana finansial",
    plan1Title: "Bayar hutang",
    plan1Text: "Bagian bertanggung jawab. Membosankan. Tapi perlu.",
    plan2Title: "Bertahan hidup",
    plan2Text: "Makan. Tagihan. Hidup. Ternyata hidup itu sistem langganan.",
    plan3Title: "Menikmati hidup",
    plan3Text: "Mungkin pesan makanan tanpa mengurutkan dari yang paling murah.",
    plan4Title: "Keputusan meragukan",
    plan4Text: "Transparansi itu penting.",
    impactTitle: "Pilih dampakmu",
    impact5: "Dukungan Moral",
    impact25: "Pengganggu Hutang",
    impact100: "Pendukung Serius",
    impact500: "Pahlawan Finansial",
    impact1000: "Legenda Absolut",
    helpTitle: "Cara membantu",
    paypalText: "Cepat. Simpel. Internasional. Dan yang paling penting... uang.",
    paypalButton: "Donasi Dengan PayPal",
    cryptoText: "Bitcoin dan USDT. Pilih network dengan hati-hati.",
    cryptoButton: "Lihat Opsi Crypto",
    bankTitle: "Transfer Bank",
    bankText: "Lebih suka cara tradisional? Request detail bank dengan aman.",
    bankButton: "Request Detail Bank",
    specialEyebrow: "UNTUK ORANG YANG SANGAT DERMAWAN",
    specialTitle: "Merencanakan Sesuatu yang Mencurigakan Dermawannya?",
    specialText1: "Ingin donasi besar, meminta detail transfer bank, atau sekadar memastikan saya manusia asli dengan hutang asli?",
    specialText2: "Silakan hubungi saya langsung.",
    signalText: "Untuk percakapan pribadi, ide dermawan, dan orang yang mengetik “saya mau bantu” tanpa bercanda.",
    emailText: "Untuk request transfer bank, pertanyaan, atau keajaiban finansial yang butuh dokumen.",
    specialNote: "Tolong jangan kirim tawaran investasi, skema crypto, peluang MLM, atau nasihat “kerja lebih keras saja.” Saya sudah mencoba cukup banyak hal.",
    faqTitle: "Pertanyaan Umum",
    faq1Q: "Ini serius?",
    faq1A: "Sayangnya, iya.",
    faq2Q: "Ini bercanda?",
    faq2A: "Juga iya. Hidup memang rumit.",
    faq3Q: "Ini charity?",
    faq3A: "Bukan. Ini dukungan finansial pribadi.",
    faq4Q: "Ini investasi?",
    faq4A: "Tidak ada saham. Tidak ada token. Tidak ada return yang dijanjikan. Hanya terima kasih.",
    faq5Q: "Kenapa tidak kerja lebih keras?",
    faq5A: "Ide bagus. Saya sudah mencobanya bertahun-tahun.",
    finalTitle: "Masih di sini. Masih berhutang. Masih menerima donasi.",
    finalText: "Bantu saya bayar hutang. Dan kalau kebablasan... bantu saya jadi kaya.",
    footerText: "Halaman donasi pribadi. Bukan charity. Bukan investasi. Tidak ada return yang dijanjikan.",
    modalTitle: "Pilih Metode Pembayaran",
    paypalModalText: "Donasi menggunakan PayPal.Me:",
    cryptoModalText: "Pilih coin dan network:",
    walletDefault: "Pilih opsi crypto terlebih dahulu.",
    cryptoWarning: "Hanya kirim menggunakan network yang dipilih. Transaksi crypto tidak bisa dibatalkan.",
    bankModalText: "Isi form ini untuk request detail transfer bank.",
    formName: "Nama Anda",
    formEmail: "Email Anda",
    formCountry: "Negara",
    formCurrency: "Mata uang pilihan",
    selectedAmount: "Nominal dipilih: ",
    copied: "Alamat wallet berhasil disalin.",
    copyFailed: "Tidak bisa menyalin otomatis. Silakan salin manual.",
    copyAddress: "Salin Alamat"
  }
};

function getBrowserLanguage() {
  const lang = navigator.language || navigator.userLanguage || "en";
  const shortLang = lang.slice(0, 2).toLowerCase();

  if (translations[shortLang]) {
    return shortLang;
  }

  return "en";
}

let currentLanguage = getBrowserLanguage();

function applyTranslations() {
  const dictionary = translations[currentLanguage] || translations.en;

  document.documentElement.lang = currentLanguage;

  if (dictionary.pageTitle) {
    document.title = dictionary.pageTitle;
  }

  document.querySelectorAll("[data-i18n]").forEach(function(element) {
    const key = element.getAttribute("data-i18n");

    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(function(element) {
    const key = element.getAttribute("data-i18n-placeholder");

    if (dictionary[key]) {
      element.setAttribute("placeholder", dictionary[key]);
    }
  });
}

function t(key) {
  const dictionary = translations[currentLanguage] || translations.en;
  return dictionary[key] || translations.en[key] || key;
}

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("open");
}

function openDonateModal(option) {
  const modal = document.getElementById("donateModal");
  const selectedAmount = document.getElementById("selectedAmount");

  modal.classList.add("show");

  if (option && option !== "crypto" && option !== "bank") {
    selectedAmount.textContent = t("selectedAmount") + option;
  } else {
    selectedAmount.textContent = "";
  }

  if (option === "crypto") {
    showPayment("crypto");
  } else if (option === "bank") {
    showPayment("bank");
  } else {
    showPayment("paypal");
  }
}

function closeDonateModal() {
  const modal = document.getElementById("donateModal");
  modal.classList.remove("show");
}

function showPayment(method) {
  const panels = document.querySelectorAll(".payment-panel");

  panels.forEach(function(panel) {
    panel.classList.remove("active");
  });

  const selectedPanel = document.getElementById(method);

  if (selectedPanel) {
    selectedPanel.classList.add("active");
  }
}

function showWallet(type) {
  const wallet = wallets[type];
  const walletBox = document.getElementById("walletBox");

  if (!wallet) return;

  walletBox.innerHTML = `
    <h3>${wallet.title}</h3>

    <p class="wallet-address">
      ${wallet.address}
    </p>

    <button class="btn full" onclick="copyAddress('${wallet.address}')">
      ${t("copyAddress")}
    </button>
  `;
}

function copyAddress(address) {
  navigator.clipboard.writeText(address)
    .then(function() {
      alert(t("copied"));
    })
    .catch(function() {
      alert(t("copyFailed"));
    });
}

document.addEventListener("click", function(event) {
  const modal = document.getElementById("donateModal");

  if (event.target === modal) {
    closeDonateModal();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeDonateModal();
  }
});

document.addEventListener("DOMContentLoaded", function() {
  applyTranslations();

  const navItems = document.querySelectorAll(".nav-links a");

  navItems.forEach(function(link) {
    link.addEventListener("click", function() {
      const navLinks = document.getElementById("navLinks");
      navLinks.classList.remove("open");
    });
  });
});