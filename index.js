(() => {
  const dropDownButton = document.querySelectorAll('.dropDown-button');
  const dropDownContent = document.querySelectorAll('.dropDown-content');
  function addClass(data) {
    dropDownContent.forEach((ele) => {
      if (data === ele.dataset.name) {
        ele.classList.toggle('active');
      } else {
        ele.classList.remove('active');
      }
    });
  }

  dropDownButton.forEach((btn) => {
    const button = btn;
    button.onclick = () => {
      if (btn.dataset.name) {
        addClass(btn.dataset.name);
      }
    };
  });
  window.onclick = (event) => {
    if (!event.target.matches('.dropDown-button')) {
      dropDownContent.forEach((ele) => {
        ele.classList.remove('active');
      });
    }
  };
})();
