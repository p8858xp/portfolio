// DO HANDLE CLIENT-SIDE JS
function main(){
  onLoad();
}
function handleEdit(){
  const index = this;
  const saveButt = document.createElement('button');
  saveButt.textContent = 'Save';
  saveButt.id = 'save' + index;
  // add/show button on the DOM
  const row = document.getElementById('row'+index);
  row.appendChild(saveButt);
  saveButt.addEventListener('click', handleSave.bind(index));
  document.getElementById("edit"+index).style.display="none";
  document.getElementById("save"+index).style.display="inline-block";
  const date = document.getElementById("date"+index);
  const course = document.getElementById("course"+index);
  const par = document.getElementById("par"+index);
  const score = document.getElementById("score"+index);

  const date_data = date.innerHTML;
  const course_data = course.innerHTML;
  const par_data = par.innerHTML;
  const score_data = score.innerHTML;

  date.innerHTML="<input type='text' id='date_input"+index+"' value='"+date_data+"'>";
  course.innerHTML="<input type='text' id='course_input"+index+"' value='"+course_data+"'>";
  par.innerHTML="<input type='text' id='par_input"+index+"' value='"+par_data+"'>";
  score.innerHTML="<input type='text' id='score_input"+index+"' value='"+score_data+"'>";
}
function handleSave(){
  const index = this.valueOf();
  const ajaxReq = new XMLHttpRequest();
  //http://localhost:3000/list/update
  //ajaxReq.open('POST', "http://linserv2.cims.nyu.edu:16123/list/update", true);
  ajaxReq.open('POST', "http://linserv2.cims.nyu.edu:16123/list/update", true);
  ajaxReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  ajaxReq.addEventListener('load', () => {
    const responseText = JSON.parse(ajaxReq.responseText);
    const date = document.getElementById("date"+index);
    const course = document.getElementById("course"+index);
    const par = document.getElementById("par"+index);
    const score = document.getElementById("score"+index);
    date.innerHTML = responseText.date;
    course.innerHTML = responseText.golfcourse;
    par.innerHTML = responseText.par;
    score.innerHTML = responseText.score;
  });
  const date = document.getElementById('date_input'+index).value;
  const golfcourse = document.getElementById('course_input'+index).value;
  const par = document.getElementById('par_input'+index).value;
  const score = document.getElementById('score_input'+index).value;
  // remove the save button and show both edit and delete buttons
  const saveButt = document.getElementById('save'+index);
  saveButt.remove();
  document.getElementById("edit"+index).style.display="inline-block";
  ajaxReq.send('date='+date+'&course='+golfcourse+'&par='+par+'&score='+score);
}
function handleDelete(){
  const index = this.valueOf();
  const ajaxReq = new XMLHttpRequest();
  ajaxReq.open('POST', "http://linserv2.cims.nyu.edu:16123/list/delete", true);
  ajaxReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  ajaxReq.addEventListener('load', () => {
    const responseText = JSON.parse(ajaxReq.responseText);
    const date = document.getElementById("date"+index);
    const course = document.getElementById("course"+index);
    const par = document.getElementById("par"+index);
    const score = document.getElementById("score"+index);
    const edit = document.getElementById('edit'+index);
    const deleted = document.getElementById('delete'+index);
    const save = document.getElementById('save'+index);
    // TODO: Delete the row from the table
    date.remove();
    course.remove();
    par.remove();
    score.remove();
    edit.remove();
    deleted.remove();
    if (save != null){
      save.remove();
    }
  });
  const date = document.getElementById('date'+index).innerHTML;
  const golfcourse = document.getElementById('course'+index).innerHTML;
  const par = document.getElementById('par'+index).innerHTML;
  const score = document.getElementById('score'+index).innerHTML;
  ajaxReq.send('date='+date+'&course='+golfcourse+'&par='+par+'&score='+score);
}
function parseResponse(){
  if (this.status >= 200 && this.status < 400) {
    const data = JSON.parse(this.responseText);
    const tbody = document.createElement('tbody');
    tbody.id = 'scores-list';
    data.forEach(function(score, index) {
      const row = document.createElement('tr');
      row.id='row'+index;
      const dateCell = document.createElement('td');
      dateCell.id = 'date' + index;
      dateCell.appendChild(document.createTextNode(score.date));
      const courseCell = document.createElement('td');
      courseCell.id = 'course' + index;
      courseCell.appendChild(document.createTextNode(score.golfcourse));
      const parCell = document.createElement('td');
      parCell.id = 'par' + index;
      parCell.append(document.createTextNode(score.par));
      const scoreCell = document.createElement('td');
      scoreCell.id = 'score' + index;
      scoreCell.append(document.createTextNode(score.score));
      row.appendChild(dateCell);
      row.appendChild(courseCell);
      row.appendChild(parCell);
      row.appendChild(scoreCell);
      // add an edit and delete button for each row
      const editButt = document.createElement('button');
      editButt.textContent ='Edit';
      editButt.id = 'edit' + index;
      editButt.addEventListener('click', handleEdit.bind(index));
      const deleteButt = document.createElement('button');
      deleteButt.textContent ='Delete';
      deleteButt.id = 'delete' + index;
      deleteButt.addEventListener('click', handleDelete.bind(index));
      row.appendChild(editButt);
      row.appendChild(deleteButt);
      tbody.appendChild(row);
    });
    const table = document.querySelector('table');
    const oldtbody = document.querySelector('tbody');
    table.replaceChild(tbody, oldtbody);
  }
}
function onLoad(){
  const user = document.getElementById('user') || null;
  const backgroundReq = new XMLHttpRequest();
  backgroundReq.open('GET', "http://linserv2.cims.nyu.edu:16123/list/data", true);
  backgroundReq.addEventListener('load', parseResponse);
  if(user){
    backgroundReq.send("user=" + user);
  }
}

document.addEventListener("DOMContentLoaded", main);
