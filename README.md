# Rude Comment API

This fun API allows you to track back-handed comments the people around you say!

## Setup

1. Fork and clone this repository
1. Run `npm install`
1. Run the server in development mode with `npm run dev`

## Routes

1. GET /rude -> returns all stored comments as an array of objects
1. GET /rude:id -> returns a single comment resource
1. POST /rude -> creates a new comment resource; body must contain these fields:
  {
    comment: 'Something rude',
    source: 'fake friend',
    damage: '300/1000'
  }
1. PUT /rude/:id -> updates an existing comment resource (must contain above fields as well)
1. DELETE /rude/:id -> deletes a comment resource
