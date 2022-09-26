async function postData(url = '', data = {}) {
  await fetch(url,{ 
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
}

async function getUsername(url = ''){
await fetch(url).then((result) => result.json()).then(data => alert(JSON.stringify(data)))
}

async function putData(url = '', data = {}) {
  await fetch(url,{ 
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  })
}

async function deleteUsername(url = '') {
  await fetch(url,{ 
    method: 'DELETE',
  })
}

async function login(url = '') {
  await fetch(url,{ 
    method: 'GET',
  })
}

async function loguout() {
  await fetch('https://petstore.swagger.io/v2/user/logout',{ 
    method: 'GET',
  })
}

function userData(id,uname,fname,lname,email,pass,phone,ustatus){
  let form = {
    id: id,
    username: uname,
    firstName: fname,
    lastName: lname,
    email: email,
    password: pass,
    phone: phone,
    userStatus: ustatus
  }
  return formJson = JSON.stringify(form);
}



document.querySelector('.btnpost').onclick = function(e){
      e.preventDefault();

      let id = document.querySelector('.id').value
      let uname = document.querySelector('.unameCreate').value
      let fname = document.querySelector('.fname').value
      let lname = document.querySelector('.lname').value
      let email = document.querySelector('.email').value
      let pass = document.querySelector('.pass').value
      let phone = document.querySelector('.phone').value
      let ustatus = document.querySelector('.ustatus').value
      
      let newUser = userData(id,uname,fname,lname,email,pass,phone,ustatus)

      if (postData('https://petstore.swagger.io/v2/user',newUser)){      
        alert('User add')}else{alert('Eror')}

    }

    document.querySelector('.btnget').onclick = function(e){
      e.preventDefault();

      let uname = document.querySelector('.unameGet').value
      let url = 'https://petstore.swagger.io/v2/user/' + uname
      getUsername(url)
    }

    document.querySelector('.btnput').onclick = function(e){
      e.preventDefault();
      
      let unamecr = document.querySelector('.unameCreate').value

      let id = document.querySelector('.id').value
      let unameput = document.querySelector('.unamePut').value
      let fname = document.querySelector('.fname').value
      let lname = document.querySelector('.lname').value
      let email = document.querySelector('.email').value
      let pass = document.querySelector('.pass').value
      let phone = document.querySelector('.phone').value
      let ustatus = document.querySelector('.ustatus').value
      
      let url = 'https://petstore.swagger.io/v2/user/' + unamecr
      let newUser = userData(id,unameput,fname,lname,email,pass,phone,ustatus)

      if (putData(url,newUser)){      
        alert('User update')}else{alert('Eror')}

    }

    document.querySelector('.btndelete').onclick = function(e){
      e.preventDefault();

      let uname = document.querySelector('.unameDelete').value
      let url = 'https://petstore.swagger.io/v2/user/' + uname
      deleteUsername(url)
      alert('User delete')
    }

    document.querySelector('.btnlgn').onclick = function(e){
      e.preventDefault();

      let unamelgn = document.querySelector('.unameLog').value
      let passlgn = document.querySelector('.passLog').value
      let url = 'https://petstore.swagger.io/v2/user/login?username=' + unamelgn + '&password=' + passlgn
      login(url)
      alert('Login')
    }

    document.querySelector('.btnlgt').onclick = function(e){
      e.preventDefault();

      loguout()
      alert('Logout')
    }