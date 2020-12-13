var i;
data = {};
console.log(warpspd);
for (i = 0; i < warpspd.length; i++){
  if (!(warpspd[i][0].localeCompare('track'))){
    data[warpspd[i][1]] = warpspd[i][2];

  }
  else if (!(warpspd[i][0].localeCompare('identify'))){
    data[warpspd[i][1]] = warpspd[i][2]
  }
}

if (!( JSON.stringify(data) === '{}')){
r = document.getElementById('warp-tracker').getAttribute('data-site-id');
j = document.getElementById('warp-tracker').getAttribute('accountType');
data['merchant_id'] = r;
data['accountType'] = j;
console.log(data);
let user = {
  name: 'John',
  surname: 'Smith'
};

let response = await fetch('/article/fetch/post/user', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
alert(result.message);
}

