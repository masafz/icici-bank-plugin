// registration
import step1 from "../assets/flow/registration/step1.jpg";
import step2 from "../assets/flow/registration/step2.jpg";
import step3 from "../assets/flow/registration/step3.jpg";
import step4 from "../assets/flow/registration/step4.jpg";
import step5 from "../assets/flow/registration/step5.jpg";
import step6 from "../assets/flow/registration/step6.jpg";
import step7 from "../assets/flow/registration/step7.jpg";
import step8 from "../assets/flow/registration/step8.jpg";
import step9 from "../assets/flow/registration/step9.jpg";

// subscription
import subStep1 from "../assets/flow/subscription/step1.jpg";
import subStep2 from "../assets/flow/subscription/step2.jpg";
import subStep3 from "../assets/flow/subscription/step3.jpg";
import subStep4 from "../assets/flow/subscription/step4.jpg";

export const demoCardDetails = [
  {
    title: "Payments",
    items: [
      {
        title: "Bulk Payment",
        desc: "Perform multiple payments in one go quickly and securely",
        route: "bulk-payment",
      },
      {
        title: "Single Payment",
        desc: "Make seamless secure payment directly from Bank Plugin",
        route: "single-payment",
      },
      {
        title: "Bharat Connect",
        desc: "Secure exchange of invoices and payment information between buyers and sellers",
        route: "bharat-connect",
      },
    ],
  },
  {
    title: "Account Management",
    items: [
      {
        title: "Bank Reconciliation",
        desc: "Automatically reconcile Bank transactions with accounting entries for accuracy",
        route: "bank-reconciliation",
      },
      {
        title: "User Access Control",
        desc: "Manage user roles and permissions for controlled banking access",
        route: "user-access",
      },
      {
        title: "Check Balance",
        desc: "View real time bank account balances directly within the Bank Plugin",
        route: "check-balance",
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "Manage Corp ID",
        desc: "Create and manage corporate banking IDs for seamless integration",
        route: "manage-corp",
      },
      {
        title: "Account Aggregator",
        desc: "Secure fetch bank data from multiple accounts in one place",
        route: "account-aggregator",
      },
    ],
  },
];

export const onboardingCardDetails = [
  {
    title: "Registration",
    desc: "Register your business to get started with the Bank Plugin",
    route: "registration",
  },
  {
    title: "Subscription",
    desc: "Activate the Bank Plugin by selecting a suitable subscription plan",
    route: "subscription",
  },
  {
    title: "Installation",
    desc: "Install the Bank Plugin seamlessly within your accounting system",
    route: "installation",
  },
  {
    title: "Corp ID, User ID",
    desc: "Create and manage corporate and user credentials for banking access",
    route: "corpid-userid",
  },
  {
    title: "Account Linking",
    desc: "Link your bank account securely to enable transactions and data sync",
    route: "account-linking",
  },
  {
    title: "Token Generation",
    desc: "Generate secure tokens to authenticate and activate banking services",
    route: "token-generation",
  },
];

