function startOnboarding() {
    // Hide the intro step and show Step 1
    document.getElementById('intro-step').style.display = 'none';
    document.getElementById('step-1').style.display = 'block';
}

let privacyStatement = "I am willing to share my ";
let selectedAnonymity = "";
let selectedRecipient = "";
let selectedPurpose = "";

function selectAnonymity(anonymity) {
    // Update the privacy statement with the chosen anonymity option
    privacyStatement += `<span class="highlight">${anonymity}</span> data with `;
    selectedAnonymity = anonymity.toLowerCase();
    document.getElementById('privacy-statement').innerHTML = privacyStatement;

    // Hide Step 1 and show Step 2
    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'block';
}

function selectRecipient(recipient) {
    // Append the recipient choice to the privacy statement
    selectedRecipient = recipient.toLowerCase();
    privacyStatement += `<span class="highlight">${recipient}</span> for the purpose(s) of `;
    document.getElementById('privacy-statement').innerHTML = privacyStatement;

    // Hide Step 2 and show Step 3
    document.getElementById('step-2').style.display = 'none';
    document.getElementById('step-3').style.display = 'block';
}

function toggleInfo(event, infoId) {
    event.stopPropagation(); // Prevent the click event from bubbling up to the choice box
    var infoSection = document.getElementById(infoId);
    if (infoSection.style.display === "none" || infoSection.style.display === "") {
        infoSection.style.display = "block";
    } else {
        infoSection.style.display = "none";
    }
}

function selectPurpose(purpose) {
    // Append the purpose choice to the privacy statement
    selectedPurpose = purpose.toLowerCase();
    privacyStatement += `<span class="highlight">${purpose}</span>`;
    document.getElementById('privacy-statement').innerHTML = privacyStatement;

    // Show the sample data flow based on user's choices
    console.log("Here lies the anonymity, recipient, and purpose");
    console.log(selectedAnonymity, selectedRecipient, selectedPurpose);

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
    }

     // Get sample data based on selections
    var data = sampleData[selectedAnonymity][selectedPurpose];

    // Set the sample data in the HTML
    document.getElementById("dataCollected").innerText = data.raw_data;
    document.getElementById("browsingHistory").innerText = data.browsing_history;
    document.getElementById("segment").innerText = data.transformed_data;
    document.getElementById("dataSharing").innerText = "Your data is processed to create customer segments and is shared with companies like " + selectedRecipient.replace('advertising companies', 'Advertiser A').replace('retailers', 'Retailer B') + " in this transformed state.";
    document.getElementById("resultContent").innerText = "These companies use the data for " + selectedPurpose + " and serve you personalized content like the one displayed here.";
    // Set the result image based on the purpose
    var resultImage = document.getElementById("resultImage");
    if (selectedPurpose === "product recommendation") {
        resultImage.src = "attempt2/product_rec.png";
    } else if (selectedPurpose === "targeted advertisement") {
        resultImage.src = "attempt2/targeted_ads.png";
    } else if (selectedPurpose === "email marketing") {
        resultImage.src = "attempt2/email_marketing.png";
    } else if (selectedPurpose === "market research") {
        resultImage.src = "";
    }
    // Display the image and data flow
    resultImage.style.display = "block";

    // Hide Step 3 and show Sample Data Flow
    document.getElementById('step-3').style.display = 'none';
    document.getElementById('sample-data-flow').style.display = 'block';
}

