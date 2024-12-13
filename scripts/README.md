# The Glaze Craze
Where creativity meets community – design, vote, and collect pottery with Glaze Drops!

## General

### Project purpose

The Glaze Craze is a pottery-focused web platform where users can submit design ideas, vote for their favorites using a points-based system called Glaze Drops, and "purchase" featured pottery items with these points. The project showcases skills in user authentication, CRUD functionality (create, read, update, delete) for design submissions, a voting system, and an interactive shop experience, all tied to a gamified currency (the Glaze Drops). It mimics an e-commerce experience while fostering community engagement through comments and voting, without involving real payments.

### Project Scope

**Core Goals:**
  - Build a user-friendly web application that includes user authentication (sign-up, log in and stay logged in, log out), user interactions (create, save, edit, delete and interact with other user's posts), and item-based transactions
  - Introduce a gamified system with Glaze Drops to add interactivity and user engagement

**Key Features:**
  - User registration and login with a "remember me" feature
  - Database for storing user data, Glaze Drops balance, and shared and "purchased" pottery designs
  - Functionality to create edit, delete, and share design submissions ("items")
  - A voting and commenting system for designs
  - A "shop" where users can spend Glaze Drops on pottery items or their designs

### MVP

<details>
<summary>Must-have features</summary>

<br>

*Home page:*
- After log in a personal greeting is displayed to the logged in User
- Presenting "the artist" and it's mission and journey

*User Authentication:*
- User registration and login with email/password using form
- Remember me functionality

*Glaze Drops System:*
- Default Glaze Drops balance on user registration (e.g., 100 Glaze Drops)
- Increment drops for actions like voting, commenting, or submitting designs
- Deduct drops for "purchasing" items

*Design Requests (Items):*
- Users can create, edit, and delete design submissions
- Each submission includes a title, description, and optional image upload
- Upload of a design request = 10 Glaze Drops

*Community Engagement:*
- Users can comment on design requests
- Commenting = 5 Glaze Drops

*Voting System:*
- Users can vote one time for a design
- Display the total votes for each design
- Voting = 1 Glaze Drops

*Shop Feature:*
- A dedicated shop page displaying pottery items
- Users can buy items using their Glaze Drops

*User Profile:*
- Display user info (name, email, etc.)
- Show current Glaze Drops balance
- List of their submitted designs and purchase history
</details>

### Other MoSCoW features

<details>
<summary>Should-have features</summary>
<br>

1. User Profile Page
- Show user info (name, email).
- Display Glaze Drops balance and submitted design requests.
- Include a list of purchased items.

2. Leaderboard for Top Voted Designs
- Display the most popular design requests for increased visibility.
</details>

<br>

<details>
<summary>Could-have features</summary>
<br>

1. Advanced Image Validation
- Add backend validation for image size and format.
- Provide error messages for oversized or invalid images.
2. Transaction history in User Profile Page
</details>

## UX Design 

### Design brief

...

### User stories

https://docs.google.com/spreadsheets/d/1jqOVpe2f_0CdKMf52pZD2N2SH2e1sgSe9R-3Mk8zKZA/edit?gid=0#gid=0

## Features

**Key features**

1. Submit pottery design ideas and requests
2. Vote for their favorite designs
3. Collect points in an in-platform currency called Glaze Drops by sharing, voting and commenting
4. "Purchase digital items" using Glaze Drops

### Existing features

### Future features

- Duplicate Submission Prevention to avoid spam and redundancy
- Content Moderation ot ensure a safe community environment
- Admin User Role
- Display of item count in shopping basket on home/shop
- Wishlist
- Real Payment System
- Admin interface for easier adding, editing and removing items to the shop
- Follower/Messagin system/option for users to connect

## Technologies 

## Manual Testing Write up

## Deployment

_Forking, cloning ..._

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

