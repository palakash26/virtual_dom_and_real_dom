function updateDOM() {
  // Regular DOM update
  const element1 = `
    <div>
      <h1>What is the virtual DOM and real DOM</h1>
      <p>The Virtual DOM compares old and new virtual DOMs and updates only the changed parts in the real DOM.</p>
      <input type="text"/>
      <p>${new Date().toLocaleDateString()}</p>
    </div>
  `;
  document.getElementById('container1').innerHTML = element1;

  // React element
  const element2 = React.createElement(
    'div',
    null,
    React.createElement('h1', null, 'What is the virtual DOM and real DOM'),
    React.createElement('p', null, 'The Real DOM directly updates the entire UI when data changes.'),
    React.createElement('input', { type: 'text' }),
    React.createElement('p', null, new Date().toLocaleTimeString())
  );

  // React 18 way: createRoot instead of render()
  const container = document.getElementById('container2');

  // Keep root persistent instead of creating it every second
  if (!window.reactRoot) {
    window.reactRoot = ReactDOM.createRoot(container);
  }
  window.reactRoot.render(element2);
}

setInterval(updateDOM, 1000);
