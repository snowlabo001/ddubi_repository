import React from "react";
import ReactDOM from "react-dom";

function NumberList(props){
    const numbers = props.numbers;
    const listItems = numbers && numbers.map((number) => 
        <li key={number.toString()}>{number}</li>
    );
    return (
        <ul>{listItems}</ul>
    );
}

function Blog(props){
  const sidebar = (
    <ul>
      {props.posts.map((post) => 
        <li key={post.id}>
          {post.title}
        </li>
        )}
    </ul>
  );

  const content = props.posts.map((post) =>
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
  );

  return (
    <div>
      {sidebar}
      <hr/>
      {content}
    </div>
  );
}

const posts = [
  {id:1, title:'Hello World', content:'Welcome to learning React!'},
  {id:2, title:'Installation', content:'You can install React from npm.'}
]

function ExampleKey(){

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<Blog posts={posts} />);

    /*const numbers = [1,2,3,4,5];

    return (
      <div>
        <NumberList numbers={numbers}/>
      </div>
    );*/
}

export default ExampleKey;
