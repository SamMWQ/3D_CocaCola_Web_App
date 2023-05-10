var spinning = false;

function spin() {
    spinning = !spinning;
    document.getElementById('model3D__CokeCan-TIMER').setAttribute('enabled', spinning.toString());
}

function stopRotation() {
    spinning = false;
    document.getElementById('model3D__CokeCan-TIMER').setAttribute('enabled', spinning.toString());
}

function animateModel() {
    if (document.getElementById('model3D__CokeCan-TIMER').getAttribute('enabled') != 'true') {
        document.getElementById('model3D__CokeCan-TIMER').setAttribute('enabled', 'true');
    } else {
        document.getElementById('model3D__CokeCan-TIMER').setAttribute('enabled', 'false');
    }
}