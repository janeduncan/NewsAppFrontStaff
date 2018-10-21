import React from 'react';

const Article = (props) => {

  const url = '/articles/' + (props.index + 1);

  const categoryNames = props.data.categories.map((category, index) => {
    return <div key={index}>{category.category} </div>
  })

  return (
    <tr>
      <td>{props.data.date}</td>
      <td>{props.data.title}</td>
      <td>{props.data.journalist.name}</td>
      <td>{props.data.region}</td>
      <td>{categoryNames}</td>
      <td>{props.data.region}</td>
      <td><a href={url}>View</a></td>
    </tr>
  )
}

export default Article;