export const featureData = {
  "bulk-payment": {
    title: "Bulk Payment",
    desc: "Perform multiple payments in a single go quickly and securely using Bank Plugin",
    cards: [
      "Process multiple transactions in a single go",
      "Ensure safety with Token and OTP validation",
      "Real time status updates eliminating manual tracking",
    ],
    note: "In this demo, let’s see how the Bulk Payment Features work",
    route: "",
  },
  "single-payment": {
    title: "Single Payment",
    desc: "Make seamless secure payment directly from Bank Plugin",
    cards: [
      "Initiate secure payments directly from bank plugin",
      "Manage bills and Payments seamlessly from a single platform",
      "Ensure safety with Token and OTP validation",
    ],
    note: "In this demo, let’s see how the Single Payment Features work",
    route: "",
  },
  "bharat-connect": {
    title: "Bharat Connect (B2B)",
    desc: "Secure exchange of invoices and payment information between buyers and sellers",
    cards: [
      "Seamless B2B invoicing within Bank Plugin",
      "Direct Collections into the accounting software",
      "Pay to the invoices using the accounting software",
    ],
    note: "In this demo, let’s see how the Bharat Connect Features work",
    route: "",
  },
  "bank-reconciliation": {
    title: "Bank Reconciliation",
    desc: "Match bank transactions with your books automatically and accurately",
    cards: [
      "Auto fetch bank statement directly from the bank",
      "Automate your reconciliation & save time, efforts & cost.",
      "Quickly spot unmatched or missing transactions",
    ],
    note: "In this demo, let’s see how the Bank Reconciliation Features work",
    route: "",
  },
  "user-access": {
    title: "User Access",
    desc: "Control who can access the bank plugin and what actions they can perform",
    cards: [
      "Create and manage users under one corporate account",
      "Assign role-based permissions (view, approve, transact)",
      "Ensure secure and control access",
    ],
    note: "In this demo, let’s see how the User Access Features work",
    route: "",
  },
  "check-balance": {
    title: "Check Balance",
    desc: "View available balance & bank statement of your ICICI Bank current account within your ERP accounting software.",
    cards: [
      "Check your bank balance from your ERP directly.",
      "Fetch bank statements directly from the ERP",
      "Daily reconciliation and cash flow monitoring",
    ],
    note: "In this demo, let’s see how the Check Balance Features work",
    route: "",
  },
  "manage-corp": {
    title: "Manage Corp ID",
    desc: "Manage multiple corporate IDs under one plugin interface",
    cards: [
      "Add and manage different Corp IDs",
      "Control transactions at Corp ID level",
      "Map Corp IDs to users and bank accounts",
    ],
    note: "In this demo, let’s see how the Manage Corp ID Features work",
    route: "",
  },
  "account-aggregator": {
    title: "Account Aggregator",
    desc: "Securely link bank account using Account Aggregator framework",
    cards: [
      "Fetch Bank Balance of other bank Current and Saving accounts from your ERP",
      "Fetch Account Statement of other bank Current and Saving accounts from your ERP",
    ],
    note: "In this demo, let’s see how the Account Aggregator Features work",
    route: "",
  },
  registration: {
    title: "Registration",
    desc: "A DIY registration process to onboard your business onto Bank Plugin",
    cards: [
      "Create an account to enable seamless connectivity with Bank",
      "Easy and seamless DIY Process",
    ],
    note: "In this demo, let’s see how to do registration in Bank Plugin",
    route: "registration-flow",
  },
  subscription: {
    title: "Subscription",
    desc: "Choose a suitable subscription plan to unlock Bank Plugin features as per your business needs",
    cards: [
      "Available free trial: 7 days for Tally accounting software 30 days for Busy accounting software",
      "Enjoy multiple features: Bulk Payment, Bharat Connect, Account Aggregator etc.",
      "Subscription charges - ₹100 + GST/ month for 1 year",
    ],
    note: "In this demo, let’s see how to subscribe in Bank Plugin",
    route: "subscription-flow",
  },
  installation: {
    title: "Installation",
    desc: "Easy installation of Bank Plugin in your accounting software like Tally or Busy",
    cards: [
      "Install Bank Plugin to initiate payments directly from your ERP",
      "Easy installation and quick setup",
    ],
    note: "In this demo, let’s see how to install Bank Plugin in ERP",
    route: "",
  },
  "corpid-userid": {
    title: "Corp ID, User ID",
    desc: "Map your corporate banking credentials securely to authorize users and define access levels",
    cards: [
      "Assign multiple user IDs with different approval rights",
      "Control who can initiate and approve payments",
    ],
    note: "In this demo, let’s see how to login in Bank Plugin using Corp ID and User ID",
    route: "",
  },
  "account-linking": {
    title: "Account Linking",
    desc: "Securely link your bank accounts to the Plugin for real time transactions and reconciliation",
    cards: [
      "Link multiple bank accounts for ease in transaction",
      "Select specific account for vendor or salary payment",
    ],
    note: "In this demo, let’s see how to link account in Bank Plugin",
    route: "",
  },
  "token-generation": {
    title: "Token Generation",
    desc: "Generate secure authentication tokens to enable safe and uninterrupted communication between the plugin and the bank",
    cards: [
      "Authorize payment initiation securely from Bank Plugin using your ERP",
    ],
    note: "In this demo, let’s see how to generate token in Bank Plugin",
    route: "",
  },
};

