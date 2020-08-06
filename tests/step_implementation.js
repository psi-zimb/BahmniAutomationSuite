/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, screenshot, text, focus, textBox, toRightOf, click, into, dropDown, button, $, waitFor, highlight, evaluate, scrollDown, near, clear, below, above, toLeftOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';
let data;
let locators;
let identifier;
beforeSuite(async () => {
    await openBrowser({ headless: headless });
    data = require("./data");
    locators = require("./locators");
    identifier = data.Registration.patientID;
});

afterSuite(async () => {
    await closeBrowser();
});
//gauge run --env dev specs 
//gauge run --env dev specs/example.spec
gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64' });
};

step("Page contains <content>", async (content) => {
    assert.ok(await text(content).exists());
});

step("Goto Bahmni page", async () => {
   await goto(data.Registration.link);
   await waitFor(2000);
});

step("Click on Clinical Service", async () => {
    await click("CLINICAL SERVICE");
 });
  
 step("Enter Username", async () => {
    await write(process.env.USERNAME,into(textBox({placeholder: locators.Details.Username})));
 });
  
 step("Enter Password", async () => {
    await write(process.env.PASSWORD,into(textBox({placeholder: locators.Details.Password})));
 });
  
 step("Select Location", async () => {
     await dropDown('Location').select('NAH Clinic');
 });
  
 step("Click on Login button", async () => {
    await click(button('Login'));
 });
 
step("Click on Registration", async () => {
    await waitFor(3000);
    await click("Registration");
});
   
step("Click on Create New", async () => {
    await waitFor(3000);
    await click('Create');
});  

step("Filling identifier and name fields of patient", async () => {
   await waitFor(2000);
   await click($("div#patientID"));
   await press(['G','Enter']);
   await write(data.Registration.makeid(5), into(textBox({placeholder:"First Name"})));
   await write(data.Registration.makeid(6), into(textBox({placeholder:"Middle Name"})));
   await write(data.Registration.makeid(4), into(textBox({placeholder:"Last Name"})));
});

step("Filling gender, date of birth and address details of patient", async () => {
await dropDown("Gender").select("Male")
await write("09091991",into($("input#birthdate")));
await click($("input#address2"));
await press(data.Registration.makeid(1));
await waitFor(1000);
await press(["ArrowDown",'Enter']);
await write("address",into($("input#address1")));
});

step("Filling additional identifiers, telephone number and education details of patient", async () => {
await write('1234', into($("input#Telephone")));
await dropDown("Education Details").select("Primary");
await dropDown("Occupation").select("Student");
});

step("Filling occupation, nationality and national ID details of patient", async () => {
await write("Occupation",into(textBox("Other occupation (specify please)")));
await dropDown("Nationality").select("Zimbabwean");
await write("123",into(textBox("National ID Number")));
});

step("Filling ethnicity and marital status details of patient", async () => {
await dropDown("Ethnicity").select("African");
await dropDown("Marital Status").select("Married");
});

step("Filling residence and district of birth details of patient", async () => {
await dropDown("Client Resident").select("Urban");
await dropDown("District of Birth").select("BIKITA");
});

step("Filling mother's name, twin status, a kin's name and relationship status with that kin details of patient", async () => {
 await write("Mom",into(textBox("Mother's First Name")));
 await dropDown("Are you a twin?").select("No");
 await write("Kin",into(textBox("Next-of-kin Contact Name")));
 await dropDown("Relationship to next of kin").select("Wife");
});

step("Filling address, phone number details of that kin and population details of patient", async () => {
 await write("Address",into(textBox("Next-of-kin Address")));
 await write("1234",into(textBox("Next-of-kin Telephone Number")));
 await dropDown("Population").select("FSW");
});

step("Filling referred by, contact tracing and date at which client is texted details of patient", async () => {
 await dropDown("Referred by").select("IPC");
 await dropDown("Contact Tracing").select("Yes");
 await click($("div.left"),toRightOf("Date index client tested"));
});

step("Filling index client code and relationship to index details of patient", async () => {
 await press(['1','9','9','9']);
 await press('ArrowLeft');
 await press('ArrowLeft');
 await press(['0','4']);
 await press(['1','5']);
 await write("12",into(textBox("Index Client Code")));
 await dropDown("Relationship to Index").select("Contact Partner");
});

step("Filling site type and outreach status details of patient", async () => {
 await dropDown("Site Type").select("Static");
 await dropDown("If Outreach Classify").select("Bus Terminus");
});

step("Filling outreach site name, moonlight testing and dreams activity details of patient", async () => {
 await write("Site",into(textBox("Outreach site name")));
 await dropDown("Moonlight Testing").select("Yes");
 await dropDown("Dreams Activity").select("Yes");
});

step("Filling details of nearest hospital and HIV test status of patient", async () => {
 await write("Near",into(textBox("Nearest Clinic/Hospital")));
 await dropDown("Have you ever been tested for HIV").select("Yes");
 await dropDown("If yes for ever been tested for HIV, What was the result?").select("Positive");
});

step("Filling couple testing details of patient", async () => {
 await dropDown("Were you tested in the last 12 months?").select("Yes");
 await dropDown("Couple testing ?").select("Yes");
 await write("123",into(textBox("If couple testing yes, capture the registration no of the partner")));
});

step("Saving details of patient", async () => {
    await waitFor(2000);
    await click(button("Save"));
});
  
step("Retrieving details of patient", async () => {
    identifier=await $("span#patientIdentifierValue").text();
    console.log("ID is : "+ identifier);
});
  
step("Enter patient ID",async () => {
    await waitFor(5000);
    await write(identifier,into(textBox({placeholder: locators.Details.ID})));
});
  
step("Start visit",async()=>{
    await waitFor(2000);
    await scrollDown(1000);
    await waitFor(2000);
    if(await button("Start Clinic visit").exists()){
        await click(button("Start Clinic visit"));
    }
    else{
        await click(button("Enter Visit Details"));
    }
});
  
step("Click on unplanned or walk in visit",async()=>{
    await waitFor(3000);
    await click("Unplanned or walk in visit");
    await waitFor(2000);
});
  
step("Click on PrEP Initial visit",async()=>{
    await waitFor(3000);
    await click("PrEP Initial");
    await waitFor(2000);
});
  
