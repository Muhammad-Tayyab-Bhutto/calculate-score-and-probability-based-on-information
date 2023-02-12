// Form data
let data = {};
let marks = {};
let formation = '';
let score = 0;
// Page 1: Submit data form
document.querySelector('#data-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    data.field1 = document.querySelector('#field1').value;
    data.field2 = document.querySelector('#field2').value;
    // Add more fields as needed

    // Show page 2
    document.querySelector('#page1').style.display = 'none';
    document.querySelector('#page2').style.display = 'block';
});

// Page 2: Submit marks form
document.querySelector('#marks-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form values
    marks.mark1 = document.querySelector('#mark1').value;
    marks.mark2 = document.querySelector('#mark2').value;
    // Add more fields as needed

    // Show page 3
    document.querySelector('#page2').style.display = 'none';
    document.querySelector('#page3').style.display = 'block';
});

// Page 3: Submit formation form
document.querySelector('#formation-form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get selected formation
    formation = document.querySelector('input[name="formation"]:checked').value;

    // Show page 4
    document.querySelector('#page3').style.display = 'none';
    document.querySelector('#page4').style.display = 'block';


    // calculation logic for score
    if (formation === 'formation1') {
        score = (marks.mark1 + marks.mark2) / 2;
    } else if (formation === 'formation2') {
        score = (marks.mark1 * 0.6 + marks.mark2 * 0.4) * (data.field1 / 100);
    } else {
        score = (marks.mark1 * 0.7 + marks.mark2 * 0.3) * (data.field2 / 100);
    }
    document.querySelector('#score').innerHTML = `Score: ${score}`;
});

// Page 4: Continue button
document.querySelector('#continue-button').addEventListener('click', function () {
    // Show page 5
    document.querySelector('#page4').style.display = 'none';
    document.querySelector('#page5').style.display = 'block';

    // Calculate admission probability
    let probability = 0;
    // calculation logic probability
    console.log(data.field1, data.field2, score, formation)
    if (formation === 'formation1') {
        probability = (score * 0.6 + data.field1 * 0.4) * (data.field2 / 100);
    } else if (formation === 'formation2') {
        probability = (score * 0.5 + data.field1 * 0.5) * (data.field2 / 100);
    } else {
        probability = (score * 0.7 + data.field1 * 0.3) * (data.field2 / 100);
    }
    document.querySelector('#probability').innerHTML = `Probability: ${probability}`;
});
