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
const proofFormWrap = document.getElementById("proofFormWrap");
const toggleProofButton = document.getElementById("toggleProofButton");
const proofForm = document.getElementById("proofForm");
const proofStatus = document.getElementById("proofStatus");

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
  if (!modal) return;

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
  if (!modal) return;

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

function toggleProofForm() {
  const isOpen = proofFormWrap.classList.toggle("show");
  toggleProofButton.setAttribute("aria-expanded", String(isOpen));

  if (isOpen) {
    proofFormWrap.scrollIntoView({
      behavior: "smooth",
      block: "nearest"
    });
  }
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

  requestAnimationFrame(() => {
    toast.classList.add("show");
  });

  window.setTimeout(() => {
    toast.classList.remove("show");

    window.setTimeout(() => {
      toast.remove();
    }, 400);
  }, 5000);
}

document.querySelectorAll("[data-open-donate]").forEach((button) => {
  button.addEventListener("click", () => openDonateModal());
});

document.querySelectorAll("[data-open-method]").forEach((button) => {
  button.addEventListener("click", () => {
    openDonateModal(button.dataset.openMethod);
  });
});

document.querySelectorAll("[data-amount]").forEach((button) => {
  button.addEventListener("click", () => {
    openDonateModal(button.dataset.amount);
  });
});

document.querySelectorAll("[data-payment-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    showPayment(button.dataset.paymentTab);
  });
});

document.querySelectorAll("[data-wallet]").forEach((button) => {
  button.addEventListener("click", () => {
    showWallet(button.dataset.wallet);
  });
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

menuButton.addEventListener("click", toggleMenu);
closeModalButton.addEventListener("click", closeDonateModal);
toggleProofButton.addEventListener("click", toggleProofForm);

document
  .getElementById("customAmountButton")
  .addEventListener("click", openCustomDonation);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeDonateModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("show")) {
    closeDonateModal();
  }
});

proofForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = proofForm.querySelector('button[type="submit"]');
  proofStatus.textContent = "Sending evidence of financial heroism...";
  proofStatus.className = "proof-status";
  submitButton.disabled = true;

  try {
    const formData = new FormData(proofForm);

    const response = await fetch(proofForm.action, {
      method: "POST",
      body: formData
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Submission failed");
    }

    proofForm.reset();
    proofStatus.textContent = "The money department has been notified.";
    proofStatus.className = "proof-status success";

    window.setTimeout(() => {
      closeDonateModal();
      proofFormWrap.classList.remove("show");
      toggleProofButton.setAttribute("aria-expanded", "false");

      showToast(
        "Evidence received.",
        "You are now officially part of my financial recovery arc."
      );
    }, 1200);
  } catch (error) {
    console.error(error);

    proofStatus.textContent =
      "The internet rejected the evidence. Please try again.";

    proofStatus.className = "proof-status error";
  } finally {
    submitButton.disabled = false;
  }
});
