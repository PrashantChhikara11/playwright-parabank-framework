# 🏦 Playwright Banking Automation Framework — ParaBank

![Playwright](https://img.shields.io/badge/Playwright-2EAD33?logo=playwright&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Browsers](https://img.shields.io/badge/browsers-Chromium_|_Firefox_|_WebKit-blue)

A Playwright + TypeScript framework I built by hand for the [ParaBank](https://parabank.parasoft.com/) online banking demo. It is based on the written test cases in [`ParaBank_Web_Automation_Test_Cases.md`](ParaBank_Web_Automation_Test_Cases.md).

## 🧪 Coverage

| ID | Scenario |
|---|---|
| TC_01 | Register a new customer *(setup)* |
| TC_01 / TC_02 | Login with valid credentials, a wrong username and a wrong password |
| TC_03 | View account overview |
| TC_04 | Open new savings and checking accounts *(setup)*, then transfer funds between accounts |
| TC_05 | Pay a bill |

---

## ✨ Highlights

- **Test data setup as a Playwright project:** a `data-setup` project registers a user and opens accounts before the main suite, and every browser project depends on it
- **Page Object Model + custom fixtures:** Register, Login, Account overview, Open new account, Fund transfer, Bill pay and Left panel pages
- **Cross-browser:** the same suite runs on Chromium, Firefox and WebKit
- **Multi-environment config:** `env-files/.env.dev` or `.env.qa` is chosen through `ENV_NAME` with `cross-env`
- **Test cases traced to IDs** (`TC_01` to `TC_05`) from the written test-case document
- **Tags:** `@UI`, `@UAT`, `@SIT`, `@DEV`

---

## 📁 Project Structure

```
├── pages/                         # Page objects
├── fixtures/                      # POM, common and hooks fixtures
├── tests/
│   ├── setup/data.setup.ts        # Registration and account creation (runs first)
│   └── Web/                       # Login, account overview, fund transfer, bill pay
├── test-data/                     # JSON test data per flow
├── env-files/                     # dev / qa environment configs
├── ParaBank_Web_Automation_Test_Cases.md
└── playwright.config.ts
```

---

## ⚙️ Setup & Run

```bash
git clone https://github.com/PrashantChhikara11/playwright-parabank-framework.git
cd playwright-parabank-framework
npm ci
npx playwright install
```

| Command | Runs |
|---|---|
| `npm run test_qa` / `npm run test_dev` | All browsers, QA or dev environment |
| `npm run test_dev_cr_hd` | Chromium, with a visible browser |
| `npm run test_dev_fx_hd` | Firefox, with a visible browser |
| `npm run test_ui_cr_hd` | `@UI` tests |
| `npm run test_uat_cr_hd` | `@UAT` tests |
| `npm run test_sit_cr_hd` | `@SIT` tests |
| `npm run test_dev_cr_hd_lastFailed` | Re-run only the tests that failed last time |

> ParaBank is a shared public demo whose data is reset from time to time, which is why the setup project creates fresh data on every run.

---

**Author:** [Prashant Chhikara](https://github.com/PrashantChhikara11)
