# Bahmni testing
Given we have login credentials
When we fill in details of patients in registration form
Then patient must be registered in Bahmni
When patient is registered
Then start on a visit for the patient and fill in IPV form, NCD form, Assessment and Plan form and TB Screening and History form

## Logging in
* Goto Bahmni page
* Click on Clinical Service
* Enter Username
* Enter Password
* Select Location
* Click on Login button

## Going to registartion form to fill in details of a new patient
* Click on Registration
* Click on Create New

## Filling details of patient in registration form
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
 
## Saving details of patient
* Saving details of patient
 
## Checking if patient details are saved or not
* Page contains "Saved"
 
## Getting ID of new patient
* Retrieving details of patient
 
## Going for a visit
* Start visit
* Click on unplanned or walk in visit
* Enter amount in registration fees
 
## Saving details of visit
* Click on Save
 
## Checking if visit details are saved or not
* Page contains "Saved"
 
## Program enrollment
* Goto home page
* Click on Programs
* Click on All
* Enter patient ID in search field
* Click on Search
* Click on Add New PrEP Enrollment
 
## Checking for patient enrollment
* Page contains "Saved"
 
## Going to dashboard for consultation
* Going to PrEP dashboard
 
## Filling Assessment and planning form
* Click on Consultation
* Click on Add new observation
* Click on Assessment and Plan
* Filling details of type of plan and assessment, activity status and dates of reinitiation of patient in the Assessment and Plan form
* Filling details of type of medication, its duration, date of initiation of patient and checking if eligible for viral load or not in the Assessment and Plan form
* Filling details of sample and its type and results in the Assessment and Plan form
* Filling details of V/L and viral load result of patient in the Assessment and Plan form
* Filling details of EAC of patient in the Assessment and Plan form
 
## Checking for Assessment and planning form is saved or not
* Click on Save
* Page contains "Saved"
 
## Checking if Assessment and planning form is replicated in patients dashboard or not
* Going to dashboard for checking for replication of "Assessment and Plan"
 
## Filling TB Screening and History form
* Click on Consultation
* Click on Add new observation
* Click on TB Screening and History
* Filling the details of service provided and type of visit of patient in TB Screening and History form
* Filling the details of IPT and HIV status of patient in TB Screening and History form
* Filling the details of ART status, Gene results and RIF resistance of patient in TB Screening and History form
* Filling the details of Gene xpert, X-ray results and TB details of patient in TB Screening and History form
* Filling the details of TB screening like chest pain, breath, cough symptoms of patient in TB Screening and History form
* Filling the details of TB screening like fever, weight loss details of patient in TB Screening and History form
* Filling the details of TB history like TB diagnosis, its location and episode details of patient in TB Screening and History form
* Filling the details of TB history like last treatment, TB details of parents and children of patient in TB Screening and History form
 
## Checking for TB Screening and History form is saved or not
* Click on Save
* Page contains "Saved"
 
## Checking if TB Screening and History form is replicated in patients dashboard or not
* Going to dashboard for checking for replication of "TB Screening and History"
 
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

## Checking if IPV form details are replicated or not
* Checking replication of service provided of patient in the IPV form
* Checking replication of details regarding physical abuse on patient in the IPV form
* Checking replication of details regarding sexual abuse on patient in the IPV form

## Filling PrEP Initial form
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
 
## Checking for PrEP Initial form is saved or not
* Click on Save
* Page contains "Saved"
 
## Checking if PrEP Initial form is replicated in patients dashboard or not
* Going to dashboard for checking for replication of "PrEP Initial"

## Filling PrEP Continuation form
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
 
## Checking for PrEP Continuation form is saved or not
* Click on Save
* Page contains "Saved"
 
## Checking if PrEP Continuation form is replicated in patients dashboard or not
* Going to dashboard for checking for replication of "PrEP Continuation"

## Filling PrEP Screening form
* Click on Consultation
* Click on Add new observation
* Click on PrEP Screening Tool
* Filling the details of service provided and HIV status in PrEP Screening Tool form
* Filling the details PrEP status in PrEP Screening Tool form
 
## Checking for PrEP Screening form is saved or not
* Click on Save
* Page contains "Saved"
 
## Checking if PrEP Screening form is replicated in patients dashboard or not
* Going to dashboard for checking for replication of "PrEP Screening Tool"

## Filling Provider HIV test counselling form
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

## Checking for Provider HIV test counselling form is saved or not
* Click on Save
* Page contains "Saved"
 
## Checking if Provider HIV test counselling form is replicated in patients dashboard or not
* Going to dashboard for checking for replication of "Provider HIV test counselling"

## Filling Referrals Template form
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

## Checking for Referrals Template form is saved or not
* Click on Save
* Page contains "Saved"
 
## Checking if Referrals Template form is replicated in patients dashboard or not
* Going to dashboard for checking for replication of "Referrals Template"

## Going back to home page
* Going back to home page from patient dashboard

## Scheduling appointment for patient
* Click on Appointment Scheduling
* Click on Appointments List
* Click on Add new appointment
* Filling details like patient Id, service and provider for appointment
* Filling details like date and time of appointment for appointment
* Click on Save
* Click on proceed and save
