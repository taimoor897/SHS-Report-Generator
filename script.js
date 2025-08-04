function generateReport() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const date = document.getElementById("date").value;
  const services = document.getElementById("services").value;
  const startTime = document.getElementById("startTime").value;
  const endTime = document.getElementById("endTime").value;
  const totalCost = parseInt(document.getElementById("totalCost").value);
  const advance = parseInt(document.getElementById("advance").value);
  const notes = document.getElementById("notes").value || "None";
  const technician = document.getElementById("technician").value;

  const balance = totalCost - advance;

  // Fill in report values
  document.getElementById("r_name").textContent = name;
  document.getElementById("r_phone").textContent = phone;
  document.getElementById("r_address").textContent = address;
  document.getElementById("r_date").textContent = date;
  document.getElementById("r_services").textContent = services;
  document.getElementById("r_startTime").textContent = startTime;
  document.getElementById("r_endTime").textContent = endTime;
  document.getElementById("r_totalCost").textContent = totalCost;
  document.getElementById("r_advance").textContent = advance;
  document.getElementById("r_balance").textContent = balance;
  document.getElementById("r_notes").textContent = notes;
  document.getElementById("r_technician").textContent = technician;

  const element = document.getElementById("reportPreview");

  // Show element before generating PDF
  element.style.display = "block";

  const opt = {
    margin: 0.5,
    filename: `SHS_Report_${name}_${date}.pdf`,
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(element).set(opt).save().then(() => {
    // Hide it again after PDF is generated
    element.style.display = "none";
  });
}
