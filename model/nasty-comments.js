const newID = require('short-id')

const nastyComments = [
{id: newID.generate(),
comment: 'You look really tired today.'},
{id: newID.generate(),
comment: 'How far along are you? *touches belly*'},
{id: newID.generate(),
comment: "I haven't seen you at the gym lately. Where you been?"},
{id: newID.generate(),
comment: "I wish I didn't care what people thought about my clothes. Like you!"},
{id: newID.generate(),
comment: "I love your haircut! When are you gunna grow it back out?"},
{id: newID.generate(),
comment: "That's a really hot pic of you! Some people look better in photos."},
{id: newID.generate(),
comment: 'I wish I was confident enough to wear something that revealing.'},
{id: newID.generate(),
comment: 'Your Instagram makes you seem so fun!'},
{id: newID.generate(),
comment: 'Wow, I love how you dont care how you come across.'},
]

function getAll (limit) {
  return limit ? nastyComments.slice(0, limit) : nastyComments
}

function getOne (id) {
  let response
  const comment = nastyComments.find(comment => comment.id === id)
  if (comment) {
    response = {data: comment}
  } else {
    response = {status: 400, message: "ID not found. *slow clap*"}
  }
  return response
}

function createOne (body) {
  let response
  const rudeComment = body.comment
  if (comment) {
    const comment = {
      id: newID.generate(),
      comment: rudeComment
    }
    nastyComments.push(comment)
    response = comment
  } else {
    response = {status: 400, message: "You'd think it was obvious, but a comment is required."}
  }
  return response
}

function replaceOne (id, body) {
  let response
  const comment = nastyComments.find(comment => comment.id === id)
  const newComment = body.comment
  if (comment) {
    if (newComment){
      comment.comment = newComment
      response = {data: comment}
    } else {
      response = {status: 400, message:"You'd think it was obvious, but a comment is required." }
    }
  } else {
    response = {status: 400, message: "ID not found. *slow clap*"}
  }
  return response
}

function deleteOne (id) {
  const comment = nastyComments.find(comment => comment.id === id)
  if (comment) {
    const index = nastyComments.indexOf(comment)
    response = {data: comment}
    nastyComments.splice(index, 1)
  } else {
    response = {status: 400, message: "ID not found. *slow clap*"}
  }
  return response
}

module.exports = {
  getAll,
  getOne,
  replaceOne,
  createOne,
  deleteOne
}