step("Click on PrEP Continuation visit",async()=>{
    await waitFor(3000);
    await click("PrEP Continuation");
    await waitFor(2000);
});
  
step("Enter amount in registration fees",async()=>{
    await clear(textBox('REGISTRATION FEES'));
    await write(data.Registration.fees, into(textBox(locators.Details.Fees)));
});
  
step("Goto home page",async()=>{
    await waitFor(2000);
    await click($("a.back-btn"));
});
  
step("Click on Clinical", async () => {
    await waitFor(5000);
    await click("Clinical");
});
  
step("Click on Programs", async () => {
    await waitFor(5000);
    await click("Programs");
});
  
step("Click on All", async () => {
    await waitFor(5000);
    await click("All");
});

step("Enter patient ID in search field",async()=>{
    await write(identifier,into(textBox({placeholder: locators.Details.IDSearch})));
});
  
step("Click on Search", async () => {
    await click("Search");
});
  
step("Click on Consultation", async () => {
    await waitFor(3000);
    await click('onsultation');
});
  
step("Click on Add new observation", async () => {
    await waitFor(2000);
    await click("Add New Obs Form");
});
  
step("Click on Add New PrEP Enrollment", async () => {
    await waitFor(2000);
    await click("New Program Enrollment");
    await dropDown(below("New Program Enrollment")).select("PrEP Program");
    await dropDown(toRightOf("Program State : ")).select("Initiated");
    await write(data.Registration.date,into($("input[type=date]")));
    await click("Enroll");
});
  
step("Going to PrEP dashboard", async () => {
   await waitFor(3000);
   await click("PrEP Program Dashboard");
});
  
step("Click on Add New FPS Enrollment", async () => {
    await waitFor(2000);
    await click("New Program Enrollment");
    await dropDown(below("New Program Enrollment")).select("FPS Program");
    await press("Tab");
    await press(['0','4','0','4','1','9','9','9']);
    await click("Enroll");
});
  
step("Going to FPS dashboard", async () => {
   await click("FPS Program Dashboard");
   await waitFor(3000);
   await click($("a.back-btn"));
});
  
step("Click on Add New ART Enrollment", async () => {
    await waitFor(2000);
    await click("New Program Enrollment");
    await dropDown(below("New Program Enrollment")).select("ART Program");
    await dropDown(toRightOf("Program State : ")).select("3rd Line");
    await press("Tab");
    await press(['0','4','0','4','1','9','9','9']);
    await click("Enroll");
});
  
step("Going to ART dashboard", async () => {
   await click("ART Program Dashboard");
   await waitFor(3000);
   await click($("a.back-btn"));
});
  
step("Click on Add New any Enrollment", async () => {
    await waitFor(2000);
    await click("New Program Enrollment");
    await dropDown(below("New Program Enrollment")).select("TB Program");
    await write(data.Registration.date,into($("input[type=date]")));
    await click("Enroll");
});
  
step("Going to any dashboard", async () => {
   await click("Program Dashboard");
   await waitFor(3000);
   await click($("a.back-btn"));
});
  
step("Click on Gynecology", async () => {
    await click("Gynecology");
});
  
step("Click on PrEP Initial", async () => {
    await click("PrEP Initial");
});
  
step("Click on PrEP Continuation", async () => {
    await click("PrEP Continuation");
});
  
step("Click on PrEP Screening Tool", async () => {
    await click("PrEP Screening Tool");
});
  
step("Click on NCD", async () => {
    await click("NCD");
});
  
step("Click on IPV", async () => {
    await click(button("IPV Form"));
});
  
step("Click on Assessment and Plan", async () => {
    await click(button("Assessment and Plan"));
});
  
step("Click on Provider HIV test counselling", async () => {
    await click(button("Provider HIV test counselling"));
});
  
step("Click on TB Screening and History", async () => {
    await click(button("TB Screening and History"));
});
  
step("Click on Referrals Template", async () => {
    await click(button("Referrals Template"));
});
  
step("Filling the Gynecology form1", async () => {
    await waitFor(5000);
    await click(button("Yes"),near("Have you experienced abnormal bleeding?"));
    await click(button("Yes"),near("Have you experienced intermenstrual bleeding?"));
    await click(button('Light'),near("Intensity of intermenstrual bleeding"));
    await click(button("Several months"),near("Duration of intermenstrual bleeding"));
    await write('2', into(textBox('Number of intermenstrual bleeding months')));
    await press("ArrowUp");
    await click(button("Yes"),near("Have you experienced post menopausal bleeding"));
});
  
