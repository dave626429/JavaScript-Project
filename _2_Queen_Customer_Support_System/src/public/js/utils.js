export function createCustomerTableTbodyUtils(customers) {
  let tBody = document.getElementById("tbody");

  let newTBody = document.createElement("tbody");
  newTBody.id = "tbody";

  customers.data.forEach((element) => {
    let tr = document.createElement("tr");

    let idTd = document.createElement("td");
    idTd.innerText = element.id;

    let nameTd = document.createElement("td");
    nameTd.innerText = element.name;

    let emailTd = document.createElement("td");
    emailTd.innerText = element.email;

    let phoneTd = document.createElement("td");
    phoneTd.innerText = element.phone ? element.phone : "NA";

    let adhaarTd = document.createElement("td");
    adhaarTd.innerText = element.adhaarnumber ? element.adhaarnumber : "NA";

    tr.appendChild(idTd);
    tr.appendChild(nameTd);
    tr.appendChild(emailTd);
    tr.appendChild(phoneTd);
    tr.appendChild(adhaarTd);

    newTBody.appendChild(tr);
  });

  tBody.parentNode.replaceChild(newTBody, tBody);
}
