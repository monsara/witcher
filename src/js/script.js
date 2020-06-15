'use strict';

const copyCodeBtn = document.querySelector('.js-copy-code');

const handleCopyCodeBtnClick = event => {
  event.preventDefault();

  // Select code text
  const codeText = document.querySelector('.js-code-text');
  const range = document.createRange();
  range.selectNode(codeText);
  window.getSelection().addRange(range);

  try {
    // Execute the copy command after selecting the code text
    const successful = document.execCommand('copy');
    const msg = successful ? 'successful' : 'unsuccessful';

    console.log('Copy code command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }

  // Use removeRange (range) to remove the selection
  window.getSelection().removeAllRanges();
};

copyCodeBtn.addEventListener('click', handleCopyCodeBtnClick);
