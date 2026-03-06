
window.onload = function(){

    const accepted = localStorage.getItem("acceptedPolicies");

    if(!accepted){
        document.getElementById("consentModal").classList.remove("hidden");
    }

};

function acceptPolicies(){

    const tos = document.getElementById("tosCheck").checked;
    const privacy = document.getElementById("privacyCheck").checked;

    if(!tos || !privacy){
        alert("You must accept both the Terms of Service and Privacy Policy.");
        return;
    }

    localStorage.setItem("acceptedPolicies","true");

    document.getElementById("consentModal").classList.add("hidden");

}
