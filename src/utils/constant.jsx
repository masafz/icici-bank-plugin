// registration
import regStep1 from "../assets/flow/registration/Step_1.png";
import regStep2 from "../assets/flow/registration/Step_2.png";
import regStep3 from "../assets/flow/registration/Step_3.png";
import regStep4 from "../assets/flow/registration/Step_4.png";
import regStep5 from "../assets/flow/registration/Step_5.png";
import regStep6 from "../assets/flow/registration/Step_6.png";
import regStep7 from "../assets/flow/registration/Step_7.png";
import regStep8 from "../assets/flow/registration/Step_8.png";
import regStep9 from "../assets/flow/registration/Step_9.png";
import regStep10 from "../assets/flow/registration/Step_10.png";
import regStep11 from "../assets/flow/registration/Step_11.png";

// subscription
import subStep1 from "../assets/flow/subscription/Step_1.png";
import subStep2 from "../assets/flow/subscription/Step_2.png";
import subStep3 from "../assets/flow/subscription/Step_3.png";

// installation
import installStep1 from "../assets/flow/installation/Step_1.png";
import installStep2 from "../assets/flow/installation/Step_2.png";
import installStep3 from "../assets/flow/installation/Step_3.jpg";
import installStep4 from "../assets/flow/installation/Step_4.jpg";
import installStep5 from "../assets/flow/installation/Step_5.jpg";
import installStep6 from "../assets/flow/installation/Step_6.jpg";
import installStep7 from "../assets/flow/installation/Step_7.jpg";
import installStep8 from "../assets/flow/installation/Step_8.jpg";
import installStep9 from "../assets/flow/installation/Step_9.jpg";
import installStep10 from "../assets/flow/installation/Step_10.jpg";
import installStep11 from "../assets/flow/installation/Step_11.jpg";

// account linking
import accLinkStep1 from "../assets/flow/account-linking/Step_1.jpg";
import accLinkStep2 from "../assets/flow/account-linking/Step_2.jpg";
import accLinkStep3 from "../assets/flow/account-linking/Step_3.jpg";
import accLinkStep4 from "../assets/flow/account-linking/Step_4.jpg";
import accLinkStep5 from "../assets/flow/account-linking/Step_5.jpg";
import accLinkStep6 from "../assets/flow/account-linking/Step_6.jpg";
import accLinkStep7 from "../assets/flow/account-linking/Step_7.jpg";
import accLinkStep8 from "../assets/flow/account-linking/Step_8.jpg";
import accLinkStep9 from "../assets/flow/account-linking/Step_9.jpg";
import accLinkStep10 from "../assets/flow/account-linking/Step_10.jpg";
import accLinkStep11 from "../assets/flow/account-linking/Step_11.jpg";
import accLinkStep12 from "../assets/flow/account-linking/Step_12.jpg";

// token generation
import tokenGenStep1 from "../assets/flow/token-generation/Step_1.jpg";
import tokenGenStep2 from "../assets/flow/token-generation/Step_2.jpg";
import tokenGenStep3 from "../assets/flow/token-generation/Step_3.jpg";
import tokenGenStep4 from "../assets/flow/token-generation/Step_4.jpg";
import tokenGenStep5 from "../assets/flow/token-generation/Step_5.png";

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
    route: "installation-flow",
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
    route: "account-linking-flow",
  },
  "token-generation": {
    title: "Token Generation",
    desc: "Generate secure authentication tokens to enable safe and uninterrupted communication between the plugin and the bank",
    cards: [
      "Authorize payment initiation securely from Bank Plugin using your ERP",
    ],
    note: "In this demo, let’s see how to generate token in Bank Plugin",
    route: "token-generation",
  },
};

