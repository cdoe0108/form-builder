export const getFormData = fileName => {
  return new Promise(function(resolve, reject) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4) {
        if (this.status === 200) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject(this.status);
          return;
        }
      }
    };
    xhttp.open('GET', fileName, true);
    xhttp.setRequestHeader('accpet', 'application/json, text/plain, */*');
    xhttp.setRequestHeader('Content-Type', 'application/json');
    xhttp.send();
  });
};
