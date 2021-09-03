let form = document.getElementById('post-form');
let btn = document.getElementById('btn-get-users');

if(form)
    form.addEventListener('submit', postName);

if(btn)
    btn.addEventListener('click', loadUsers);

function loadUsers() {
    let xhr = new XMLHttpRequest;
    xhr.open('GET', 'users.php', true);

    xhr.onload = function() {       
        let users = JSON.parse(this.responseText);
        let html = '';

        users.forEach(user => {
            html += `
                <ul>
                    <li>ID: ${user.id}</li>
                    <li>Name: ${user.name}</li>
                </ul>
            `;
        });

        document.getElementById('users').innerHTML = html;
    }
    xhr.send();
}

function postName(e) {
    e.preventDefault();
    let name2 = document.getElementById('name-post').value;
    let params = "name="+name2;

    let xhr = new XMLHttpRequest;
    xhr.open('POST', 'process.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

    xhr.onload = function() {       
        document.getElementById('result').innerText = this.responseText;
    }
    xhr.send(params);
}