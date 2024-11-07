let privacyStatement = "I am willing to share ";
let selectedAnonymity = "";
let selectedRecipients = [];
let selectedPurposes = [];

function startOnboarding() {
    document.getElementById('intro-step').style.display = 'none';
    document.getElementById('privacy-statement').style.display = 'block';
    document.getElementById('step-1').style.display = 'block';
    document.getElementById('step-1').scrollIntoView({ behavior: 'smooth' });
}

function selectAnonymity(anonymity) {
    selectedAnonymity = anonymity.toLowerCase();
    highlightSelected('step-1', anonymity);
}

function saveAnonymity() {
    // Update the privacy statement with the saved anonymity option
    privacyStatement = `I am willing to share <span class="highlight">${selectedAnonymity}</span> data with `;
    document.getElementById('privacy-statement').innerHTML = privacyStatement;

    // Scroll to the next step
    document.getElementById('step-2').style.display = 'block';
    document.getElementById('step-2').scrollIntoView({ behavior: 'smooth' });
}

function selectRecipient(recipient) {
    const index = selectedRecipients.indexOf(recipient.toLowerCase());
    if (index > -1) {
        selectedRecipients.splice(index, 1);  // Remove if already selected
    } else {
        selectedRecipients.push(recipient.toLowerCase());  // Add if not selected
    }
    highlightSelected('step-2', recipient);  // Update visual highlight
}

function selectPurpose(purpose) {
    const index = selectedPurposes.indexOf(purpose.toLowerCase());
    if (index > -1) {
        selectedPurposes.splice(index, 1);  // Remove if already selected
    } else {
        selectedPurposes.push(purpose.toLowerCase());  // Add if not selected
    }
    highlightSelected('step-3', purpose);  // Update visual highlight
}
function saveRecipient() {
    if (selectedRecipients.length === 0) return;  // Prevent saving if no selections

    // Format the recipients list with commas and "and"
    const formattedRecipients = formatList(selectedRecipients);

    // Update the privacy statement
    privacyStatement = `I am willing to share <span class="highlight">${selectedAnonymity}</span> data with <span class="highlight">${formattedRecipients}</span> for the purpose(s) of `;
    document.getElementById('privacy-statement').innerHTML = privacyStatement;

    // Move to the next step
    document.getElementById('step-3').style.display = 'block';
    document.getElementById('step-3').scrollIntoView({ behavior: 'smooth' });
}

function savePurpose() {
    if (selectedPurposes.length === 0) return;  // Prevent saving if no selections

    // Format the purposes list with commas and "and"
    const formattedPurposes = formatList(selectedPurposes);

    // Append the purposes to the privacy statement
    privacyStatement += `<span class="highlight">${formattedPurposes}</span>`;
    document.getElementById('privacy-statement').innerHTML = privacyStatement;

    // Move to the sample data flow section
    document.getElementById('sample-data-flow').style.display = 'block';
    document.getElementById('sample-data-flow').scrollIntoView({ behavior: 'smooth' });

    // Show sample data flow based on user’s choices
    displaySampleDataFlow();
}



    // Show the sample data flow based on user's choices
