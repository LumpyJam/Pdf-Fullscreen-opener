(function() {
  // Try to find an iframe with a PDF src
  const iframe = document.querySelector('iframe[src*=".pdf"]');
  if (iframe && iframe.src) {
    // Redirect the tab to the PDF URL
    window.location.replace(iframe.src);
    return;
  }

})();


// test1 = "https://learn.canterbury.ac.nz/mod/resource/view.php?id=4325097"
// test2 = "https://learn.canterbury.ac.nz/mod/resource/view.php?id=4375320"
// test3 = "https://learn.canterbury.ac.nz/mod/resource/view.php?id=4362657"

