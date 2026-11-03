# ParaBank --- Web Automation Test Cases

**Website:** https://parabank.parasoft.com/parabank/index.htm\
**Purpose:** Practice functional web automation using a demo banking
application. Execute these cases manually first, then automate them with
Selenium, Playwright, Cypress, or a similar tool.

> **Important:** Use demo/test data only. Do not enter real personal or
> financial information. Results may vary depending on the demo
> application's state.

## Test Case Summary

  Test Case ID   Scenario                          Priority
  -------------- --------------------------------- ----------
  TC_01          Register a new user               High
  TC_02          Login with valid credentials      High
  TC_03          Login with invalid credentials    High
  TC_04          Open a new bank account           High
  TC_05          View account overview             High
  TC_06          Transfer funds between accounts   High
  TC_07          Pay a bill                        High
  TC_08          Search for transactions           Medium
  TC_09          Update contact information        Medium
  TC_10          Request a loan                    Medium
  TC_11          Logout and verify session ends    High

## Detailed Test Cases

### TC_01 --- Register a New User

**Priority:** High\
**Preconditions:** The user is on the homepage and the chosen username
is not already registered.

**Test steps** 1. Click **Register**. 2. Enter first name, last name,
address, city, state, ZIP code, phone number, and SSN using test data.
3. Enter a unique username and password, then confirm the password. 4.
Click **Register**.

**Test data:** Unique test identity details; a new username; matching
password and confirmation.\
**Expected result:** Registration succeeds and a confirmation message or
next page is displayed. The user can proceed to account services.\
**Actual result:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
**Status:** \[ \] Pass \[ \] Fail \[ \] Blocked

### TC_02 --- Login with Valid Credentials

**Priority:** High\
**Preconditions:** A valid test account exists and the user is logged
out.

**Test steps** 1. Open the homepage. 2. Enter the registered username
and password. 3. Click **Log In**. 4. Verify the landing page and
account services.

**Test data:** Registered test username and password.\
**Expected result:** The user is authenticated and the account overview
or account services page is displayed.\
**Actual result:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
**Status:** \[ \] Pass \[ \] Fail \[ \] Blocked

### TC_03 --- Login with Invalid Credentials

**Priority:** High\
**Preconditions:** The user is logged out.

**Test steps** 1. Open the homepage. 2. Enter an invalid username or
password. 3. Click **Log In**. 4. Check the message and verify protected
account details are not shown.

**Test data:** Username: `invalid_user_123`; Password: `WrongPass123`.\
**Expected result:** Login is rejected, an appropriate error message
appears, and protected account pages are not accessible.\
**Actual result:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
**Status:** \[ \] Pass \[ \] Fail \[ \] Blocked

### TC_04 --- Open a New Bank Account

**Priority:** High\
**Preconditions:** The user is logged in and has an eligible existing
account.

**Test steps** 1. Click **Open New Account**. 2. Choose an available
type, such as Checking or Savings. 3. Choose the funding account if
requested. 4. Click **Open New Account**. 5. Record the new account
number and confirmation.

**Test data:** Account type: Checking; an eligible existing funding
account.\
**Expected result:** A new account is created, confirmation is
displayed, and a new account number is provided.\
**Actual result:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
**Status:** \[ \] Pass \[ \] Fail \[ \] Blocked

### TC_05 --- View Account Overview

**Priority:** High\
**Preconditions:** The user is logged in and has at least one account.

**Test steps** 1. Click **Accounts Overview**. 2. Wait for account
information to load. 3. Verify the listed account numbers and balances.
4. Click an account number to open its details, if available.

**Test data:** Accounts associated with the test user.\
**Expected result:** The account list and balances are displayed.
Account links navigate to corresponding details.\
**Actual result:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
**Status:** \[ \] Pass \[ \] Fail \[ \] Blocked

### TC_06 --- Transfer Funds Between Accounts

**Priority:** High\
**Preconditions:** The user is logged in and has two eligible accounts.

**Test steps** 1. Click **Transfer Funds**. 2. Enter the transfer
amount. 3. Select the source and destination accounts. 4. Click
**Transfer**. 5. Verify confirmation and account balances.

**Test data:** Amount: `$10.00`; two different eligible accounts.\
**Expected result:** A transfer confirmation appears. The selected
accounts are correct and balances reflect the transfer according to
application rules.\
**Actual result:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
**Status:** \[ \] Pass \[ \] Fail \[ \] Blocked

