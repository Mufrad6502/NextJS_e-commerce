# Playwright E2E & Regression Tests

This repository contains a **Playwright framework in JavaScript** (with POM structure and utilities) to run **end-to-end and regression tests** against [demo.vercel.store](https://demo.vercel.store).

---

## 📦 Project Structure

    ├── fixtures/                # Custom test fixtures
    ├── pages/                   # Page Object Models (POMs)
    ├── tests/                   # E2E & regression test cases
    │   ├── e2e/                 # Full flow E2E specs
    │   ├── regression/          # Smoke & regression specs
    ├── .github/workflows/       # CI/CD workflow
    ├── playwright.config.js     # Playwright configuration
    ├── package.json             # Dependencies & scripts

---

## ⚙️ Setup

1. Clone the repo  
   git clone https://github.com/Mufrad6502/playwright-framework.git  
   cd playwright-framework  

2. Install dependencies  
   npm install  
   npx playwright install  

3. (Optional) Install Allure CLI for advanced reporting  
   npm install -g allure-commandline --save-dev  

---

## ▶️ Running Tests

- Run all tests  
  npx playwright test  

- Run a specific spec  
  npx playwright test tests/e2e/add-to-cart.spec.js  

- Run on a specific browser  
  npx playwright test --project=chromium  

- Run in headed (non-headless) mode  
  npx playwright test --headed  

- Debug mode  
  npx playwright test --debug  

---

## 📊 Reports

- Playwright HTML report (after any run)  
  npx playwright show-report  

- Allure report (if installed)  
  npx playwright test --reporter=line,allure-playwright  
  allure generate --clean  
  allure open  

---

## 🔄 CI/CD (GitHub Actions)

A workflow is already configured at:

    .github/workflows/playwright.yml

- Runs on every push and pull_request  
- Tests run on Chromium, Firefox, and WebKit  
- HTML reports are uploaded as build artifacts  


---

## 🛠️ Example Tests

- Add to Cart: Validate adding product & cart drawer  
- Search: Ensure product search works  
- Responsive: Desktop shows nav links, mobile shows hamburger menu  
- Checkout: Validate “Proceed to Checkout” button  
- Carousel: Verify product carousel renders & navigation works  

---
