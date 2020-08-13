import React from 'react'

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content
    if (comment.status === 'approved') {
      content = comment.content
    }

    if (comment.status === 'pending') {
      content = 'Comment is awaiting of moderation'
    }

    if (comment.status === 'rejected') {
      content = 'Comment was rejected'
    }
    return (
      <li key={comment.id} style={{}}>
        {content}
      </li>
    )
  })

  return <ul>{renderedComments}</ul>
}
