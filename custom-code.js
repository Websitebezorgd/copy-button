// copy button function
var copyText = document.getElementById('text').innerHTML;
 
function copyContent() {
 try {navigator.clipboard.writeText(copyText);
      console.log('Content copied to clipboard');
      // alert('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
}
  
var tooltip = document.querySelector('.tooltip');

tooltip.addEventListener('click', function() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    this.classList.add('active');
  }
});