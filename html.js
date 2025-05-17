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

