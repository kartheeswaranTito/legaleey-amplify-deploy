Steps need to be followed:
--------------------------

cd legaleey-next-amplify
   
npm install   

Enter amplify configure

press Enter to continue

select region as us-east-1

press Enter to continue

Enter the access key and secretAccessKey 

Enter Profile name (any name ex: xyz)

Enter the command : amplify pull --appId d1fy3vws4mn48e --envName dev

( This command is used to pull the backend enviroinment to your local machine to access the  
 userpool : (legaleewebapp2eb7fe60_userpool_2eb7fe60-dev) 
 s3 bucket: (legaleewebappbucketba0cc-dev) )

Select AWS profile

Choose the profile name as you have already created (profile name:xyz)

Select Visual Studio Code

Select Javascript

Select react

Source Directory Path:  press Enter

Distribution Directory Path: press Enter

Build Command: press Enter  

Start Command: press Enter

Enter amplify pull

npm run dev
