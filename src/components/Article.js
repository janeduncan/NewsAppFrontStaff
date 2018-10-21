import React from 'react';
import moment from 'moment';

const Article = (props) => {

  let date = new Date(props.data.date);
  let formattedDate = moment(date).format("DD/MM/YY");

  const url = '/articles/' + (props.index + 1);

  const categoryNames = props.data.categories.map((category, index) => {
    return <div key={index}>{category.category} </div>
  })

  return (
    <tr>
      <td>{formattedDate}</td>
      <td>{props.data.title}</td>
      <td>{props.data.journalist.name}</td>
      <td>{props.data.region}</td>
      <td>{categoryNames}</td>
      <td><a href={url}>View</a></td>
    </tr>
  )
}

export default Article;
