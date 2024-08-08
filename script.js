let privacyStatement = "I am willing to share my ";

function selectAnonymity(anonymity) {
    // Update the privacy statement with the chosen anonymity option
    privacyStatement += `<span class="highlight">${anonymity}</span> data with `;
    document.getElementById('privacy-statement').innerHTML = privacyStatement;

    // Hide Step 1 and show Step 2
    document.getElementById('step-1').style.display = 'none';
    document.getElementById('step-2').style.display = 'block';
}

function selectRecipient(recipient) {
    // Append the recipient choice to the privacy statement
    privacyStatement += `<span class="highlight">${recipient}</span> for the purpose(s) of `;
    document.getElementById('privacy-statement').innerHTML = privacyStatement;

    // Hide Step 2 and show Step 3
    document.getElementById('step-2').style.display = 'none';
    document.getElementById('step-3').style.display = 'block';
}

function selectPurpose(purpose) {
    // Append the purpose choice to the privacy statement
    privacyStatement += `<span class="highlight">${purpose}</span>`;
    document.getElementById('privacy-statement').innerHTML = privacyStatement;

    // After this, you could add logic to save the user's preferences or show a summary.
}

