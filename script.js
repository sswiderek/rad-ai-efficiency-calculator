document.addEventListener("DOMContentLoaded", function () {
    console.log("Script is running");
  
    const form = document.querySelector("form");
    const results = document.getElementById("results");
  
    document.getElementById("calculateButton").addEventListener("click", function () {
      console.log("Form submitted");
  
      // Get input values
      const numRadiologists = parseFloat(document.getElementById("numRadiologists").value);
      const reportsPerDay = parseFloat(document.getElementById("reportsPerDay").value);
      const timePerReport = parseFloat(document.getElementById("timePerReport").value);
      const salary = parseFloat(document.getElementById("salary").value);
  
      // Validate inputs
      if (isNaN(numRadiologists) || isNaN(reportsPerDay) || isNaN(timePerReport) || isNaN(salary)) {
        results.innerHTML = `<p style="color: red;">Please fill in all fields with valid numbers.</p>`;
        return;
      }
  
      // Perform calculations
      const totalReportsPerYear = numRadiologists * reportsPerDay * 250; // Assuming 250 working days per year
      const totalTimeSpent = totalReportsPerYear * timePerReport; // in minutes
      const timeSaved = Math.round(totalTimeSpent * 0.35); // Assuming 35% time savings with Rad AI
      const costSavings = Math.round((timeSaved / 60) * (salary / 2080)); // Convert minutes to hours, then multiply by hourly wage
  
      // Format numbers with commas
      const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
      // Display results
      results.innerHTML = `
        <p>⏱ <strong>Total Time Saved:</strong> ${formatNumber(timeSaved)} minutes per year</p>
        <p>💰 <strong>Annual Cost Savings:</strong> $${formatNumber(costSavings)}</p>
        <p>📈 <strong>Additional Reports Completed:</strong> ${formatNumber(Math.round(totalReportsPerYear * 0.35))}</p>
      `;
    });
  });
  