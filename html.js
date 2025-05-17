### 🔹 **1. Accessing Elements**

```js
document.getElementById("myId");              // By ID
document.getElementsByClassName("myClass");   // By class (returns HTMLCollection)
document.getElementsByTagName("p");           // By tag name (returns HTMLCollection)
document.querySelector(".myClass");           // First match (CSS selector)
document.querySelectorAll("div.item");        // All matches (NodeList)
```

---

### 🔹 **2. Modifying Content & Attributes**

```js
document.getElementById("myId").innerHTML = "Hello";      // Change inner HTML
document.getElementById("myId").textContent = "Hi";       // Change text only
document.getElementById("myId").setAttribute("class", "newClass"); // Set attribute
```

---

### 🔹 **3. Styling Elements**

```js
document.getElementById("myId").style.color = "blue";     // Change text color
document.getElementById("myId").classList.add("active");  // Add class
document.getElementById("myId").classList.remove("hide"); // Remove class
```

---

### 🔹 **4. Event Listeners**

```js
document.getElementById("btn").addEventListener("click", function() {
    alert("Button Clicked");
});
```

---

### 🔹 **5. Creating and Appending Elements**

```js
const newDiv = document.createElement("div");
newDiv.innerText = "I am new";
document.body.appendChild(newDiv);
```

---

### 🔹 **6. Removing Elements**

```js
const element = document.getElementById("toRemove");
element.remove();
```

---

### 🔹 **7. Form Input Handling**

```js
const name = document.getElementById("nameInput").value;
console.log("User Name:", name);
```

---

### 🔹 **8. Prevent Default Form Submission**

```js
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Form Submitted via JS");
});
```

---

### 🔹 **9. Event Delegation**

```js
document.getElementById("parent").addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        console.log("Button clicked:", e.target.innerText);
    }
});
```

---

### 🔹 **10. DOM Ready**

```js
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded");
});
```

---

These one-liners and snippets not only show **DOM manipulation fluency**, but also indicate that you understand **event handling**, 
**form control**, and **dynamic content rendering** — key areas in frontend interviews.




Here’s a list of **commonly asked JavaScript DOM (Document Object Model) interview questions** with **brief answers**. You can also request code examples or detailed explanations for any of them.

---

### ✅ **Basic DOM Questions**

1. **What is the DOM?**
   DOM stands for *Document Object Model*. It's a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.

2. **How do you select elements in the DOM?**

   * `getElementById("id")`
   * `getElementsByClassName("class")`
   * `getElementsByTagName("tag")`
   * `querySelector("selector")`
   * `querySelectorAll("selector")`

3. **What is the difference between `innerHTML`, `innerText`, and `textContent`?**

   * `innerHTML`: Gets/sets HTML content (includes tags).
   * `innerText`: Gets/sets visible text (respects CSS).
   * `textContent`: Gets/sets all text (ignores CSS styles).

4. **How do you create and add a new element to the DOM?**

   ```js
   const div = document.createElement("div");
   div.textContent = "Hello";
   document.body.appendChild(div);
   ```

5. **How do you remove an element from the DOM?**

   ```js
   const element = document.getElementById("myDiv");
   element.remove();
   ```

6. **How do you change the style of an element?**

   ```js
   document.getElementById("myDiv").style.color = "red";
   ```

---

### ✅ **Event Handling in DOM**

7. **How do you add an event listener?**

   ```js
   document.getElementById("btn").addEventListener("click", function() {
     alert("Clicked!");
   });
   ```

8. **What is event delegation?**
   It's a technique to attach a single event listener to a parent element that manages events for its children using `event.target`.

9. **What are `event.preventDefault()` and `event.stopPropagation()`?**

   * `preventDefault()`: Prevents default browser behavior (like form submission).
   * `stopPropagation()`: Prevents the event from bubbling up.

---

### ✅ **Advanced / Tricky DOM Questions**

10. **What is the difference between `appendChild()` and `append()`?**

* `appendChild()`: Only accepts a Node and returns it.
* `append()`: Accepts strings and Nodes, does not return anything.

11. **What is the difference between `cloneNode(true)` and `cloneNode(false)`?**

* `true`: Deep clone (includes children).
* `false`: Shallow clone (no children).

12. **What is the difference between `NodeList` and `HTMLCollection`?**

* Both are array-like, but:

  * `NodeList` can include any type of node.
  * `HTMLCollection` only includes element nodes.
  * `NodeList` supports `forEach()`; `HTMLCollection` does not.

13. **How to detect if an element is visible in the viewport?**

```js
const isVisible = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
```

---

Would you like:

* A **PDF version** of this for interview prep?
* **MCQs or code-based practice questions**?
* **Real-world DOM project ideas** for hands-on experience?



