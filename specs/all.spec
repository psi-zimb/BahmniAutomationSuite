# Bahmni testing
This is an executable specification file. This file follows markdown syntax. Every heading in this file denotes a scenario. Every bulleted point denotes a step.
To execute this specification, use
   npm test
 
## Successful login
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
 
## Unsuccessful login without password
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Select Location
* Click on Login button
* Page contains "You are not authenticated or your session expired. Please login."
 
## Unsuccessful login without username
* Goto Bahmni page
* Click on Clinical Service
* Enter Password
* Select Location
* Click on Login button
* Page contains "You are not authenticated or your session expired. Please login."
 
 
## Unsuccessful login when user forgets to enter Location
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Click on Login button
* Page contains "Please select an item in the list."
 
 
## Creating a new patient record
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Click on Create New
* Filling identifier and name fields of patient
* Filling gender, date of birth and address details of patient
* Filling additional identifiers, telephone number and education details of patient
* Filling occupation, nationality and national ID details of patient
* Filling ethnicity and marital status details of patient
* Filling residence and district of birth details of patient
* Filling mother's name, twin status, a kin's name and relationship status with that kin details of patient
* Filling address, phone number details of that kin and population details of patient
* Filling referred by, contact tracing and date at which client is texted details of patient
* Filling index client code and relationship to index details of patient
* Filling site type and outreach status details of patient
* Filling outreach site name, moonlight testing and dreams activity details of patient
* Filling details of nearest hospital and HIV test status of patient
* Filling couple testing details of patient
* Saving details of patient
* Retrieving details of patient
 
## Enroll patient into PrEP program
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Enter patient ID
* Click on Search
* Start visit
* Click on unplanned or walk in visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Programs
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Add New PrEP Enrollment
* Going to PrEP dashboard
* Goto home page
 
## Enroll patient into FPS program
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Enter patient ID
* Click on Search
* Start visit
* Click on unplanned or walk in visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Programs
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Add New FPS Enrollment
* Going to FPS dashboard
* Goto home page
 
## Enroll patient into ART program
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Enter patient ID
* Click on Search
* Start visit
* Click on unplanned or walk in visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Programs
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Add New ART Enrollment
* Going to ART dashboard
* Goto home page
 
## Enroll patient into any program
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Enter patient ID
* Click on Search
* Start visit
* Click on unplanned or walk in visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Programs
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Add New any Enrollment
* Going to any dashboard
* Goto home page
 
## Gynecology form filling
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Enter patient ID
* Click on Search
* Start visit
* Click on unplanned or walk in visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Clinical
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Consultation
* Click on Add new observation
* Click on Gynecology
* Filling the Gynecology form1
* Filling the Gynecology form2
* Filling the Gynecology form3
* Filling the Gynecology form4
* Filling the Gynecology form5
* Filling the Gynecology form6
* Click on Save
 
## PrEP Initial form filling
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Enter patient ID
* Click on Search
* Start visit
* Click on PrEP Initial visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Clinical
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Consultation
* Click on Add new observation
* Click on PrEP Initial
* Filling details of service provided and date of HIV test if done in PrEP Initial form
* Filling details of health related details of patient in PrEP Initial form along with pregnancy details
* Filling details of breastfeeding details, drugs or medications, ARV and sexual activeness of patient in PrEP Initial form
* Filling details of relationship details, HIV status of partner, usage of condoms and other details of patient in PrEP Initial form
* Filling details of sexual partners, non-regular partners and other sexual details of patient in PrEP Initial form
* Filling details of contraception, PEP, unprotected sex and other relation details of patient in PrEP Initial form
* Filling details of sexual partner, condoms and condom burst of patient in PrEP Initial form
* Filling details of indoxicated with alcohol or drugs, emergency contraception and drugs injection in past 6 months of patient in PrEP Initial form
* Filling details of primary infection, client's HIV status and PrEP details of patient in PrEP Initial form
* Filling drug details of patient in PrEP Initial From
* Filling details of sex of patient and PrEP status in PrEP Initial form
* Click on Save
 
## PrEP Continuation form filling
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Enter patient ID
* Click on Search
* Start visit
* Click on PrEP Continuation visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Clinical
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Consultation
* Click on Add new observation
* Click on PrEP Continuation
* Filling the details of service provided and health related details of patient in PrEP Continuation form
* Filling the details of family planning status, implants and breastfeeding details of patient in PrEP Continuation form
* Filling the details of medications, sexual partners and partners HIV status of patient in PrEP Continuation form
* Filling the details of condom usage, condom burst and STI of patient in PrEP Continuation form
* Filling the details of indoxication and sexual details of patient in PrEP Continuation form
* Filling the details of emergency contraception, primary infection, PrEP details and HIV status of patient in PrEP Continuation form
* Filling the details of PrEP and defaulted treatment of patient in PrEP Continuation form
* Filling the dates of medication resupply of patient in PrEP Continuation form
* Click on Save
 
