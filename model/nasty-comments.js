const newID = require('short-id')

const nastyComments = [
{id: newID.generate(),
comment: 'You look really tired today.',
source: 'coworker',
damage: '400/1000'},
{id: newID.generate(),
comment: 'How far along are you? *touches belly*',
source: 'UBER Driver',
damage: '1200/1000'},
{id: newID.generate(),
comment: "I haven't seen you at the gym lately. Where you been?",
source: "fake friend",
damage: '600/1000'},
{id: newID.generate(),
comment: "I wish I didn't care what people thought about my clothes. Like you!",
source: "fake friend",
damage: "300/1000"},
{id: newID.generate(),
comment: "I love your haircut! When are you gunna grow it back out?",
source: "boss",
damage: "400/1000"},
{id: newID.generate(),
comment: "That's a really hot pic of you! Some people look better in photos.",
source: "fake friend",
damage: "600/1000"},
{id: newID.generate(),
comment: 'I wish I was confident enough to wear something that revealing.',
source: "stranger at a bar",
damage: "200/1000"},
{id: newID.generate(),
comment: 'Your Instagram makes you seem so fun!',
source: "coworker",
damage: '400/1000'},
{id: newID.generate(),
comment: 'Wow, I love how you dont care how you come across.',
source: "fake friend",
damage: "500/1000"},
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
  const source = body.source
  const damage = body.damage
  if (rudeComment) {
    if (source) {
      if (damage) {
        const comment = {
          id: newID.generate(),
          comment: rudeComment,
          source: source,
          damage: damage
        }
        nastyComments.push(comment)
        response = comment
      } else {
        response = {status: 400, message: "You need to include the emotional damage out of 1000 (i.e. '500/1000')"}
      }
    } else {
      response = {status: 400, message: "You need to include the source (i.e. person you heard it from)."}
    }
  } else {
    response = {status: 400, message: "You need to include a comment."}
  }
  return response
}

function replaceOne (id, body) {
  let response
  const comment = nastyComments.find(comment => comment.id === id)
  const newComment = body.comment
  const source = body.source
  const damage = body.damage
  if (comment) {
    if (newComment){
      if (source) {
        if (damage) {
          comment.comment = newComment
          comment.source = source
          comment.damange = damage
          response = {data: comment}
        } else {
          response = {status: 400, message: "You need to include the emotional damage out of 1000 (i.e. '500/1000')"}
        }
      } else {
        response = {status: 400, message: "You need to include the source (i.e. person you heard it from)."}
      }
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