### TC_07 --- Pay a Bill

**Priority:** High\
**Preconditions:** The user is logged in and has an eligible funding
account.

**Test steps** 1. Click **Bill Pay**. 2. Enter the payee name and
required address/contact details. 3. Enter the payee account number and
confirmation field, ensuring they match. 4. Enter the payment amount and
select the source account. 5. Click **Send Payment**. 6. Verify the
confirmation details.

**Test data:** Payee: `Automation Test Payee`; amount: `$5.00`; matching
payee account fields and valid test details.\
**Expected result:** Payment is processed and confirmation identifies
the payee, amount, and source account.\
**Actual result:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
**Status:** \[ \] Pass \[ \] Fail \[ \] Blocked

### TC_08 --- Search for Transactions

**Priority:** Medium\
**Preconditions:** The user is logged in and an account has transaction
history.

**Test steps** 1. Click **Find Transactions**. 2. Select an account if
requested. 3. Search by a known transaction ID, date, or amount using
available fields. 4. Submit the search and verify the returned details.
5. Repeat with a value that should not match any transaction.

**Test data:** A known transaction ID or amount from a previous test,
then an unmatched value.\
**Expected result:** Matching transactions display correct details. A
search with no matches shows an appropriate empty result or message.\
**Actual result:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
**Status:** \[ \] Pass \[ \] Fail \[ \] Blocked

### TC_09 --- Update Contact Information

**Priority:** Medium\
**Preconditions:** The user is logged in.

**Test steps** 1. Click **Update Contact Info**. 2. Change a field such
as phone number or address. 3. Click **Update Profile**. 4. Check the
confirmation message. 5. Reopen the profile and verify the updated
value.

**Test data:** Valid test phone number or updated address.\
**Expected result:** The profile update succeeds and the new information
persists when the profile is reopened.\
**Actual result:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
**Status:** \[ \] Pass \[ \] Fail \[ \] Blocked

### TC_10 --- Request a Loan

**Priority:** Medium\
**Preconditions:** The user is logged in and has an eligible account for
the down payment, if required.

**Test steps** 1. Click **Request Loan**. 2. Enter the loan amount and
down payment. 3. Select the account to debit for the down payment if
requested. 4. Click **Apply Now**. 5. Verify the loan status and any
resulting account details.

**Test data:** Loan amount: `$1,000`; down payment: `$200`. Use values
suitable for the demo account.\
**Expected result:** The application is processed and a loan status is
displayed. If approved, relevant new account information is shown;
approval is not guaranteed.\
**Actual result:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
**Status:** \[ \] Pass \[ \] Fail \[ \] Blocked

### TC_11 --- Logout and Verify Session Ends

**Priority:** High\
**Preconditions:** The user is logged in.

**Test steps** 1. Click **Log Out**. 2. Verify that the login page is
displayed. 3. Use browser navigation to attempt to return to a protected
account page. 4. Verify account content is not available without
authentication.

**Test data:** An active test user session.\
**Expected result:** The user is logged out and returned to the login
page. Protected account information is not accessible without logging in
again.\
**Actual result:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\
**Status:** \[ \] Pass \[ \] Fail \[ \] Blocked

## Suggested Execution Order

1.  TC_01 --- Register a new user (or use an existing test account if
    registration is unavailable).
2.  TC_02 --- Login with valid credentials.
3.  TC_04 --- Open a new account.
4.  TC_05 --- View account overview.
5.  TC_06 --- Transfer funds.
6.  TC_07 --- Pay a bill.
7.  TC_08 --- Search transactions.
8.  TC_09 --- Update contact information.
9.  TC_10 --- Request a loan.
10. TC_11 --- Logout and verify the session ends.
11. TC_03 --- Verify invalid login while logged out.

## Automation Practice Tips

-   Prefer stable locators such as IDs or name attributes where
    available; avoid brittle absolute XPath expressions.
-   Use explicit waits for page transitions, confirmation messages, and
    dynamically loaded content.
-   Add assertions for key outcomes, not just clicks (for example,
    verify confirmation text or an updated balance).
-   Store the test username, password, and account numbers in variables
    so they can be reused.
-   Keep tests independent where practical; account for data created by
    earlier runs.
-   This is a demo banking site; use test data only and expect shared
    demo data or service availability to affect results.