export const flowData = {
  "registration-flow": [
    {
      image: regStep1,
      title: "Welcome To Bank Plugin Home Page",
      position: { top: "67.5%", left: "47%", width: "32%" },
      arrow: "left",
      points: [
        "New customers can click on the ERP platform to begin registration",
        "Select the ERP platform (Tally/Busy) to proceed with the registration process",
      ],
    },
    {
      image: regStep2,
      title: "Register Now Option",
      position: { top: "72.5%", left: "42%", width: "30%" },
      arrow: "left",
      points: ["Click on Register Now"],
    },
    {
      image: regStep3,
      title: "Registration Form Page",
      note: "Please note: The mentioned Mobile number and password will only be used for Registration purposes",
      position: { top: "60%", left: "18%", width: "30%" },
      arrow: "right",
      points: [
        "Fill all the required registration details including Company Name, GST Number, State, Mobile Number, email address etc",
      ],
    },
    {
      image: regStep4,
      title: "Accepting 1st Terms And Conditions",
      note: "",
      position: { top: "45.5%", left: "19%", width: "30%" },
      arrow: "right",
      points: [
        "Review and accept the first terms and conditions by selecting the checkbox",
      ],
    },
    {
      image: regStep5,
      title: "Accepting Terms and Conditions",
      note: "",
      position: { top: "23%", left: "69%", width: "30%" },
      arrow: "right",
      points: [
        "Terms and Conditions appear.",
        "Use scroller to scroll down and read the terms and conditions.",
      ],
    },
    {
      image: regStep6,
      title: "Accepting Terms and Conditions",
      note: "",
      position: { top: "69.5%", left: "37.5%", width: "30%" },
      arrow: "left",
      points: ["Click on “I Agree”"],
    },
    {
      image: regStep4,
      title: "Accepting 2nd Terms and Conditions",
      note: "",
      position: { top: "56.5%", left: "19%", width: "30%" },
      arrow: "right",
      points: ["Clicks on 2nd Check box to select Personal Data Consent"],
    },
    {
      image: regStep7,
      title: "Review 2nd Terms and Conditions",
      note: "",
      position: { top: "23%", left: "69%", width: "30%" },
      arrow: "right",
      points: [
        "Personal Data Consent Appears",
        "Use scroller to scroll down and read the personal data consent",
      ],
    },
    {
      image: regStep8,
      title: "Review 2nd Terms and Conditions",
      note: "",
      position: { top: "69.5%", left: "37.5%", width: "30%" },
      arrow: "left",
      points: ["Click on “I Agree”"],
    },
    {
      image: regStep9,
      title: "Continue to Register",
      note: "",
      position: { top: "40%", left: "39%", width: "30%" },
      arrow: "bottom",
      points: [
        "Click on Continue to successfully complete your registration by entering the OTP sent to your mentioned mobile number.",
      ],
    },
    {
      image: regStep11,
      title: "Almost Done!",
      note: "",
      position: { top: "53%", left: "40%", width: "30%" },
      arrow: "bottom",
      points: [
        'OTP is successfully verified. Click on "Create Account" to complete your registration.',
      ],
    },
    {
      image: regStep10,
      title: "Registration Successful",
      note: "Note: Kindly use the Mobile number used at the time of Registration process",
      position: { top: "73%", left: "61.5%", width: "30%" },
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
      position: { top: "36%", left: "60%", width: "28%" },
      arrow: "",
      points: [],
    },
    {
      image: subStep1,
      title: "Registration Successful",
      position: { top: "79%", left: "60%", width: "30%" },
      arrow: "bottom",
      points: ["Click on “Click here to Activate your Subscription”"],
    },
    {
      image: subStep2,
      title: "Subscription Plan",
      note: "",
      position: { top: "25%", left: "49.5%", width: "30%" },
      arrow: "",
      points: [
        "Select the subscription plan: Trial Period or Paid Subscription Plan",
        "For trial period we have 7 days validity in Tally and 30 days for Busy",
        "For 12 months’ validity plan: Review and click on Terms and Conditions checkbox",
      ],
    },
    {
      image: subStep3,
      title: "Subscription Plan",
      note: "",
      position: { top: "49%", left: "60%", width: "30%" },
      arrow: "",
      points: [
        "Select the subscription plan: Trial Period or Paid Subscription Plan",
        "For trial period we have 7 days validity in Tally and 30 days for Busy",
        "For 12 months’ validity plan: Review and click on Terms and Conditions checkbox",
      ],
    },
  ],
  "installation-flow": [
    {
      image: installStep1,
      title: "Install TCP file",
      note: "Note: Download the File as per your ERP type (taking tally prime as example)",
      position: { top: "59%", left: "16%", width: "28%" },
      arrow: "right",
      points: [
        "Go to Bank Plugin Home Page Portal",
        "Click on “Download Plugin for Tally Prime (V 1.60)/ Tally ERP 9(V 1.59)",
      ],
    },
    {
      image: installStep2,
      title: "Select the file path",
      note: "",
      position: { top: "45%", left: "50%", width: "30%" },
      arrow: "",
      points: ["Download the TCP file in the desired Computer path"],
    },
    {
      image: installStep3,
      title: "Login to your ERP",
      note: "",
      position: { top: "75.5%", left: "45%", width: "30%" },
      arrow: "top",
      points: [
        "Open your ERP platform in this case it is Tally Prime",
        "Enter your Username and Password given by your ERP to select your Company",
      ],
    },
    {
      image: installStep4,
      title: "Installation Process",
      note: "",
      position: { top: "23%", left: "61%", width: "30%" },
      arrow: "right",
      points: [
        "Click on F1 Help button available at the top right corner",
        "A drop down menu",
      ],
    },
    {
      image: installStep5,
      title: "Select the TDL",
      note: "",
      position: { top: "30%", left: "61%", width: "30%" },
      arrow: "right",
      points: ["Click on TDLs & AddOns"],
    },
    {
      image: installStep6,
      title: "Select the TDL",
      note: "",
      position: { top: "21%", left: "69%", width: "30%" },
      arrow: "right",
      points: ["Click on F4: Manage Local TDLs"],
    },
    {
      image: installStep7,
      title: "Select the TDL",
      note: "",
      position: { top: "51%", left: "34%", width: "30%" },
      arrow: "",
      points: [
        "Select the Load selected TDL files on startup as Yes",
        "Select the Drive option from the drop-down menu",
        "Click on Downloads",
      ],
    },
    {
      image: installStep8,
      title: "Select the TDL",
      note: "",
      position: { top: "60%", left: "28%", width: "28%" },
      arrow: "right",
      points: ["Select the TCP file from the path"],
    },
    {
      image: installStep9,
      title: "Change the Load TDL",
      note: "",
      position: { top: "40.5%", left: "79.5%", width: "20%" },
      arrow: "left",
      points: ["Make “Load TDL” as “Yes”"],
    },
    {
      image: installStep10,
      title: "Add feature",
      note: "",
      position: { top: "34.5%", left: "74%", width: "20%" },
      arrow: "right",
      points: ["Click on F6 Add Ons Features"],
    },
    {
      image: installStep11,
      title: "Installation Completed",
      note: "",
      position: { top: "35.5%", left: "54%", width: "30%" },
      arrow: "left",
      points: [
        "Enable bank plugin to “Yes”. Tally will restart after this.",
        "Congratulations you have successfully installed Bank Plugin in your Tally Prime",
      ],
    },
  ],
  "account-linking-flow": [
    {
      image: accLinkStep1,
      title: "Bank Plugin Dashboard",
      note: "Go to Bank Plugin Home Page Portal",
      position: { top: "45%", left: "23%", width: "25%" },
      arrow: "right",
      points: [],
    },
    {
      image: accLinkStep2,
      title: "",
      note: "Select the Bank Ledger to add Bank Account Details using Spacebar",
      position: { top: "45.5%", left: "70%", width: "28%" },
      arrow: "left",
      points: [],
    },
    {
      image: accLinkStep3,
      title: "",
      note: "",
      position: { top: "25%", left: "25%", width: "28%" },
      arrow: "top",
      points: [
        "Enter the Bank Details (IFSC, Account Number, Bank Name)",
        "Click on Ctrl+A button to save the details",
      ],
    },
    {
      image: accLinkStep4,
      title: "",
      note: "Select the Yes option on the accept dialogue box",
      position: { top: "88%", left: "50%", width: "28%" },
      arrow: "right",
      points: [],
    },
    {
      image: accLinkStep5,
      title: "",
      note: "Select the Bank ledger using spacebar",
      position: { top: "46%", left: "78%", width: "25%" },
      arrow: "left",
      points: [],
    },
    {
      image: accLinkStep6,
      title: "",
      note: "Press F5: Enabling E- Banking button present on the right side of the screen",
      position: { top: "41%", left: "71%", width: "25%" },
      arrow: "right",
      points: [],
    },
    {
      image: accLinkStep7,
      title: "",
      note: "",
      position: { top: "16%", left: "53%", width: "28%" },
      arrow: "right",
      points: [
        "Click on List of Corp IDs",
        "Select the Corp ID from the drop-down menu",
        "Press Enter",
      ],
    },
    {
      image: accLinkStep8,
      title: "",
      note: "Click on Yes option",
      position: { top: "55%", left: "74%", width: "25%" },
      arrow: "left",
      points: [],
    },
    {
      image: accLinkStep9,
      title: "",
      note: "E-Banking Enabled Successfully",
      position: { top: "82%", left: "64%", width: "20%" },
      arrow: "right",
      points: [],
    },
    {
      image: accLinkStep10,
      title: "",
      note: "",
      position: { top: "55%", left: "69%", width: "23%" },
      arrow: "top",
      points: ["Click on Esc once", "Click on F4 to view the Balance "],
    },
    {
      image: accLinkStep11,
      title: "",
      note: "",
      position: { top: "54%", left: "72%", width: "23%" },
      arrow: "right",
      points: ["Click on Esc once", "Click on F4 to view the Balance "],
    },
    {
      image: accLinkStep12,
      title: "",
      note: "",
      position: { top: "43%", left: "49%", width: "32%" },
      arrow: "top",
      points: [
        "Click on Esc once",
        "The balance reflects the figure as per tally and as per bank",
      ],
    },
  ],
  "token-generation": [
    {
      image: tokenGenStep1,
      title: "",
      note: "",
      position: { top: "68%", left: "71%", width: "25%" },
      arrow: "right",
      points: ["⁠Click on F9 Manage Corp ID"],
    },
    {
      image: tokenGenStep2,
      title: "",
      note: "Select the Corp ID and User ID using the Spacebar",
      position: { top: "27%", left: "30%", width: "28%" },
      arrow: "top",
      points: [],
    },
    {
      image: tokenGenStep3,
      title: "",
      note: "",
      position: { top: "67%", left: "70%", width: "28%" },
      arrow: "right",
      points: ["Click on F10: Generate and submit Token present on the right side of the dashboard"],
    },
  ],
};
