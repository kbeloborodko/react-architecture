var myTitle = function() {
  return (
    React.createElement('div', null,
      React.createElement('h1', null, 'This is a React heading!')
    )
  );
};

var MyFirstComponent = function() {
  return (
    React.createElement('div', null, 
      React.createElement(myTitle, null),
      React.createElement(myTitle, null),
      React.createElement(myTitle, null)
    )
  );
};

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById("app")
);