import { uid } from 'uid'

export const blogPosts = [
  {
    id: uid(16),
    slug: 'deploy-node-express-api-aws-ec2-amazon-linux-2',
    title: 'How to Deploy a Node Express API to AWS EC2 Amazon Linux 2',
    description: 'A step-by-step guide to hosting your Node Express API on an AWS EC2 Amazon Linux 2 instance and making it publicly accessible.',
    date: 'September 4, 2024',
    dateISO: '2024-09-04',
    readTime: '3 min read',
    tags: ['Node.js', 'AWS', 'EC2', 'DevOps'],
    mediumUrl: 'https://jonathans199.medium.com/how-to-deploy-a-simple-node-express-api-to-an-aws-ec2-amazon-linux-2-instance-6e5b262d5e8b',
    content: `**WWYL (what will you learn):**
1. Host NODE API on AWS EC2 instance
2. Access NODE API from the web

There are many ways to deploy a Node Express API to AWS, but this is one of the most straight forward ways to set up.

**Overview of steps:**
1. Create EC2 instance in AWS
2. Connect and remote into EC2 instance via web
3. Once connected Install Node, NVM, GIT on EC2 instance
4. Allow access to your EC2 instance via the port where your API is running

**Pre-requirements:**
1. Node Express API in a GitHub repository
2. AWS account *(if you don't have an AWS account you could open one here [https://aws.amazon.com/free/](https://aws.amazon.com/free/))*

## Steps in detail

### 1. Create EC2 instance in AWS

![AWS EC2 creation interface](/img/writings/ec2-amazon-linux/01-create-ec2.png)

![EC2 instance configuration](/img/writings/ec2-amazon-linux/02-ec2-config.png)

![Select Amazon Linux 2 OS](/img/writings/ec2-amazon-linux/03-select-os.png)

### 2. Connect and remote into EC2 instance

![Select EC2 instance and click Connect](/img/writings/ec2-amazon-linux/04-select-connect.png)

![Click Connect button to remote in](/img/writings/ec2-amazon-linux/05-connect-button.png)

### 3. Once connected to the EC2 instance — Install Node with NVM + Git on the EC2 instance

\`\`\`bash
# run system update
$ sudo yum update

# Download and install nvm
$ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash

# Activate nvm on machine
$ . ~/.nvm/nvm.sh

# install Node version
$ nvm install 18

# check if it was installed with
$ node -v

# we should get something like
Creating default alias: default -> 18 (-> v18.14.2)

# Install Git
$ sudo yum install git

# check if it was installed properly
$ git version
\`\`\`

**Ref:** [https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html)

### 4. Clone your NODE API from the GitHub Repository to your new EC2 instance

a. While connected, clone your API code from your GitHub onto your EC2 instance using the **HTTPS** link, not the **SSH**

\`\`\`bash
# run this while you are connected to your EC2 instance
$ git clone 'your repo link'
\`\`\`

b. Install all the dependencies, by going inside the cloned folder and usually by npm install

### 6. Manually run the NODE API

\`\`\`bash
# run this while you are connected to your EC2 instance
ubuntu@ip-172-31-90-127 $ node 'your cloned folder'/index.js
// make sure it runs on the server, just as you run it locally on your machine
\`\`\`

### 7. Allow access to your EC2 instance from anywhere via the port where your API is running

Choose the EC2 instance and Select **Security Groups** review the **Inbound Rules** and the **PORT 4000** for example

![Security groups inbound rules](/img/writings/ec2-amazon-linux/06-security-groups.png)

Find the public **IP ADDRESS**, by selecting the instance

![Instance details with public IP](/img/writings/ec2-amazon-linux/07-public-ip.png)

### 8. Finally use the public IP address with the port

![Browser URL bar with IP:port](/img/writings/ec2-amazon-linux/08-browser-url.png)

Your API should be running using the EC2 public IP address and the Port where your API is listening to like

[http://54.89.183.158:4000/](http://54.89.183.158:4000/)`,
  },
  {
    id: uid(16),
    slug: 'create-simple-node-api-with-typescript',
    title: 'How to Create a Simple Node API with TypeScript',
    description: 'Build a Node.js Express API from scratch using TypeScript with proper configuration, nodemon, and development workflow.',
    date: 'July 17, 2023',
    dateISO: '2023-07-17',
    readTime: '3 min read',
    tags: ['Node.js', 'TypeScript', 'Express', 'API'],
    mediumUrl: 'https://jonathans199.medium.com/how-to-create-a-simple-node-api-with-typescript-4ab631b43503',
    content: `![Node.js + TypeScript project setup](/img/writings/node-api-typescript/01-header.jpg)

## If you don't have a project already let's create one from scratch

1. Create a new project folder

\`\`\`bash
$ mkdir node-api-ts
\`\`\`

2. Go into the created project folder and initialize npm in the project

\`\`\`bash
$ cd node-api-ts

# this initializes npm and creates a new file called package.json with defaults
$ npm init -y
\`\`\`

3. Make a src folder and a index.ts file inside

\`\`\`bash
$ mkdir src && cd src && touch index.ts && cd ..
\`\`\`

## Now let's implement Typescript on the project

1. Make sure you have Typescript installed on your computer

\`\`\`bash
# this tells you what version of Typescript you have installed
$ tsc -v

# for example my version is 5.0.2
$ Version 5.0.2

# if you don't get a version number is because is not installed yet
# so lets install it globally on your computer with this command
$ npm i -g typescript

# then check again if it gives you the version with tsc -v
\`\`\`

2. Initialize Typescript in your project

\`\`\`bash
# this will create a tsconfig.json file in your root folder
$ tsc --init
\`\`\`

3. Update some properties in the tsconfig.json file

\`\`\`json
{
 "compilerOptions": {
  "target": "es2016",
  "module": "commonjs",
  "rootDir": "./src",
  "outDir": "./build",
  "esModuleInterop": true,
  "forceConsistentCasingInFileNames": true,
  "strict": true,
  "skipLibCheck": true
 }
}
\`\`\`

4. Add NPM packages to the project

\`\`\`bash
# install express and cors
$ npm i express cors

# the -D will install this package into the devDependencies
$ npm i ts-node @types/express @types/cors -D
\`\`\`

5. Let's configure the project to use type: module so we could use import rather than require to use the NPM packages

\`\`\`json
# in package.json add the following line

"type": "module",
\`\`\`

![package.json after adding type:module](/img/writings/node-api-typescript/02-package-json.png)

6. Now let's add some code to the index.ts file

\`\`\`typescript
// src/index.ts
// minimal Express API

import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
 res.json({ greeting: 'Hello world!' })
})

app.listen(4000, () => console.log('api listening on PORT ', 4000))
\`\`\`

9. Manually let's trigger the typescript compiler which basically creates the build folder and generates the .js files from the .ts files

\`\`\`bash
# run the typescript compiler with
$ tsc
\`\`\`

7. Nodemon installed?

\`\`\`bash
# check if you have nodemon installed with:
$ nodemon -v

# if it does not gives you a version number then install it with:
$ npm i -g nodemon
\`\`\`

10. Finally let's add a start script to package.json that will allow Nodemon to listen to the .TS files changes

\`\`\`json
"scripts": {
  "start": "nodemon --exec ts-node-esm ./src/*.ts",
\`\`\`

Now you should be able to listen to your .ts files with

\`\`\`bash
npm run start
\`\`\`

![Nodemon listener running](/img/writings/node-api-typescript/03-nodemon-running.png)

Enjoy 🍻`,
  },
  {
    id: uid(16),
    slug: 'apply-ssl-https-webapp-aws-s3-bucket',
    title: 'How to Apply SSL for HTTPS on a WebApp Hosted in AWS S3 Bucket',
    description: 'Enable HTTPS for your S3-hosted web application using Route 53, Certificate Manager, and CloudFront Distribution.',
    date: 'December 13, 2022',
    dateISO: '2022-12-13',
    readTime: '6 min read',
    tags: ['AWS', 'S3', 'SSL', 'CloudFront', 'Route 53'],
    mediumUrl: 'https://jonathans199.medium.com/how-to-apply-ssl-for-https-on-a-webapp-hosted-in-aws-s3-bucket-3ef53565e51e',
    content: `Have you ever hosted your web app on AWS S3 and noticed that it only serves over HTTP instead of HTTPS? This guide walks you through the full setup using Route 53, AWS Certificate Manager, and CloudFront to get that padlock in the address bar.

![Overview diagram](/img/writings/ssl-s3/01-overview-diagram.jpeg)

## Steps Overview

1. Register domain name using Route 53 (or point your nameservers to AWS)
2. Generate SSL certificate for your domain via AWS Certificate Manager
3. Create S3 bucket with **same name as your domain** (e.g. codewithdad.com)
4. Create CloudFront Distribution pointing to your S3 bucket using the HTTP link
5. Create an A record in Route 53 pointing to your CloudFront Distribution

## Step 1: Register Domain with Route 53

![Search for Route 53](/img/writings/ssl-s3/02-route53-search.png)

![Create hosted zone](/img/writings/ssl-s3/03-hosted-zone.png)

![Check domain availability](/img/writings/ssl-s3/04-domain-register.png)

![Domain nameservers pointing to Google](/img/writings/ssl-s3/05-domain-nameservers.png)

![Add AWS nameservers](/img/writings/ssl-s3/06-aws-nameservers.png)

- Access the Route 53 service in AWS
- Create a Hosted Zone named after your domain
- Either register the domain directly through Route 53, or point your existing domain's nameservers to the ones AWS provides

## Step 2: Generate SSL Certificate via Certificate Manager

![Certificate Manager - click Request](/img/writings/ssl-s3/07-cert-request.png)

![Certificate - click Next](/img/writings/ssl-s3/08-cert-next.png)

![Type domain name](/img/writings/ssl-s3/09-cert-domain.png)

- Navigate to AWS Certificate Manager
- Click "Request a certificate" and select "Request a public certificate"
- Enter your domain name and use the default validation settings
- **Note:** Processing can take approximately one hour — grab a coffee

## Step 3: Create S3 Bucket

**Critical:** The bucket name must match your desired domain exactly (e.g. \`codewithdad.com\`).

![S3 - Create Bucket](/img/writings/ssl-s3/10-s3-create.png)

![Name bucket same as domain](/img/writings/ssl-s3/11-s3-name.png)

![Uncheck Block Public Access](/img/writings/ssl-s3/12-s3-public-access.png)

![Click Create Bucket](/img/writings/ssl-s3/13-s3-create-button.png)

- Navigate to S3 and create a new bucket using your domain name
- Uncheck "Block all public access" and acknowledge the warning
- After creation, go to bucket **Properties** and enable **Static Website Hosting**
- Set \`index.html\` as the default for both the Index and Error document fields

![Select Properties](/img/writings/ssl-s3/14-s3-properties.png)

![Static Website Hosting - Edit](/img/writings/ssl-s3/15-static-hosting-edit.png)

![Set index.html for both fields](/img/writings/ssl-s3/16-static-hosting-index.png)

Apply this bucket policy to allow public read access (go to **Permissions → Bucket Policy**):

\`\`\`json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-bucket-name-here/*"
        }
    ]
}
\`\`\`

![Bucket Policy - Edit under Permissions](/img/writings/ssl-s3/17-bucket-policy-edit.png)

![Bucket policy JSON](/img/writings/ssl-s3/18-bucket-policy.png)

- Upload your website content. **For React apps: upload the contents of the BUILD folder, not the folder itself**

![Build folder contents](/img/writings/ssl-s3/19-build-folder.png)

![S3 bucket URL at bottom](/img/writings/ssl-s3/20-s3-url.png)

![Web app showing on S3 link](/img/writings/ssl-s3/21-s3-webapp.png)

- Test by visiting the S3-provided static website URL to confirm everything loads

## Step 4: Create CloudFront Distribution

![CloudFront - Create Distribution](/img/writings/ssl-s3/22-cloudfront-create.png)

**Important warning:** When entering the Origin Domain, **paste the HTTP link directly from your S3 static website endpoint — do NOT select the bucket from the dropdown**. The dropdown option uses a different URL format that breaks routing.

![Paste S3 URL as origin (NOT dropdown)](/img/writings/ssl-s3/23-cloudfront-origin.png)

- Create a new CloudFront Distribution
- Paste your S3 bucket's static website URL as the Origin Domain (strip the \`http://\` prefix)
- Under Viewer Protocol Policy, select **"Redirect HTTP to HTTPS"**
- For Allowed HTTP Methods, select: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
- Under Alternate Domain Names (CNAMEs), add your domain — **this is not optional**
- Select your SSL certificate from the dropdown (the one you created in Step 2)
- Complete and create the distribution (it can take 10–20 minutes to deploy globally)

![Redirect HTTP to HTTPS + methods](/img/writings/ssl-s3/24-cloudfront-https.png)

![Add CNAME - NOT OPTIONAL](/img/writings/ssl-s3/25-cloudfront-cname.png)

![Click Create Distribution](/img/writings/ssl-s3/26-cloudfront-create-btn.png)

![Distribution Domain Name](/img/writings/ssl-s3/27-cloudfront-domain.png)

Once deployed, copy the **Distribution Domain Name** and open it in a browser to confirm your content loads over HTTPS.

## Step 5: Create an A Record in Route 53

![Route 53 - Create Hosting Zone](/img/writings/ssl-s3/28-route53-zone.png)

- Return to Route 53 and select your hosted zone
- Click "Create record"
- Set the record type to **A**
- Enable the **Alias** toggle
- For the route traffic target, select **"Alias to CloudFront distribution"**
- Select your CloudFront distribution from the list
- Save the record

![Define Simple Record - A type alias to CloudFront](/img/writings/ssl-s3/29-route53-record.png)

## Result

![Final result - HTTPS lock icon](/img/writings/ssl-s3/30-https-result.png)

Give DNS a few minutes to propagate, then visit your domain. You should see the padlock icon confirming HTTPS is active. Your S3-hosted web app is now served securely over the internet.`,
  },
  {
    id: uid(16),
    slug: 'jwt-nodejs-express-api-password-hashing-mongodb',
    title: 'How to Use JWT in Node.js Express API with Password Hashing & MongoDB',
    description: 'Implement secure authentication using JWT tokens and bcrypt password hashing with MongoDB in a Node.js Express API.',
    date: 'October 18, 2022',
    dateISO: '2022-10-18',
    readTime: '3 min read',
    tags: ['Node.js', 'JWT', 'MongoDB', 'Security', 'Express'],
    mediumUrl: 'https://jonathans199.medium.com/how-to-use-jwt-in-node-js-express-api-with-password-hashing-mongodb-425fca4e5e4b',
    content: `Saving a password as plain text in your database is one of those things that seems fine until it absolutely isn't. This tutorial walks through building a Node.js Express API that hashes passwords with bcrypt before storing them in MongoDB, and issues JWT tokens for authenticated requests.

[Watch the video tutorial](https://www.youtube.com/watch?v=your-video-id)

**Pre-requirements:**
- JavaScript and Node.js/Express knowledge
- Node.js installed locally
- MongoDB Atlas free account
- Linux-based OS (macOS works fine)

## Step 1: Project Setup

\`\`\`bash
mkdir node-jwt-api && cd node-jwt-api
npm init -y
npm i express cors mongodb bcrypt jsonwebtoken
touch index.js .gitignore .env
\`\`\`

## Step 2: Configure the API

Here's the full import block and initial server setup:

\`\`\`javascript
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { MongoClient } = require('mongodb')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const client = new MongoClient(process.env.MONGO_URI)
let usersCollection

async function connectDB() {
  await client.connect()
  const db = client.db('mydb')
  usersCollection = db.collection('users')
  console.log('Connected to MongoDB')
}

connectDB()

app.listen(4040, () => console.log('API running on PORT 4040'))
\`\`\`

## Step 3: Environment Setup

Create a \`.env\` file and add your MongoDB Atlas connection string:

\`\`\`
MONGO_URI='mongodb+srv://YOUR-USERNAME:YOUR-PASSWORD@your-clusterid.mongodb.net/test'
\`\`\`

Make sure \`.env\` is in your \`.gitignore\` — never commit credentials.

## Step 4: Routes

### Sign Up Route

![Sign up route code](/img/writings/jwt-mongodb/01-signup-route.png)

The sign-up endpoint receives an email and password, hashes the password using \`bcrypt.hash()\` with a salt rounds value of 10, and stores the user document in MongoDB.

### Login Route

![Login route code](/img/writings/jwt-mongodb/02-login-route.png)

The login endpoint looks up the user by email, runs \`bcrypt.compare()\` against the stored hash, and returns a signed JWT if the credentials match.

### Get All Users Route

![Get all users route code](/img/writings/jwt-mongodb/03-get-users-route.png)

A protected endpoint that retrieves all users from the collection. In production you'd gate this behind JWT middleware.

## Full Sample Code

> *[Full sample code available on Medium]*

The complete working implementation — including the JWT secret config, all three routes, and MongoDB connection handling — is available as an embedded gist in the original Medium article.

## How It All Fits Together

1. User signs up → password is hashed → stored in MongoDB
2. User logs in → submitted password is compared against stored hash → JWT is issued
3. Client sends JWT in subsequent requests → server verifies the token before responding

This pattern keeps plain-text passwords out of your database entirely. Even if someone dumps your database, they get hashes — not passwords.`,
  },
  {
    id: uid(16),
    slug: 'apply-ssl-https-node-express-api-aws-ec2',
    title: 'How to Apply SSL for HTTPS to Node Express API in AWS EC2',
    description: 'Secure your Node Express API on AWS EC2 with HTTPS using an Application Load Balancer, Route 53, and Certificate Manager.',
    date: 'September 19, 2022',
    dateISO: '2022-09-19',
    readTime: '4 min read',
    tags: ['AWS', 'EC2', 'SSL', 'Node.js', 'Load Balancer'],
    mediumUrl: 'https://jonathans199.medium.com/how-to-apply-ssl-for-https-to-node-express-api-in-aws-ec2-instance-acd43dcbfd4',
    content: `You've deployed your Node Express API to an AWS EC2 instance and it's accessible over HTTP. Now you need HTTPS. This guide walks through adding SSL using an Application Load Balancer, Route 53, and AWS Certificate Manager.

![Architecture diagram](/img/writings/ssl-ec2-alb/01-diagram.jpeg)

**Pre-requisites:** You should already have a Node Express API running on an EC2 instance. If you don't, check out my guide on [deploying a Node API to EC2 Ubuntu](https://jonathans199.medium.com/how-to-deploy-node-express-api-to-ec2-instance-in-aws-bc038a401156) first.

## Step 1: Register Domain Name Using Route 53

![Click Register domain](/img/writings/ssl-ec2-alb/02-register-domain.png)

- Navigate to the Route 53 service in AWS
- Click "Register domain"
- Search for an available domain (e.g., \`mydomainjs.com\`)
- Complete the purchase process
- **Wait for domain registration to finalize before moving on** — this can take a few minutes to an hour

![Search for available domain](/img/writings/ssl-ec2-alb/03-domain-search.png)

## Step 2: Generate SSL Certificate from Certificate Manager

![Request public certificate](/img/writings/ssl-ec2-alb/04-cert-request.png)

- Open AWS Certificate Manager
- Click "Request a certificate" → "Request a public certificate"
- Add domain variations to cover all cases:

\`\`\`
yourdomain.com
*.yourdomain.com
www.yourdomain.com
\`\`\`

![Add domain name variations](/img/writings/ssl-ec2-alb/05-cert-domains.png)

- Submit the request
- **Note:** Certificate generation typically takes around 30 minutes

## Step 3: Create Application Load Balancer (ALB)

### Initial Setup

![Click on Load Balancers](/img/writings/ssl-ec2-alb/06-load-balancers.png)

![Select ALB type](/img/writings/ssl-ec2-alb/07-alb-select.png)

![Create Load Balancer](/img/writings/ssl-ec2-alb/08-alb-create.png)

- Navigate to EC2 → Load Balancers
- Click "Create Load Balancer" and select **Application Load Balancer**

![ALB name and defaults](/img/writings/ssl-ec2-alb/09-alb-name.png)

- Assign a descriptive name
- Keep default settings

![Network mapping - select 2 zones](/img/writings/ssl-ec2-alb/10-network-mapping.png)

- Under Network Mapping, select **at least 2 availability zones**

### Target Group Configuration

![Target group HTTP port](/img/writings/ssl-ec2-alb/11-target-group-port.png)

![Target group defaults](/img/writings/ssl-ec2-alb/12-target-defaults.png)

- Create a new target group using **HTTP** protocol
- Specify the port your Node API listens on (e.g., \`5001\`)

![Select EC2 instance as target](/img/writings/ssl-ec2-alb/13-ec2-target.png)

- Select the EC2 instance running your API
- Click "Include as Pending below"
- Finish creating the target group

### Complete ALB Setup

![Select TG and SSL cert](/img/writings/ssl-ec2-alb/14-select-tg-cert.png)

- Return to the ALB creation form
- Refresh the target group dropdown and select your newly created group
- Under Listeners, add HTTPS (443) and attach your SSL certificate

![Click Create Load Balancer](/img/writings/ssl-ec2-alb/15-create-alb.png)

- Click "Create Load Balancer"

### Security Group Configuration

![Edit Security Groups](/img/writings/ssl-ec2-alb/16-edit-sg.png)

![Select same SG as EC2](/img/writings/ssl-ec2-alb/17-select-sg.png)

- After the ALB is created, click "Edit Security Groups"
- Select the **same security group** you configured for your EC2 instance
- This ensures the ALB and EC2 instance share the same port access rules

## Step 4: Configure Route 53 to Route Traffic to ALB

![Route 53 domain](/img/writings/ssl-ec2-alb/18-route53-domain.png)

- Select your registered domain in Route 53
- Click "Create Record" → choose "Simple Routing" → "Define Simple Record"
- Configure the A record:
  - Record type: **A**
  - Route traffic to: **Application and Classic Load Balancer**
  - Region: **same region as your EC2 and ALB**
  - Select your ALB from the dropdown
- Create an **AAAA record** with the same settings for IPv6 support

![Route 53 A and AAAA records](/img/writings/ssl-ec2-alb/19-route53-records.png)

## Result

![Final result - domain with HTTPS](/img/writings/ssl-ec2-alb/20-result.png)

Your domain now routes traffic through the Application Load Balancer to your EC2 instance over HTTPS. The ALB handles SSL termination, so your Express API continues running on HTTP internally — no changes needed to your Node code.`,
  },
  {
    id: uid(16),
    slug: 'deploy-node-express-api-heroku',
    title: 'How to Deploy Node Express API to Heroku',
    description: 'The simplest way to deploy your Node.js Express API to the cloud using Heroku CLI tools.',
    date: 'August 8, 2022',
    dateISO: '2022-08-08',
    readTime: '2 min read',
    tags: ['Node.js', 'Heroku', 'DevOps', 'Express'],
    mediumUrl: 'https://jonathans199.medium.com/how-to-deploy-node-express-api-to-heroku-b9a2dff34256',
    content: `![How to Deploy Node Express API to Heroku](/img/writings/heroku/01-header.jpg)

So you've built an awesome API using Express with Node.js and now you want it to be public for any service or web application to use. Heroku is one of the simplest ways to deploy Node APIs to the cloud — no EC2 setup, no security groups, no SSH keys.

## Prerequisites (MAC)

1. Create a free Heroku account at [https://signup.heroku.com/](https://signup.heroku.com/)
2. Install Node and NPM locally
3. Install Heroku CLI tools via Homebrew:

\`\`\`bash
brew tap heroku/brew && brew install heroku
\`\`\`

## Step 1: Create Local Node Express API

\`\`\`bash
mkdir node-express-api-heroku
cd node-express-api-heroku
npm init -y
touch index.js .gitignore
npm install express cors
\`\`\`

## Step 2: Configure package.json

Include a \`start\` script and specify the Node engine version so Heroku knows what runtime to use:

> *[Code snippet available on Medium]*

The key additions are the \`"start"\` script (Heroku looks for this specifically) and the \`"engines"\` field with your Node version.

## Step 3: Add Routes to index.js

> *[Code snippet available on Medium]*

A basic Express setup with CORS middleware and at least one route — Heroku will use whatever \`PORT\` environment variable it injects at runtime, so make sure you're reading from \`process.env.PORT\`.

## Step 4: Initialize Git Repository

\`\`\`bash
git init
git add .
git commit -m 'first commit message'
git branch -M main
\`\`\`

## Step 5: Connect to Heroku Account

\`\`\`bash
heroku login
\`\`\`

This opens a browser window for authentication.

## Step 6: Create Heroku Instance

\`\`\`bash
heroku create
\`\`\`

Heroku will generate a name for your app (e.g., \`fast-woodland-77884\`) and add a git remote called \`heroku\`.

## Step 7: Push to Heroku

\`\`\`bash
git push heroku main
\`\`\`

Watch the build logs in your terminal. Heroku installs dependencies, detects the start script, and boots your app.

## Step 8: Access Your API

Once deployed, Heroku provides a public URL like:

\`https://fast-woodland-77884.herokuapp.com/\`

Any subsequent \`git push heroku main\` will trigger a new deployment automatically.

---

**Sources:**
- [Heroku Dev Center — Node.js getting started](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku CLI documentation](https://devcenter.heroku.com/articles/heroku-cli)`,
  },
  {
    id: uid(16),
    slug: 'deploy-node-express-api-vercel-serverless',
    title: 'How to Deploy Node Express API to Vercel Serverless Functions',
    description: 'Deploy your Node.js Express API to Vercel serverless infrastructure with automatic redeployment on git push.',
    date: 'July 7, 2022',
    dateISO: '2022-07-07',
    readTime: '2 min read',
    tags: ['Node.js', 'Vercel', 'Serverless', 'Express'],
    mediumUrl: 'https://jonathans199.medium.com/deploy-node-js-express-api-to-vercel-dbf4461795a5',
    content: `![How to Deploy Node Express API to Vercel Serverless Functions](/img/writings/vercel/01-header.jpg)

Your parents are proud of your Node API running locally on \`localhost:4000\`. Now let's make it public — without worrying about servers, security groups, or SSH keys.

Vercel is best known for frontend deployments, but it handles Node Express APIs too by wrapping your app in serverless functions. Every push to main triggers an automatic redeploy. It's one of the smoothest deployment experiences I've used.

If you want the full server approach instead, check out my guide on [deploying to AWS EC2 Ubuntu](https://jonathans199.medium.com/how-to-deploy-node-express-api-to-ec2-instance-in-aws-bc038a401156).

## Pre-requisites

1. Free Vercel account at [vercel.com/signup](https://vercel.com/signup)
2. Node.js and NPM installed locally
3. An existing Express API (or follow along to create one)

## Step 1: Create Express API with Node

\`\`\`bash
mkdir node-api-vercel
cd node-api-vercel
npm init -y
touch index.js vercel.json .gitignore
npm i express
\`\`\`

You'll need three boilerplate config files — \`.gitignore\`, \`index.js\` (your Express app), and \`vercel.json\` (tells Vercel how to handle routing). The full boilerplate is available in the [node-api-vercel repo](https://github.com/jonathans199/node-api-vercel).

> *[Code snippet available on Medium]*

The \`vercel.json\` config is what makes this work — it routes all incoming requests through your Express app as a serverless function.

## Step 2: Connect Local API to GitHub

- Create a repository named \`node-api-vercel\` on GitHub
- Follow GitHub's instructions to connect your local repo
- Push the \`node-api-vercel\` folder to GitHub

## Step 3: Connect Vercel to GitHub Repository

![Select the repo](/img/writings/vercel/02-select-repo.png)

- Log into your Vercel account
- Click "New Project"
- Select your \`node-api-vercel\` GitHub repository
- Review the deployment settings (defaults work fine)
- Click Deploy and wait for the confirmation screen

![Deploy](/img/writings/vercel/03-deploy.png)

![Congratulations](/img/writings/vercel/04-congrats.png)

## Step 4: Monitor Automatic Deployments

![Find app link on dashboard](/img/writings/vercel/05-dashboard.png)

From this point on, every \`git push\` to the main branch triggers a new deployment automatically. You get a deployment log, a preview URL for each push, and instant rollbacks if something goes wrong.

## Result

Your API is accessible at a URL like:

\`https://node-express-api-vercel.vercel.app/\`

![API deployed](/img/writings/vercel/06-deployed.png)

## How Vercel Serverless Works

When you deploy an Express app to Vercel, it doesn't run a persistent Node process. Instead, Vercel converts each route into an independent serverless function that spins up on demand. For most APIs — especially ones without long-running connections or WebSockets — this is completely transparent and actually cheaper to run at low traffic volumes.`,
  },
  {
    id: uid(16),
    slug: 'deploy-node-express-api-aws-ec2-ubuntu',
    title: 'How to Deploy Node Express API to an AWS EC2 Ubuntu Instance',
    description: 'Complete guide to hosting a Node Express API on AWS EC2 Ubuntu with PM2 for persistent operation.',
    date: 'August 12, 2021',
    dateISO: '2021-08-12',
    readTime: '4 min read',
    tags: ['Node.js', 'AWS', 'EC2', 'Ubuntu', 'PM2'],
    mediumUrl: 'https://jonathans199.medium.com/how-to-deploy-node-express-api-to-ec2-instance-in-aws-bc038a401156',
    content: `**WWYL (what will you learn):**
1. Host a NODE API on AWS EC2 instance
2. Access NODE API from a web application

[Watch the video tutorial](https://www.youtube.com/watch?v=your-video-id)

**Pre-requirements:**
- Node Express API in a GitHub repository
- AWS account *(free tier available at [aws.amazon.com/free](https://aws.amazon.com/free))*

## Step 1: Create EC2 Instance in AWS

![Launch Instance](/img/writings/ec2-ubuntu/01-launch-instance.png)

- Navigate to AWS EC2 and click "Launch an instance"

![Name and Select Ubuntu, free tier](/img/writings/ec2-ubuntu/02-select-ubuntu.png)

- Give your instance a name and select **Ubuntu** as the OS
- Confirm it's **Free tier eligible**
- Create a new **Key Pair** — this is the security certificate file you'll need for SSH access

![Click Create New Key Pair](/img/writings/ec2-ubuntu/03-key-pair.png)

![Create a new key pair prompt](/img/writings/ec2-ubuntu/04-create-key-pair.png)

![Create new key pair if needed](/img/writings/ec2-ubuntu/05-new-key-pair.png)

**IMPORTANT:** Download and securely save your Key Pair file (\`.cer\` or \`.pem\`) — you cannot download it again after creation. If you lose it, you won't be able to SSH into the instance.

- Leave the rest of the settings at defaults and click "Launch instance"

![Find the new instance](/img/writings/ec2-ubuntu/06-find-instance.png)

## Step 2: Connect to EC2 Instance via SSH

![Connect to Ubuntu EC2](/img/writings/ec2-ubuntu/07-connect.png)

1. Locate your running instance in the EC2 console
2. Click "Connect" and select the **SSH client** tab

![Select SSH client instructions](/img/writings/ec2-ubuntu/08-ssh-client.png)

3. AWS will show you the exact command to run — follow those instructions:

First, set correct permissions on your key file:

\`\`\`bash
chmod 400 new-key-pair.cer
\`\`\`

![chmod 400 on key pair](/img/writings/ec2-ubuntu/09-chmod.png)

Then connect via SSH:

\`\`\`bash
ssh -i "new-key-pair.cer" ubuntu@ec2-54-210-98-114.compute-1.amazonaws.com
\`\`\`

4. When prompted with "Are you sure you want to continue connecting?", type \`yes\`

![Connected - Ubuntu prompt](/img/writings/ec2-ubuntu/10-connected.png)

## Step 3: Install Node and NPM on the EC2 Instance

Once connected, run these commands on the EC2 instance:

\`\`\`bash
# Install curl
sudo apt-get install curl

# Download the Node.js setup script
curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -

# Install Node.js
sudo apt-get install nodejs

# Verify installation
node -v
npm -v
\`\`\`

## Step 4: Clone Your API from GitHub

\`\`\`bash
# Use HTTPS — not SSH — for cloning
git clone 'your-repo-link'

# Go into the cloned folder
cd your-repo-folder

# Install dependencies
npm install
\`\`\`

## Step 5: Configure Security Group to Allow API Traffic

![Custom TCP security group rule](/img/writings/ec2-ubuntu/11-security-group.png)

1. In the EC2 console, select your instance
2. Go to the **Security** tab and click on the security group
3. Click "Edit inbound rules" → "Add rule"
4. Set type to **Custom TCP**, port to whatever your API uses (e.g., \`4000\`), source to **Anywhere (0.0.0.0/0)**
5. Save the rule

![Public IP address of EC2](/img/writings/ec2-ubuntu/12-public-ip.png)

Find your instance's **Public IPv4 address** in the instance details panel. Your API will be reachable at:

\`http://[public-ip]:[port]/\`

## Step 6: Test Your API

\`\`\`bash
node your-folder/index.js
\`\`\`

Open \`http://[public-ip]:4000/\` in a browser to confirm it's responding.

![API running on port 4000](/img/writings/ec2-ubuntu/13-api-running.png)

## Important: Keep Your API Running with PM2

**The problem:** The moment you close your terminal or disconnect from SSH, your \`node\` process dies. The API goes offline.

**The solution:** PM2 is a process manager that keeps your Node app running in the background — even after you disconnect, and even after the server reboots.

[Watch the PM2 setup video](https://www.youtube.com/watch?v=your-pm2-video-id)

\`\`\`bash
# Install PM2 globally
npm install pm2@latest -g

# Start your API with PM2
pm2 start your-folder/index.js

# Check that it's running
pm2 list

# Optional: configure PM2 to restart on server reboot
pm2 startup
pm2 save
\`\`\`

> *[Screenshot: Terminal showing pm2 list output with the API process running and status "online"]*

Once PM2 is managing your process, you can safely close your terminal. The API stays up.`,
  },
  {
    id: uid(16),
    slug: 'publish-react-app-firebase-hosting',
    title: 'Publish Your React App to FREE Firebase Hosting',
    description: 'Deploy a React application to Firebase Hosting at no cost with step-by-step configuration and deployment instructions.',
    date: 'July 20, 2021',
    dateISO: '2021-07-20',
    readTime: '3 min read',
    tags: ['React', 'Firebase', 'Hosting', 'Deployment'],
    mediumUrl: 'https://jonathans199.medium.com/publish-your-react-app-to-free-firebase-hosting-c4aa38b84a5e',
    content: `**WWYL (what will you learn):**
1. How to publish a React app to Firebase Hosting for FREE

Firebase Hosting is fast, secure, and easy to set up. Best of all, it's free — you won't pay unless you have super high traffic volumes. It's a great option for side projects, portfolios, and demos.

**Pre-requirements:**
- React.js knowledge
- Free Firebase Account ([https://firebase.google.com/](https://firebase.google.com/))

## Step 1: Create a React App

\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

![Firebase greeting screen](/img/writings/firebase/01-firebase-greeting.png)

## Steps 2–13: Connect React to Firebase Hosting

**2.** Install Firebase CLI tools globally:

\`\`\`bash
npm i -g firebase-tools
\`\`\`

**3.** Authenticate with your Google account:

\`\`\`bash
firebase login
\`\`\`

**4.** Initialize Firebase in your project folder:

\`\`\`bash
firebase init
\`\`\`

![Select Hosting with spacebar](/img/writings/firebase/02-select-hosting.png)

**5.** Select **Hosting** using the spacebar, then press Enter

**6.** Choose **"Create a new project"**

![Unique project name](/img/writings/firebase/03-project-name.png)

**7.** Enter a unique project name (example: \`my-app-js-21\`)

**8.** Confirm Firebase setup (press Enter to accept defaults)

![Firebase project ready](/img/writings/firebase/04-project-ready.png)

**9.** Set the public directory to \`build\` (not \`public\` — this is the compiled output folder)

![Public directory = build](/img/writings/firebase/05-public-dir.png)

**10.** Configure as a single-page app: **YES**

**11.** Automatic GitHub deploys: **NO**

![Single page app YES, GitHub NO](/img/writings/firebase/06-spa-config.png)

The firebase init process will generate \`firebase.json\` and \`.firebaserc\` config files — leave these as-is.

**12.** Build your React app:

\`\`\`bash
yarn build
\`\`\`

![yarn build output](/img/writings/firebase/07-yarn-build.png)

**13.** Deploy to Firebase Hosting:

\`\`\`bash
firebase deploy
\`\`\`

![firebase deploy output](/img/writings/firebase/08-firebase-deploy.png)

## Result

Your live app URL will follow this format:

\`https://my-app-js-21.web.app\`

![Live app on firebase URL](/img/writings/firebase/09-live-app.png)

🎉 That's it — your React app is live on Firebase Hosting. Every time you want to push an update, just run \`yarn build && firebase deploy\`.`,
  },
  {
    id: uid(16),
    slug: 'hash-password-react-app-before-sending-api',
    title: 'How to Hash Password in React App Before Sending it to the API',
    description: 'Add a security layer by hashing passwords client-side with bcryptjs before transmitting to your API.',
    date: 'June 14, 2021',
    dateISO: '2021-06-14',
    readTime: '2 min read',
    tags: ['React', 'Security', 'bcrypt', 'Authentication'],
    mediumUrl: 'https://medium.com/boca-code/how-to-encrypt-password-in-your-react-app-before-you-send-it-to-the-api-6e10a06f0a8e',
    content: `Imagine someone using your app on a public WiFi network and a packet sniffer is capturing all HTTP traffic. If your login form is sending the password as plain text — even over HTTPS — you're adding unnecessary risk. Hashing on the client side before the password ever leaves the browser adds another layer of protection.

## The Problem

When a React login form sends a password over the wire, the plaintext credential travels from the browser to your API. If HTTPS is your only protection and it gets stripped or intercepted (man-in-the-middle, misconfigured proxy), the raw password is exposed.

## The Solution

Hash the password **client-side** using bcryptjs before it's sent to the API. The API never sees the original password — only the hash. The backend then stores and compares hashes.

## Step 1: Create a React Application

If you don't have a project yet:

\`\`\`bash
npx create-react-app bcrypt-react
cd bcrypt-react
yarn start
\`\`\`

## Step 2: Install bcryptjs

\`\`\`bash
yarn add bcryptjs
\`\`\`

Reference: [bcryptjs on npm](https://www.npmjs.com/package/bcryptjs)

## Step 3: Build the Login Form in App.js

![Login form component](/img/writings/hash-password/01-login-form.png)

In your login form's submit handler, hash the password before sending it to the API:

\`\`\`javascript
import bcrypt from 'bcryptjs'

const handleSubmit = async (e) => {
  e.preventDefault()

  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password, salt)

  const response = await fetch('https://your-api.com/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password: hashedPassword }),
  })

  const data = await response.json()
  // handle response...
}
\`\`\`

![Hash code implementation](/img/writings/hash-password/02-hash-code.png)

The password is hashed and salted before it ever hits the network. The original string never leaves the browser.

**Sample Repository:** [bcryptjs-react-app](https://github.com/jonathans199/bcryptjs-react-app)

## Backend Handling

On the API side, the workflow is straightforward:

1. **Receive** the hashed password from the client
2. **Store** the hash in your database for the user's account (never the original)
3. **Verify** on login by using \`bcrypt.compare()\` against the stored hash
4. **Optional:** Generate a JWT after successful verification and return it to the client

\`\`\`javascript
// Example login route (Node.js / Express)
app.post('/login', async (req, res) => {
  const { email, password } = req.body
  const user = await usersCollection.findOne({ email })

  if (!user) return res.status(404).json({ error: 'User not found' })

  const isMatch = bcrypt.compareSync(password, user.password)
  if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' })

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
  res.json({ token })
})
\`\`\`

This keeps plaintext passwords completely out of your system — from the client, through the wire, and in the database.`,
  },
  {
    id: uid(16),
    slug: 'webview-offline-caching-swift-package',
    title: 'WebView Doesn\'t Cache for Offline — So I Built a Swift Module and a Native Patch to Fix It',
    description: 'WKWebView has no built-in offline caching. Here\'s how I solved it with an Expo Swift module, a react-native-webview patch, and web archives.',
    date: 'April 3, 2026',
    dateISO: '2026-04-03',
    readTime: '10 min read',
    tags: ['Swift', 'React Native', 'iOS', 'WebView', 'Offline', 'Expo'],
    mediumUrl: '',
    content: `![Mobile app with offline mode](/img/writings/webview-offline-header.jpg)
*Photo by [William Hook](https://unsplash.com/@williamhook) on Unsplash*

## The Problem Nobody Warns You About

I was building a React Native app that loaded a full web application inside a WebView — an LMS portal with courses, navigation, and interactive content. On a solid connection it loaded fine. Then I tested it on a plane with Wi-Fi off.

Blank screen.

Not a loading spinner. Not a cached version. A blank, white screen. \`WKWebView\` — the native iOS component that powers React Native's \`<WebView />\` — does not cache web content for offline use. The browser cache is session-scoped. Kill the network, kill the app, reopen it: everything is gone.

This was a dealbreaker. Users needed to browse course content they had already visited, even without connectivity. So I built the caching layer myself.

## Error -1009: The Error Every iOS Developer Hits

If you've worked with WebView on iOS and tested offline, you've seen this:

\`\`\`
NSURLErrorDomain error -1009 (NSURLErrorNotConnectedToInternet)
\`\`\`

This is the native iOS error that fires when \`WKWebView\` tries to load a URL with no network connection. On Android, \`cacheMode={'LOAD_CACHE_ELSE_NETWORK'}\` gracefully falls back to cached content. On iOS, the same configuration does absolutely nothing — you just get error -1009 and a blank screen.

This isn't a niche issue. It's one of the most reported and longest-running problems in the react-native-webview community:

- [**#1651 — "react-native-webview cache not working for iOS"**](https://github.com/react-native-webview/react-native-webview/issues/1651) — Opened in 2020, with developers still reporting the same issue in 2025 on v13.15.0. Multiple "+1" comments from users hitting the exact same blank screen. Android caches and works offline. iOS doesn't.

- [**#1387 — "Offline webview(cache) support"**](https://github.com/react-native-webview/react-native-webview/issues/1387) — A direct feature request from 2020 asking for cached content to display when offline. One commenter described the business impact: *"When a person is using your app on WiFi, and they switch to their phone's internet... the applications momentarily error."* Closed as stale with no solution.

- [**#2170 — "iOS webview is not caching website"**](https://github.com/react-native-webview/react-native-webview/issues/2170) — Same story. Developer confirmed the PWA caches correctly in Safari, but react-native-webview on iOS shows a "no internet" error. Closed as stale.

- [**#1511 — "Cache mode for iOS"**](https://github.com/react-native-webview/react-native-webview/issues/1511) — Pointed out that \`cacheMode\` only works on Android. The iOS implementation simply ignores it. Closed without a fix.

- [**#1975 — "iOS: cache settings not being respected"**](https://github.com/react-native-webview/react-native-webview/issues/1975) — Even \`cacheEnabled={false}\` and \`cacheMode={'LOAD_NO_CACHE'}\` are ignored on iOS. The only workaround found was setting \`incognito={true}\`.

- [**#1929 — "Can the entire content of an app be bundled to work offline?"**](https://github.com/react-native-webview/react-native-webview/issues/1929) — A developer building an educational app asked for offline bundling. No maintainer response. Closed as stale.

- [**#869 — "PWA with WorkBox Support"**](https://github.com/react-native-webview/react-native-webview/issues/869) — 17 comments asking for Service Worker / PWA offline support in the WebView. Closed with no resolution.

The pattern is clear: developers set \`cacheEnabled={true}\` and \`cacheMode={'LOAD_CACHE_ELSE_NETWORK'}\`, test on Android where it works, ship to iOS, and discover their app is broken offline. The issue has been open in various forms since 2019 with no native fix in the library.

**Error -1009 is the symptom. The root cause is that \`WKWebView\` has no persistent offline cache — and \`react-native-webview\` doesn't add one.**

That's the gap I filled.

## Why WKWebView Doesn't Do This Out of the Box

\`WKWebView\` uses \`URLSession\` under the hood and respects standard HTTP cache-control headers. But that cache is in-memory and session-scoped — it evaporates when the process dies. Apple expects you to handle offline through Service Workers (if you control the web content) or native interception.

Service Workers weren't an option here — I don't own the web app being loaded. And the standard \`URLCache\` approach doesn't survive app restarts. I needed something that persists to disk and serves full pages when the network is completely gone.

The key insight: iOS 14+ gives you \`WKWebView.createWebArchiveData()\`. This captures the entire rendered page — HTML, CSS, JS, images, everything — as a single binary \`.webarchive\` file. If you save that to disk, you can reload it later with \`webView.loadData()\` even with zero connectivity.

## The Architecture

The solution has two parts:

1. **An Expo Swift module** (\`OfflineCacheModule\`) — handles file I/O, hashing, and metadata on the native side
2. **A patch on react-native-webview** — hooks into WKWebView's navigation delegates to capture archives after page load and serve them when offline

\`\`\`
User browses page (online)
    ↓
WKWebView finishes loading (didFinishNavigation)
    ↓
createWebArchiveData() captures full page
    ↓
SHA256(normalized URL) → filename
    ↓
Save {hash}.webarchive + {hash}.meta.json to Documents/offline_web_cache/
    ↓
Send WEB_ARCHIVE_CAPTURED message to React Native

User navigates (offline)
    ↓
WKWebView fails with NSURLErrorNotConnectedToInternet (-1009)
    ↓
didFailProvisionalNavigation intercepts the error
    ↓
Look up cached archive by normalized URL hash
    ↓
Cache HIT → loadData() silently renders the page
Cache MISS → send toast to RN, goBack()
\`\`\`

## The Swift Module: OfflineCacheModule

This is a custom Expo native module at \`modules/offline-cache/\`. It manages the cache directory and exposes functions to both the native patch and JavaScript.

\`\`\`swift
public class OfflineCacheModule: Module {
  private var cacheDirectory: URL {
    let docs = FileManager.default.urls(
      for: .documentDirectory, in: .userDomainMask
    ).first!
    return docs.appendingPathComponent("offline_web_cache", isDirectory: true)
  }

  public func definition() -> ModuleDefinition {
    Name("OfflineCache")

    AsyncFunction("saveWebArchive") { (url: String, archiveBase64: String) -> Bool in
      return self.saveArchive(url: url, base64Data: archiveBase64)
    }

    AsyncFunction("loadWebArchive") { (url: String) -> String? in
      return self.loadArchive(url: url)
    }

    AsyncFunction("getCachedUrls") { () -> [String] in
      return self.listCachedUrls()
    }

    AsyncFunction("getCacheSize") { () -> Int in
      return self.calculateCacheSize()
    }

    AsyncFunction("clearCache") { () -> Bool in
      return self.clearAllCache()
    }

    AsyncFunction("removeCachedUrl") { (url: String) -> Bool in
      return self.removeArchive(url: url)
    }
  }
}
\`\`\`

Each cached page gets two files on disk:

- \`{sha256}.webarchive\` — the binary web archive
- \`{sha256}.meta.json\` — metadata (URL, timestamp, size)

The SHA256 hash is computed from a normalized URL — query params like \`mobile_offline\` and \`mobile_app_v2\` are stripped so the same page matches regardless of those flags.

The TypeScript bridge is iOS-only and gracefully degrades:

\`\`\`typescript
import { Platform } from 'react-native'

let OfflineCacheNative: any = null
if (Platform.OS === 'ios') {
  try {
    const { requireNativeModule } = require('expo-modules-core')
    OfflineCacheNative = requireNativeModule('OfflineCache')
  } catch {
    console.warn('[OfflineCache] Native module not available')
  }
}

export async function saveWebArchive(url: string, archiveBase64: string): Promise<boolean>
export async function loadWebArchive(url: string): Promise<string | null>
export async function getCachedUrls(): Promise<string[]>
export async function getCacheSize(): Promise<number>
export async function clearCache(): Promise<boolean>
export async function removeCachedUrl(url: string): Promise<boolean>
\`\`\`

## The WebView Patch: Capturing and Serving Archives

The second piece is a patch on \`react-native-webview@13.13.5\` applied via \`patch-package\`. This is where the actual caching and offline serving happens at the WKWebView level.

### Capturing pages after load

When a page finishes loading, the patched WebView calls \`createWebArchiveData()\` to capture the full page and saves it to the cache directory:

\`\`\`objectivec
- (void)_captureArchiveForCurrentPage {
  if (@available(iOS 14.0, *)) {
    WKWebView *webView = _webView;
    NSURL *pageURL = webView.URL;
    if (!pageURL || ![pageURL.scheme hasPrefix:@"http"]) return;

    [webView createWebArchiveDataWithCompletionHandler:^(NSData *archiveData, NSError *error) {
      if (archiveData) {
        dispatch_async(dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0), ^{
          [self _saveOfflineArchive:archiveData forURL:pageURL.absoluteString];
          // Notify React Native
          [webView evaluateJavaScript:@"window.ReactNativeWebView.postMessage(JSON.stringify({type:'WEB_ARCHIVE_CAPTURED'}))" completionHandler:nil];
        });
      }
    }];
  }
}
\`\`\`

This fires on two triggers:
- \`didFinishNavigation:\` — standard full page loads
- A URL KVO observer — catches Turbolinks and client-side pushState navigations that don't trigger \`didFinishNavigation\`, with a 2-second debounce

### Serving cached pages when offline — catching error -1009

This is the critical piece — the one that directly solves the -1009 problem that the community has been hitting for years. When a navigation fails because there's no internet, the patch intercepts \`NSURLErrorNotConnectedToInternet\` (error code -1009) and looks for a cached archive instead of surfacing the error:

\`\`\`objectivec
- (void)webView:(WKWebView *)webView
    didFailProvisionalNavigation:(WKNavigation *)navigation
    withError:(NSError *)error {

  if ([error.domain isEqualToString:NSURLErrorDomain]
      && error.code == NSURLErrorNotConnectedToInternet) {

    NSString *failedURL = error.userInfo[NSURLErrorFailingURLStringErrorKey];
    NSData *archive = [self _loadOfflineArchiveForURL:failedURL];

    if (archive) {
      // Cache HIT — load the archive silently
      [webView loadData:archive
           MIMEType:@"application/x-webarchive"
           characterEncodingName:@"utf-8"
           baseURL:[NSURL URLWithString:failedURL]];
      return; // Don't fire onLoadingError to RN
    }

    // Cache MISS — tell React Native
    if (_onLoadingError) {
      NSMutableDictionary *event = [self baseEvent];
      [event addEntriesFromDictionary:@{
        @"offlineCacheHit": @NO,
        @"offlineCacheUrl": failedURL,
      }];
      _onLoadingError(event);
    }
  }
}
\`\`\`

On a cache hit, the user sees the full page with styling — silently, no error, no flash. On a miss, React Native shows a toast and navigates back.

## The React Native Side

The WebView component uses a dynamic \`cacheMode\` prop based on connectivity and the user's offline mode toggle:

\`\`\`typescript
<WebView
  cacheEnabled={true}
  cacheMode={
    offlineMode
      ? isOnline ? 'LOAD_CACHE_ELSE_NETWORK' : 'LOAD_CACHE_ONLY'
      : 'LOAD_DEFAULT'
  }
  onMessage={async (event) => {
    const data = JSON.parse(event.nativeEvent.data)
    if (data.type === 'WEB_ARCHIVE_CAPTURED') {
      addCachedPage({ url: data.url, size: data.size, timestamp: Date.now() })
    }
  }}
  onError={({ nativeEvent }) => {
    const { offlineCacheHit, offlineCacheUrl } = nativeEvent as any
    if (offlineCacheHit === true) return // Served from cache, no error
    if (offlineCacheHit === false) {
      setOfflineToastMessage(\\\`Not available offline: \\\${offlineCacheUrl}\\\`)
      webViewRef.current?.goBack()
    }
  }}
/>
\`\`\`

The UI layer includes three components:
- **CacheIndicator** — a floating draggable badge (orange while caching, green when done) with a bottom sheet listing all cached pages
- **OfflineToast** — auto-dismissing notification when a user hits an uncached page offline
- **OfflineBanner** — a top banner reading "You're viewing cached content" that animates in when offline

State is managed with Zustand and persisted to AsyncStorage:

\`\`\`typescript
const useStore = create((set, get) => ({
  offlineMode: false,
  cachedPages: [],
  isCaching: false,
  offlineToastMessage: null,
  addCachedPage: (page) => { /* deduplicates by URL */ },
  removeCachedPage: (url) => { /* removes + calls native removeCachedUrl */ },
  clearCachedPages: () => set({ cachedPages: [] }),
}))
\`\`\`

## Tradeoffs Worth Knowing

**Pages must be visited to be cached.** There's no background prefetch. The user has to browse a page while online for it to get archived. This is by design — we're caching what they actually use.

**No cache eviction policy.** Cached pages stay until manually deleted via the CacheIndicator UI or \`clearCache()\`. iOS can reclaim the Documents directory under extreme storage pressure, but it's rare.

**iOS only.** Android's WebView has a different API (\`shouldInterceptRequest\` with its own disk cache). The same patch file handles Android separately.

**Turbolinks requires a debounce.** Client-side navigations that use pushState/replaceState don't fire \`didFinishNavigation\`. The URL KVO observer catches these, but with a 2-second debounce to avoid capturing mid-transition pages.

**Cached content is read-only.** Forms, logins, and interactive features that require a server round-trip won't work offline. This is for viewing previously loaded content, not for offline-first interactivity.

## The Result

The app now serves full web pages — with all their styling, images, and layout — completely offline. Users browse their LMS content on a plane, in a subway, or anywhere without connectivity. The first visit to a page caches it. Every subsequent visit, online or offline, is instant. Error -1009 is gone.

The two-package approach kept things clean: the Swift module handles file I/O and hashing, the WebView patch handles the WKWebView lifecycle, and React Native manages the UI state. Each layer does one thing.

For everyone who's hit issues [#1651](https://github.com/react-native-webview/react-native-webview/issues/1651), [#1387](https://github.com/react-native-webview/react-native-webview/issues/1387), [#2170](https://github.com/react-native-webview/react-native-webview/issues/2170), or any of the other open threads asking why \`cacheMode\` doesn't work on iOS — it's because the iOS WebView simply doesn't have a persistent cache. Setting \`cacheEnabled={true}\` is a no-op for offline. The only way to solve this is at the native layer: capture full page archives with \`createWebArchiveData()\`, persist them to disk, and intercept \`didFailProvisionalNavigation\` with error -1009 to serve them back. That's what this solution does.

If you're building a React Native app that wraps web content and you need offline support on iOS, this is the path. Anything that tries to solve it purely in JavaScript is fighting the platform.`,
  },
  {
    id: uid(16),
    slug: 'building-swift-video-score-overlay-package',
    title: 'Building a Swift Package to Burn Live Scoreboards into Recorded Sports Video',
    description: 'How I built a custom Expo Swift module that captures camera frames at 30fps, renders a live score overlay with Core Graphics, and encodes everything to H.264 — permanently burned into the video.',
    date: 'April 4, 2026',
    dateISO: '2026-04-04',
    readTime: '9 min read',
    tags: ['Swift', 'React Native', 'iOS', 'AVFoundation', 'Expo', 'Video'],
    mediumUrl: '',
    content: `![Varsity Score — live volleyball recording with score overlay](/img/writings/varsity-score-hero.png)

## The Problem With "Just Overlay It in the UI"

When I started building Varsity Score — a mobile app for recording sports games with live scores — the first instinct was the obvious one: record the video normally and draw the scoreboard on top in React Native. A \`<View>\` with some text, positioned absolutely over the camera preview. Simple.

The problem is that this approach produces two separate things: a raw video file with no scoreboard, and a UI that shows a scoreboard the viewer never sees in the recording. If you want the score **burned into the video** — every frame, every second, permanent — you can't do it in JavaScript. React Native has no API to intercept video frames. The camera rolls at 30fps through native buffers that the JS thread never touches.

The only way to do this is at the native layer, frame by frame, before the encoder ever sees the pixels.

This post walks through the custom Expo Swift module I built to solve this: how it captures frames, renders the score overlay with Core Graphics, and feeds a hardware H.264 encoder — all while React Native handles the UI and score input.

---

## Architecture Overview

The module lives at \`modules/video-score-overlay/\` inside a React Native (Expo SDK 54) project. The high-level flow looks like this:

\`\`\`
Camera → AVCaptureSession → sampleBuffer delegate
           ↓
     Core Graphics renders score overlay onto pixel buffer
           ↓
     AVAssetWriter (H.264, 1280×720, 10 Mbps) → .mp4 file
\`\`\`

React Native sits above all of this. The bridge exposes a clean API:

\`\`\`typescript
// Exposed from Swift to React Native
startRecording(options: RecordingOptions): Promise<void>
stopRecording(): Promise<{ filePath: string }>
updateScore(scoreData: ScoreData): void
setMuted(muted: boolean): void
\`\`\`

Score updates are the only thing that flow through this bridge during an active recording. Everything else — frame capture, overlay rendering, encoding — happens entirely on native threads.

---

## Capturing Frames with AVCaptureSession

The recording session is configured at \`userInteractive\` QoS on a dedicated serial queue. This matters because at 30fps you have ~33ms per frame to capture, composite, and hand off to the encoder. Preemption from lower-priority work is not acceptable here.

\`\`\`swift
private let videoQueue = DispatchQueue(
    label: "com.varsityscore.videoQueue",
    qos: .userInteractive
)

private func setupCaptureSession() {
    captureSession = AVCaptureSession()
    captureSession.sessionPreset = .hd1280x720

    guard let device = AVCaptureDevice.default(
        .builtInWideAngleCamera, for: .video, position: .back
    ),
    let input = try? AVCaptureDeviceInput(device: device) else { return }

    captureSession.addInput(input)

    let videoOutput = AVCaptureVideoDataOutput()
    videoOutput.videoSettings = [
        kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA
    ]
    videoOutput.setSampleBufferDelegate(self, queue: videoQueue)
    videoOutput.alwaysDiscardsLateVideoFrames = false

    captureSession.addOutput(videoOutput)
}
\`\`\`

32BGRA is the format Core Graphics works with natively. Requesting it directly from \`AVCaptureVideoDataOutput\` avoids a pixel format conversion on every frame, which would add measurable overhead at 30fps.

---

## The Frame Processing Pipeline

Every frame arrives in \`captureOutput(_:didOutput:from:)\`. This is where the work happens:

\`\`\`swift
func captureOutput(
    _ output: AVCaptureOutput,
    didOutput sampleBuffer: CMSampleBuffer,
    from connection: AVCaptureConnection
) {
    guard isRecording,
          let pixelBuffer = CMSampleBufferGetImageBuffer(sampleBuffer) else { return }

    // 1. Draw the overlay onto the pixel buffer in-place
    renderOverlayOntoBuffer(pixelBuffer)

    // 2. Hand off to the asset writer
    if assetWriterInput?.isReadyForMoreMediaData == true {
        adaptor?.append(pixelBuffer, withPresentationTime: CMSampleBufferGetPresentationTimeStamp(sampleBuffer))
    }
}
\`\`\`

The key decision here is that the overlay is rendered **in-place** on the pixel buffer. There's no copy — the same buffer that comes from the camera gets drawn on and handed directly to the encoder. This keeps memory allocations minimal.

---

## Rendering the Score Overlay with Core Graphics

This is the heart of the module. Every frame that reaches the encoder carries a lower-third banner with team names, scores, set number, and a timestamp. The overlay is a 460×36px strip positioned near the bottom of the frame.

\`\`\`swift
private func renderOverlayOntoBuffer(_ pixelBuffer: CVPixelBuffer) {
    // Use cached overlay image if score hasn't changed
    if cachedOverlayImage == nil {
        cachedOverlayImage = buildOverlayImage()
    }

    CVPixelBufferLockBaseAddress(pixelBuffer, [])
    defer { CVPixelBufferUnlockBaseAddress(pixelBuffer, []) }

    let width = CVPixelBufferGetWidth(pixelBuffer)
    let height = CVPixelBufferGetHeight(pixelBuffer)
    let bytesPerRow = CVPixelBufferGetBytesPerRow(pixelBuffer)
    let baseAddress = CVPixelBufferGetBaseAddress(pixelBuffer)

    let colorSpace = CGColorSpaceCreateDeviceRGB()
    guard let context = CGContext(
        data: baseAddress,
        width: width,
        height: height,
        bitsPerComponent: 8,
        bytesPerRow: bytesPerRow,
        space: colorSpace,
        bitmapInfo: CGImageAlphaInfo.premultipliedFirst.rawValue | CGBitmapInfo.byteOrder32Little.rawValue
    ) else { return }

    // Position the overlay 20px from the bottom-left
    let overlayRect = CGRect(x: 20, y: 20, width: 460, height: 36)
    if let overlay = cachedOverlayImage {
        context.draw(overlay, in: overlayRect)
    }

    // Watermark: app logo, top-right corner, 35% opacity
    if let logo = appLogoImage {
        context.setAlpha(0.35)
        let logoRect = CGRect(x: CGFloat(width) - 48, y: CGFloat(height) - 48, width: 28, height: 28)
        context.draw(logo, in: logoRect)
        context.setAlpha(1.0)
    }
}
\`\`\`

The overlay image itself is built once and cached:

\`\`\`swift
private func buildOverlayImage() -> CGImage? {
    let size = CGSize(width: 460, height: 36)
    UIGraphicsBeginImageContextWithOptions(size, false, 1.0)
    guard let ctx = UIGraphicsGetCurrentContext() else { return nil }

    // Dark semi-transparent background
    ctx.setFillColor(UIColor(white: 0, alpha: 0.72).cgColor)
    ctx.fill(CGRect(origin: .zero, size: size))

    // 2px orange accent line along the top
    ctx.setFillColor(UIColor(red: 1.0, green: 0.45, blue: 0.0, alpha: 1.0).cgColor)
    ctx.fill(CGRect(x: 0, y: 0, width: 460, height: 2))

    // Team A name + score (left section, dark box)
    let leftBox = CGRect(x: 4, y: 4, width: 160, height: 28)
    ctx.setFillColor(UIColor(white: 0.1, alpha: 0.9).cgColor)
    ctx.fill(leftBox)
    drawText(ctx, text: teamAName, rect: CGRect(x: 8, y: 8, width: 100, height: 20), alignment: .left)
    drawText(ctx, text: "\\(teamAScore)", rect: CGRect(x: 120, y: 8, width: 40, height: 20), alignment: .right)

    // Center: set number + date/time
    let centerLabel = "SET \\(currentSet)  •  \\(currentTimestamp)"
    drawText(ctx, text: centerLabel, rect: CGRect(x: 170, y: 10, width: 120, height: 16), alignment: .center, fontSize: 10)

    // Team B score + name (right section, dark box)
    let rightBox = CGRect(x: 296, y: 4, width: 160, height: 28)
    ctx.setFillColor(UIColor(white: 0.1, alpha: 0.9).cgColor)
    ctx.fill(rightBox)
    drawText(ctx, text: "\\(teamBScore)", rect: CGRect(x: 300, y: 8, width: 40, height: 20), alignment: .left)
    drawText(ctx, text: teamBName, rect: CGRect(x: 348, y: 8, width: 104, height: 20), alignment: .right)

    let image = UIGraphicsGetImageFromCurrentImageContext()
    UIGraphicsEndImageContext()
    return image?.cgImage
}
\`\`\`

The layout reads left to right: **Team A name | Team A score | SET N • timestamp | Team B score | Team B name**. The orange line at the top ties it visually to the app's brand color.

---

## The Caching Trick That Makes 30fps Possible

Here's the optimization that matters most: \`cachedOverlayImage\` is only cleared when the score actually changes. Not every frame. Not on a timer.

\`\`\`swift
// Called from the React Native bridge
@objc func updateScore(_ scoreData: NSDictionary) {
    lock.lock()
    teamAName = scoreData["teamAName"] as? String ?? teamAName
    teamAScore = scoreData["teamAScore"] as? Int ?? teamAScore
    teamBName = scoreData["teamBName"] as? String ?? teamBName
    teamBScore = scoreData["teamBScore"] as? Int ?? teamBScore
    currentSet = scoreData["set"] as? Int ?? currentSet

    // Invalidate the cached image — next frame will rebuild it
    cachedOverlayImage = nil
    lock.unlock()
}
\`\`\`

A typical volleyball game might have 300 score changes over 90 minutes. The overlay is re-rendered 300 times. The encoder runs 162,000 frames. The Core Graphics work happens 0.2% of the time — the other 99.8% of frames just composite a cached \`CGImage\` that's already in memory.

Without this cache, the overhead of \`buildOverlayImage()\` on every frame at 30fps would blow the 33ms frame budget and cause the encoder to drop frames.

---

## H.264 Encoding — Optimized for Speed, Not Size

The encoder uses \`AVAssetWriter\` with settings tuned for low-latency capture rather than maximum compression:

\`\`\`swift
private func setupAssetWriter(outputURL: URL) throws {
    assetWriter = try AVAssetWriter(outputURL: outputURL, fileType: .mp4)

    let videoSettings: [String: Any] = [
        AVVideoCodecKey: AVVideoCodecType.h264,
        AVVideoWidthKey: 1280,
        AVVideoHeightKey: 720,
        AVVideoCompressionPropertiesKey: [
            AVVideoAverageBitRateKey: 10_000_000,           // 10 Mbps
            AVVideoMaxKeyFrameIntervalKey: 60,               // keyframe every 2s at 30fps
            AVVideoAllowFrameReorderingKey: false,           // no B-frames
            AVVideoH264EntropyModeKey: AVVideoH264EntropyModeCAVLC, // faster than CABAC
            AVVideoExpectedSourceFrameRateKey: 30,
        ]
    ]

    assetWriterInput = AVAssetWriterInput(mediaType: .video, outputSettings: videoSettings)
    assetWriterInput?.expectsMediaDataInRealTime = true

    adaptor = AVAssetWriterInputPixelBufferAdaptor(
        assetWriterInput: assetWriterInput!,
        sourcePixelBufferAttributes: [
            kCVPixelBufferPixelFormatTypeKey as String: kCVPixelFormatType_32BGRA,
            kCVPixelBufferWidthKey as String: 1280,
            kCVPixelBufferHeightKey as String: 720,
        ]
    )

    assetWriter?.add(assetWriterInput!)
}
\`\`\`

Two decisions worth calling out:

**No B-frames (\`AVVideoAllowFrameReorderingKey: false\`).** B-frames require the encoder to look ahead in the frame sequence, which introduces latency and reordering complexity. For live capture you want I-frames and P-frames only — encode what you have and move on.

**CAVLC entropy coding.** CAVLC (Context-Adaptive Variable-Length Coding) is faster to encode than CABAC (Context-Adaptive Binary Arithmetic Coding), at a small cost to compression efficiency. At 10 Mbps target bitrate, compression efficiency isn't the constraint — encoder throughput is.

---

## Thread Safety: NSLock Around \`stopRecording\`

There's one race condition that bit me during testing: calling \`stopRecording\` while the frame delegate is mid-render. \`AVAssetWriter\` will throw if you call \`finishWriting\` while \`append(_:withPresentationTime:)\` is in flight.

The fix is an \`NSLock\` around the recording lifecycle:

\`\`\`swift
private let lock = NSLock()

func stopRecording(resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    lock.lock()
    isRecording = false
    lock.unlock()

    assetWriterInput?.markAsFinished()
    assetWriter?.finishWriting { [weak self] in
        guard let self = self else { return }
        if self.assetWriter?.status == .completed {
            resolve(["filePath": self.outputURL?.path ?? ""])
        } else {
            reject("ENCODE_ERROR", self.assetWriter?.error?.localizedDescription, nil)
        }
    }
}

// In the frame delegate:
func captureOutput(...) {
    lock.lock()
    let recording = isRecording
    lock.unlock()

    guard recording else { return }
    // ... rest of frame processing
}
\`\`\`

\`NSLock\` is appropriate here because the critical section is tiny — just reading or setting a Bool — and the lock is never held across async work. The overhead is negligible at 30fps.

---

## The React Native Side

From the React Native layer, none of this complexity is visible. The bridge surface is minimal:

\`\`\`typescript
import VideoScoreOverlay from '../modules/video-score-overlay';

// Start recording when the user taps record
const handleRecord = async () => {
  await VideoScoreOverlay.startRecording({
    outputPath: \`\${FileSystem.cacheDirectory}game_\${Date.now()}.mp4\`,
  });
  setIsRecording(true);
};

// When a point is scored:
const handleScoreUpdate = (team: 'a' | 'b') => {
  const updated = team === 'a'
    ? { ...score, teamAScore: score.teamAScore + 1 }
    : { ...score, teamBScore: score.teamBScore + 1 };

  setScore(updated);
  VideoScoreOverlay.updateScore(updated);  // fire-and-forget, no await needed
};

// Stop recording and get the file path
const handleStop = async () => {
  const result = await VideoScoreOverlay.stopRecording();
  setIsRecording(false);
  navigation.navigate('Preview', { filePath: result.filePath });
};
\`\`\`

\`updateScore\` is synchronous on the JS side — it queues the update on the native video queue and returns immediately. The user taps +1 and the next frame that gets encoded has the new score. No awaiting, no async state that could get out of sync with the frame pipeline.

---

## What I'd Do Differently

**Pixel buffer pool.** The current implementation relies on Core Video's internal buffer management, but for production I'd set up an explicit \`CVPixelBufferPool\` to pre-allocate buffers at session start. Under memory pressure, Core Video's allocator can stall frame delivery. A pool makes that behavior deterministic.

**Timestamp in the overlay vs. system time.** Right now the timestamp shown in the scoreboard is derived from \`Date()\` inside \`buildOverlayImage()\`. This is fine for most games, but if the device clock jumps (daylight saving, NTP sync) mid-recording, the overlay timestamp and the file's presentation timestamps will be slightly inconsistent. A better approach is to derive the timestamp from the \`CMSampleBuffer\`'s presentation time.

**CABAC instead of CAVLC.** CABAC provides better compression at the same bitrate, at the cost of slower encoding. At 10 Mbps the difference is small, but for longer games where file size matters, it could be worth the tradeoff.

---

## The Result

Every recording from Varsity Score is a self-contained video with the scoreboard permanently embedded. No post-processing, no separate data file to merge, no app needed to view it. You can AirDrop it, upload it to YouTube, or text it to a parent — and the score is right there in the video.

The architecture that makes this work: Core Graphics renders once per score change, not once per frame. A dedicated native thread at \`userInteractive\` QoS handles capture and encoding within the 33ms frame budget. The JS thread only handles user input — tapping +1 on a score.

If you're building a React Native app that needs to do anything serious with video frames — overlays, filters, real-time effects — this is the pattern. The JS bridge is for UI events and configuration. Frame processing has to live in native code.`,
  },
]
