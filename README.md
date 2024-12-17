# The Glaze Craze
Where creativity meets community – design, vote, and collect pottery with Glaze Drops!

## General

### Project purpose

The Glaze Craze is a pottery-focused web platform where users can submit design ideas, vote for their favorites using a points-based system called Glaze Drops, and "purchase" featured pottery items with these points. The project showcases skills in user authentication, CRUD functionality (create, read, update, delete) for design submissions, a voting system, and an interactive shop experience, all tied to a gamified currency (the Glaze Drops). It mimics an e-commerce experience while fostering community engagement through comments and voting, without involving real payments.

## UX Design 

### User stories

https://docs.google.com/spreadsheets/d/1jqOVpe2f_0CdKMf52pZD2N2SH2e1sgSe9R-3Mk8zKZA/edit?gid=0#gid=0

## Features

**Key Features:**
  - User registration and login with a "remember me" feature
  - Database for storing user data and Glaze Drops balance
  - Functionality to create edit, delete, and share design submissions
  - A voting and commenting system for designs
  - Potentially: A "shop" where users can spend Glaze Drops on pottery items with their designs

**Planned Features:**

https://docs.google.com/spreadsheets/d/1jqOVpe2f_0CdKMf52pZD2N2SH2e1sgSe9R-3Mk8zKZA/edit?gid=1537079432#gid=1537079432

### Existing features

## Technologies 

## Manual Testing Write up

### Bugs

| Bug | Screenshot | Solve |
|-----|------------|-------|
| On the first load of the mobile page, the responsive dropdown menu fails to open on the first tap of the toggle icon; it only responds after the second tap | _Insert screenshot_ | I tried to solve it by adding ".off" to .navbar, but no result |

## Deployment

_Forking, cloning ...?_ 

## References

### Media credits

- favicon: https://favicon.io/emoji-favicons/funeral-urn

### Connecting your Mongo database

- **Connect to Mongo CLI on a IDE**
- navigate to your MongoDB Clusters Sandbox
- click **"Connect"** button
- select **"Connect with the MongoDB shell"**
- select **"I have the mongo shell installed"**
- choose **mongosh (2.0 or later)** for : **"Select your mongo shell version"**
- choose option: **"Run your connection string in your command line"**
- in the terminal, paste the copied code `mongo "mongodb+srv://<CLUSTER-NAME>.mongodb.net/<DBname>" --apiVersion 1 --username <USERNAME>`
  - replace all `<angle-bracket>` keys with your own data
- enter password _(will not echo **\*\*\*\*** on screen)_

------

