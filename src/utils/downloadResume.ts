/**
 * Downloads the resume reliably with guaranteed filename and extension (.pdf)
 */
export function handleResumeDownload(url: string, filename = 'Aman_Prajapati_Resume.pdf') {
  try {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch file');
        return response.blob();
      })
      .then((blob) => {
        // Create an explicit PDF blob with proper MIME type
        const pdfBlob = new Blob([blob], { type: 'application/pdf' });
        const blobUrl = window.URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setTimeout(() => window.URL.revokeObjectURL(blobUrl), 1000);
      })
      .catch((err) => {
        console.warn('Direct blob download fallback to window.open:', err);
        window.open(url, '_blank');
      });
  } catch (err) {
    window.open(url, '_blank');
  }
}