step("Filling the Gynecology form2", async () => {
    await click(button("Severe"),near("Intensity of post menopausal bleeding?"));
    await click(button("Up to a month"),near("Duration of post menopausal bleeding?"));
    await click(button("Yes"),near("Have you experienced Post-coital bleeding?"));
    await click(button("Moderate",near("Intensity of Post-coital bleeding?",{offset:500})));
    await click(button("More than a week",near("Duration of Post-coital bleeding?",{offset:500})));
    await click(button("No",near("Are you pregnant?",{offset:500})));
    await click(button("No",near("Have you missed a period?",{offset:500})));
});
  
 step("Filling the Gynecology form3", async () => {
    await press("Tab");
    await write(data.Registration.date);
    await click(button("Moderate",near("Period intensity",{offset:500})));
 });
  
 step("Filling the Gynecology form4", async () => {
    await click(button("Moderate",near("Dymenorrhea intensity",{offset:500})));
    await click(button("Yes",near("Are your periods irregular?")));
    await press("Tab");
    await press("Tab");
    await write(data.Registration.date);
    await click(button("Yes",near("Have you been screened for cervical cancer?")));
 });
  
 step("Filling the Gynecology form5", async () => {
    await press("Tab");
    await press("Tab");
    await write(data.Registration.date);
    await click(button("Other",near("What was the result?",{offset:500})));
    await write('N/A',into(textBox("If Others, Specify")));
    await click(button("Yes",near("Have you been vaccinated against HPV?")));
    await click(button("Yes",near("Have you had several episodes of vaginal thrush?")));
 });
  
 step("Filling the Gynecology form6", async () => {
    await click(button("Yes",near("Have you observed a breast lump(s)?")));
    await click(button("More than a week",near("Duration of the lump")));
    await click(button("Yes",near("Do you have a discharge from the nipple(s)?")));
    await click(button("Left",near("Side of the nipple(s)")));
    await click(button("Yes",near("Do you use contraceptives?")));
    await click(button("Barrier/Condom",near("Type of contraceptives",{offset:500})));
 });
  
 step("Filling details of service provided and date of HIV test if done in PrEP Initial form", async () => {
    await waitFor(5000);
    await click($("div.field-value"));
    await press('M')
    await press('Enter');
    await click(button("Static"));
    await click(button("Urban"),near("Setting"));
    await click(button("Yes"),near("Have you had an HIV test in the past 1 week?"));
    await press("Tab");
    await press("Tab");
    await write(data.Registration.date);
 });
  
 step("Filling details of health related details of patient in PrEP Initial form along with pregnancy details", async () => {
    await click(button("Inconclusive"),near("What was the result?"));
    await click(button("Yes"),near("Do you have any heath related problems today?"));
    await write('Nope', into(textBox('Indicate the problem')));
    await click(button("CCF"),near("Have you been diagnosed of any chronic illness?"));
    await click(button("No"),near("Are you or your partner currently pregnant?",{offset:500}));
    await press("Tab");
    await press("Tab");
    await write(data.Registration.date);
 });
  
 step("Filling details of breastfeeding details, drugs or medications, ARV and sexual activeness of patient in PrEP Initial form", async () => {
    await click(button("Yes"),near("Pregnacy test done?"));
    await click(button("Positive"),below("Pregnacy test done?"));
    await click(button("Yes"),near("Are you or partner currently breast feeding?"));
    await click(button("No"),below("Injection"));
    await click(button("Other"),near("Are you taking any drugs or medications?",{offset:500}))
    await write('Some drugs',into($("textarea#observation_21")));
 });
  
 step("Filling details of relationship details, HIV status of partner, usage of condoms and other details of patient in PrEP Initial form", async () => {
    await click(button("Yes"),near("Are you on ARVs?"));
    await click(button("Yes"),near("Are you sexually active?"));
    await click(button("Yes"),near("Are you married or in a stable relationship for the past 6 months and above?"));
    await click(button("Positive"),near("Do you know your partner's HIV status?"));
    await click(button("No"),near("Is your partner on ART?",{offset:500}));
 });
  
 step("Filling details of sexual partners, non-regular partners and other sexual details of patient in PrEP Initial form", async () => {
    await click(button("Yes"),near("Do you use condoms every time you have sex with your partner?"));
    await click(button("Yes"),near("Have you had any other sexual partners in the last 6 months?"));
    await write('2',into(textBox("How many?")));
    await click(button("Yes"),near("Do you have more than 1 sexual partner?"));
    await click(button("Yes"),near("Do you know your non-regular partner(s) HIV status?"));
 });
  
 step("Filling details of contraception, PEP, unprotected sex and other relation details of patient in PrEP Initial form", async () => {
    await click(button("Positive"),near("Specify HIV status of partner",{offset:500}));
    await click(button("Yes"),near("Do you use condoms every time you have sex with your non-regular partner?"));
    await click(button("Yes"),near("Have you been treated for an STI in the last 3 months?"));
    await click(button("Yes"),near("Have you exchanged sex for money, goods or services?"));
    await click(button("Yes"),near("Do you have a history of sexual abuse/gender based violence?"));
 });
  
 step("Filling details of sexual partner, condoms and condom burst of patient in PrEP Initial form", async () => {
    await click(button("Yes"),near("Have you used emergency contraception in the last 6 months?"));
    await click(button("Yes"),near("Have you used PEP in the last 6 months?"));
    await click(button("Unprotected sex with positive"),near("What was the reason for taking PEP?",{offset:500}));
    await click(button("Yes"),near("Are you single or not in a stable relationship?"));
    await click(button("Yes"),near("Have you had sexual partner(s) in the last 6 months?"));
 });
  
 step("Filling details of indoxicated with alcohol or drugs, emergency contraception and drugs injection in past 6 months of patient in PrEP Initial form", async () => {
    await write('2',into(textBox(below("Have you had sexual partner(s) in the last 6 months?"))));
    await click(button("Yes"),near("Do you use condoms every time you have vaginal or anal sex?"));
    await click(button("Yes"),near("Have you had a condom burst in the last 3 month?"));
    await write('6',into(textBox(below("Have you had a condom burst in the last 3 month?"))));
    await click(button("Yes"),above("Females"));
 });
  
 step("Filling details of primary infection, client's HIV status and PrEP details of patient in PrEP Initial form", async () => {
    await click(button("Pelvic"),near("Females"));
    await click(button("Urethral"),near("Males",{offset:500}));
    await click(button("Yes"),near("Have you had sex whilst indoxicated with alcohol or drugs?"));
    await click(button("Yes"),near("Have you or your partner used emergency contraception in the last 6 months?"));
    await write('6',into(textBox(below("Have you or your partner used emergency contraception in the last 6 months?"))));
 });
  
 step("Filling drug details of patient in PrEP Initial From",async () => {
    await click(button("Yes"),near("Do you inject drugs?"));
    await click(button("No"),near("Any signs of primary infection?",{offset:500}));
    await click(button("Negative"),near("What is the client's HIV status today?"));
    await click(button("Yes"),near("Are you ready to start Prep?"));
    await click(button("Yes"),near("Is the client Eligible to take PrEP?"));
 });
  
  
 step("Filling details of sex of patient and PrEP status in PrEP Initial form", async () => {
    await click(button("transgender"),below("SERO-DISC"));
    await click(button("transgender"),below("TSW"));
    await click(button("Yes"),near("Was client initiated on PrEP?"));
    await click(button("More than 6 months supply"),below("3 Months supply"));
    await click(button("6 months"),below("3 months"));
 });
  
 step("Filling the details of service provided and health related details of patient in PrEP Continuation form", async () => {
    await waitFor(5000);
    await click($("div.field-value"));
    await press('M')
    await press('Enter');
    await click(button("Static"));
    await click(button("Urban"),near("Setting"));
    await click(button("Yes"),near("Do you have any heath related problems today?"));
 });
  
 step("Filling the details of family planning status, implants and breastfeeding details of patient in PrEP Continuation form", async () => {
    await write('Nope', into(textBox('Indicate the problem')));
    await click(button("Yes"),near("Are you using any family planning method?"));
    await click(button("IUDs"),below("implant"));
    await press("Tab");
    await press("Tab");
    await press("Tab");
    await write(data.Registration.date);
    await click(button("Yes"),near("Are you breast feeding?"));
 });
  
 step("Filling the details of medications, sexual partners and partners HIV status of patient in PrEP Continuation form", async () => {
    await click(button("Yes"),near("Are you using any other medications?"));
    await click(button("Other"),below("Anti-hypertensives"));
    await write('No', into(textBox('If Other Specify details')));
    await write('2',into(textBox("How many sexual partners have you had since the last visit?")));
    await click(button("Yes"),near("Do you know your partner's HIV status?"));
 });
  
 step("Filling the details of condom usage, condom burst and STI of patient in PrEP Continuation form", async () => {
    await click(button("Negative"),near("If Yes then specify"));
    await click(button("Yes"),near("Are you using condoms every time you are having sex?"));
    await click(button("Yes"),near("Have you had a condom burst since the last visit?"));
    await write('6',into(textBox(below("Have you had a condom burst since the last visit?"))));
    await click(button("Yes"),near("Have you been treated for an STI since the last visit?"));
 });
  
 step("Filling the details of indoxication and sexual details of patient in PrEP Continuation form", async () => {
    await click(button("Genital herpes"),near("Pelvic Inflamatory"));
    await click(button("Genital warts"),near("Urethral"));
    await click(button("Yes"),near("Have you had sex whilst indoxicated with alcohol or drugs?"));
    await click(button("Yes"),near("Have you exchanged sex for money, goods or services?"));
    await click(button("Yes"),near("Have you been sexually abused or had gender based violence since the last visit?"));
 });
  
 step("Filling the details of emergency contraception, primary infection, PrEP details and HIV status of patient in PrEP Continuation form", async () => {
    await click(button("No"),near("Have you used emergency contraception since the last visit?",{offset:500}));
    await click(button("Yes"),near("Does the client have any sings of primary infection?"));
    await click(button("GUD"),below("Arthralgia"));
    await click(button("Yes"),near("Are you ready to continue PrEP?"));
    await click(button("Negative"),near("What is the client's HIV status today?"));
 });
  
 step("Filling the details of PrEP and defaulted treatment of patient in PrEP Continuation form", async () => {
    await click(button("Yes"),near("Is the client eligible to continue PrEP?"));
    await click(button("HRM"),below("MSM"));
    await click(button("Transgender"),below("TSW"));
    await click(button("Yes"),near("Has the client defaulted treatment for more than 28 days?"));
    await press("Tab");
    await press("Tab");
    await write(data.Registration.date);
 });
  
 step("Filling the dates of medication resupply of patient in PrEP Continuation form", async () => {
    await click(button("Follow-up visit 5 at "),below("Follow-up visit1"));
    await click(button("5 Months "),below("1"));
    await press("Tab");
    await press("Tab");
    await press("Tab");
    await write(data.Registration.date);
    await press("Tab");
    await write(data.Registration.date);
 });
  
 step("Filling the details of service provided and HIV status in PrEP Screening Tool form", async () => {
    await waitFor(5000);
    await click($("div.field-value"));
    await press('M');
    await press('Enter');
    await click(button("Static"));
    await click(button("Urban"));
    await click(button("Yes"),near("Is the Client HIV negative"));
    await press("Tab");
    await press("Tab");
    await write(data.Registration.date);
 });
  
 step("Filling the details PrEP status in PrEP Screening Tool form", async () => {
    await click(button("No"),near("Is the client sexually active",{offset:500}));
    await click(button("Yes"),near("Do you inject drugs?"));
    await click(button("No"),near("Is the client eligible for PrEP",{offset:500}));
    await click(button("Yes"),near("Client offered PrEP?"));
    await click(button("Yes"),near("Client accepted PrEP?"));
 });
  
 step("Filling details of service provided and screening details of hypertension, Type 2 diabetes of patient in the NCD form", async () => {
    await waitFor(5000);
    await click($("div.field-value"));
    await press('M');
    await press('Enter');
    await click(button("Static"));
    await click(button("Urban"));
    await click(button("Yes"),near("Clients screened for hypertension"));
    await click(button("Yes"),near("Clients screened for Type 2 diabetes"));
    await click(button("No"),near("Clients diagnosed with hypertension",{offset:500}));
 });
  
 step("Filling details of hypertension management and diabetes management of patient in the NCD form", async () => {
    await click(button("Yes"),near("Clients diagnosed with Type 2 diabetes"));
    await click(button("No"),near("Is hypertension condition controlled",{offset:500}));
    await click(button("Yes"),near("Is Diabetes condition controlled"));
    await click(button("Yes"),near("Hypertension management"));
    await click(button("Yes"),near("Diabetes management – gestational"));
    await click(button("Yes"),near("Diabetes management – non-gestational"));
 });
  
 step("Filling details of service provided of patient in the IPV form", async () => {
    await waitFor(5000);
    await click($("div.field-value"));
    await press('M');
    await press('Enter');
    await click(button("Static"));
    await click(button("Urban"));
    await click(button("Yes"),near("Has partner ever threatened to hurt you?"));
 });
  
 step("Filling details of sexual or physical abuse of patient in the IPV form", async () => {
    await click(button("Yes"),near("Partner ever physically hurt you?"));
    await click(button("Yes"),near("Partner ever sexually abused you?"));
    await click(button("No"),near("Partner ever threatened you?",{offset:500}));
    await click(button("No"),near("Partner ever threatened to Kill you?",{offset:500}));
 });
  
 step("Filling details of type of plan and assessment, activity status and dates of reinitiation of patient in the Assessment and Plan form", async () => {
    await waitFor(5000);
    await click(button("Phone Call"));
    await write('First',into(textBox("Assessment")));
    await write('Initial',into(textBox("Plan")));
    await click(button("Opted out"),near("Activity status",{offset:500}));
 });
  
 step("Filling details of type of medication, its duration, date of initiation of patient and checking if eligible for viral load or not in the Assessment and Plan form", async () => {
    await press("Tab");
    await press("Tab");
    await write(data.Registration.date);
    await press("Tab");
    await write(data.Registration.date);
    await click(button("8 at more than"),near("Type of follow up",{offset:500}));
    await click(button("Yes"),near("Are you currently breastfeeding?"));
    await click(button("3 Months"),near("Duration of medication"));
 });
  
 step("Filling details of sample and its type and results in the Assessment and Plan form", async () => {
    await press("Tab");
    await press("Tab");
    await press("Tab");
    await press("Tab");
    await press("Tab");
    await write(data.Registration.date);
    await press("Tab");
    await write(data.Registration.date);
    await click(button("Yes"),near("Is the client eligible for Viral Load?"));
    await click(button("Yes"),near("Was the sample sent to the lab"));
    await click(button("Wrong"),near("Reason sample not sent to the lab"));
 });
  
 step("Filling details of V/L and viral load result of patient in the Assessment and Plan form", async () => {
    await click(button("Targeted"),near("Type of request",{offset:500}));
    await click(button("6 or 12"),near("Routine type"));
    await click(button("Targeted after"),near("Targeted type"));
    await click(button("Invalid test"),below("Awaiting results"));
    await press("Tab");
    await write(data.Registration.date);
 });
  
 step("Filling details of EAC of patient in the Assessment and Plan form", async () => {
    await write('100',into(textBox("What is the value of the V/L?")));
    await press("Tab");
    await write(data.Registration.date);
    await write('1000',into(textBox("Viral Load result")));
    await click(button("Suppressed"),near("Viral load status"));
    await click(button("Yes"),near("Client referred for EAC"));
    await press("Tab");
    await press("Tab");
    await write(data.Registration.date);
 });
  
 step("Filling the details of service provided, workplace and reasons for not bringing partner in Provider HIV test counselling form", async () => {
    await waitFor(5000);
    await click($("div.field-value"));
    await press('M');
    await press('Enter');
    await click(button("Static"));
    await click(button("Urban"));
    await click(button("Yes"),near("Workplace"));
    await click(button("Not applicable"),below("Partner refuses"));
 });
  
 step("Filling the details of family planning, children and breast feeding of patient in Provider HIV test counselling form", async () => {
    await click(button("Yes"),near("Planning to have children within the next 2 years?"));
    await click(button("Yes"),near("Partner/Self Currently on F/P"));
    await click(button("Traditional methods"),below("Pill"));
    await write('10',into(textBox("No of living children (Record only those under 16)")));
    await click(button("Not applicable"),near("You/partner currently pregnant?",{offset:500}));
    await click(button("No"),near("You/partner breastfeeding now?",{offset:500}));
 });
  
 step("Filling the details of showing interest in HIV status, T and C site and health status of patient in Provider HIV test counselling form", async () => {
    await click(button("PMTCT"),below("Male circumcision"));
    await click(button("Community"),near("How did you learn about this T&C site?",{offset:500}));
    await click(button("Yes"),near("Have you had a cough?"));
    await click(button("Non-productive"),near("Type of cough"));
    await click(button("More than a week"),near("Duration"));
 });
  
 step("Filling the details of chest pain status and breathing status of patient in Provider HIV test counselling form", async () => {
    await click(button("Yes"),near("Have you had chest pain?"));
    await click(button("Both Sides"),near("Location of chest pains?"));
    await click(button("On exertion"),near("When does the chest pain occur?"));
    await click(button("More than a week"),above("Have you had shortness of breath?"));
    await click(button("Yes"),near("Have you had shortness of breath?"));
 });
  
 step("Filling the details of breathing status and about fever and night sweats of patient in Provider HIV test counselling form", async () => {
    await click(button("More than a week"),above("When does the shortness of breath occur?"));
    await click(button("Lying down"),near("When does the shortness of breath occur?"));
    await click(button("Yes"),near("Did you have fever recently?"));
    await click(button("Less than a week"),near("Duration of fever"));
    await click(button("Yes"),near("Did you have night sweats?"));
 });
  
 step("Filling the details of night sweats, weight loss details and TB status of patient in Provider HIV test counselling form", async () => {
    await click(button("More than a week"),near("Duration of night sweats",{offset:500}));
    await click(button("Yes"),near("Do you have weight loss?"));
    await click(button("Less than a week"),near("Duration of weight loss"));
    await click(button("Yes"),near("Have you lived with someone who has been diagnosed of TB in the last 3 months?"));
    await click(button("Yes"),near("Ever been tested"));
 });
  
 step("Filling the details of last test details of HIV and result, sexual status of patient in Provider HIV test counselling form", async () => {
    await click(button("Private doctor"),near("If yes, where were you last tested?"));
    await write('10',into(textBox("If ever been tested, how many times have you been tested for HIV before?")));
    await write('1',into(textBox("How long ago were you last tested (months)?")));
    await click(button("Didn't collect"),near("What were the results the last time you were tested?"));
    await click(button("Not applicable"),near("Has your most recent sex partner been tested in the last 3 months?",{offset:500}));
 });
  
 step("Filling the details of results of HIV test, results collected by lab technician and late read results of patient in Provider HIV test counselling form", async () => {
    await click(button("Positive"),near("HIV test results"))
    await write('result',into(textBox("Results recorded by (Lab technician code)")));
    await write('result collected',into(textBox("Results collected by (Counsellor code)")));
    await click(button("Yes"),near("Late read result?"));
    await click(button("N/A"),near("If yes, specify the result"));
 });
  
 step("Filling the details of post test counseling and sexual details of patient in Provider HIV test counselling form", async () => {
    await click(button("Yes"),near("Client received post test counseling?"));
    await click(button("Yes"),near("Ever had sexual intercourse"));
    await click(button("Yes"),near("Ever had oral sex"));
    await click(button("No"),near("Ever had anal sex",{offset:500}));
    await write('20',into(textBox("Age of first penetrative sex")));
 });
  
 step("Filling the details of STI and condom usage of patient in Provider HIV test counselling form", async () => {
    await click(button("No"),near("Do you or your partner currently have an STI",{offset:500}));
    await click(button("Yes"),near("In the last twelve months, ever had sex while intoxicated"));
    await click(button("No"),near("In the last twelve month exchanged money or goods for sex",{offset:500}));
    await click(button("NA"),near("Last time you had sex did you use a condom"));
    await click(button("NA"),near("Do you currently have more than one sexual partner (including your spouse or regular partner)"));
    });
  
 step("Filling the details of history of sexual abuse and risk reduction plan of patient in Provider HIV test counselling form", async () => {
    await write('3',into(textBox("How many sexual partners did you have in the last twelve months (including your spouse or sexual partner)")));
    await click(button("Yes"),near("Are you or your partner circumcised (Male circumcision)"));
    await click(button("No"),near("History of sexual abuse",{offset:500}));
    await click(button("No"),near("Have you ever talked about T&C with your partner/spouse?",{offset:500}));
    await click(button("Monogamy"),near("Risk reduction plan"));
 });
  
 step("Filling the details of index testing and home based care of patient in Provider HIV test counselling form", async () => {
    await click(button("3"),near("If client advised to return for re-testing indicate timeline (2 weeks, 4 weeks, 3months, 6 months, other)"));
    await click(button("Pastor"),below("Spouse"));
    await click(button("Yes"),near("Index testing offered"));
    await click(button("Yes"),near("Index testing accepted"));
    await click(button("PEP"),below("Home based care"));
 });
  
 step("Filling the details of family planning status, MC counselling, referrals and test and kit details of patient in Provider HIV test counselling form", async () => {
    await click(button("Yes"),near("Family planning counselling"));
    await click(button("No"),near("MC counselling provided",{offset:500}));
    await click(button("Yes"),near("Referral made"));
    await click(button("No"),near("Was recency testing done?",{offset:500}));
    await click(button("Kits"),near("Why was it not done?"));
 });
  
 step("Filling the details of service provided and type of visit of patient in TB Screening and History form", async () => {
    await waitFor(5000);
    await click($("div.field-value"));
    await press('M');
    await press('Enter');
    await click(button("Static"));
    await click(button("Urban"));
    await click(button("TB Screening"),near("Type of Visit"));
 });
  
 step("Filling the details of IPT and HIV status of patient in TB Screening and History form", async () => {
    await click(button("PSI"),near("Type of Client"));
    await click(button("No"),near("Did you received IPT?",{offset:500}));
    await click(button("No"),near("Did you complete IPT?",{offset:500}));
    await click(button("On conti"),near("Reason for not completing IPT"));
    await click(button("Positive"),near("HIV Status"));
 });
  
 step("Filling the details of ART status, Gene results and RIF resistance of patient in TB Screening and History form", async () => {
    await click(button("New on"),near("ART Status"));
    await click(button("Other facility"),near("Where is client getting medication",{offset:500}));
    await click(button("Yes"),near("Are you on ART?"));
    await click(button("MTB"),near("Gene Xpert Results"));
    await click(button("Rif"),near("RIF Resistance"));
 });
  
 step("Filling the details of Gene xpert, X-ray results and TB details of patient in TB Screening and History form", async () => {
    await click(button("Gene Xpert"),near("Screening method used today"));
    await click(button("AAFBs seen +"),near("Smear (Microscopy) results"));
    await write('method',into(textBox("Specify method used")));
    await click(button("Not"),near("Xray results"));
    await click(button("New"),near("Type of TB case"));
    await press("Tab");
    await press("Tab");
    await write(data.Registration.date);
 });
  
 step("Filling the details of TB screening like chest pain, breath, cough symptoms of patient in TB Screening and History form", async () => {
    await click(button("Referred"),near("Treatment outcome"));
    await click(button("Cured"),near("Course completion outcomes"));
    await click(button("No"),near("Have you had a cough?",{offset:500}));
    await click(button("No"),near("Have you had chest pain?",{offset:500}));
    await click(button("No"),near("Have you had shortness of breath?",{offset:500}));
 });
  
 step("Filling the details of TB screening like fever, weight loss details of patient in TB Screening and History form", async () => {
    await click(button("Yes"),near("Did you have fever recently?"));
    await click(button("Upto"),near("Duration of fever",{offset:500}));
    await click(button("No"),near("Did you have night sweats?",{offset:500}));
    await click(button("Yes"),near("Do you have weight loss?"));
    await click(button("More"),near("Duration of weight loss",{offset:500}));
 });
  
 step("Filling the details of TB history like TB diagnosis, its location and episode details of patient in TB Screening and History form", async () => {
    await click(button("No"),near("Are you currently being treated for TB?",{offset:500}));
    await click(button("Yes"),near("Have been treated for TB before?"));
    await click(button("X-Ray"),below("Have been treated for TB before?",{offset:500}));
    await click(button("Pulmonary"),below("Have been treated for TB before?"));
    await write('3',into(textBox("How many episodes of TB?")));
    await press("Tab");
    await write(data.Registration.date);
 });
  
 step("Filling the details of TB history like last treatment, TB details of parents and children of patient in TB Screening and History form", async () => {
    await write('Last',into(textBox("Where were you last treated?")));
    await click(button("Yes"),near("Was treatment interupted?"));
    await click(button("Yes"),near("Have you lived with someone who has been diagnosed of TB in the last 3 months?"));
    await click(button("Yes"),near("Has you mother or caregiver been treated for TB? (for children under 5)"));
 });
  
 step("Filling service provided, referral details and the referred program details of patient in Referrals Template form", async () => {
    await waitFor(5000);
    await click($("div.field-value"));
    await press('M');
    await press('Enter');
    await click(button("Static"));
    await click(button("Urban"));
    await click(button("Outgoing Referrals"),near("Type of referral"));
    await write('Officer',into(textBox("Referring officer")));
    await write('Nooo',into(textBox("Facility where client has been referred to")));
 });
  
 step("Filling registration date and asking patient if referred for HIV or not in Referrals Template form", async () => {
    await press("Tab");
    await write(data.Registration.date);
    await click(button("No"),near("Referred for HIV Counselling",{offset:500}));
 });
  
 step("Asking patient if referred for Post Exposure Prophylaxis and PrEP in Referrals Template form", async () => {
    await click(button("No"),near("Referred for Post Exposure Prophylaxis",{offset:500}));
    await click(button("Yes"),near("Referred for PrEP"));
 });
  
 step("Asking patient if referred for STI –screening and VMMC in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for STI –screening /treatment"));
    await click(button("Yes"),near("Referred for VMMC"));
 });
  
 step("Asking patient if referred for HIV rapid test and DBS-  PCR HIV test in Referrals Template form", async () => {
    await click(button("No"),near("Referred for HIV Rapid Test",{offset:500}));
    await click(button("No"),near("Referred for DBS- PCR HIV Testing",{offset:500}));
 });
  
 step("Asking patient if referred for CD4 Count and Viral load test in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for CD4 Count"));
    await click(button("Yes"),near("Referred for Viral Load test"));
 });
  
 step("Asking patient if referred for FBC and LFT in Referrals Template form", async () => {
    await click(button("No"),near("Referred for FBC",{offset:500}));
    await click(button("No"),near("Referred for LFT",{offset:500}));
 });
  
 step("Asking patient if referred for UandEs and Creatinine in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for UandEs"));
    await click(button("Yes"),near("Referred for Creatinine"));
 });
  
 step("Asking patient if referred for Pre-ART registration and ART Initiation in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for Pre-ART registration"));
    await click(button("No"),near("Referred for ART Initiation",{offset:500}));
 });
  
 step("Asking patient if referred for ART refill (defaulters) and ART Decentralization in Referrals Template form", async () => {
    await click(button("No"),near("Referred for ART refill (defaulters)",{offset:500}))
    await click(button("No"),near("Referred for ART Decentralization",{offset:500}));
 });
  
 step("Asking patient if referred for PMTCT/Option B+ and CTX/OI Management in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for PMTCT/Option B+"));
    await click(button("Yes"),near("Referred for CTX/OI Management"));
 });
  
 step("Asking patient if referred for CARG enrolment/ Transfer and Support Groups in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for CARG enrolment/ Transfer"));
    await click(button("Yes"),near("Referred for Support Groups"));
 });
  
 step("Asking patient if referred for ART official transfer and ART reinitiating in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for ART official transfer"));
    await click(button("Yes"),near("Referred for ART reinitiating"));
 });
  
 step("Asking patient if referred for TB screening and TB Diagnosis/Sputum Collection in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for TB screening"));
    await click(button("Yes"),near("Referred for TB Diagnosis/Sputum Collection"));
 });
  
 step("Asking patient if referred for TB Treatment/Management and TB Re-Initiation after LTFU in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for TB Treatment/Management"));
    await click(button("Yes"),near("Referred for TB Re-Initiation after LTFU"));
 });
  
 step("Asking patient if referred for ANC and Emergency contraception in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for ANC"));
    await click(button("No"),near("Referred for Emergency contraception",{offset:500}));
 });
  
 step("Asking patient if referred for Family Planning and Cancer of Cervix Screening in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for Family Planning"));
    await click(button("Yes"),near("Referred for Cancer of Cervix Screening"));
 });
  
 step("Asking patient if referred for Breast Cancer Screening and Psycho-social support in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for Breast Cancer Screening"));
    await click(button("Yes"),near("Referred for Psycho-social support"));
 });
  
 step("Asking patient if referred for Economic Strengthening and Educational services in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for Economic Strengthening"));
    await click(button("Yes"),near("Referred for Educational services"));
 });
  
 step("Asking patient if referred for Emergency Shelter and Nutrition Support in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for Emergency Shelter"));
    await click(button("Yes"),near("Referred for Nutrition Support"));
 });
  
 step("Asking patient if referred for Legal Counsel and Victim Friendly Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for Legal Counsel"));
    await click(button("Yes"),near("Referred to Victim Friendly Services"));
 });
  
 step("Asking patient if referred for Vital Registration and received HIV Counselling Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Referred for Vital Registration"));
    await click(button("Yes"),near("Received HIV Counselling Services"));
 });
  
 step("Asking patient if received Post Exposure Prophylaxis Services and PrEP Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Post Exposure Prophylaxis Services"));
    await click(button("Yes"),near("Received PrEP Services"));
 });
  
 step("Asking patient if received STI –screening and VMMC Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received STI –screening /treatment Services"));
    await click(button("Yes"),near("Received VMMC Services"));
 });
  
 step("Asking patient if received HIV Rapid Test and DBS- PCR HIV Testing Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received HIV Rapid Test Services"));
    await click(button("Yes"),near("Received DBS- PCR HIV Testing Services"));
 });
  
 step("Asking patient if received CD4 Count and Viral Load test Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received CD4 Count Services"));
    await click(button("Yes"),near("Received Viral Load test Services"));
 });
  
 step("Asking patient if received FBC and LFT Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received FBC Services"));
    await click(button("Yes"),near("Received LFT Services"));
 });
  
 step("Asking patient if received UandEs and Creatinine Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received UandEs Services"));
    await click(button("Yes"),near("Received Creatinine Services"));
 });
  
 step("Asking patient if received Pre-ART registration and ART Initiation Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Pre-ART registration Services"));
    await click(button("Yes"),near("Received ART Initiation Services"));
 });
  
 step("Asking patient if received ART refill (defaulters) Services and ART Decentralization Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received ART refill (defaulters) Services"));
    await click(button("Yes"),near("Received ART Decentralization Services"));
 });
  
 step("Asking patient if received PMTCT/Option B+ Services and CTX/OI Management Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received PMTCT/Option B+ Services"));
    await click(button("Yes"),near("Received CTX/OI Management Services"));
 });
  
 step("Asking patient if received CARG enrolment/ Transfer Services and Support Groups Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received CARG enrolment/ Transfer Services"));
    await click(button("Yes"),near("Received Support Groups Services"));
 });
  
 step("Asking patient if received ART official transfer Services and ART reinitiating Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received ART official transfer Services"));
    await click(button("Yes"),near("Received ART reinitiating Services"));
 });
  
 step("Asking patient if received TB screening Services and TB Diagnosis/Sputum Collection Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received TB screening Services"));
    await click(button("Yes"),near("Received TB Diagnosis/Sputum Collection Services"));
 });
  
 step("Asking patient if received TB Treatment/Management Services and TB Re-Initiation after LTFU Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received TB Treatment/Management Services"));
    await click(button("Yes"),near("Received TB Re-Initiation after LTFU Services"));
 });
  
 step("Asking patient if received ANC Services and Emergency contraception Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received ANC Services"));
    await click(button("Yes"),near("Received Emergency contraception Services"));
 });
  
 step("Asking patient if received Family Planning Services and Cancer of Cervix Screening Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Family Planning Services"));
    await click(button("Yes"),near("Received Cancer of Cervix Screening Services"));
 });
  
 step("Asking patient if received Breast Cancer Screening Services and Psycho-social support Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Breast Cancer Screening Services"));
    await click(button("Yes"),near("Received Psycho-social support Services"));
 });
  
 step("Asking patient if received Economic Strengthening Services and Educational services Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Economic Strengthening Services"));
    await click(button("Yes"),near("Received Educational services Services"));
 });
  
 step("Asking patient if received Emergency Shelter Services and Nutrition Support Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Emergency Shelter Services"));
    await click(button("Yes"),near("Received Nutrition Support Services"));
 });
  
 step("Asking patient if received Legal Counsel Services and Victim Friendly Services in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Legal Counsel Services"));
    await click(button("Yes"),near("Received to Victim Friendly Services"));
 });
  
 step("Asking patient if received Vital Registration Services and Progestin-only pills in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Vital Registration Services"));
    await click(button("Yes"),near("Received Progestin-only pills"));
 });
  
 step("Asking patient if received Combined oral contraceptive pills and Injectable 1 month in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Combined oral contraceptive pills"));
    await click(button("Yes"),near("Received Injectable 1 month"));
 });
  
 step("Asking patient if received Injectable 2 months and Injectable 3 months in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Injectable 2 months"));
    await click(button("Yes"),near("Received Injectable 3 months"));
 });
  
 step("Asking patient if received Injectable duration unknown and Cyclebeads in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Injectable duration unknown"));
    await click(button("Yes"),near("Received Cyclebeads"));
 });
  
 step("Asking patient if received IUS 3 insertion and IUD 5 insertion in Referrals Template form", async () => {
    await click(button("Yes"),near("Received IUS 3 insertion"));
    await click(button("Yes"),near("Received IUD 5 insertion"));
 });
  
 step("Asking patient if received IUD 10 insertion and IUD insertion duration unknown in Referrals Template form", async () => {
    await click(button("Yes"),near("Received IUD 10 insertion"));
    await click(button("Yes"),near("Received IUD insertion duration unknown"));
 });
  
 step("Asking patient if received Implant 3 insertion and Implant 4 insertion in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Implant 3 insertion"));
    await click(button("Yes"),near("Received Implant 4 insertion"));
 });
  
 step("Asking patient if received Implant 5 insertion and Implant insertion duration unknown in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Implant 5 insertion"));
    await click(button("Yes"),near("Received Implant insertion duration unknown"));
 });
  
 step("Asking patient if received Vasectomy and Tubal ligation in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Vasectomy"));
    await click(button("Yes"),near("Received Tubal ligation"));
 });
  
 step("Asking patient if received Opioid treatment and Cryotherapy (referred from VIA/VILI) in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Opioid treatment"));
    await click(button("Yes"),near("Received Cryotherapy (referred from VIA/VILI)"));
 });
  
 step("Asking patient if received Cryotherapy (referred from Pap Screen) and Cryotherapy (referred from HPV DNA) in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Cryotherapy (referred from Pap Screen)"));
    await click(button("Yes"),near("Received Cryotherapy (referred from HPV DNA)"));
 });
  
 step("Asking patient if received Conization or LEEP (referred from VIA/VILI) and Conization or LEEP (referred from Pap Screen) in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Conization or LEEP (referred from VIA/VILI)"));
    await click(button("Yes"),near("Received Conization or LEEP (referred from Pap Screen)"));
 });
  
 step("Asking patient if received Conization or LEEP (referred from HPV DNA)) and cervical cancer treatment (from VIA/VILI) in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Conization or LEEP (referred from HPV DNA)"));
    await click(button("Yes"),near("Received Any cervical cancer treatment (from VIA/VILI)"));
 });
  
 step("Asking patient if received cervical cancer treatment (from Pap Screen) and cervical cancer treatment (from HPV DNA) in Referrals Template form", async () => {
   await click(button("Yes"),near("Received Any cervical cancer treatment (from Pap Screen)"));
   await click(button("Yes"),near("Received Any cervical cancer treatment (from HPV DNA)"));
 });
  
 step("Asking patient if received Advanced treatment for cervical cancer and Hypertension management in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Advanced treatment for cervical cancer"));
    await click(button("Yes"),near("Received Hypertension management"));
 });
  
 step("Asking patient if received Diabetes management – gestational and Diabetes management – non-gestational in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Diabetes management – gestational"));
    await click(button("Yes"),near("Received Diabetes management – non-gestational"));
 });
  
 step("Asking patient if received Treatment for urethral discharge, men and Treatment for urethral discharge, women in Referrals Template form", async () => {
   await click(button("Yes"),near("Received Treatment for urethral discharge, men"));
   await click(button("Yes"),near("Received Treatment for urethral discharge, women"));
 });
  
 step("Asking patient if received (Chlamydia, Gonorrhea, Trichomona) and Treatment for vaginitis in Referrals Template form", async () => {
   await click(button("Yes"),near("Received (Chlamydia, Gonorrhea, Trichomona)"));
   await click(button("Yes"),near("Received Treatment for vaginitis"));
 });
  
 step("Asking patient if received Treatment for cervicitis and Treatment for non-herpetic genital ulcer in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Treatment for cervicitis"));
    await click(button("Yes"),near("Received Treatment for non-herpetic genital ulcer"));
 });
  
 step("Asking patient if received (Syphilis, Chancroid) and Treatment for genital herpes in Referrals Template form", async () => {
    await click(button("Yes"),near("Received (Syphilis, Chancroid)"));
    await click(button("Yes"),near("Received Treatment for genital herpes"));
 });
  
 step("Asking patient if received lymphogranuloma (venerium) and Treatment for lower abdominal pain in Referrals Template form", async () => {
   await click(button("Yes"),near("Received lymphogranuloma (venerium)"));
   await click(button("Yes"),near("Received Treatment for lower abdominal pain"));
 });
  
 step("Asking patient if received any unknown treatment in Referrals Template form", async () => {
    await click(button("Yes"),near("Received Treatment unknown"));
 });
  
 step("Click on Save", async () => {
    await waitFor(1000);
    await click("Save");
 });
  
 step("Going to dashboard for checking for replication of <content>",async (content) => {
     await waitFor(1000);
     await click(identifier);
     await waitFor(2000);
     await highlight(content, below("Form"));
     assert.ok(await text(content,below("Form")).exists());
     console.log(content+" is replicated");
 });
  
  
 
