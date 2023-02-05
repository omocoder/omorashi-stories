# Homepage www.omorashi-stories.com

## Development
`yarn dev`

Starts a development server on localhost:3000

## Build
`yarn build`

Builds the project for production.

`yarn export`

Exports the project to the `out` directory. The content can then be used to host the static website.

## AWS
Whenever this project gets commited an AWS pipeline runs and builds the project and immediately deploys it on AWS Elastic Beanstalk.
To see the changes on the web we manually need to invalidate the cloudfront cache. 