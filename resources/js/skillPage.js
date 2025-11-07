let skillPage;
let skills;

const totalSkills = 5;
// Track which 4 skills are currently visible (as an ordered array)
let visibleSkills = [0, 1, 2, 3]; // Initially show skills 0, 1, 2, 3

window.onload = function() {
    // Grabs the skillset article filled with the skill asides
    skillPage = document.querySelector(".skill-set");
    // Stores every skill aside into a node list
    skills = skillPage.querySelectorAll("aside");
    
    // Initialize the display
    updateDisplay();
    
    // Left arrow - shift window left
    document.querySelector(".left").addEventListener("click", function() {
        moveLeft();
        return false;
    });

    // Right arrow - shift window right
    document.querySelector(".right").addEventListener("click", function() {
        moveRight();
        return false;
    });
}

// Update display based on visibleSkills array
function updateDisplay() {
    for (let i = 0; i < totalSkills; i++) {
        // Show skill if it's in the visibleSkills array, hide otherwise
        skills.item(i).style.display = visibleSkills.includes(i) ? 'block' : 'none';
    }
}

// Move carousel to the right
// Hide the leftmost visible skill, show the next skill after the rightmost
function moveRight() {
    // Remove the first (leftmost) element
    let removed = visibleSkills.shift();
    
    // Find the rightmost visible skill
    let rightmost = visibleSkills[visibleSkills.length - 1];
    
    // Add the next skill after rightmost (wrapping around)
    let toAdd = (rightmost + 1) % totalSkills;
    visibleSkills.push(toAdd);
    
    updateDisplay();
}

// Move carousel to the left
// Hide the rightmost visible skill, show the previous skill before the leftmost
function moveLeft() {
    // Remove the last (rightmost) element
    let removed = visibleSkills.pop();
    
    // Find the leftmost visible skill
    let leftmost = visibleSkills[0];
    
    // Add the previous skill before leftmost (wrapping around)
    let toAdd = (leftmost - 1 + totalSkills) % totalSkills;
    visibleSkills.unshift(toAdd);
    
    updateDisplay();
}