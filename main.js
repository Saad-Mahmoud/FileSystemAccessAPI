const saveFileButton = document.querySelector('#save-file');
const textToWriteTextarea = document.querySelector('#text-to-write');

saveFileButton.addEventListener('click', async () => {
  try {
    const writableFileHandle = await window.showSaveFilePicker({
      suggestedName: 'my-file.txt',
    });
    const writableFile = await writableFileHandle.createWritable();
    const textToWrite = textToWriteTextarea.value;
    await writableFile.write(textToWrite);
    await writableFile.close();
  } catch (error) {
    console.error(error);
  }
});
