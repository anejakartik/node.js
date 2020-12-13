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
 fetch("https://example.com/api/request", {
            method: 'POST',
            body: JSON.stringify(data),
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
            }
        })
    .then((data) => data.json())
    .then((resp) => console.log(resp))
    .catch((err) => console.log(err))
}

