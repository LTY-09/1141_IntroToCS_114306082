var studentCount = 0;

var submitBtn = document.getElementById("submitBtn");
var mathInput = document.getElementById("mathInput");
var englishInput = document.getElementById("englishInput");
var gradeBody = document.getElementById("gradeBody");

submitBtn.addEventListener("click", function() {
    var mathGrade = parseFloat(mathInput.value);
    var englishGrade = parseFloat(englishInput.value);
    
    if (isNaN(mathGrade) || isNaN(englishGrade)) {
        alert("Please enter valid numbers for both Math and English grades.");
        return;
    }
    
    studentCount++;
    
    var average = ((mathGrade + englishGrade) / 2).toFixed(2);
    
    var newRow = document.createElement("tr");
    newRow.innerHTML = "<td>Student " + studentCount + "</td>" +
                       "<td>" + mathGrade + "</td>" +
                       "<td>" + englishGrade + "</td>" +
                       "<td>" + average + "</td>";
    
    gradeBody.appendChild(newRow);
    
    mathInput.value = "";
    englishInput.value = "";
    
    updateColumnAverages();
});

function updateColumnAverages() {
    var rows = gradeBody.getElementsByTagName("tr");
    var mathTotal = 0;
    var englishTotal = 0;
    var count = rows.length;
    
    for (var i = 0; i < count; i++) {
        var cells = rows[i].getElementsByTagName("td");
        mathTotal += parseFloat(cells[1].textContent);
        englishTotal += parseFloat(cells[2].textContent);
    }
    
    var mathAvg = (mathTotal / count).toFixed(2);
    var englishAvg = (englishTotal / count).toFixed(2);
    var overallAvg = ((mathTotal + englishTotal) / (count * 2)).toFixed(2);
    
    document.getElementById("mathAvg").textContent = mathAvg;
    document.getElementById("englishAvg").textContent = englishAvg;
    document.getElementById("overallAvg").textContent = overallAvg;
}