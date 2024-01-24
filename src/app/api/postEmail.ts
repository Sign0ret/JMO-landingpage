'use server'
// Assuming emailToUpload is a string representing email data

export const PostEmail = async (emailToUpload: string): Promise<null | string> => {
  if (!emailToUpload) {
    alert('Please provide email data');
    return null;
  }

  console.log('emailToUpload:', emailToUpload);
  console.log('ruta:', `${process.env.NEXT_PUBLIC_SERVER_URL}/api/emails`);

  try {
    const formData = new FormData();
    formData.append('email', emailToUpload);

    const resp = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/emails`, {
      method: 'POST',
      credentials: 'include',
      body: formData,
    });

    if (!resp.ok) {
      throw new Error('Failed to upload email');
    }

    const data = await resp.json();
    const idMedia = data.doc.id;
    if (idMedia && resp.ok) {
      return idMedia.toString(); // Assuming idMedia is a string, adjust as needed
    }
  } catch (error: unknown) {
    console.error('Error uploading email:', error);
  }

  return null;
};
