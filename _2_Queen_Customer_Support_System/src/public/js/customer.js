import { createCustomerTableTbodyUtils } from "./utils.js";

export function getAllCustomersOnRefreshClick() {
  // Refresh customer list
  let refreshButton = document.getElementById("ref-btn");

  // Getting all customers and appending to the table
  refreshButton.onclick = async () => {
    const customers = await axios.get("/customers");
    createCustomerTableTbodyUtils(customers);
  };
}

// Searching Customer on name, phone, adhaar and email and appending to the table
export function getCustomersByFields() {
  let searchCustomerButton = document.getElementById("search-btn");

  searchCustomerButton.addEventListener("click", async () => {
    let name = document.getElementById("cust-name").value;
    let email = document.getElementById("cust-email").value;
    let phone = document.getElementById("cust-phone").value;
    let adhaar = document.getElementById("cust-adhaar").value;

    if (name && phone) {
      let customers = await axios.get("/customers/name&phone", {
        params: { name, phone },
      });
      createCustomerTableTbodyUtils(customers);
    } else if (name) {
      let customers = await axios.get("/customers/name", {
        params: { name },
      });
      createCustomerTableTbodyUtils(customers);
    } else if (email) {
      let customers = await axios.get("/customers/email", {
        params: { email },
      });
      createCustomerTableTbodyUtils(customers);
    } else if (phone) {
      let customers = await axios.get("/customers/phone", {
        params: { phone },
      });
      createCustomerTableTbodyUtils(customers);
    } else if (adhaar) {
      let customers = await axios.get("/customers/adhaar", {
        params: { adhaar },
      });
      createCustomerTableTbodyUtils(customers);
    } else {
      console.error("All search fields are empty");
      return;
    }
  });
}
