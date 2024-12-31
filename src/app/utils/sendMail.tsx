export const sendEmailWithAttachment = async (subject, content, recipient, pdfFile) => {
  
  const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          resolve((reader.result as string).split(',')[1]); // Extraer solo el contenido Base64
        } else {
          reject(new Error('File reading failed'));
        }
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  try {
    const pdfBase64 = await readFileAsBase64(pdfFile);
    const response = await fetch('/api/send-mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject,
        content,
        recipient,
        pdfBase64,
        pdfName: pdfFile.name,
      }),
    });

    if (!response.ok) {
      console.error("Respuesta del servidor:", await response.text());
    }

    console.log('Correo enviado con éxito');
  } catch (error) {
    console.error('Error al enviar correo:', error);
  }
};
