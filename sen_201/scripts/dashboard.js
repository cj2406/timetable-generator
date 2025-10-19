    // Update counts
    function updateValue(type) {
      const input = document.getElementById(`${type}-input`);
      const count = document.getElementById(`${type}-count`);
      const value = input.value;
      count.innerText = value;
      localStorage.setItem(type, value);
    }