## PrEP Screening form filling
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Clinical
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Consultation
* Click on Add new observation
* Click on PrEP Screening Tool
* Filling the details of service provided and HIV status in PrEP Screening Tool form
* Filling the details PrEP status in PrEP Screening Tool form
* Click on Save
 
## NCD form filling
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Enter patient ID
* Click on Search
* Start visit
* Click on unplanned or walk in visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Clinical
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Consultation
* Click on Add new observation
* Click on NCD
* Filling details of service provided and screening details of hypertension, Type 2 diabetes of patient in the NCD form
* Filling details of hypertension management and diabetes management of patient in the NCD form
* Click on Save
 
## IPV form filling
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Enter patient ID
* Click on Search
* Start visit
* Click on unplanned or walk in visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Clinical
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Consultation
* Click on Add new observation
* Click on IPV
* Filling details of service provided of patient in the IPV form
* Filling details of sexual or physical abuse of patient in the IPV form
* Click on Save
 
## Assessment and Planning form filling
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Enter patient ID
* Click on Search
* Start visit
* Click on unplanned or walk in visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Clinical
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Consultation
* Click on Add new observation
* Click on Assessment and Plan
* Filling details of type of plan and assessment, activity status and dates of reinitiation of patient in the Assessment and Plan form
* Filling details of type of medication, its duration, date of initiation of patient and checking if eligible for viral load or not in the Assessment and Plan form
* Filling details of sample and its type and results in the Assessment and Plan form
* Filling details of V/L and viral load result of patient in the Assessment and Plan form
* Filling details of EAC of patient in the Assessment and Plan form
* Click on Save
 
## Provider HIV test counselling form filling
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Enter patient ID
* Click on Search
* Start visit
* Click on unplanned or walk in visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Clinical
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Consultation
* Click on Add new observation
* Click on Provider HIV test counselling
* Filling the details of service provided, workplace and reasons for not bringing partner in Provider HIV test counselling form
* Filling the details of family planning, children and breast feeding of patient in Provider HIV test counselling form
* Filling the details of showing interest in HIV status, T and C site and health status of patient in Provider HIV test counselling form
* Filling the details of chest pain status and breathing status of patient in Provider HIV test counselling form
* Filling the details of breathing status and about fever and night sweats of patient in Provider HIV test counselling form
* Filling the details of night sweats, weight loss details and TB status of patient in Provider HIV test counselling form
* Filling the details of last test details of HIV and result, sexual status of patient in Provider HIV test counselling form
* Filling the details of results of HIV test, results collected by lab technician and late read results of patient in Provider HIV test counselling form
* Filling the details of post test counseling and sexual details of patient in Provider HIV test counselling form
* Filling the details of STI and condom usage of patient in Provider HIV test counselling form
* Filling the details of history of sexual abuse and risk reduction plan of patient in Provider HIV test counselling form
* Filling the details of index testing and home based care of patient in Provider HIV test counselling form
* Filling the details of family planning status, MC counselling, referrals and test and kit details of patient in Provider HIV test counselling form
* Click on Save
 
