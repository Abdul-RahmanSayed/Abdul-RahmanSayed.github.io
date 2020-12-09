/* NOTE FOR THE FUTURE:
 * Left or right maneuvering isn't excatly correct. It is functional,
 * however it manipulates the list in a weird way due to how its ordered.
 * Fix ASAP.
 */

let skillPage = document.querySelector(".skill-set");
let skills = skillPage.querySelectorAll("aside");

let skillNumber = 5;
let notDisplayed = 4;

window.onload = function() {
    //grabs the skillset article filled with the skill asides
    skillPage = document.querySelector(".skill-set");
	//stores every skill aside into a node list
    skills = skillPage.querySelectorAll("aside");
    //if the left arrow is clicked allow the list to go to the left
    document.querySelector(".left").addEventListener("click", function() {
        listMove(true);
        return false;
    })

    //if the right arrow is clicked allow the list to go to the right
    document.querySelector(".right").addEventListener("click", function() {
        listMove(false);
        return false;
    })
}

//handles the movement of the list to the left or right.
function listMove(leftOrRight) {
    let tempSkill;
    if (leftOrRight) {
        notDisplayed = (notDisplayed - 1 < 0) ? 4 : notDisplayed - 1;
        skills.item(notDisplayed).style.display = `none`;
        skills.item((notDisplayed + 1) % skillNumber).style.display = `block`;
    }
    if (!leftOrRight) {
        skills.item(notDisplayed).style.display = `block`;
        notDisplayed = (notDisplayed + 1) % skillNumber;
        skills.item(notDisplayed).style.display = `none`;
    }
}