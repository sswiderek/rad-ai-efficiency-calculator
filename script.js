document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const results = document.getElementById("results");
  
    document.getElementById("calculateButton").addEventListener("click", function () {
      const numRadiologists = parseFloat(document.getElementById("numRadiologists").value);
      const reportsPerDay = parseFloat(document.getElementById("reportsPerDay").value);
      const timePerReport = parseFloat(document.getElementById("timePerReport").value);
      const salary = parseFloat(document.getElementById("salary").value);
  
      if (isNaN(numRadiologists) || isNaN(reportsPerDay) || isNaN(timePerReport) || isNaN(salary)) {
        results.innerHTML = `<p style="color: red;">Please fill in all fields with valid numbers.</p>`;
        return;
      }
  
      const totalReportsPerYear = numRadiologists * reportsPerDay * 250;
      const totalTimeSpent = totalReportsPerYear * timePerReport;
      const timeSaved = Math.round(totalTimeSpent * 0.35);
      const costSavings = Math.round((timeSaved / 60) * (salary / 2080));
      const additionalReports = Math.round(totalReportsPerYear * 0.35);
      const burnoutReductionScore = Math.min(100, Math.round((timeSaved / totalTimeSpent) * 100));
  
      results.innerHTML = `
        <p>⏱ <strong>Total Time Saved:</strong> ${timeSaved.toLocaleString()} minutes per year</p>
        <p>💰 <strong>Annual Cost Savings:</strong> $${costSavings.toLocaleString()}</p>
        <p>📈 <strong>Additional Reports Completed:</strong> ${additionalReports.toLocaleString()}</p>
        <p>💙 <strong>Burnout Reduction Score:</strong> ${burnoutReductionScore}%</p>
      `;
    });
  });
  