## Referrals Template form filling
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Enter patient ID
* Click on Search
* Start visit
* Click on unplanned or walk in visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Clinical
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Consultation
* Click on Add new observation
* Click on Referrals Template
* Filling service provided, referral details and the referred program details of patient in Referrals Template form
* Filling registration date and asking patient if referred for HIV or not in Referrals Template form
* Asking patient if referred for Post Exposure Prophylaxis and PrEP in Referrals Template form
* Asking patient if referred for STI –screening and VMMC in Referrals Template form
* Asking patient if referred for HIV rapid test and DBS-  PCR HIV test in Referrals Template form
* Asking patient if referred for CD4 Count and Viral load test in Referrals Template form
* Asking patient if referred for FBC and LFT in Referrals Template form
* Asking patient if referred for UandEs and Creatinine in Referrals Template form
* Asking patient if referred for Pre-ART registration and ART Initiation in Referrals Template form
* Asking patient if referred for ART refill (defaulters) and ART Decentralization in Referrals Template form
* Asking patient if referred for PMTCT/Option B+ and CTX/OI Management in Referrals Template form
* Asking patient if referred for CARG enrolment/ Transfer and Support Groups in Referrals Template form
* Asking patient if referred for ART official transfer and ART reinitiating in Referrals Template form
* Asking patient if referred for TB screening and TB Diagnosis/Sputum Collection in Referrals Template form
* Asking patient if referred for TB Treatment/Management and TB Re-Initiation after LTFU in Referrals Template form
* Asking patient if referred for ANC and Emergency contraception in Referrals Template form
* Asking patient if referred for Family Planning and Cancer of Cervix Screening in Referrals Template form
* Asking patient if referred for Breast Cancer Screening and Psycho-social support in Referrals Template form
* Asking patient if referred for Economic Strengthening and Educational services in Referrals Template form
* Asking patient if referred for Emergency Shelter and Nutrition Support in Referrals Template form
* Asking patient if referred for Legal Counsel and Victim Friendly Services in Referrals Template form
* Asking patient if referred for Vital Registration and received HIV Counselling Services in Referrals Template form
* Asking patient if received Post Exposure Prophylaxis Services and PrEP Services in Referrals Template form
* Asking patient if received STI –screening and VMMC Services in Referrals Template form
* Asking patient if received HIV Rapid Test and DBS- PCR HIV Testing Services in Referrals Template form
* Asking patient if received CD4 Count and Viral Load test Services in Referrals Template form
* Asking patient if received FBC and LFT Services in Referrals Template form
* Asking patient if received UandEs and Creatinine Services in Referrals Template form
* Asking patient if received Pre-ART registration and ART Initiation Services in Referrals Template form
* Asking patient if received ART refill (defaulters) Services and ART Decentralization Services in Referrals Template form
* Asking patient if received PMTCT/Option B+ Services and CTX/OI Management Services in Referrals Template form
* Asking patient if received CARG enrolment/ Transfer Services and Support Groups Services in Referrals Template form
* Asking patient if received ART official transfer Services and ART reinitiating Services in Referrals Template form
* Asking patient if received TB screening Services and TB Diagnosis/Sputum Collection Services in Referrals Template form
* Asking patient if received TB Treatment/Management Services and TB Re-Initiation after LTFU Services in Referrals Template form
* Asking patient if received ANC Services and Emergency contraception Services in Referrals Template form
* Asking patient if received Family Planning Services and Cancer of Cervix Screening Services in Referrals Template form
* Asking patient if received Breast Cancer Screening Services and Psycho-social support Services in Referrals Template form
* Asking patient if received Economic Strengthening Services and Educational services Services in Referrals Template form
* Asking patient if received Emergency Shelter Services and Nutrition Support Services in Referrals Template form
* Asking patient if received Legal Counsel Services and Victim Friendly Services in Referrals Template form
* Asking patient if received Vital Registration Services and Progestin-only pills in Referrals Template form
* Asking patient if received Combined oral contraceptive pills and Injectable 1 month in Referrals Template form
* Asking patient if received Injectable 2 months and Injectable 3 months in Referrals Template form
* Asking patient if received Injectable duration unknown and Cyclebeads in Referrals Template form
* Asking patient if received IUS 3 insertion and IUD 5 insertion in Referrals Template form
* Asking patient if received IUD 10 insertion and IUD insertion duration unknown in Referrals Template form
* Asking patient if received Implant 3 insertion and Implant 4 insertion in Referrals Template form
* Asking patient if received Implant 5 insertion and Implant insertion duration unknown in Referrals Template form
* Asking patient if received Vasectomy and Tubal ligation in Referrals Template form
* Asking patient if received Opioid treatment and Cryotherapy (referred from VIA/VILI) in Referrals Template form
* Asking patient if received Cryotherapy (referred from Pap Screen) and Cryotherapy (referred from HPV DNA) in Referrals Template form
* Asking patient if received Conization or LEEP (referred from VIA/VILI) and Conization or LEEP (referred from Pap Screen) in Referrals Template form
* Asking patient if received Conization or LEEP (referred from HPV DNA)) and cervical cancer treatment (from VIA/VILI) in Referrals Template form
* Asking patient if received cervical cancer treatment (from Pap Screen) and cervical cancer treatment (from HPV DNA) in Referrals Template form
* Asking patient if received Advanced treatment for cervical cancer and Hypertension management in Referrals Template form
* Asking patient if received Diabetes management – gestational and Diabetes management – non-gestational in Referrals Template form
* Asking patient if received Treatment for urethral discharge, men and Treatment for urethral discharge, women in Referrals Template form
* Asking patient if received (Chlamydia, Gonorrhea, Trichomona) and Treatment for vaginitis in Referrals Template form
* Asking patient if received Treatment for cervicitis and Treatment for non-herpetic genital ulcer in Referrals Template form
* Asking patient if received (Syphilis, Chancroid) and Treatment for genital herpes in Referrals Template form
* Asking patient if received lymphogranuloma (venerium) and Treatment for lower abdominal pain in Referrals Template form
* Asking patient if received any unknown treatment in Referrals Template form
* Click on Save
 
