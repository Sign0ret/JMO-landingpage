'use server'
export const PostEmail = async (emailToUpload: string): Promise<null | string> => {
  if (!emailToUpload) {
    alert('Please select a file');
    return null;
  }
  console.log('emailToUpload:',emailToUpload)
  console.log('ruta:',`${process.env.NEXT_PUBLIC_SERVER_URL}/api/emails`)
  try {
    const formData = new FormData();
    formData.append('email', emailToUpload); // Assuming 'emailToUpload' is the actual email data

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
      return idMedia;
    }
  } catch (error: unknown) {
    console.error('Error uploading email:', error);
  }
  return null;
};
