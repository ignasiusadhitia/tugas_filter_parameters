console.log("FILTER DAN PARAMETERS\n==============================");

function panggilParameters(value) {
  var arr = [
    { negara: "Indonesia", benua: "Asia" },
    { negara: "Jerman", benua: "Eropa" },
    { negara: "Spanyol", benua: "Eropa" },
    { negara: "Korea", benua: "Asia" },
    { negara: "Portugal", benua: "Eropa" },
    { negara: "Amerika Serikat", benua: "Amerika" },
  ];

  var benuaEropa = arr.filter(function (item) {
    return item.benua === value;
  });

  console.log(benuaEropa);
}

panggilParameters("Asia");
panggilParameters("Eropa");