## Creating a patient, starting a visit, enrolling patient into PrEP program and filling PrEP Initial form
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Click on Create New
* Filling identifier and name fields of patient
* Filling gender, date of birth and address details of patient
* Filling additional identifiers, telephone number and education details of patient
* Filling occupation, nationality and national ID details of patient
* Filling ethnicity and marital status details of patient
* Filling residence and district of birth details of patient
* Filling mother's name, twin status, a kin's name and relationship status with that kin details of patient
* Filling address, phone number details of that kin and population details of patient
* Filling referred by, contact tracing and date at which client is texted details of patient
* Filling index client code and relationship to index details of patient
* Filling site type and outreach status details of patient
* Filling outreach site name, moonlight testing and dreams activity details of patient
* Filling details of nearest hospital and HIV test status of patient
* Filling couple testing details of patient
* Saving details of patient
* Retrieving details of patient
* Start visit
* Click on unplanned or walk in visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Programs
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Add New PrEP Enrollment
* Going to PrEP dashboard
* Click on Consultation
* Click on Add new observation
* Click on PrEP Initial
* Filling details of service provided and date of HIV test if done in PrEP Initial form
* Filling details of health related details of patient in PrEP Initial form along with pregnancy details
* Filling details of breastfeeding details, drugs or medications, ARV and sexual activeness of patient in PrEP Initial form
* Filling details of relationship details, HIV status of partner, usage of condoms and other details of patient in PrEP Initial form
* Filling details of sexual partners, non-regular partners and other sexual details of patient in PrEP Initial form
* Filling details of contraception, PEP, unprotected sex and other relation details of patient in PrEP Initial form
* Filling details of sexual partner, condoms and condom burst of patient in PrEP Initial form
* Filling details of indoxicated with alcohol or drugs, emergency contraception and drugs injection in past 6 months of patient in PrEP Initial form
* Filling details of primary infection, client's HIV status and PrEP details of patient in PrEP Initial form
* Filling drug details of patient in PrEP Initial From
* Filling details of sex of patient and PrEP status in PrEP Initial form
* Click on Save
 
## Creating a patient, starting a visit, enrolling patient into PrEP program and filling NCD and IPV forms
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button
* Click on Registration
* Click on Create New
* Filling identifier and name fields of patient
* Filling gender, date of birth and address details of patient
* Filling additional identifiers, telephone number and education details of patient
* Filling occupation, nationality and national ID details of patient
* Filling ethnicity and marital status details of patient
* Filling residence and district of birth details of patient
* Filling mother's name, twin status, a kin's name and relationship status with that kin details of patient
* Filling address, phone number details of that kin and population details of patient
* Filling referred by, contact tracing and date at which client is texted details of patient
* Filling index client code and relationship to index details of patient
* Filling site type and outreach status details of patient
* Filling outreach site name, moonlight testing and dreams activity details of patient
* Filling details of nearest hospital and HIV test status of patient
* Filling couple testing details of patient
* Saving details of patient
* Retrieving details of patient
* Start visit
* Click on unplanned or walk in visit
* Enter amount in registration fees
* Click on Save
* Goto home page
* Click on Programs
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Add New PrEP Enrollment
* Going to PrEP dashboard
* Click on Consultation
* Click on Add new observation
* Click on NCD
* Filling details of service provided and screening details of hypertension, Type 2 diabetes of patient in the NCD form
* Filling details of hypertension management and diabetes management of patient in the NCD form
* Click on Save
* Click on Add new observation
* Click on IPV
* Filling details of service provided of patient in the IPV form
* Filling details of sexual or physical abuse of patient in the IPV form
* Click on Save

## Filling NCD form
* Click on Consultation
* Click on Add new observation
* Click on NCD
* Filling details of service provided and screening details of hypertension, Type 2 diabetes of patient in the NCD form
* Filling details of hypertension management and diabetes management of patient in the NCD form
 
## Checking if NCD form is saved or not
* Click on Save
* Page contains "Saved"
 
## Checking if NCD form is replicated in patients dashboard or not
* Going to dashboard for checking for replication of "NCD"
 
## Filling IPV form
* Click on Consultation
* Click on Add new observation
* Click on IPV
* Filling details of service provided of patient in the IPV form
* Filling details of sexual or physical abuse of patient in the IPV form
 
## Checking for IPV form is saved or not
* Click on Save
* Page contains "Saved"
 
## Checking if IPV form is replicated in patients dashboard or not
* Going to dashboard for checking for replication of "IPV Form"
