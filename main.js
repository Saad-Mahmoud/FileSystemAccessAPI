const selectFileButton = document.querySelector('#select-file');
const fileContentDiv = document.querySelector('#file-content');

selectFileButton.addEventListener('click', async () => {
  try {
    const [fileHandle] = await window.showOpenFilePicker();
    const file = await fileHandle.getFile();
    const contents = await file.text();
    fileContentDiv.textContent = contents;
  } catch (error) {
    console.error(error);
  }
});
