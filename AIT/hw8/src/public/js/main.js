function main() {
  onLoad();
  // get the filter button
  const filterBtn = document.querySelector('#filterBtn');
  filterBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    const xmlReq = new XMLHttpRequest();
    let url = "http://localhost:3000/api/reviews";
    const semester = document.getElementsByName("semester")[1].value;
    const year = document.getElementsByName("year")[1].value;
    if (semester || year){
      // if user opted to filter by both semester and year
      if(semester && year) {
        url += '?semester=' + semester + '&year=' + year;
      }
      // if user opted to filter only by semester
      else if(semester && !year) {
        url += '?semester=' + semester;
      }
      // if user opted to filter only by year
      else if(!semester && year) {
        url += '?year=' + year;
      }
    }
    else{}
    xmlReq.open('GET', url, true);
    xmlReq.addEventListener('load', filter);
    xmlReq.send();
  });

  // get the add button
  const add = document.querySelector('#addBtn');
  add.addEventListener('click', function(evt) {
    evt.preventDefault();
    const name = document.getElementsByName('name')[0].value;
    const semester = document.getElementsByName('semester')[0].value;
    const year = document.getElementsByName('year')[0].value;
    const review = document.getElementsByName('review')[0].value;
    const xmlReq = new XMLHttpRequest();
    let url = 'http://localhost:3000/api/review/create';
    xmlReq.open('POST', url, true);
    xmlReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xmlReq.send('name='+name+'&semester='+semester+'&year='+year+'&review='+review);
    xmlReq.onreadystatechange = function() {
      if (xmlReq.readyState == XMLHttpRequest.DONE && xmlReq.status == 200) {
        console.log('SUCCESS!');
      }
    }
    onLoad();
  });
}

function filter(){
  if (this.status >= 200 && this.status < 400) {
    const data = JSON.parse(this.responseText);
    const semester = document.getElementsByName("semester")[1].value;
    const year = document.getElementsByName("year")[1].value;
    const tbody = document.createElement('tbody');
    tbody.id = 'reviews-list';
    const filteredReviews = data.filter(function(ele){
      if (semester === ele.semester && year === ele.year){
        return ele;
      }
      else if (semester === '' && year === ele.year){
        return ele;
      }
      else if (semester === ele.semester && year === ''){
        return ele;
      }
      else if (semester === '' && year === ''){
        return ele;
      }
    });
    filteredReviews.forEach(function(review){
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.appendChild(document.createTextNode(review.name));
      const semesterCell = document.createElement('td');
      semesterCell.appendChild(document.createTextNode(review.semester));
      const yearCell = document.createElement('td');
      yearCell.append(document.createTextNode(review.year));
      const reviewCell = document.createElement('td');
      reviewCell.append(document.createTextNode(review.review));
      row.appendChild(nameCell);
      row.appendChild(semesterCell);
      row.appendChild(yearCell);
      row.appendChild(reviewCell);
      tbody.appendChild(row);
    });
    const table = document.querySelector('table');
    const oldtbody = document.querySelector('tbody');
    table.replaceChild(tbody, oldtbody);
  }
}
function parseResponse(){
  if (this.status >= 200 && this.status < 400) {
    const data = JSON.parse(this.responseText);
    const tbody = document.createElement('tbody');
    tbody.id = 'reviews-list';
    data.forEach(function(review) {
      const row = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.appendChild(document.createTextNode(review.name));
      const semesterCell = document.createElement('td');
      semesterCell.appendChild(document.createTextNode(review.semester));
      const yearCell = document.createElement('td');
      yearCell.append(document.createTextNode(review.year));
      const reviewCell = document.createElement('td');
      reviewCell.append(document.createTextNode(review.review));
      row.appendChild(nameCell);
      row.appendChild(semesterCell);
      row.appendChild(yearCell);
      row.appendChild(reviewCell);
      tbody.appendChild(row);

    });
    const table = document.querySelector('table');
    const oldtbody = document.querySelector('tbody');
    table.replaceChild(tbody, oldtbody);
  }
}

function onLoad(){
  const backgroundReq = new XMLHttpRequest();
  backgroundReq.open('GET', "http://localhost:3000/api/reviews", true);
  backgroundReq.addEventListener('load', parseResponse);
  backgroundReq.send();
}

document.addEventListener("DOMContentLoaded", main);
