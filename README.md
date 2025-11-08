# Virtual DOM vs Real DOM Demo

This project demonstrates the difference between how the **Real DOM** and **Virtual DOM** handle updates in a web application.

## 🧩 Overview

The page updates two sections every second:

1. **Regular DOM Update (container1)**  
   - Directly modifies the **real DOM** using traditional JavaScript (`innerHTML`).
   - Every second, the entire DOM content is re-rendered — even if only a small part changes.

2. **React Virtual DOM Update (container2)**  
   - Uses **React’s Virtual DOM** and `ReactDOM.createRoot()` (React 18 feature).
   - React efficiently updates only the parts of the DOM that actually changed, instead of re-rendering the entire UI.

This comparison helps visualize how React improves performance and efficiency using the Virtual DOM.

## 🧠 Key Concepts

### Real DOM
- The browser’s actual DOM tree.
- Directly manipulated using methods like `innerHTML`, `appendChild`, etc.
- Every change triggers layout recalculations and repainting of the UI.
- Slower for frequent updates.

### Virtual DOM
- A lightweight, in-memory representation of the real DOM.
- React creates a new Virtual DOM whenever the UI changes.
- React compares the new and old Virtual DOM (diffing) and updates only the changed parts in the real DOM.
- Faster and more efficient.

## ⚙️ How It Works

The JavaScript function `updateDOM()`:
- Updates the real DOM in `container1` using string templates.
- Renders a React element into `container2` using `ReactDOM.createRoot()`.

This function runs every second using `setInterval(updateDOM, 1000)`.

### Code Snippet
```js
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

  const container = document.getElementById('container2');

  if (!window.reactRoot) {
    window.reactRoot = ReactDOM.createRoot(container);
  }
  window.reactRoot.render(element2);
}

setInterval(updateDOM, 1000);