export const flowData = {
  "registration-flow": [
    {
      image: step1,
      title: "Welcome To Bank Plugin Home Page",
      note: "",
      position: {
        default: { top: "80%", left: "45%" },
        screen1440: { top: "71.5%", left: "41%" },
        screen1920: { top: "78.5%", left: "38%" },
      },
      arrow: "left",
      points: [
        "New customers can click on the ERP platform to begin registration",
        "Select the ERP platform (Tally/Busy) to proceed with the registration process",
      ],
    },
    {
      image: step2,
      title: "Register Now Option",
      note: "",
      position: {
        default: { top: "85%", left: "34%" },
        screen1440: { top: "75%", left: "30%" },
        screen1920: { top: "83%", left: "29%" },
      },
      arrow: "left",
      points: ["Click on Register Now"],
    },
    {
      image: step3,
      title: "Registration Form Page",
      note: "Please note: The mentioned Mobile number and password will only be used for Registration purposes",
      position: {
        default: { top: "63%", left: "16%" },
        screen1440: { top: "59%", left: "15%" },
        screen1920: { top: "61%", left: "18%" },
      },
      arrow: "right",
      points: [
        "Fill all the required registration details including Company Name, GST Number, State, Mobile Number, email address etc",
      ],
    },
    {
      image: step4,
      title: "Accepting 1st Terms And Conditions",
      note: "",
      position: {
        default: { top: "70%", left: "19%" },
        screen1440: { top: "64.5%", left: "18%" },
        screen1920: { top: "69%", left: "22%" },
      },
      arrow: "right",
      points: [
        "Review and accept the first terms and conditions by selecting the checkbox",
      ],
    },
    {
      image: step5,
      title: "Accepting Terms and Conditions",
      note: "",
      position: {
        default: { top: "30%", left: "70%" },
        screen1440: { top: "35%", left: "75%" },
        screen1920: { top: "30%", left: "79%" },
      },
      arrow: "right",
      points: [
        "Terms and Conditions appear.",
        "Use scroller to scroll down and read the terms and conditions.",
      ],
    },
    {
      image: step6,
      title: "Accepting Terms and Conditions",
      note: "",
      position: {
        default: { top: "82%", left: "33%" },
        screen1440: { top: "73%", left: "29%" },
        screen1920: { top: "80%", left: "26%" },
      },
      arrow: "left",
      points: ["Click on “I Agree”"],
    },
    {
      image: step4,
      title: "Accepting 2nd Terms and Conditions",
      note: "",
      position: {
        default: { top: "81%", left: "19%" },
        screen1440: { top: "72%", left: "18%" },
        screen1920: { top: "79%", left: "22%" },
      },
      arrow: "right",
      points: ["Clicks on 2nd Check box to select Personal Data Consent"],
    },
    {
      image: step7,
      title: "Review 2nd Terms and Conditions",
      note: "",
      position: {
        default: { top: "30%", left: "70%" },
        screen1440: { top: "35%", left: "75%" },
        screen1920: { top: "30%", left: "80%" },
      },
      arrow: "right",
      points: [
        "Personal Data Consent Appears",
        "Use scroller to scroll down and read the personal data consent",
      ],
    },
    {
      image: step8,
      title: "Review 2nd Terms and Conditions",
      note: "",
      position: {
        default: { top: "82%", left: "33%" },
        screen1440: { top: "73%", left: "29%" },
        screen1920: { top: "80%", left: "26%" },
      },
      arrow: "left",
      points: ["Click on “I Agree”"],
    },
    {
      image: step4,
      title: "Continue to Register",
      note: "",
      position: {
        default: { top: "79%", left: "39.5%" },
        screen1440: { top: "72%", left: "38%" },
        screen1920: { top: "82%", left: "38%" },
      },
      arrow: "bottom",
      points: ["Click on Continue to successfully complete your registration."],
    },
    {
      image: step9,
      title: "Registration Successful",
      note: "Note: Kindly use the Mobile number used at the time of Registration process",
      position: {
        default: { top: "80%", left: "60%" },
        screen1440: { top: "76%", left: "59%" },
        screen1920: { top: "84%", left: "56%" },
      },
      arrow: "left",
      points: [
        "Enter your Registered Mobile number and Password.",
        "Click on Sign in button",
        "Your registration is successfully completed",
      ],
    },
  ],
  "subscription-flow": [
    {
      image: subStep1,
      title: "Bank Plugin Home Page Portal",
      note: "Welcome to Bank Plugin Portal",
      position: {
        default: { top: "48%", left: "60%" },
        screen1440: { top: "48%", left: "60%" },
        screen1920: { top: "45%", left: "60%" },
      },
      arrow: "",
      points: [],
    },
    {
      image: subStep2,
      title: "Registration Successful",
      note: "",
      position: {
        default: { top: "80%", left: "60%" },
        screen1440: { top: "72%", left: "60%" },
        screen1920: { top: "82%", left: "60%" },
      },
      arrow: "bottom",
      points: ["Click on “Click here to Activate your Subscription”"],
    },
    {
      image: subStep3,
      title: "Subscription Plan",
      note: "",
      position: {
        default: { top: "20%", left: "49%" },
        screen1440: { top: "33%", left: "49%" },
        screen1920: { top: "25%", left: "49%" },
      },
      arrow: "",
      points: [
        "Select the subscription plan: Trial Period or Paid Subscription Plan",
        "For trial period we have 7 days validity in Tally and 30 days for Busy",
        "For 12 months’ validity plan: Review and click on Terms and Conditions checkbox",
      ],
    },
    {
      image: subStep4,
      title: "Subscription Plan",
      note: "",
      position: {
        default: { top: "50%", left: "60%" },
        screen1440: { top: "50%", left: "62%" },
        screen1920: { top: "55%", left: "62%" },
      },
      arrow: "bottom",
      points: [
        "Select the subscription plan: Trial Period or Paid Subscription Plan",
        "For trial period we have 7 days validity in Tally and 30 days for Busy",
        "For 12 months’ validity plan: Review and click on Terms and Conditions checkbox",
      ],
    },
  ],
};