const sampleData = {
        "anonymized": {
            "targeted advertisement": {
                "raw_data": "User ID: 12345, Browsing History: /electronics/gadgets, Time Spent: 5 min",
                "browsing_history": "Visited: electronicsworld.com, gadgetsnow.com | Timestamps: 10:15 AM, 10:20 AM",
                "transformed_data": "Segment: Gadget Enthusiasts, Age Group: 18-34, Interest: Electronics"
            },
            "product recommendation": {
                "raw_data": "User ID: 12345, Browsing History: /fashion/pants, Clicks: 3",
                "browsing_history": "Visited: fashionhub.com, pantaloony.com | Timestamps: 3:45 PM, 3:50 PM",
                "transformed_data": "Segment: Fashion Shoppers, Gender: Female, Interest: Pants"
            },
            "email marketing": {
                "raw_data": "User ID: 12345, Browsing History: /travel/destinations, Time Spent: 10 min",
                "browsing_history": "Visited: travelguide.com, destinationdream.com | Timestamps: 9:30 AM, 9:40 AM",
                "transformed_data": "Segment: Travel Enthusiasts, Age Group: 25-44, Interest: Exotic Destinations"
            },
            "market research": {
                "raw_data": "User ID: 12345, Browsing History: /health/fitness, Clicks: 7",
                "browsing_history": "Visited: fitlife.com, healthfocus.com | Timestamps: 11:00 AM, 11:15 AM",
                "transformed_data": "Segment: Health Conscious, Gender: Male, Interest: Fitness"
            }
        },
        "de-anonymized": {
            "targeted advertisement": {
                "raw_data": "User Name: John Doe, Email: john.doe@example.com, Browsing History: /electronics/gadgets, Time Spent: 5 min",
                "browsing_history": "Visited: electronicsworld.com, gadgetsnow.com | Timestamps: 10:15 AM, 10:20 AM",
                "transformed_data": "Full Name: John Doe, Email: john.doe@example.com, Segment: Gadget Enthusiasts, Age Group: 18-34, Interest: Electronics"
            },
            "product recommendation": {
                "raw_data": "User Name: Jane Smith, Email: jane.smith@example.com, Browsing History: /fashion/pants, Clicks: 3",
                "browsing_history": "Visited: fashionhub.com, pantaloony.com | Timestamps: 3:45 PM, 3:50 PM",
                "transformed_data": "Full Name: Jane Smith, Email: jane.smith@example.com, Segment: Fashion Shoppers, Gender: Female, Interest: Pants"
            },
            "email marketing": {
                "raw_data": "User Name: Alice Johnson, Email: alice.johnson@example.com, Browsing History: /travel/destinations, Time Spent: 10 min",
                "browsing_history": "Visited: travelguide.com, destinationdream.com | Timestamps: 9:30 AM, 9:40 AM",
                "transformed_data": "Full Name: Alice Johnson, Email: alice.johnson@example.com, Segment: Travel Enthusiasts, Age Group: 25-44, Interest: Exotic Destinations"
            },
            "market research": {
                "raw_data": "User Name: Bob Brown, Email: bob.brown@example.com, Browsing History: /health/fitness, Clicks: 7",
                "browsing_history": "Visited: fitlife.com, healthfocus.com | Timestamps: 11:00 AM, 11:15 AM",
                "transformed_data": "Full Name: Bob Brown, Email: bob.brown@example.com, Segment: Health Conscious, Gender: Male, Interest: Fitness"
            }
        }
};

function displaySampleDataFlow() {
    const data = sampleData[selectedAnonymity][selectedPurposes[0]];  // Use first selected purpose as an example
    document.getElementById("dataCollected").innerText = data.raw_data;
    document.getElementById("browsingHistory").innerText = data.browsing_history;
    document.getElementById("segment").innerText = data.transformed_data;
    document.getElementById("dataSharing").innerText = `Your data is processed to create customer segments and is shared with ${formatList(selectedRecipients)}.`;
    document.getElementById("resultContent").innerText = `These companies use the data for ${formatList(selectedPurposes)} and serve you personalized content.`;

    // Update result image based on the first selected purpose
    const resultImage = document.getElementById("resultImage");
    const purpose = selectedPurposes[0];
    if (purpose === "product recommendation") {
        resultImage.src = "product_rec.png";
    } else if (purpose === "targeted advertisement") {
        resultImage.src = "targeted_ads.png";
    } else if (purpose === "email marketing") {
        resultImage.src = "email_marketing.png";
    } else if (purpose === "market research") {
        resultImage.src = "";
    }

    resultImage.style.display = "block";
}



function highlightSelected(stepId, selectedOption) {
    const step = document.getElementById(stepId);
    const choices = step.getElementsByClassName('choice-box');
    for (let choice of choices) {
        choice.style.border = '1px solid #ddd';
        if (choice.innerText.includes(selectedOption)) {
            choice.style.border = '2px solid #ff6b6b';
        }
    }
}

function toggleInfo(event, infoId) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the choice box
    const infoSection = document.getElementById(infoId);
    if (infoSection.style.display === "none" || infoSection.style.display === "") {
        infoSection.style.display = "block";
    } else {
        infoSection.style.display = "none";
    }
}

function submitPreferences() {
    const data = {
        statement: document.getElementById('privacy-statement').innerHTML,
        anonymity: selectedAnonymity,
        recipient: selectedRecipients,  // Send as array
        purpose: selectedPurposes       // Send as array
    };

    fetch('https://cookie-monster-preferences-api-499c0307911c.herokuapp.com/preferencesData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Your preferences have been submitted successfully!', data);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error submitting your preferences.');
    });
}

