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
 