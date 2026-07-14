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

const modal = document.getElementById("donateModal");
const selectedAmount = document.getElementById("selectedAmount");
const navLinks = document.getElementById("navLinks");
const menuButton = document.getElementById("menuButton");
const closeModalButton = document.getElementById("closeModalButton");
const thankYouButton = document.getElementById("thankYouButton");

function toggleMenu() {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
}

function showPayment(method) {
  document.querySelectorAll(".payment-panel").forEach((panel) => {
    panel.classList.toggle("active", panel.id === method);
  });

  document.querySelectorAll("[data-payment-tab]").forEach((button) => {
    button.classList.toggle("active", button.dataset.paymentTab === method);
  });
}

function openDonateModal(option = "") {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  if (option && option !== "crypto" && option !== "bank") {
    selectedAmount.textContent = `Selected amount: ${option}`;
    showPayment("paypal");
  } else {
    selectedAmount.textContent = "";
    showPayment(option === "crypto" || option === "bank" ? option : "paypal");
  }

  closeModalButton.focus();
}

function closeDonateModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function showWallet(type) {
  const wallet = wallets[type];
  const walletBox = document.getElementById("walletBox");

  if (!wallet || !walletBox) return;

  walletBox.innerHTML = "";

  const title = document.createElement("h3");
  title.textContent = wallet.title;

  const address = document.createElement("p");
  address.className = "wallet-address";
  address.textContent = wallet.address;

  const copyButton = document.createElement("button");
  copyButton.type = "button";
  copyButton.className = "btn full";
  copyButton.textContent = "Copy Address";
  copyButton.addEventListener("click", () => copyAddress(wallet.address));

  walletBox.append(title, address, copyButton);
}

async function copyAddress(address) {
  try {
    await navigator.clipboard.writeText(address);
    showToast("Wallet copied.", "Please double-check the network before sending.");
  } catch {
    showToast("Copy failed.", "Please copy the wallet address manually.");
  }
}

function openCustomDonation() {
  const input = document.getElementById("customAmount");
  const amount = Number(input.value);

  if (!Number.isFinite(amount) || amount < 1) {
    showToast(
      "Tiny problem.",
      "Please enter at least $1. Even capitalism has standards."
    );
    input.focus();
    return;
  }

  const formattedAmount = amount.toLocaleString("en-US", {
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2
  });

  openDonateModal(`$${formattedAmount}`);
}

function showToast(title, message) {
  document.querySelector(".thank-you-toast")?.remove();

  const toast = document.createElement("div");
  toast.className = "thank-you-toast";

  const titleElement = document.createElement("strong");
  titleElement.textContent = title;

  const messageElement = document.createElement("span");
  messageElement.textContent = message;

  toast.append(titleElement, messageElement);
  document.body.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add("show"));

  window.setTimeout(() => {
    toast.classList.remove("show");
    window.setTimeout(() => toast.remove(), 400);
  }, 5000);
}

function showDonationThanks() {
  closeDonateModal();
  showToast(
    "You absolute legend.",
    "Thank you for supporting my questionable financial journey. My debt is now slightly more nervous."
  );
}

document.querySelectorAll("[data-open-donate]").forEach((button) => {
  button.addEventListener("click", () => openDonateModal());
});

document.querySelectorAll("[data-open-method]").forEach((button) => {
  button.addEventListener("click", () => openDonateModal(button.dataset.openMethod));
});

document.querySelectorAll("[data-amount]").forEach((button) => {
  button.addEventListener("click", () => openDonateModal(button.dataset.amount));
});

document.querySelectorAll("[data-payment-tab]").forEach((button) => {
  button.addEventListener("click", () => showPayment(button.dataset.paymentTab));
});

document.querySelectorAll("[data-wallet]").forEach((button) => {
  button.addEventListener("click", () => showWallet(button.dataset.wallet));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

menuButton.addEventListener("click", toggleMenu);
closeModalButton.addEventListener("click", closeDonateModal);
thankYouButton.addEventListener("click", showDonationThanks);
document.getElementById("customAmountButton").addEventListener("click", openCustomDonation);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeDonateModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    closeDonateModal();
  }
});
