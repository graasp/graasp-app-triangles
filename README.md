# Graasp App Starter: React Framework

[![Codeship](https://app.codeship.com/projects/04f13a10-b05e-0136-09da-7a3da3243947/status?branch=master)](https://app.codeship.com/projects/310436)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2cfb916f3a1d4c0b8fec4634f84f5b93)](https://www.codacy.com/app/react-epfl/graasp-app-starter-react)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/2cfb916f3a1d4c0b8fec4634f84f5b93)](https://www.codacy.com/app/react-epfl/graasp-app-starter-react)

This is a starter repository for a Graasp application. This particular flavor of the starter
repository uses the React framework. It is an opinionated starter kit based on the `create-react-app`
package. Other flavors are coming.

## Getting Started

Fork this repo.

## Request Credentials

Currently, becoming a Graasp Developer and registering Graasp Apps is a manual process. Contact
juancarlos.farah@epfl.ch or andre.nogueira@epfl.ch to receive a `GRAASP_DEVELOPER_ID`. Every time
you want to release a new app, you will also have to request a `GRAASP_APP_ID`. This process is
being automated, but it's currently still in the works.

We will also give you AWS credentials, `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY`, which you
will need to deploy your application to the Graasp ecosystem. These keys are private, so you should
not share them with anyone.

## Environment Variables

Create a file in your project root named `.env` and add the following lines, replacing the values
between `<>` with the keys you received.

```
GRAASP_DEVELOPER_ID=<YOUR_GRAASP_DEVELOPER_ID>
GRAASP_APP_ID=<YOUR_GRAASP_APP_ID>
AWS_ACCESS_KEY_ID=<YOUR_AWS_ACCESS_KEY_ID>
AWS_SECRET_ACCESS_KEY=<YOUR_AWS_SECRET_ACCESS_KEY>
```

## Setup Development Environment

Once you have set up your `.env` file, you need to run `./scripts/setup.sh` from the root folder in
order to setup your credentials. This script will write the appropriate credentials to a
`~/.aws/credentials` file that will allow you to deploy your application to the ecosystem.


## Installing Dependencies

Make sure you have `node` and `yarn` installed on your local machine otherwise go
[here](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x) and install them; then run `yarn` from the project directory to install all dependencies.

## Starting the Server

Navigate to the cloned or forked project directory using the command line, type `npm start` and the project will automatically run on `localhost:3000`.
