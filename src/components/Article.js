import React from 'react';

const Article = (props) => {

  const url = '/articles/' + (props.index + 1);

  return (
    <tr>
      <td>{props.data.date}</td>
      <td>{props.data.title}</td>
      <td>{props.data.journalist}</td>
      <td>{props.data.category}</td>
      <td><a href={url}>view</a></td>
    </tr>
  )
}

export default Article;
